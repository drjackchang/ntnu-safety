// ============================================================
// COURSE DATA
// ============================================================
const DATA = {
  emi: {
    brand: "Safety Education (EMI)",
    intro: "This course introduces the theoretical foundations of safety education and covers a broad range of injury-prevention domains — traffic safety, water safety, burns/scalds and first aid, fall prevention, fire safety, disaster preparedness, food & drug safety, workplace safety, mass-gathering/crowd safety, and cyber safety.",
    grading: [
      { label: "Attendance & Class Participation", pct: 10 },
      { label: "Weekly Quizzes / Topic Reflections", pct: 15 },
      { label: "Midterm Case Analysis", pct: 15 },
      { label: "AI-Assisted Interactive Game Project", pct: 40 },
      { label: "Final Demonstration & Peer Review", pct: 20 },
    ],
    weeks: [
      { week: 1, topic: "Course Introduction & AI-Integrated Project Overview", desc: "Course structure, expectations, and grading overview; the scope and burden of unintentional injury as a public-health issue.", link: "https://www.kidsafensw.org/" },
      { week: 2, topic: "Risk Management and Assessment", desc: "Hazard Vulnerability Analysis (HVA) and the Haddon Matrix; applying both tools to a real-world safety case.", link: "" },
      { week: 3, topic: "Health Education Methods & Instructional Design", desc: "Theory-informed health education approaches; principles of instructional design.", link: "" },
      { week: 4, topic: "AI-Assisted Design Studio I: Introduction to Vibe Coding", desc: "Hands-on workshop introducing generative AI coding tools and a vibe-coding workflow.", link: "" },
      { week: 5, topic: "Traffic Safety", desc: "Pedestrian, cyclist, and passenger risk factors across the life course; school-zone and community-level interventions.", link: "https://www.nhtsa.gov/learn-bike-safely" },
      { week: 6, topic: "Water Safety", desc: "Drowning risk factors and prevention; open-water versus pool/recreational-water hazards.", link: "https://www.betterhealth.vic.gov.au/health/healthyliving/water-safety-for-children" },
      { week: 7, topic: "Burns, Scalds & First Aid", desc: "Common causes and prevention of thermal, chemical, and electrical burns/scalds; core first-aid principles.", link: "https://www.globalfirstaidcentre.org/resource/online-game-emojis-and-first-aid/" },
      { week: 8, topic: "Fall Prevention", desc: "Fall risk factors across the life course; environmental and behavioral prevention strategies.", link: "https://www.childrenssafetynetwork.org/child-safety-topics/falls" },
      { week: 9, topic: "Fire Safety & Evacuation", desc: "Common fire-cause awareness; evacuation planning and drills; fire-extinguisher use.", link: "https://www.tfdp.com.tw/cht/index.php?code=list&ids=25" },
      { week: 10, topic: "Disaster Preparedness", desc: "Earthquake, typhoon, and flood preparedness; household and school emergency plans.", link: "https://www.ready.gov/kids/prepare-pedro" },
      { week: 11, topic: "Food & Drug Safety", desc: "Foodborne-illness prevention; safe medication storage/use and poisoning prevention.", link: "https://www.fda.gov/food/consumers/food-safety-education-month" },
      { week: 12, topic: "Workplace Safety", desc: "Common occupational hazards for young and first-time workers; workers' rights.", link: "https://isafeel.osha.gov.tw/mooc/index.php" },
      { week: 13, topic: "Mass-Gathering & Crowd Safety", desc: "Crowd-density and crowd-crush risk factors; event risk assessment.", link: "https://www.nfa.gov.tw/cht/index.php?code=list&ids=905" },
      { week: 14, topic: "Cyber Safety & Problematic Internet Use", desc: "Online risks; recognizing and preventing problematic internet use; digital literacy.", link: "https://beinternetawesome.withgoogle.com/en_us/interland/" },
      { week: 15, topic: "AI-Assisted Design Studio II", desc: "Team studio time; AI-assisted coding/debugging; peer playtesting.", link: "" },
      { week: 16, topic: "Final Demonstration & Peer Review", desc: "Team presentations of AI-assisted interactive safety-education games.", link: "" },
    ],
    objectives: [
      { text: "Explain the importance and scope of safety education.", comp: "Core Competency 1" },
      { text: "Apply structured tools (Haddon Matrix, HVA) to assess the risks.", comp: "Core Competency 2" },
      { text: "Collaborate with generative AI tools to design an interactive game.", comp: "Core Competency 3" },
      { text: "Design and deliver instructional strategies tailored to a given audience.", comp: "Core Competency 4" },
      { text: "Demonstrate responsible, ethical use of AI tools.", comp: "Core Competency 5" },
    ],
    aiPolicy: "AI Use Policy: Extensively Encouraged. Students take part in dedicated AI-assisted 'vibe coding' studio sessions to design and build an interactive safety-education game.",
    sdgs: ["SDG 3", "SDG 4", "SDG 8", "SDG 11"],
    supportNote: "Students requiring accommodations may discuss arrangements with the instructor.",
    references: [
      "Haddon W Jr. The changing approach to the epidemiology... Am J Public Health. 1968.",
      "MOE K-12 Curriculum and Instruction Resource Platform. https://cirn.moe.edu.tw",
      "Ready.gov (U.S. FEMA). Prepare with Pedro. https://www.ready.gov/kids/prepare-pedro"
    ],
    showcase: [
      { id: "ex-1", title: "Water Safety Escape Room", who: "Group 3", semester: "114-1", color: "A6192E" },
      { id: "ex-2", title: "Fire Drill Simulator", who: "Group 5", semester: "114-1", color: "7d1322" }
    ],
    groups: [
      { name: "Group 1", members: "Student A, Student B" }
    ]
  },

  grad: {
    brand: "安全教育專題研究",
    intro: "本課程為碩士班、博士班之專題研究課程，聚焦安全教育之理論基礎與研究方法訓練。訓練研究生運用生成式AI工具輔助文獻搜尋、摘要與實證整合，並強調AI使用之查核、批判與倫理揭露。",
    grading: [
      { label: "課堂導讀", pct: 20 },
      { label: "安全教育介入計畫與演示", pct: 70 },
      { label: "平時成績", pct: 10 },
    ],
    weeks: [
      { week: 1, date: "9/2", topic: "課程介紹、介入計畫撰寫", desc: "說明課程AI使用規範；概覽AI輔助文獻蒐集與寫作工具。" },
      { week: 2, date: "9/9", topic: "風險管理概論與行為科學理論", desc: "運用AI協助將行為科學理論套用至案例情境。" },
      { week: 3, date: "9/16", topic: "交通安全教育研討", desc: "以AI輔助工具蒐集近5年相關文獻。" },
      { week: 16, date: "12/16", topic: "綜合演示、同儕互評與課程總結", desc: "綜合反思AI輔助研究與介入設計歷程之心得與限制。" }
    ],
    objectives: [
      { text: "了解安全教育的目標與內涵", comp: "核心能力1" },
      { text: "能夠進行風險評估與擬訂管理策略", comp: "核心能力2" },
      { text: "能夠適切且符合倫理地運用生成式AI工具", comp: "核心能力7" }
    ],
    aiPolicy: "AI 使用規範：全面鼓勵使用。文獻導讀階段訓練學生運用AI輔助搜尋與摘要；期末介入計畫運用AI輔助整理實證基礎。",
    sdgs: ["SDG 3", "SDG 4", "SDG 8", "SDG 11"],
    supportNote: "如有特殊調整需求，可與授課教師討論個別化調整方式。",
    references: [
      "教育部. (2015). 國民中小學課程與教學資源整合平臺.",
      "陳為堅 等. (2023). 健康社會行為學."
    ],
    showcase: [
      { id: "g-1", title: "職場安全介入方案", who: "王小明", semester: "114-1", color: "00337A" }
    ],
    groups: null
  }
};

// ---------- Core Logic ----------
function getCourse() { return localStorage.getItem("course") || "emi"; }
function setCourse(c) { localStorage.setItem("course", c); document.body.setAttribute("data-course", c); }

function renderAll() {
  const course = getCourse();
  const d = DATA[course];
  const isEmi = course === "emi";

  document.body.setAttribute("data-course", course);
  document.querySelectorAll(".course-switcher button").forEach(b => b.classList.toggle("active", b.dataset.course === course));

  // Text contents
  document.getElementById("brandText").textContent = d.brand;
  document.getElementById("pageTitle").textContent = d.brand;
  document.getElementById("pageLead").textContent = d.intro;
  document.getElementById("aiPolicyText").textContent = d.aiPolicy;

  // Nav & Headings
  document.getElementById("navMaterials").textContent = isEmi ? "Materials" : "上課素材";
  document.getElementById("navGrading").textContent = isEmi ? "Grading" : "評分方式";
  document.getElementById("navShowcase").textContent = isEmi ? "Showcase" : "歷年成果";
  document.getElementById("navSubmit").textContent = isEmi ? "Submit" : "進度回報";
  
  document.getElementById("objectivesHeading").textContent = isEmi ? "Course Objectives" : "課程目標";
  document.getElementById("gradingHeading").textContent = isEmi ? "Grading Structure" : "評分方式";
  document.getElementById("materialsHeading").textContent = isEmi ? "Weekly Materials" : "每週上課素材";
  document.getElementById("showcaseHeading").textContent = isEmi ? "Student Showcase" : "歷年學生成果";
  document.getElementById("referencesHeading").textContent = isEmi ? "References" : "參考書目";
  document.getElementById("submitHeading").textContent = isEmi ? "Submit Progress" : "進度回報";

  // Render components
  document.getElementById("sdgsList").innerHTML = d.sdgs.map(s => `<span class="tag">${s}</span>`).join("");
  
  document.getElementById("objectivesList").innerHTML = d.objectives.map(o => `
    <li><span class="item-text">${o.text}</span><span class="tag" style="align-self:flex-start">${o.comp}</span></li>
  `).join("");

  document.getElementById("gradingPanel").innerHTML = d.grading.map(g => `
    <div class="grade-row">
      <div class="grade-label"><span>${g.label}</span><span>${g.pct}%</span></div>
      <div class="grade-bar"><div class="grade-fill" style="width: ${g.pct}%"></div></div>
    </div>
  `).join("");

  document.getElementById("materialsGrid").innerHTML = d.weeks.map(w => `
    <div class="card">
      <div class="card-badge">Week ${w.week} ${w.date ? `· ${w.date}` : ''}</div>
      <h3 class="card-title">${w.topic}</h3>
      <p class="card-desc">${w.desc}</p>
      ${w.link ? `<a href="${w.link}" target="_blank" class="card-link">View Material →</a>` : ''}
    </div>
  `).join("");

  document.getElementById("referencesList").innerHTML = d.references.map(r => {
    const linkified = r.replace(/(https?:\/\/[^\s]+)/g, '<a href="$1" target="_blank">$1</a>');
    return `<li>${linkified}</li>`;
  }).join("");
  document.getElementById("supportNote").textContent = d.supportNote;

  // Showcase logic
  const showcaseHost = document.getElementById("showcaseGrid");
  showcaseHost.innerHTML = d.showcase.map(s => `
    <div class="showcase-card">
      <canvas width="400" height="200" data-title="${s.title}" data-sub="${s.who} · ${s.semester}" data-color="${s.color}"></canvas>
      <div class="showcase-meta"><span>${s.semester}</span><span>${s.who}</span></div>
    </div>
  `).join("");
  
  showcaseHost.querySelectorAll("canvas").forEach(drawCanvas);

  // Form setup
  document.getElementById("lblWho").textContent = isEmi ? "Your name or group" : "姓名或組別";
  document.getElementById("whoInput").placeholder = isEmi ? "e.g., Group 3" : "例如：Group 3";
  document.getElementById("lblMsg").textContent = isEmi ? "Progress update" : "本週進度";
  document.getElementById("msgInput").placeholder = isEmi ? "What did you accomplish?" : "這週完成了什麼？";
  document.getElementById("submitBtn").textContent = isEmi ? "Send Update" : "送出進度";
  document.getElementById("submitNote").textContent = isEmi ? "Sent securely via Formspree." : "透過 Formspree 安全送出。";
  document.getElementById("courseHiddenInput").value = d.brand;
}

// Draw showcase canvas covers
function drawCanvas(canvas) {
  const ctx = canvas.getContext("2d");
  const w = canvas.width, h = canvas.height;
  const color = "#" + (canvas.dataset.color || "A6192E");
  
  ctx.fillStyle = color;
  ctx.fillRect(0, 0, w, h);
  
  ctx.fillStyle = "rgba(255,255,255,0.95)";
  ctx.font = "bold 22px system-ui, sans-serif";
  const title = canvas.dataset.title || "";
  
  // Simple word wrap
  const words = title.split(" ");
  let line = "", y = 80;
  words.forEach(word => {
    if (ctx.measureText(line + word).width > w - 40) {
      ctx.fillText(line, 20, y); y += 30; line = word + " ";
    } else {
      line += word + " ";
    }
  });
  ctx.fillText(line, 20, y);
}

// Event Listeners
document.querySelectorAll(".course-switcher button").forEach(b => {
  b.addEventListener("click", () => { setCourse(b.dataset.course); renderAll(); });
});

renderAll();
