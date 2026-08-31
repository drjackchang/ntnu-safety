// ---------- Course / semester state ----------
function getCourse() { return localStorage.getItem("course") || "emi"; }
function setCourse(course) { localStorage.setItem("course", course); document.body.setAttribute("data-course", course); }

function getSemester() { return localStorage.getItem("semester") || ""; }
function setSemester(sem) { localStorage.setItem("semester", sem); }

// ---------- i18n ----------
const I18N = {
  emi: {
    materials: "Materials", showcase: "Showcase", submit: "Submit", progress: "Progress",
    home: "Home", week: "Week", semester: "Semester", group: "Group", names: "Names", title: "Title",
    viewProject: "View project", notFound: "This project could not be found.", backToShowcase: "Back to showcase",
    course: "Course", groupNumber: "Group number", assignmentName: "Assignment / week", submissionLink: "Submission link",
    notes: "Notes (optional)", send: "Submit", sending: "Submitting…", sentOk: "Submitted. Thanks!",
    sentErr: "Something went wrong. Try again.", requiredField: "This field is required.",
    invalidUrl: "Enter a valid URL (starting with http).", comments: "Discussion", yourName: "Your name",
    yourMessage: "Write a message…", post: "Post", noComments: "No comments yet — be the first.",
    filterAll: "All semesters", noMaterials: "No materials posted yet.", noShowcase: "No projects posted yet.",
    yourGroup: "Your group", progressWeek: "Week", progressText: "What did you accomplish this week?",
    progressLink: "Link (optional)", pastEntries: "Past entries", noProgress: "No progress entries yet.",
    selectGroup: "Select your group", selectName: "Select your name", loading: "Loading…", viewAll: "View all",
    attendance: "Attendance", attendanceCode: "Today's code", checkIn: "Check in", checkedIn: "Checked in!",
    attendanceCount: "sessions attended this semester", wrongCode: "That code doesn't match — check with your instructor.",
    noCodeSet: "No code set for this week yet — ask your instructor.",
    yourSubmissions: "Your submissions", noSubmissions: "No submissions yet.",
    announcements: "Announcements", noAnnouncements: "",
  },
  grad: {
    materials: "上課素材", showcase: "歷年學生成果", submit: "提交作業", progress: "進度回報",
    home: "首頁", week: "週次", semester: "學期", group: "組別", names: "姓名", title: "標題",
    viewProject: "查看作品", notFound: "找不到這個作品。", backToShowcase: "回到成果列表",
    course: "課程", groupNumber: "組別（若適用）", assignmentName: "作業／對應週次", submissionLink: "提交連結",
    notes: "備註（選填）", send: "送出", sending: "送出中…", sentOk: "已送出，謝謝！",
    sentErr: "送出失敗，請再試一次。", requiredField: "此欄位為必填。",
    invalidUrl: "請輸入正確的網址格式（需以 http 開頭）。", comments: "討論區", yourName: "您的姓名",
    yourMessage: "輸入留言…", post: "送出留言", noComments: "目前尚無留言，成為第一個留言的人吧。",
    filterAll: "所有學期", noMaterials: "目前尚無上課素材。", noShowcase: "目前尚無作品成果。",
    yourGroup: "您的組別", progressWeek: "週次", progressText: "這週完成了什麼進度？",
    progressLink: "連結（選填）", pastEntries: "過往紀錄", noProgress: "目前尚無進度紀錄。",
    selectGroup: "選擇您的組別", selectName: "選擇您的姓名", loading: "載入中…", viewAll: "查看全部",
    attendance: "簽到", attendanceCode: "今日簽到碼", checkIn: "簽到", checkedIn: "簽到成功！",
    attendanceCount: "本學期已簽到次數", wrongCode: "簽到碼不正確，請跟老師確認。",
    noCodeSet: "這週還沒有設定簽到碼，請跟老師確認。",
    yourSubmissions: "我的繳交紀錄", noSubmissions: "目前尚無繳交紀錄。",
    announcements: "課程公告", noAnnouncements: "",
  },
};
function t(key) { const c = getCourse(); return (I18N[c] && I18N[c][key]) || I18N.emi[key] || key; }

// ---------- Race-condition guard ----------
// When the user switches course/semester quickly, an older still-in-flight fetch
// can resolve AFTER a newer one and overwrite the screen with stale data. Call
// latestWins(key) right before starting a fetch; it returns a check function —
// only act on the result if that check still returns true once the fetch resolves.
function latestWins(key) {
  window.__latestWinsTokens = window.__latestWinsTokens || {};
  const token = (window.__latestWinsTokens[key] = (window.__latestWinsTokens[key] || 0) + 1);
  return () => window.__latestWinsTokens[key] === token;
}

// ---------- API helpers ----------
function gasConfigured() {
  return typeof GAS_URL === "string" && GAS_URL.length > 0 && !GAS_URL.includes("REPLACE_WITH");
}

// Shows one dismissible error banner at the top of .wrap. Repeated calls replace
// the previous message rather than stacking duplicates, so it's safe to call from
// every failed fetch without spamming the page.
function showConnectionError(message) {
  let banner = document.getElementById("connectionErrorBanner");
  const wrap = document.querySelector(".wrap");
  if (!wrap) return;
  if (!banner) {
    banner = document.createElement("div");
    banner.id = "connectionErrorBanner";
    banner.className = "panel";
    banner.style.cssText = "padding:14px 18px;margin-bottom:20px;border-radius:10px;border:1px solid #fecaca;background:#fef2f2;color:#991b1b;font-size:13px;font-weight:500;";
    wrap.prepend(banner);
  }
  banner.textContent = "⚠ " + message;
}
function clearConnectionError() {
  const banner = document.getElementById("connectionErrorBanner");
  if (banner) banner.remove();
}

async function fetchJSON(params) {
  if (!gasConfigured()) {
    showConnectionError("config.js still has the placeholder GAS_URL — open it and paste in your deployed Apps Script Web App URL.");
    throw new Error("GAS_URL is not set yet");
  }
  const url = new URL(GAS_URL);
  Object.keys(params).forEach((k) => url.searchParams.set(k, params[k]));
  let res;
  try {
    res = await fetch(url.toString());
  } catch (err) {
    showConnectionError("Can't reach the Apps Script backend. Check your internet connection and that GAS_URL in config.js is correct.");
    throw err;
  }
  if (!res.ok) {
    showConnectionError(`Backend returned an error (HTTP ${res.status}). Check that the Apps Script is deployed with access set to "Anyone".`);
    throw new Error("Bad response: " + res.status);
  }
  let data;
  try {
    data = await res.json();
  } catch (err) {
    showConnectionError("Backend did not return valid data. Check that the Apps Script Web App URL in config.js is correct and freshly deployed.");
    throw err;
  }
  if (data && data.error) {
    showConnectionError("Backend error: " + data.error);
  } else {
    clearConnectionError();
  }
  return data;
}

async function postAction(payload) {
  if (!gasConfigured()) {
    showConnectionError("config.js still has the placeholder GAS_URL — open it and paste in your deployed Apps Script Web App URL.");
    return { ok: false, error: "GAS_URL is not set yet" };
  }
  try {
    const res = await fetch(GAS_URL, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(payload),
    });
    if (!res.ok) {
      showConnectionError(`Backend returned an error (HTTP ${res.status}).`);
      return { ok: false, error: "HTTP " + res.status };
    }
    return await res.json();
  } catch (err) {
    showConnectionError("Can't reach the Apps Script backend. Check your internet connection and that GAS_URL in config.js is correct.");
    return { ok: false, error: String(err) };
  }
}

// ---------- Semester bootstrapping ----------
// Loads Config + available semesters, defaults localStorage to ACTIVE_SEMESTER
// the first time a visitor shows up with nothing set yet.
async function ensureSemester() {
  if (getSemester()) return getSemester();
  const cfg = await fetchJSON({ action: "config" });
  const active = (cfg && cfg.ACTIVE_SEMESTER) || "";
  setSemester(active);
  return active;
}

async function populateSemesterSelect(selectEl) {
  const [semesters, current] = await Promise.all([
    fetchJSON({ action: "semesters" }),
    ensureSemester(),
  ]);
  const list = semesters && semesters.length ? semesters : [current].filter(Boolean);
  selectEl.innerHTML = list.map((s) => `<option value="${escapeHtml(s)}">${escapeHtml(s)}</option>`).join("");
  selectEl.value = current;
  if (!selectEl.value && list.length) { selectEl.value = list[0]; setSemester(list[0]); }
}

// ---------- Nav (desktop pill + mobile floating tab bar) ----------
const ICONS = {
  home: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11l9-8 9 8"/><path d="M5 10v10h14V10"/></svg>',
  materials: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>',
  showcase: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>',
  submit: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19V5"/><path d="M5 12l7-7 7 7"/></svg>',
  progress: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="M7 15l4-4 3 3 5-6"/></svg>',
};

function renderNav(activePage) {
  const isEmi = getCourse() === "emi";
  const brand = isEmi ? "Safety Education" : "安全教育專題研究";
  const items = [
    ["index.html", "home", t("home")],
    ["materials.html", "materials", t("materials")],
    ["showcase.html", "showcase", t("showcase")],
    ["submit.html", "submit", t("submit")],
    ["progress.html", "progress", t("progress")],
  ];

  const desktopHost = document.getElementById("navHost");
  if (desktopHost) {
    desktopHost.innerHTML = `
      <div class="nav-bar">
        <div class="brand">${brand}</div>
        <nav class="site-nav">
          ${items.map(([href, key, label]) => `<a href="${href}" class="${key === activePage ? "active" : ""}">${label}</a>`).join("")}
        </nav>
      </div>`;
  }
  const mobileHost = document.getElementById("mobileNavHost");
  if (mobileHost) {
    mobileHost.innerHTML = `
      <div class="mobile-tabbar">
        ${items.map(([href, key, label]) => `<a href="${href}" class="${key === activePage ? "active" : ""}">${ICONS[key] || ""}<span>${label}</span></a>`).join("")}
      </div>`;
  }
}

// ---------- Glass segmented control (course switcher) ----------
function renderCourseSegmented(hostEl, onChange) {
  hostEl.innerHTML = `
    <div class="segmented" id="courseSeg">
      <div class="thumb" id="courseThumb"></div>
      <button data-val="emi">Safety Education (EMI)</button>
      <button data-val="grad">安全教育專題研究</button>
    </div>`;
  const seg = hostEl.querySelector("#courseSeg");
  const thumb = hostEl.querySelector("#courseThumb");
  const buttons = [...seg.querySelectorAll("button")];

  function positionThumb() {
    const active = seg.querySelector("button.active");
    if (!active) return;
    thumb.style.left = active.offsetLeft + "px";
    thumb.style.width = active.offsetWidth + "px";
  }
  function applyActive() {
    const course = getCourse();
    buttons.forEach((b) => b.classList.toggle("active", b.dataset.val === course));
    positionThumb();
  }
  buttons.forEach((b) => {
    b.addEventListener("click", () => {
      setCourse(b.dataset.val);
      applyActive();
      onChange && onChange(b.dataset.val);
    });
  });
  applyActive();
  window.addEventListener("resize", positionThumb);
  return { refresh: applyActive };
}

// ---------- Canvas cover generator ----------
function generateCoverCanvas(canvasEl, { title, names, semester, colorHex }) {
  const w = canvasEl.width || 400;
  const h = canvasEl.height || 220;
  const ctx = canvasEl.getContext("2d");
  const color = "#" + (colorHex || "0A84FF").replace("#", "");

  ctx.fillStyle = color;
  ctx.fillRect(0, 0, w, h);

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

  const words = String(title || "").split(/\s+/);
  const lines = [];
  let line = "";
  words.forEach((word) => {
    const test = line ? line + " " + word : word;
    if (ctx.measureText(test).width > w - pad * 2 && line) { lines.push(line); line = word; }
    else line = test;
  });
  if (line) lines.push(line);
  const shownLines = lines.slice(0, 3);

  const lineHeight = titleSize * 1.25;
  const subSize = Math.max(11, Math.round(w * 0.035));
  const bottomBlockHeight = shownLines.length * lineHeight + subSize * 1.6 + 10;
  let y = h - bottomBlockHeight + titleSize;

  shownLines.forEach((l) => { ctx.fillText(l, pad, y); y += lineHeight; });

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
    if (!items.length) { list.innerHTML = `<p class="empty-state">${t("noComments")}</p>`; return; }
    list.innerHTML = items.slice().reverse().map((c) => `
      <div class="comment-item">
        <span class="who">${escapeHtml(c.Name || "")}</span>
        <span class="when">${formatTime(c.Timestamp)}</span>
        <div>${escapeHtml(c.Message || "")}</div>
      </div>`).join("");
  }
  await refresh();
  if (pollMs) setInterval(refresh, pollMs);

  container.querySelector(".comment-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const nameEl = container.querySelector('[name="name"]');
    const msgEl = container.querySelector('[name="message"]');
    const errEl = container.querySelector(".comment-error");
    errEl.textContent = "";
    if (!nameEl.value.trim() || !msgEl.value.trim()) { errEl.textContent = t("requiredField"); return; }
    await postAction({ action: "comment", course: getCourse(), semester: getSemester(), topic, name: nameEl.value.trim(), message: msgEl.value.trim() });
    msgEl.value = "";
    await refresh();
  });
}
function renderCommentsBox(container, topic) {
  container.innerHTML = `
    <div class="comments-box panel" style="padding:20px 22px;">
      <h2 style="margin-top:0;">${t("comments")}</h2>
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

// ---------- Announcements banner (used on index.html) ----------
async function renderAnnouncements(container) {
  const isCurrent = latestWins("announcements");
  const course = getCourse();
  const semester = getSemester();
  let items;
  try {
    items = await fetchJSON({ action: "announcements", course, semester });
  } catch (err) {
    return; // connection error banner already shown by fetchJSON
  }
  if (!isCurrent()) return; // a newer switch happened while this was in flight — discard
  if (!items || !items.length) { container.innerHTML = ""; return; }
  container.innerHTML = `
    <div class="panel" style="padding:16px 20px; margin-bottom:22px; border-left:3px solid var(--accent);">
      <h2 style="margin:0 0 10px; border:none; padding:0;">${t("announcements")}</h2>
      ${items.map((a) => `
        <div style="padding:8px 0; border-top:1px solid var(--border);">
          <div style="font-size:12px; color:var(--ink-muted); margin-bottom:2px;">${formatTime(a.Timestamp)}</div>
          <div style="font-size:14px;">${escapeHtml(a.Message)}</div>
        </div>`).join("")}
    </div>`;
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
function isValidUrl(str) { return /^https?:\/\/.+/i.test(str); }
