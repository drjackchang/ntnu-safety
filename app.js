// ---------- Course state (persisted across pages) ----------
function getCourse() {
  return localStorage.getItem("course") || "emi"; // "emi" | "grad"
}
function setCourse(course) {
  localStorage.setItem("course", course);
}

// ---------- i18n ----------
const I18N = {
  emi: {
    materials: "Course materials",
    showcase: "Student showcase",
    submit: "Submit assignment",
    viewAll: "View all",
    week: "Week",
    semester: "Semester",
    group: "Group",
    names: "Names",
    title: "Title",
    viewProject: "View project",
    notFound: "This project could not be found.",
    backToShowcase: "Back to showcase",
    course: "Course",
    groupNumber: "Group number",
    assignmentName: "Assignment / week",
    submissionLink: "Submission link",
    notes: "Notes (optional)",
    send: "Submit",
    sending: "Submitting…",
    sentOk: "Submitted. Thanks!",
    sentErr: "Something went wrong. Try again.",
    requiredField: "This field is required.",
    invalidUrl: "Enter a valid URL (starting with http).",
    comments: "Discussion",
    yourName: "Your name",
    yourMessage: "Write a message…",
    post: "Post",
    noComments: "No comments yet — be the first.",
    filterAll: "All semesters",
    noMaterials: "No materials posted yet.",
    noShowcase: "No projects posted yet.",
  },
  grad: {
    materials: "上課素材",
    showcase: "歷年學生成果",
    submit: "提交作業／連結",
    viewAll: "查看全部",
    week: "週次",
    semester: "學期",
    group: "組別",
    names: "姓名",
    title: "標題",
    viewProject: "查看作品",
    notFound: "找不到這個作品。",
    backToShowcase: "回到成果列表",
    course: "課程",
    groupNumber: "組別（若適用）",
    assignmentName: "作業／對應週次",
    submissionLink: "提交連結",
    notes: "備註（選填）",
    send: "送出",
    sending: "送出中…",
    sentOk: "已送出，謝謝！",
    sentErr: "送出失敗，請再試一次。",
    requiredField: "此欄位為必填。",
    invalidUrl: "請輸入正確的網址格式（需以 http 開頭）。",
    comments: "討論區",
    yourName: "您的姓名",
    yourMessage: "輸入留言…",
    post: "送出留言",
    noComments: "目前尚無留言，成為第一個留言的人吧。",
    filterAll: "所有學期",
    noMaterials: "目前尚無上課素材。",
    noShowcase: "目前尚無作品成果。",
  },
};
function t(key) {
  const course = getCourse();
  return (I18N[course] && I18N[course][key]) || I18N.emi[key] || key;
}

// ---------- API helpers ----------
async function fetchJSON(params) {
  const url = new URL(GAS_URL);
  Object.keys(params).forEach((k) => url.searchParams.set(k, params[k]));
  const res = await fetch(url.toString());
  return res.json();
}

// Uses text/plain content-type so the browser treats this as a "simple request"
// and skips the CORS preflight — Apps Script Web Apps don't handle OPTIONS well.
async function postAction(payload) {
  const res = await fetch(GAS_URL, {
    method: "POST",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify(payload),
  });
  return res.json();
}

// ---------- Canvas cover generator ----------
// Draws a flat-color cover with title / names / semester onto the given canvas.
// Works for both the small showcase-grid size and the large project-page size.
function generateCoverCanvas(canvasEl, { title, names, semester, colorHex }) {
  const w = canvasEl.width || 400;
  const h = canvasEl.height || 220;
  const ctx = canvasEl.getContext("2d");
  const color = "#" + (colorHex || "1D9E75").replace("#", "");

  ctx.fillStyle = color;
  ctx.fillRect(0, 0, w, h);

  // simple luminance check to pick readable text color
  const r = parseInt(color.slice(1, 3), 16);
  const g = parseInt(color.slice(3, 5), 16);
  const b = parseInt(color.slice(5, 7), 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  const textColor = luminance > 0.6 ? "#1a1a1a" : "#ffffff";
  const subColor = luminance > 0.6 ? "rgba(26,26,26,0.72)" : "rgba(255,255,255,0.78)";

  ctx.fillStyle = textColor;
  ctx.textBaseline = "alphabetic";

  const pad = Math.round(w * 0.06);
  const titleSize = Math.max(14, Math.round(w * 0.065));
  ctx.font = `600 ${titleSize}px -apple-system, "Microsoft JhengHei", sans-serif`;

  // wrap title text to fit width
  const words = String(title || "").split(/\s+/);
  const lines = [];
  let line = "";
  words.forEach((word) => {
    const test = line ? line + " " + word : word;
    if (ctx.measureText(test).width > w - pad * 2 && line) {
      lines.push(line);
      line = word;
    } else {
      line = test;
    }
  });
  if (line) lines.push(line);
  const maxLines = 3;
  const shownLines = lines.slice(0, maxLines);

  const lineHeight = titleSize * 1.25;
  const subSize = Math.max(11, Math.round(w * 0.035));
  const bottomBlockHeight = shownLines.length * lineHeight + subSize * 1.6 + 10;
  let y = h - bottomBlockHeight + titleSize;

  shownLines.forEach((l) => {
    ctx.fillText(l, pad, y);
    y += lineHeight;
  });

  ctx.font = `400 ${subSize}px -apple-system, "Microsoft JhengHei", sans-serif`;
  ctx.fillStyle = subColor;
  const subLine = [names, semester].filter(Boolean).join("  ·  ");
  ctx.fillText(subLine, pad, y + subSize * 0.4);
}

// ---------- Comments widget ----------
async function loadComments(container, topic, pollMs) {
  async function refresh() {
    const items = await fetchJSON({ action: "comments", topic });
    const list = container.querySelector(".comment-list");
    if (!items.length) {
      list.innerHTML = `<p class="empty-state">${t("noComments")}</p>`;
      return;
    }
    list.innerHTML = items
      .slice()
      .reverse()
      .map(
        (c) => `
      <div class="comment-item">
        <span class="who">${escapeHtml(c.Name || "")}</span>
        <span class="when">${formatTime(c.Timestamp)}</span>
        <div>${escapeHtml(c.Message || "")}</div>
      </div>`
      )
      .join("");
  }
  await refresh();
  if (pollMs) setInterval(refresh, pollMs);

  container.querySelector(".comment-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const nameEl = container.querySelector('[name="name"]');
    const msgEl = container.querySelector('[name="message"]');
    const errEl = container.querySelector(".comment-error");
    errEl.textContent = "";
    if (!nameEl.value.trim() || !msgEl.value.trim()) {
      errEl.textContent = t("requiredField");
      return;
    }
    await postAction({
      action: "comment",
      course: getCourse(),
      topic,
      name: nameEl.value.trim(),
      message: msgEl.value.trim(),
    });
    msgEl.value = "";
    await refresh();
  });
}

function renderCommentsBox(container, topic) {
  container.innerHTML = `
    <div class="comments-box">
      <h2>${t("comments")}</h2>
      <div class="comment-list"></div>
      <form class="comment-form stack" style="margin-top:14px;">
        <label>${t("yourName")}<input name="name" type="text" /></label>
        <label>${t("yourMessage")}<textarea name="message" rows="2"></textarea></label>
        <div class="field-error comment-error"></div>
        <button class="btn" type="submit">${t("post")}</button>
      </form>
    </div>`;
  loadComments(container, topic, 8000);
}

// ---------- Small utils ----------
function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}
function formatTime(ts) {
  if (!ts) return "";
  const d = new Date(ts);
  if (isNaN(d.getTime())) return "";
  return d.toLocaleString();
}
function isValidUrl(str) {
  return /^https?:\/\/.+/i.test(str);
}
