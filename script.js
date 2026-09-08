// 保留你原本在最上面的 DATA 設定區塊，以下為修改後的邏輯

function applySubmitFormText(isEmi) {
  document.getElementById("lblWho").textContent = isEmi ? "Your name or group" : "您的姓名或組別";
  document.getElementById("lblMsg").textContent = isEmi ? "Progress update" : "進度內容";
  document.getElementById("whoInput").placeholder = isEmi ? "e.g. Group 3, or Chen Yu" : "例如：Group 3，或陳育";
  document.getElementById("msgInput").placeholder = isEmi ? "What did you accomplish this week?" : "這週完成了什麼進度？";
  document.getElementById("submitBtn").textContent = isEmi ? "Send Update" : "送出進度";
  document.getElementById("submitNote").textContent = isEmi
    ? "Your progress will be sent directly to the instructor."
    : "您的進度將會直接寄送至授課教師信箱。";
  
  // 更新隱藏欄位，讓信件內容自動帶上是哪一門課的進度
  document.getElementById("courseHiddenInput").value = isEmi ? "Safety Education (EMI)" : "安全教育專題研究";
}

// 注意：移除了原本攔截 submitForm 並呼叫 mailto 的監聽器。
// 現在表單會直接交給 HTML 的 action="https://formspree.io/..." 處理。

// ---------- Small utils ----------
function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

// ---------- Init ----------
document.querySelectorAll(".course-toggle button").forEach((b) => {
  b.addEventListener("click", () => { setCourse(b.dataset.course); renderAll(); });
});
renderAll();
