// ============================================================
// COURSE DATA — edit this section directly to update the site.
// No spreadsheet, no backend — edit these values and re-upload.
// Weekly links live in RES (below), keyed by topic; each week points to a topic with "key".
// ============================================================
const DATA = {
  "emi": {
    "brand": "Safety Education (EMI)",
    "intro": "This course introduces the theoretical foundations of safety education and covers a broad range of injury-prevention domains — traffic safety, water safety, burns/scalds and first aid, fall prevention, fire safety, disaster preparedness, food & drug safety, workplace safety, mass-gathering/crowd safety, and cyber safety — and trains students to design developmentally and contextually appropriate educational interventions. Students collaborate with generative AI tools and apply a \"vibe coding\" workflow to design and build interactive digital games for safety education.",
    "grading": [
      {
        "label": "Attendance & Class Participation",
        "pct": 10
      },
      {
        "label": "Weekly Quizzes / Topic Reflections",
        "pct": 15
      },
      {
        "label": "Midterm Case Analysis (Haddon Matrix / HVA application)",
        "pct": 15
      },
      {
        "label": "AI-Assisted Interactive Safety-Education Game Project",
        "pct": 40
      },
      {
        "label": "Final Demonstration & Peer Review",
        "pct": 20
      }
    ],
    "weeks": [
      {
        "week": 1,
        "key": "intro",
        "studio": false,
        "topic": "Course Introduction & AI-Integrated Project Overview",
        "desc": "Course structure, expectations, and grading overview; the scope and burden of unintentional injury as a public-health issue; overview of the AI-assisted interactive game project and the vibe-coding workflow used throughout the term."
      },
      {
        "week": 2,
        "key": "risk",
        "studio": false,
        "topic": "Risk Management and Assessment",
        "desc": "Hazard Vulnerability Analysis (HVA) and the Haddon Matrix (host-agent-environment x pre-event/event/post-event phases); applying both tools to a real-world safety case."
      },
      {
        "week": 3,
        "key": "edu",
        "studio": false,
        "topic": "Health Education Methods & Instructional Design",
        "desc": "Theory-informed health education approaches (e.g., health belief model); principles of instructional design; adapting content and delivery for different developmental stages and settings."
      },
      {
        "week": 4,
        "key": "studio",
        "studio": true,
        "topic": "AI-Assisted Design Studio I: Introduction to Vibe Coding",
        "desc": "Hands-on workshop introducing generative AI coding tools and a vibe-coding workflow; project teams formed; safety topic and target audience selected for the term project."
      },
      {
        "week": 5,
        "key": "traffic",
        "studio": false,
        "topic": "Traffic Safety",
        "desc": "Pedestrian, cyclist, and passenger risk factors across the life course; school-zone and community-level interventions; designing traffic-safety messaging for different audiences."
      },
      {
        "week": 6,
        "key": "water",
        "studio": false,
        "topic": "Water Safety",
        "desc": "Drowning risk factors and prevention (supervision, barriers, swim competency); open-water versus pool/recreational-water hazards; water-safety instructional strategies."
      },
      {
        "week": 7,
        "key": "burns",
        "studio": false,
        "topic": "Burns, Scalds & First Aid / Basic Life Support",
        "desc": "Common causes and prevention of thermal, chemical, and electrical burns/scalds; core first-aid principles and basic life support skills (wound and burn care, choking response, CPR/AED overview)."
      },
      {
        "week": 8,
        "key": "falls",
        "studio": false,
        "topic": "Fall Prevention",
        "desc": "Fall risk factors across the life course (playground and school equipment, stairs, older-adult falls); environmental and behavioral prevention strategies."
      },
      {
        "week": 9,
        "key": "fire",
        "studio": false,
        "topic": "Fire Safety & Evacuation",
        "desc": "Common fire-cause awareness (electrical, cooking-related, wildland-urban interface); evacuation planning and drills; fire-extinguisher use and escape-route design."
      },
      {
        "week": 10,
        "key": "disaster",
        "studio": false,
        "topic": "Disaster Preparedness",
        "desc": "Earthquake, typhoon, and flood preparedness; household and school emergency plans; introduction to community-level disaster-response coordination."
      },
      {
        "week": 11,
        "key": "food",
        "studio": false,
        "topic": "Food & Drug Safety",
        "desc": "Foodborne-illness prevention; safe medication storage/use and poisoning prevention for children and adolescents; reading food and drug labels. (See also Positive Choices in References for the drug-safety side.)"
      },
      {
        "week": 12,
        "key": "workplace",
        "studio": false,
        "topic": "Workplace Safety",
        "desc": "Common occupational hazards for young and first-time workers; workers' rights, hazard reporting, and employer responsibilities; ergonomics and safe practices in school-to-work transition programs."
      },
      {
        "week": 13,
        "key": "crowd",
        "studio": false,
        "topic": "Mass-Gathering & Crowd Safety",
        "desc": "Crowd-density and crowd-crush risk factors, with case studies from large public events; event risk assessment and crowd-management strategies."
      },
      {
        "week": 14,
        "key": "cyber",
        "studio": false,
        "topic": "Cyber Safety & Problematic Internet Use",
        "desc": "Online risks (cyberbullying, predatory contact, misinformation); recognizing and preventing problematic internet use; digital literacy."
      },
      {
        "week": 15,
        "key": "studio",
        "studio": true,
        "topic": "AI-Assisted Design Studio II: Game Development & Playtesting",
        "desc": "Team studio time; AI-assisted coding/debugging; peer playtesting and iterative feedback."
      },
      {
        "week": 16,
        "key": "final",
        "studio": false,
        "topic": "Final Demonstration & Peer Review",
        "desc": "Team presentations of AI-assisted interactive safety-education games; peer and instructor evaluation against instructional-design criteria."
      }
    ],
    "objectives": [
      {
        "text": "Explain the importance and scope of safety education.",
        "comp": "Core Competency 1"
      },
      {
        "text": "Explain the five major content areas of safety education (traffic, water, falls, disaster preparedness, food & drug safety).",
        "comp": "Core Competency 1"
      },
      {
        "text": "Apply structured tools (Haddon Matrix, HVA) to assess the risks and needs of a specific audience or setting.",
        "comp": "Core Competency 2"
      },
      {
        "text": "Design and deliver instructional strategies tailored to a given audience and setting (elementary/junior-high, senior-high, or community).",
        "comp": "Core Competency 4"
      },
      {
        "text": "Collaborate with generative AI tools to design, prototype (\"vibe code\"), implement, and evaluate an interactive safety-education game as a health-education intervention.",
        "comp": "Core Competency 3"
      },
      {
        "text": "Demonstrate responsible, ethical use of AI tools, including verification and attribution of AI-assisted work.",
        "comp": "Core Competency 5"
      }
    ],
    "teachingMethods": [
      "Lecture",
      "Case-based discussion",
      "Group project-based learning",
      "Studio / hands-on workshop practicum",
      "AI-Integrated Teaching (checked)"
    ],
    "teachingMethodsNote": "Students use generative AI tools and a vibe-coding workflow (Weeks 4 and 15) to design, build, and iterate on an interactive safety-education game as their core project deliverable. The instructor models responsible AI use, output verification, and academic-integrity practices for AI-assisted work throughout the course.",
    "aiPolicy": "Selected level: Extensively Encouraged. Use of generative AI is integral to this course. In Weeks 4 and 15, students take part in dedicated AI-assisted \"vibe coding\" studio sessions to design and build an interactive safety-education game, and they may draw on AI tools throughout the term for research, content drafting, and playtesting. Students are required to submit an \"AI-use log\" documenting which AI tools they used and how, as part of the final project, and to verify the accuracy of AI-generated safety content and the correctness of AI-generated game code before submission.",
    "sdgs": [
      "SDG 3 – Good Health and Well-Being",
      "SDG 4 – Quality Education",
      "SDG 8 – Decent Work and Economic Growth (Week 12)",
      "SDG 11 – Sustainable Cities and Communities",
      "(Optional) SDG 9 – Industry, Innovation and Infrastructure"
    ],
    "supportNote": "Students who require adjusted arrangements (e.g., extended time, alternative formats for game-project deliverables, assistive technology) may discuss individualized accommodations with the instructor; accommodations will be arranged in coordination with the university's student support office.",
    "references": [
      "Haddon W Jr. The changing approach to the epidemiology, prevention, and amelioration of trauma. Am J Public Health Nations Health. 1968;58(8):1431-1438.",
      "Ministry of Education (Taiwan). MOE K-12 Curriculum and Instruction Resource Platform (CIRN), Safety Education topic area. https://cirn.moe.edu.tw",
      "Kidsafe New South Wales. Child injury prevention resources. https://www.kidsafensw.org/",
      "National Highway Traffic Safety Administration (NHTSA, U.S. DOT). Bicycle and road safety resources. https://www.nhtsa.gov/learn-bike-safely",
      "Better Health Channel (Victoria State Government, Australia). Water safety for children. https://www.betterhealth.vic.gov.au/health/healthyliving/water-safety-for-children",
      "Ready.gov (U.S. FEMA). Prepare with Pedro. https://www.ready.gov/kids/prepare-pedro",
      "Children's Safety Network. Child safety topics: falls. https://www.childrenssafetynetwork.org/child-safety-topics/falls",
      "U.S. Food and Drug Administration (FDA). Food Safety Education Month. https://www.fda.gov/food/consumers/food-safety-education-month",
      "Positive Choices (National Drug and Alcohol Research Centre, Australia). School-based drug and alcohol prevention: what works? https://positivechoices.org.au/teachers/drug-prevention-what-works",
      "Google. Be Internet Awesome / Interland. https://beinternetawesome.withgoogle.com/en_us/interland/",
      "International Federation of Red Cross and Red Crescent Societies (IFRC), Global First Aid Reference Centre. \"Emojis and First Aid.\" https://www.globalfirstaidcentre.org/resource/online-game-emojis-and-first-aid/",
      "National Fire Agency, Ministry of the Interior (Taiwan) 內政部消防署. 消防防災館. https://www.tfdp.com.tw/cht/index.php?code=list&ids=25",
      "Occupational Safety and Health Administration (Taiwan) 勞動部職業安全衛生署. 職業安全衛生數位學習平台. https://isafeel.osha.gov.tw/mooc/index.php",
      "National Fire Agency, Ministry of the Interior (Taiwan) 內政部消防署. Guidelines for Safety Management of Large-Scale Public Gatherings 大型群聚活動安全管理要點. https://www.nfa.gov.tw/cht/index.php?code=list&ids=905"
    ],
    "showcase": [
      {
        "id": "ex-emi-1",
        "title": "EXAMPLE — Water Safety Escape Room",
        "who": "Group 3 · Chen, Wu, Lin",
        "semester": "114-1",
        "desc": "Replace this with a real past project, or delete it.",
        "link": "https://example.com",
        "color": "A6192E"
      },
      {
        "id": "ex-emi-2",
        "title": "EXAMPLE — Fire Drill Simulator",
        "who": "Group 5 · Huang, Chang",
        "semester": "114-1",
        "desc": "Replace this with a real past project, or delete it.",
        "link": "https://example.com",
        "color": "7d1322"
      }
    ],
    "groups": [
      {
        "name": "Group 1",
        "members": "EXAMPLE Student A, EXAMPLE Student B"
      },
      {
        "name": "Group 2",
        "members": "EXAMPLE Student C, EXAMPLE Student D"
      }
    ]
  },
  "grad": {
    "brand": "安全教育專題研究",
    "intro": "本課程為健康促進與衛生教育學系碩士班、博士班之專題研究課程，聚焦安全教育之理論基礎與研究方法訓練，涵蓋交通安全、水域安全、燒燙傷與急救、跌墜預防、火災逃生、災害整備、食品藥物安全、職業安全、資訊安全及社區／群聚活動安全等主題，訓練研究生進行風險評估、文獻回顧與批判、實證基礎介入方案設計，以及研究計畫之擬定與評析。課程訓練研究生運用生成式AI工具輔助文獻搜尋、摘要與實證整合，並強調AI使用之查核、批判與倫理揭露。",
    "grading": [
      {
        "label": "課堂導讀",
        "pct": 20
      },
      {
        "label": "安全教育介入計畫與演示",
        "pct": 70
      },
      {
        "label": "平時成績",
        "pct": 10
      }
    ],
    "weeks": [
      {
        "week": 1,
        "date": "9/2",
        "key": "intro",
        "topic": "課程介紹、介入計畫撰寫",
        "desc": "說明課程AI使用規範；概覽AI輔助文獻蒐集與寫作工具。"
      },
      {
        "week": 2,
        "date": "9/9",
        "key": "risk",
        "topic": "風險管理概論與行為科學理論",
        "desc": "運用AI協助將行為科學理論套用至案例情境。"
      },
      {
        "week": 3,
        "date": "9/16",
        "key": "traffic",
        "topic": "交通安全教育研討",
        "desc": "以AI輔助工具蒐集近5年相關文獻，導讀者須標註AI協助範圍並查核。"
      },
      {
        "week": 4,
        "date": "9/23",
        "key": "water",
        "topic": "水域安全教育研討",
        "desc": "嘗試以生成式AI草擬文獻摘要初稿，再由學生逐句查核修正。"
      },
      {
        "week": 5,
        "date": "9/30",
        "key": "burns",
        "topic": "燒燙傷與急救／基本救命術研討",
        "desc": "研討AI輔助急救訓練工具之應用與限制。"
      },
      {
        "week": 6,
        "date": "10/7",
        "key": "falls",
        "topic": "防墜安全教育研討",
        "desc": "練習以AI輔助PICO架構提問進行文獻篩選。"
      },
      {
        "week": 7,
        "date": "10/14",
        "key": "fire",
        "topic": "火災逃生安全教育研討",
        "desc": "研討AI於火災預警、逃生路徑模擬之應用文獻。"
      },
      {
        "week": 8,
        "date": "10/21",
        "key": "disaster",
        "topic": "防災安全教育研討",
        "desc": "研討AI於災害風險評估、預警系統與資源調度之應用案例。"
      },
      {
        "week": 9,
        "date": "10/28",
        "key": "food",
        "topic": "食品藥物安全教育研討",
        "desc": "研討AI於食品／藥物安全衛教素材開發之應用。"
      },
      {
        "week": 10,
        "date": "11/4",
        "key": "workplace",
        "topic": "職業安全教育研討",
        "desc": "研討AI於職場風險辨識、穿戴式裝置監測之應用與倫理議題。"
      },
      {
        "week": 11,
        "date": "11/11",
        "key": "cyber",
        "topic": "資訊安全教育研討",
        "desc": "深入探討AI相關資安風險，反思AI倫理。"
      },
      {
        "week": 12,
        "date": "11/18",
        "key": "crowd",
        "topic": "社區安全教育實務（含大型群聚活動／人潮安全案例）",
        "desc": "運用AI輔助分析社區與群聚活動安全需求資料。"
      },
      {
        "week": 13,
        "date": "11/25",
        "key": "plan",
        "topic": "安全教育介入計畫報告",
        "desc": "以AI輔助整理實證基礎，佐證介入方案設計依據。"
      },
      {
        "week": 14,
        "date": "12/2",
        "key": "final",
        "topic": "簡單試教／介入展示 I",
        "desc": "完成部分學生試教或介入展示。"
      },
      {
        "week": 15,
        "date": "12/9",
        "key": "final",
        "topic": "簡單試教／介入展示 II",
        "desc": "完成剩餘學生試教或介入展示。"
      },
      {
        "week": 16,
        "date": "12/16",
        "key": "final",
        "topic": "綜合演示、同儕互評與課程總結",
        "desc": "綜合反思AI輔助研究與介入設計歷程之心得與限制。"
      }
    ],
    "objectives": [
      {
        "text": "了解安全教育的目標與內涵",
        "comp": "核心能力1"
      },
      {
        "text": "能夠進行風險評估與擬訂管理策略",
        "comp": "核心能力2"
      },
      {
        "text": "能夠設計安全教育主題教學活動",
        "comp": "核心能力3"
      },
      {
        "text": "能夠分析不同場域的安全議題",
        "comp": "核心能力4"
      },
      {
        "text": "能對安全教育議題進行計畫擬定",
        "comp": "核心能力5"
      },
      {
        "text": "能夠評析安全教育研究文獻與研究設計",
        "comp": "博士班核心能力8（碩士班無直接對應項目）"
      },
      {
        "text": "能夠適切且符合倫理地運用生成式AI工具，輔助文獻回顧、研究設計與衛生教育介入方案之發展",
        "comp": "核心能力7"
      },
      {
        "text": "能有效溝通安全教育相關健康風險，並倡議（碩士）／領導（博士）安全促進政策或方案",
        "comp": "核心能力6"
      }
    ],
    "teachingMethods": [
      "文獻導讀與研討",
      "案例研討",
      "實證整合工作坊",
      "AI融入教學（已勾選）"
    ],
    "teachingMethodsNote": "學生於文獻導讀（週3-12）運用AI輔助搜尋、摘要並查核文獻；於期末介入計畫（週13-16）運用AI輔助整合實證基礎，並於報告中揭露AI應用範圍與查核過程。授課教師示範負責任之AI使用與學術倫理實踐。",
    "aiPolicy": "選定等級：全面鼓勵使用。生成式AI為本課程之核心訓練工具。文獻導讀階段（週3-12）訓練學生運用AI輔助文獻搜尋與摘要，並查核、辨識AI幻覺；期末介入計畫階段（週13-16）訓練學生運用AI輔助整理實證基礎，佐證介入方案設計，並須於書面報告與展示中揭露AI應用範圍與查核過程。",
    "sdgs": [
      "SDG 3 – 健康與福祉",
      "SDG 4 – 優質教育",
      "SDG 8 – 合適工作與經濟成長（對應第10週職業安全教育研討）",
      "SDG 11 – 永續城鄉",
      "（可選）SDG 9 – 產業創新與基礎設施"
    ],
    "supportNote": "如學生有特殊調整需求（如延長作業時間、報告形式調整、輔助科技等），可與授課教師討論個別化調整方式，並依本校學生輔助資源辦理。",
    "references": [
      "教育部. (2015, December 31). 教育部國民中小學課程與教學資源整合平臺. https://cirn.moe.edu.tw/Facet/group/index.aspx?HtmlName=InnovativeIndex",
      "李蘭. (2010). 健康行為與健康教育. 巨流圖書公司.",
      "陳為堅, 李玉春, 陳保中, 郭鐘隆, & 陳富莉. (2023). 健康社會行為學. 財團法人陳拱北預防醫學基金會."
    ],
    "showcase": [
      {
        "id": "ex-grad-1",
        "title": "EXAMPLE — 職場安全介入方案",
        "who": "王小明",
        "semester": "114-1",
        "desc": "請替換為真實過往成果，或刪除此列。",
        "link": "https://example.com",
        "color": "00337A"
      }
    ],
    "groups": null
  }
};

// Shared weekly resources, keyed by topic. k: game|video|read|sheet|tw|tool|file|activity ; new:true = newly added ; chk:true = could not be auto-verified
const RES = {
  intro: { emoji: "🎯", color: "#a6192e",
    reading: [
      { t: "Taiwan Safety Education curriculum for schools (CIRN, MOE)", u: "https://cirn.moe.edu.tw/WebContent/index.aspx?sid=25&mid=10269", k: "tw" },
      { t: "Kidsafe NSW – child injury prevention (Australia)", u: "https://www.kidsafensw.org/" },
    ],
    play: [ { t: "Introduction video (YouTube)", u: "https://www.youtube.com/watch?v=2puOkjF6U5o", k: "video" } ],
    files: ["114-1 Safety Education_Introduction.pdf (worksheet)"] },
  risk: { emoji: "🧭", color: "#5b6b8c",
    reading: [
      { t: "Haddon W Jr. (1968). The changing approach to the epidemiology, prevention, and amelioration of trauma. Am J Public Health 58(8):1431–1438." },
    ] },
  edu: { emoji: "🧑‍🏫", color: "#0f9aa8",
    reading: [
      { t: "Safety education topic area – CIRN, Ministry of Education", u: "https://cirn.moe.edu.tw/WebContent/index.aspx?sid=25&mid=10269", k: "tw" },
    ] },
  studio: { emoji: "🤖", color: "#3b7be0",
    play: [ { t: "Base44 – build an app by describing it", u: "https://base44.com", k: "tool" } ],
  },
  traffic: { emoji: "🚦", color: "#ff6b5b",
    warmup: ["What are the current traffic issues in Taiwan?"],
    reading: [
      { t: "Traffic safety in the school curriculum (CIRN, MOE)", u: "https://cirn.moe.edu.tw/WebFile/index.aspx?sid=25&mid=12708", k: "tw" },
      { t: "NHTSA – Learn to bike safely", u: "https://www.nhtsa.gov/learn-bike-safely" },
      { t: "NSW Road Safety for schools", u: "https://www.transport.nsw.gov.au/roadsafety/community/schools" },
      { t: "On the Move – road safety education for secondary schools", u: "https://onthemove.nsw.edu.au/" },
    ],
    play: [
      { t: "Road safety game: Physics of Speed", u: "https://d37y5k2fagl7yg.cloudfront.net/physics-of-speed/index.html", k: "game" },
      { t: "Bicycle Safety Activity Kit (PDF)", u: "https://tntrafficsafety.org/sites/default/files/bikesafetykit.pdf", k: "sheet" },
    ],
    reflect: ["Which method (online lesson, worksheet, or role-play) helped you understand traffic safety best?", "What other information do we need to improve traffic safety for students and the public?"],
    files: ["114-1 Safety Education_Traffic.pdf (worksheet)"] },
  water: { emoji: "🏊", color: "#3ba3f0",
    warmup: ["What are the key messages from the video?", "Have you ever had a water-related accident, or heard about one?"],
    reading: [
      { t: "Warm-up video (YouTube)", u: "https://www.youtube.com/watch?v=zwzB7So7jSM", k: "video" },
      { t: "Water safety for children – Better Health Channel (Victoria, Australia)", u: "https://www.betterhealth.vic.gov.au/health/healthyliving/water-safety-for-children" },
    ],
    play: [
      { t: "SWIM CITY – Life Saving Victoria water safety game", u: "https://lsv.com.au/toolkit/swimcity.php", k: "game", n: "Australia" },
    ],
    files: ["水域安全教育教材知能手冊.pdf", "水域安全及防墜安全（國中篇）.pdf", "水域及防墜安全教案手冊【高中篇】.pdf", "水域及防墜安全教案手冊【國小篇】.pdf", "Word-find (easy / hard) and water-safety bingo quiz (class files)"] },
  burns: { emoji: "🩹", color: "#ff8a3d",
    play: [
      { t: "Emojis and First Aid – IFRC Global First Aid Reference Centre", u: "https://www.globalfirstaidcentre.org/resource/online-game-emojis-and-first-aid/", k: "game" },
      { t: "First Aid Action Hero – St John Ambulance Victoria", u: "https://stjohnvic.com.au/community-programs/action-hero/", k: "game", n: "Australia · free iPhone/iPad game for ages 5+; teaches the DRSABCD action plan", new: true },
    ] },
  falls: { emoji: "🪜", color: "#8a6bf0",
    reading: [
      { t: "Child safety topics: falls – Children's Safety Network", u: "https://www.childrenssafetynetwork.org/child-safety-topics/falls" },
      { t: "Preventing workplace falls", u: "https://www.cmregent.com/blog/prevent-workplace-falls/" },
      { t: "Avoiding falls at school", u: "https://www.cmregent.com/blog/avoid-falls-at-school/" },
    ],
    play: [
      { t: "Falls prevention in the school curriculum (CIRN, MOE)", u: "https://cirn.moe.edu.tw/WebFile/index.aspx?sid=25&mid=12707", k: "tw" },
      { t: "Alex at the Playground – storybook activity (Parachute, Canada)", u: "https://parachute.ca/en/activity/alex-at-the-playground/", k: "activity", n: "Offline, 30 minutes: read the story and ask children about Alex's safe choices", new: true },
    ],
    files: ["fallsPoster.pdf", "Falls Infographic.pdf"] },
  fire: { emoji: "🔥", color: "#e8453c",
    reading: [
      { t: "消防防災館 – National Fire Agency, Taiwan", u: "https://www.tfdp.com.tw/cht/index.php?code=list&ids=25", k: "tw" },
    ],
    play: [
      { t: "Sparky the Fire Dog – NFPA kids' fire-safety games", u: "https://sparky.org", k: "game", n: "USA", new: true, chk: true },
      { t: "Ready Kids games", u: "https://www.ready.gov/kids/games", k: "game", chk: true },
    ] },
  disaster: { emoji: "🌀", color: "#2bb58c",
    warmup: ["What kinds of disasters are most common in Taiwan?", "What are the THREE safety steps during an earthquake?"],
    reading: [
      { t: "Prepare with Pedro – Ready.gov (FEMA)", u: "https://www.ready.gov/kids/prepare-pedro" },
      { t: "Handout 1 (Google Drive)", u: "https://drive.google.com/file/d/17pqw5zvk0SeIGnHx-2LJB6Gy382YPx1i/view?usp=drive_link" },
      { t: "Handout 2 (Google Drive)", u: "https://drive.google.com/file/d/1CG4pYTxba6sLVQ1p_gxQgG8BEtRE0Q9k/view?usp=drive_link" },
      { t: "Handout 3 (Google Drive)", u: "https://drive.google.com/file/d/1QY6oVDLH2qWNRowC9vBB0rwngAuUfe6X/view?usp=drive_link" },
    ],
    play: [
      { t: "Stop Disasters! – UNDRR disaster-prevention game", u: "https://www.stopdisastersgame.org/game/", k: "game", chk: true },
      { t: "Ready Kids games", u: "https://www.ready.gov/kids/games", k: "game", chk: true },
      { t: "防災遊學 game handbook (concise edition) – Ministry of Education", u: "https://disaster.moe.edu.tw/MOE_FILE/daolpU/teachingMaterial/2022/TM20220330022427364/防災遊學A6遊戲手冊(精簡版).pdf", k: "tw", n: "Taiwan · field-trip game cards for disaster education", new: true },
    ],
    reflect: ["Which disaster is most dangerous for Taiwan?", "How should schools prepare students better?"] },
  food: { emoji: "💊", color: "#b88600",
    warmup: ["What drugs or substances are detrimental to teenagers and university students in Taiwan? Which approaches will be effective, and which will not?"],
    reading: [
      { t: "Foodborne illness: true stories (FDA videos)", u: "https://www.fda.gov/food/people-risk-foodborne-illness/foodborne-illness-videos", k: "video" },
      { t: "Food Safety Education Month – FDA", u: "https://www.fda.gov/food/consumers/food-safety-education-month#nfsemresources" },
      { t: "Safe food handling – FDA", u: "https://www.fda.gov/food/buy-store-serve-safe-food/safe-food-handling" },
      { t: "Food safety in your kitchen – FDA", u: "https://www.fda.gov/food/buy-store-serve-safe-food/food-safety-your-kitchen" },
      { t: "People at risk of foodborne illness – FDA", u: "https://www.fda.gov/food/consumers/people-risk-foodborne-illness" },
      { t: "Everyday food safety for young adults – FDA", u: "https://www.fda.gov/food/buy-store-serve-safe-food/everyday-food-safety-young-adults" },
      { t: "食品安全 multimedia links – Executive Yuan, Taiwan", u: "https://www.ey.gov.tw/ofs/5BB5A1D4E8197DB5", k: "tw" },
      { t: "School-based drug and alcohol prevention: what works? – Positive Choices (Australia)", u: "https://positivechoices.org.au/teachers/drug-prevention-what-works" },
      { t: "校園反毒 – Ministry of Education, Taiwan", u: "https://enc.moe.edu.tw/home", k: "tw" },
      { t: "Drug education: teacher booklet", u: "https://positivechoices.org.au/teachers/drug-education-teacher-booklet" },
      { t: "Drug education: student booklet", u: "https://positivechoices.org.au/parents/drug-education-student-booklet" },
      { t: "Drug education: parent booklet", u: "https://positivechoices.org.au/parents/drug-education-parent-booklet" },
    ],
    play: [
      { t: "Potluck Panic! – food safety card game (New Mexico State University)", u: "https://potluckpanic.nmsu.edu/", k: "game" },
      { t: "Theme Park Kitchen – food safety game", u: "https://themeparkkitchen.com/play.html", k: "game" },
      { t: "Positive Choices – drug education videos and games", u: "https://positivechoices.org.au/resources/videos-and-games/teacher/", k: "game" },
      { t: "School Health and Alcohol Harm Reduction Project (Curtin University)", u: "https://ndri.curtin.edu.au/research/research-specific-sites/school-health-and-alcohol-harm-reduction-project" },
      { t: "Webinar: engaging students with evidence-based drug education", u: "https://positivechoices.org.au/teachers/lesson-planning-with-positive-choices", k: "video" },
    ] },
  workplace: { emoji: "🦺", color: "#3b7be0",
    reading: [
      { t: "職業安全衛生數位學習平台 – Occupational Safety and Health Administration, Taiwan", u: "https://isafeel.osha.gov.tw/mooc/index.php", k: "tw" },
      { t: "Young worker safety resources – NIOSH (USA)", u: "https://www.cdc.gov/niosh/topics/youth/otherlinks.html", new: true },
      { t: "SmartMove young worker program – WorkSafe Western Australia", u: "https://commerce.wa.gov.au/worksafe/smartmove", new: true },
    ] },
  crowd: { emoji: "👥", color: "#c05cc0",
    reading: [
      { t: "大型群聚活動安全管理要點 – National Fire Agency, Taiwan", u: "https://www.nfa.gov.tw/cht/index.php?code=list&ids=905", k: "tw" },
    ] },
  cyber: { emoji: "🔐", color: "#1d2340",
    play: [
      { t: "Interland – Be Internet Awesome (Google)", u: "https://beinternetawesome.withgoogle.com/en_us/interland/", k: "game" },
      { t: "Children's cybersecurity resource kit – KnowBe4", u: "https://www.knowbe4.com/resources/kits/childrens-cybersecurity" },
    ] },
  plan: { emoji: "📝", color: "#0f9aa8" },
  final: { emoji: "🏆", color: "#a6192e" },
};
const CHIPS = [
  { key: "traffic", en: "Traffic", zh: "交通" }, { key: "water", en: "Water", zh: "水域" },
  { key: "burns", en: "Burns & first aid", zh: "燒燙傷與急救" }, { key: "falls", en: "Falls", zh: "跌墜" },
  { key: "fire", en: "Fire", zh: "火災逃生" }, { key: "disaster", en: "Disasters", zh: "防災" },
  { key: "food", en: "Food & drugs", zh: "食品藥物" }, { key: "workplace", en: "Workplace", zh: "職業安全" },
  { key: "crowd", en: "Crowds", zh: "群聚活動" }, { key: "cyber", en: "Cyber", zh: "資訊安全" },
];

const CONTACT_EMAIL = "yutung@gm.ntunhs.edu.tw";

// ---------- Course state ----------
function getCourse() { try { return localStorage.getItem("course") || "emi"; } catch (e) { return "emi"; } }
function setCourse(c) { try { localStorage.setItem("course", c); } catch (e) {} document.body.setAttribute("data-course", c); }

const L = {
  kind: { game: ["Game", "遊戲"], video: ["Video", "影片"], tw: ["Taiwan official", "台灣官方"], tool: ["Tool", "工具"], sheet: ["Worksheet", "學習單"], activity: ["Activity", "活動"] },
  sec: { warmup: ["Warm-up questions", "暖身問題"], reading: ["Core reading", "核心閱讀"], play: ["Activities & games", "活動與遊戲"], reflect: ["Reflect", "反思"], files: ["Class files", "課堂檔案"] },
};
function tr(isEmi, pair) { return isEmi ? pair[0] : pair[1]; }

// ---------- Rendering ----------
function renderAll() {
  const course = getCourse();
  const d = DATA[course];
  const isEmi = course === "emi";

  document.body.setAttribute("data-course", course);
  document.documentElement.lang = isEmi ? "en" : "zh-Hant";
  document.querySelectorAll(".course-toggle button").forEach((b) => b.classList.toggle("active", b.dataset.course === course));

  setText("brandText", d.brand);
  setText("pageTitle", d.brand);
  setText("pageLead", d.intro);

  setText("navObjectives", isEmi ? "Objectives" : "課程目標");
  setText("navGrading", isEmi ? "Grading" : "評分方式");
  setText("navMaterials", isEmi ? "Weekly materials" : "每週素材");
  setText("navShowcase", isEmi ? "Showcase" : "歷年成果");
  setText("navReferences", isEmi ? "References" : "參考書目");
  setText("navSubmit", isEmi ? "Submit progress" : "進度回報");

  setText("gradingHeading", isEmi ? "How you will be graded" : "評分方式");
  setText("objectivesHeading", isEmi ? "What you will be able to do" : "課程目標");
  setText("methodsHeading", isEmi ? "How we will learn" : "教學方法");
  setText("aiPolicyHeading", isEmi ? "AI use policy" : "AI 使用規範");
  setText("materialsHeading", isEmi ? "Week by week" : "每週上課素材");
  setText("materialsSub", isEmi ? "Open a week to see the questions, readings, games and class files." : "點開每一週，查看問題、閱讀、遊戲與課堂檔案。");
  setText("expandAll", isEmi ? "Expand all" : "全部展開");
  setText("collapseAll", isEmi ? "Collapse all" : "全部收合");
  setText("showcaseHeading", isEmi ? "Student showcase" : "歷年學生成果");
  setText("groupsHeading", "This semester's groups");
  setText("referencesHeading", isEmi ? "References" : "參考書目");
  setText("submitHeading", isEmi ? "Submit progress" : "進度回報");

  renderChips(isEmi);
  renderGrading(d);
  renderObjectives(d);
  renderMethods(d);
  renderAiPolicy(d);
  renderMaterials(d, isEmi);
  renderShowcase(d);
  renderGroups(d, isEmi);
  renderReferences(d);
  applySubmitFormText(isEmi);
}

function setText(id, text) { const el = document.getElementById(id); if (el) el.textContent = text; }

function renderChips(isEmi) {
  document.getElementById("topicChips").innerHTML = CHIPS.map((c) =>
    `<a class="chip" href="#materials" data-key="${c.key}" style="--c:${RES[c.key].color}"><i>${RES[c.key].emoji}</i>${escapeHtml(isEmi ? c.en : c.zh)}</a>`).join("");
  document.querySelectorAll("#topicChips .chip").forEach((a) => a.addEventListener("click", () => {
    const target = document.querySelector(`details.w[data-key="${a.dataset.key}"]`);
    if (target) setTimeout(() => { target.open = true; target.scrollIntoView({ behavior: "smooth", block: "center" }); }, 50);
  }));
}

function renderGrading(d) {
  const n = d.grading.length;
  const colors = n === 5 ? ["#3ba3f0", "#2bb58c", "#8a6bf0", "#a6192e", "#b88600"] : ["#2bb58c", "var(--accent)", "#3ba3f0", "#8a6bf0", "#b88600"];
  document.getElementById("gradingBar").innerHTML = d.grading.map((g, i) =>
    `<div style="width:${g.pct}%;background:${colors[i % colors.length]}">${g.pct}</div>`).join("");
  document.getElementById("gradingPanel").innerHTML = d.grading.map((g, i) =>
    `<div class="lg" style="--c:${colors[i % colors.length]}"><b>${g.pct}%</b><span>${escapeHtml(g.label)}</span></div>`).join("");
}

function renderObjectives(d) {
  document.getElementById("objectivesList").innerHTML = d.objectives.map((o, i) =>
    `<div class="o"><div class="n">${i + 1}</div><div><p>${escapeHtml(o.text)}</p><span class="tag">${escapeHtml(o.comp)}</span></div></div>`).join("");
}

function renderMethods(d) {
  document.getElementById("methodsList").innerHTML = d.teachingMethods.map((m) => `<span class="pill">${escapeHtml(m)}</span>`).join("");
  setText("methodsNote", d.teachingMethodsNote);
}

function renderAiPolicy(d) {
  setText("aiPolicyText", d.aiPolicy);
  document.getElementById("sdgsList").innerHTML = d.sdgs.map((s) => `<span class="pill">${escapeHtml(s)}</span>`).join("");
}

function renderReferences(d) {
  document.getElementById("referencesList").innerHTML = d.references.map((r) => `<li>${linkifyReference(r)}</li>`).join("");
  setText("supportNote", d.supportNote);
}

function linkifyReference(text) {
  const match = text.match(/https?:\/\/\S+/);
  if (!match) return escapeHtml(text);
  const url = match[0];
  return `${escapeHtml(text.slice(0, match.index))}<a href="${escapeHtml(url)}" target="_blank" rel="noopener">${escapeHtml(url)}</a>${escapeHtml(text.slice(match.index + url.length))}`;
}

function resItem(it, isEmi) {
  const kind = it.k && L.kind[it.k] ? `<span class="badge k-${it.k}">${escapeHtml(tr(isEmi, L.kind[it.k]))}</span>` : "";
  const fresh = it.new ? `<span class="badge new">${isEmi ? "New" : "新增"}</span>` : "";
  const note = it.n ? `<span class="n">${escapeHtml(it.n)}</span>` : "";
  const head = it.u
    ? `<a href="${escapeHtml(it.u)}" target="_blank" rel="noopener">${escapeHtml(it.t)}</a>`
    : escapeHtml(it.t);
  return `<li>${head}${kind}${fresh}${note}</li>`;
}

function section(key, items, isEmi, asQuestions) {
  if (!items || !items.length) return "";
  const lis = asQuestions
    ? items.map((q) => `<li class="q">${escapeHtml(q)}</li>`).join("")
    : key === "files"
      ? items.map((f) => `<li>${escapeHtml(f)}</li>`).join("")
      : items.map((it) => resItem(it, isEmi)).join("");
  return `<div class="sec"><h4>${escapeHtml(tr(isEmi, L.sec[key]))}</h4><ul>${lis}</ul></div>`;
}

function renderMaterials(d, isEmi) {
  const host = document.getElementById("materialsGrid");
  if (!d.weeks.length) { host.innerHTML = `<p class="empty-state">No materials yet.</p>`; return; }
  host.innerHTML = d.weeks.map((w) => {
    const r = RES[w.key] || {};
    const color = r.color || "#a6192e";
    const dateStr = w.date ? ` · ${escapeHtml(w.date)}` : "";
    const secs = [
      section("warmup", r.warmup, isEmi, true),
      section("reading", r.reading, isEmi),
      section("play", r.play, isEmi),
      section("reflect", r.reflect, isEmi, true),
      section("files", r.files, isEmi),
    ].join("");
    const body = secs
      ? `<div class="sec-grid">${secs}</div>`
      : `<p class="empty-note">${isEmi ? "No extra links this week; see the description above." : "本週無額外連結，請見上方說明。"}</p>`;
    const studio = w.studio ? `<span class="badge k-game" style="margin:0 0 0 0;align-self:flex-start">${isEmi ? "Studio week" : "實作週"}</span>` : "";
    return `<details class="w" data-key="${escapeHtml(w.key)}" style="--c:${color}">
      <summary>
        <div class="top"><span class="wk">${isEmi ? "Week" : "第"} ${w.week}${isEmi ? "" : " 週"}${dateStr}</span><span class="em">${r.emoji || "📘"}</span></div>
        <div class="head">${studio}<h3>${escapeHtml(w.topic)}</h3><p class="sum-desc">${escapeHtml(w.desc)}</p>
          <span class="more"><span class="on-closed">${isEmi ? "Show details" : "展開內容"}</span><span class="on-open">${isEmi ? "Hide details" : "收合"}</span></span></div>
      </summary>
      <div class="body"><p class="full-desc">${escapeHtml(w.desc)}</p>${body}</div>
    </details>`;
  }).join("");
}

function renderShowcase(d) {
  const host = document.getElementById("showcaseGrid");
  if (!d.showcase.length) { host.innerHTML = `<p class="empty-state">No projects yet.</p>`; return; }
  host.innerHTML = d.showcase.map((s) => `
    <a class="showcase-card" href="${escapeHtml(s.link)}" target="_blank" rel="noopener">
      <canvas width="400" height="200" data-title="${escapeHtml(s.title)}" data-who="${escapeHtml(s.who)}" data-semester="${escapeHtml(s.semester)}" data-color="${escapeHtml(s.color)}"></canvas>
      <div class="meta"><span>${escapeHtml(s.semester)}</span><span>${escapeHtml(s.who)}</span></div>
    </a>`).join("");
  host.querySelectorAll("canvas").forEach((c) => {
    generateCoverCanvas(c, { title: c.dataset.title, sub: c.dataset.who + " · " + c.dataset.semester, colorHex: c.dataset.color });
  });
}

function renderGroups(d, isEmi) {
  const heading = document.getElementById("groupsHeading");
  const host = document.getElementById("groupsGrid");
  if (!isEmi || !d.groups) { heading.style.display = "none"; host.innerHTML = ""; return; }
  heading.style.display = "flex";
  host.innerHTML = d.groups.map((g) => `
    <div class="group-card"><p class="group-name">${escapeHtml(g.name)}</p><p class="group-members">${escapeHtml(g.members)}</p></div>`).join("");
}

document.getElementById("expandAll").addEventListener("click", () => document.querySelectorAll("details.w").forEach((x) => (x.open = true)));
document.getElementById("collapseAll").addEventListener("click", () => document.querySelectorAll("details.w").forEach((x) => (x.open = false)));

// ---------- Canvas cover generator ----------
function generateCoverCanvas(canvasEl, { title, sub, colorHex }) {
  const w = canvasEl.width || 400;
  const h = canvasEl.height || 220;
  const ctx = canvasEl.getContext("2d");
  const color = "#" + (colorHex || "A6192E").replace("#", "");
  ctx.fillStyle = color;
  ctx.fillRect(0, 0, w, h);

  const r = parseInt(color.slice(1, 3), 16), g = parseInt(color.slice(3, 5), 16), b = parseInt(color.slice(5, 7), 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  const textColor = luminance > 0.6 ? "#1a1a1a" : "#ffffff";
  const subColor = luminance > 0.6 ? "rgba(26,26,26,0.72)" : "rgba(255,255,255,0.78)";

  const pad = Math.round(w * 0.06);
  const titleSize = Math.max(14, Math.round(w * 0.065));
  ctx.font = `700 ${titleSize}px -apple-system, "Microsoft JhengHei", sans-serif`;
  ctx.fillStyle = textColor;

  const words = String(title || "").split(/\s+/);
  const lines = [];
  let line = "";
  words.forEach((word) => {
    const test = line ? line + " " + word : word;
    if (ctx.measureText(test).width > w - pad * 2 && line) { lines.push(line); line = word; }
    else line = test;
  });
  if (line) lines.push(line);
  const shown = lines.slice(0, 3);

  const lineHeight = titleSize * 1.25;
  const subSize = Math.max(11, Math.round(w * 0.035));
  const blockHeight = shown.length * lineHeight + subSize * 1.6 + 10;
  let y = h - blockHeight + titleSize;
  shown.forEach((l) => { ctx.fillText(l, pad, y); y += lineHeight; });

  ctx.font = `400 ${subSize}px -apple-system, "Microsoft JhengHei", sans-serif`;
  ctx.fillStyle = subColor;
  ctx.fillText(String(sub || ""), pad, y + subSize * 0.4);
}

// ---------- Submit progress (mailto — no server involved) ----------
function applySubmitFormText(isEmi) {
  const callout = document.getElementById("midtermCallout");
  if (callout) {
    callout.style.display = "flex";
    document.getElementById("midtermTitle").textContent = isEmi ? "Midterm progress report (required)" : "期中進度回報（必繳）";
    document.getElementById("midtermText").textContent = isEmi
      ? "Each group sends one report covering the lesson plan and the Base44 game."
      : "每人繳交一份，內容包含實證基礎、演示／試教設計與 AI 使用紀錄。";
    const lnk = document.getElementById("midtermLink");
    lnk.textContent = isEmi ? "Open the midterm report form" : "開啟期中進度回報表單";
    lnk.setAttribute("href", isEmi ? "midterm.html" : "midterm-grad.html");
  }
  document.getElementById("lblWho").textContent = isEmi ? "Your name or group" : "您的姓名或組別";
  document.getElementById("lblMsg").textContent = isEmi ? "Progress update" : "進度內容";
  document.getElementById("whoInput").placeholder = isEmi ? "e.g. Group 3, or Chen Yu" : "例如：Group 3，或陳育";
  document.getElementById("msgInput").placeholder = isEmi ? "What did you accomplish this week?" : "這週完成了什麼進度？";
  document.getElementById("submitBtn").textContent = isEmi ? "Open email to send" : "開啟郵件寄出";
  document.getElementById("submitNote").textContent = isEmi
    ? `This opens your own email app addressed to ${CONTACT_EMAIL} — nothing is sent from this page directly.`
    : `會開啟您自己的郵件軟體，收件人已填好 ${CONTACT_EMAIL}，網頁本身不會直接寄出任何資料。`;
}

document.getElementById("submitForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const course = getCourse();
  const isEmi = course === "emi";
  const who = document.getElementById("whoInput").value.trim();
  const msg = document.getElementById("msgInput").value.trim();
  const errEl = document.getElementById("submitError");
  errEl.textContent = "";

  if (!who || !msg) {
    errEl.textContent = isEmi ? "Please fill in both fields." : "請兩個欄位都填寫。";
    return;
  }

  const courseName = DATA[course].brand;
  const subject = `NTNU ${courseName} 進度回報 - ${who}`;
  const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(msg)}`;
  window.location.href = mailto;
});

// ---------- Small utils ----------
function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

// ---------- Init ----------
document.querySelectorAll(".course-toggle button").forEach((b) => {
  b.addEventListener("click", () => { setCourse(b.dataset.course); renderAll(); });
});
renderAll();
