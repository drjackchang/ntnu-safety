// Midterm progress report — builds an email (mailto) from the form. No server involved.
const CONTACT_EMAIL = "yutung@gm.ntunhs.edu.tw";
const COURSE_NAME = "Safety Education (EMI)";
const STORE_KEY = "emi-midterm-draft-v1";
const MAILTO_SAFE_LENGTH = 1800; // longer bodies are copied to clipboard instead

const form = document.getElementById("reportForm");
const errEl = document.getElementById("reportError");
const noteEl = document.getElementById("reportNote");
const previewEl = document.getElementById("previewText");

const REQUIRED = [
  "group", "title", "members", "topic", "audience", "roles",
  "lp_status", "lp_pct", "lp_objectives", "lp_theory", "lp_outline", "lp_assess", "lp_sources",
  "g_status", "g_pct", "g_concept", "g_mechanic", "g_scope",
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
  lines.push(`${COURSE_NAME} — Midterm progress report`);
  lines.push(`Group ${val("group")}: ${val("title")}`);
  lines.push("");
  form.querySelectorAll("fieldset").forEach((fs) => {
    const legend = fs.querySelector("legend");
    const inputs = Array.from(fs.querySelectorAll("input[name], textarea[name], select[name]"));
    if (!legend || inputs.length === 0) return;
    lines.push(legend.textContent.trim().toUpperCase());
    inputs.forEach((el) => {
      if (el.name === "group" || el.name === "title") return; // already in header
      const v = el.value.trim();
      lines.push(`- ${labelOf(el)}: ${v ? v : "(left blank)"}`);
    });
    lines.push("");
  });
  lines.push(`Submitted from the course site on ${new Date().toISOString().slice(0, 10)}.`);
  return lines.join("\n");
}

function buildSubject() {
  return `NTNU ${COURSE_NAME} Midterm Progress Report - Group ${val("group")} - ${val("title")}`;
}

function refreshPreview() { previewEl.textContent = buildReport(); }

// ---------- validation ----------
function validate() {
  const missing = REQUIRED.filter((n) => !val(n));
  fields().forEach((el) => el.classList.toggle("invalid", missing.includes(el.name)));
  const pcts = ["lp_pct", "g_pct"].filter((n) => val(n) !== "" && (isNaN(+val(n)) || +val(n) < 0 || +val(n) > 100));
  pcts.forEach((n) => form.elements[n].classList.add("invalid"));
  if (missing.length || pcts.length) {
    const first = form.elements[missing[0] || pcts[0]];
    const labels = missing.slice(0, 4).map((n) => labelOf(form.elements[n]));
    let msg = missing.length
      ? `Please complete ${missing.length} required field${missing.length > 1 ? "s" : ""}, starting with: ${labels.join("; ")}${missing.length > 4 ? "…" : ""}.`
      : "";
    if (pcts.length) msg += (msg ? " " : "") + "Percent complete must be a number from 0 to 100.";
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
      ? "(Your full report has been copied. Paste it here with Ctrl+V or Cmd+V, then send.)"
      : "(Copying failed. Use 'Download as .txt' on the form and attach the file, then send.)";
    noteEl.textContent = copied
      ? "The report is long, so it was copied to your clipboard. Paste it into the email body before sending."
      : "The report is long and could not be copied automatically. Download it as .txt and attach it to the email.";
  } else {
    noteEl.textContent = "Your email app should have opened. Check the text, then press send.";
  }
  window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});

document.getElementById("copyBtn").addEventListener("click", async () => {
  if (!validate()) return;
  const ok = await copyText(buildReport());
  noteEl.textContent = ok
    ? `Report copied. Paste it into an email to ${CONTACT_EMAIL} with the subject: ${buildSubject()}`
    : "Copy failed. Use 'Download as .txt' instead.";
});

document.getElementById("downloadBtn").addEventListener("click", () => {
  if (!validate()) return;
  const blob = new Blob([buildReport()], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `midterm-report-group-${val("group").replace(/[^\w-]+/g, "") || "x"}.txt`;
  document.body.appendChild(a); a.click(); document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  noteEl.textContent = `Downloaded. Attach the file to an email to ${CONTACT_EMAIL} with the subject: ${buildSubject()}`;
});

document.getElementById("clearBtn").addEventListener("click", () => {
  if (!window.confirm("Clear everything you have typed on this form?")) return;
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
