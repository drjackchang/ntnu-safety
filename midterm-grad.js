// Midterm progress report — builds an email (mailto) from the form. No server involved.
const CONTACT_EMAIL = "yutung@gm.ntunhs.edu.tw";
const COURSE_NAME = "安全教育專題研究";
const STORE_KEY = "grad-midterm-draft-v1";
const MAILTO_SAFE_LENGTH = 1800; // longer bodies are copied to clipboard instead

try { localStorage.setItem("course", "grad"); } catch (e) {}
const form = document.getElementById("reportForm");
const errEl = document.getElementById("reportError");
const noteEl = document.getElementById("reportNote");
const previewEl = document.getElementById("previewText");

const REQUIRED = [
  "name", "sid", "title", "topic", "audience",
  "ev_status", "ev_n", "ev_pico", "ev_theory", "ev_refs", "ev_gap",
  "d_form", "d_status", "d_pct", "d_slot", "d_obj", "d_flow", "d_map", "d_eval",
  "ai_tools", "ai_good", "ai_bad", "ai_verify",
  "overall", "blocker", "next"
];

function fields() { return Array.from(form.querySelectorAll("input[name], textarea[name], select[name]")); }
function val(name) { const el = form.elements[name]; return el ? el.value.trim() : ""; }
function labelOf(el) {
  const lab = el.closest("label");
  if (!lab) return el.name;
  let t = "";
  lab.childNodes.forEach((n) => { if (n.nodeType === 3) t += n.nodeValue; });
  return t.replace(/\*/g, "").trim();
}

// ---------- draft autosave (best-effort) ----------
function saveDraft() {
  try {
    const data = {};
    fields().forEach((el) => { data[el.name] = el.value; });
    localStorage.setItem(STORE_KEY, JSON.stringify(data));
  } catch (e) { /* storage unavailable: ignore */ }
}
function loadDraft() {
  try {
    const raw = localStorage.getItem(STORE_KEY);
    if (!raw) return;
    const data = JSON.parse(raw);
    fields().forEach((el) => { if (data[el.name] != null) el.value = data[el.name]; });
  } catch (e) { /* ignore */ }
}

// ---------- build the report text ----------
function buildReport() {
  const lines = [];
  lines.push(`${COURSE_NAME} — 期中進度回報`);
  lines.push(`${val("name")}（${val("sid")}）：${val("title")}`);
  lines.push("");
  form.querySelectorAll("fieldset").forEach((fs) => {
    const legend = fs.querySelector("legend");
    const inputs = Array.from(fs.querySelectorAll("input[name], textarea[name], select[name]"));
    if (!legend || inputs.length === 0) return;
    lines.push(legend.textContent.trim().trim());
    inputs.forEach((el) => {
      if (["name", "sid", "title"].includes(el.name)) return; // already in header
      const v = el.value.trim();
      lines.push(`- ${labelOf(el)}: ${v ? v : "（未填）"}`);
    });
    lines.push("");
  });
  lines.push(`由課程網站產生，日期： ${new Date().toISOString().slice(0, 10)}.`);
  return lines.join("\n");
}

function buildSubject() {
  return `NTNU ${COURSE_NAME} 期中進度回報 - ${val("name")} - ${val("title")}`;
}

function refreshPreview() { previewEl.textContent = buildReport(); }

// ---------- validation ----------
function validate() {
  const missing = REQUIRED.filter((n) => !val(n));
  fields().forEach((el) => el.classList.toggle("invalid", missing.includes(el.name)));
  const pcts = ["d_pct"].filter((n) => val(n) !== "" && (isNaN(+val(n)) || +val(n) < 0 || +val(n) > 100));
  pcts.forEach((n) => form.elements[n].classList.add("invalid"));
  if (missing.length || pcts.length) {
    const first = form.elements[missing[0] || pcts[0]];
    const labels = missing.slice(0, 4).map((n) => labelOf(form.elements[n]));
    let msg = missing.length
      ? `還有 ${missing.length} 個必填欄位未填，例如：${labels.join("、")}${missing.length > 4 ? "…" : ""}。`
      : "";
    if (pcts.length) msg += (msg ? " " : "") + "完成度必須是 0 到 100 的數字。";
    errEl.textContent = msg;
    if (first) first.focus();
    return false;
  }
  errEl.textContent = "";
  return true;
}

// ---------- actions ----------
async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (e) {
    const ta = document.createElement("textarea");
    ta.value = text; ta.style.position = "fixed"; ta.style.opacity = "0";
    document.body.appendChild(ta); ta.select();
    let ok = false;
    try { ok = document.execCommand("copy"); } catch (_) {}
    document.body.removeChild(ta);
    return ok;
  }
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  if (!validate()) return;
  const report = buildReport();
  const subject = buildSubject();
  let body = report;
  let long = report.length > MAILTO_SAFE_LENGTH;
  if (long) {
    const copied = await copyText(report);
    body = copied
      ? "（完整報告已複製，請在此貼上（Ctrl+V 或 Cmd+V）後寄出。）"
      : "（複製失敗，請用表單上的「下載 .txt」，把檔案附在信件中寄出。）";
    noteEl.textContent = copied
      ? "內容較長，已複製到剪貼簿，請先貼進信件本文再寄出。"
      : "內容較長且無法自動複製，請下載 .txt 並附在信件中。";
  } else {
    noteEl.textContent = "郵件軟體應該已開啟，請確認內容後寄出。";
  }
  window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});

document.getElementById("copyBtn").addEventListener("click", async () => {
  if (!validate()) return;
  const ok = await copyText(buildReport());
  noteEl.textContent = ok
    ? `已複製。請貼到寄給 ${CONTACT_EMAIL} 的郵件，標題：${buildSubject()}`
    : "複製失敗，請改用「下載 .txt」。";
});

document.getElementById("downloadBtn").addEventListener("click", () => {
  if (!validate()) return;
  const blob = new Blob([buildReport()], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `期中進度回報-${val("sid").replace(/[^\w-]+/g, "") || "x"}.txt`;
  document.body.appendChild(a); a.click(); document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  noteEl.textContent = `已下載。請把檔案附在寄給 ${CONTACT_EMAIL} 的郵件，標題：${buildSubject()}`;
});

document.getElementById("clearBtn").addEventListener("click", () => {
  if (!window.confirm("確定要清除表單上所有已填內容嗎？")) return;
  form.reset();
  try { localStorage.removeItem(STORE_KEY); } catch (e) {}
  fields().forEach((el) => el.classList.remove("invalid"));
  errEl.textContent = ""; noteEl.textContent = "";
  refreshPreview();
});

form.addEventListener("input", (e) => {
  if (e.target.classList) e.target.classList.remove("invalid");
  saveDraft();
  refreshPreview();
});
form.addEventListener("change", () => { saveDraft(); refreshPreview(); });

loadDraft();
refreshPreview();
