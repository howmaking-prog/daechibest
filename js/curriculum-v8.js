// 초등·중등·고등 페이지 기본 내용. 함영원 공지/제목은 사용하지 않고 대치베스트 문구로 구성합니다.
const CURRICULUM_KEY = "daechibest_curriculum";

const DEFAULT_CURRICULUM = {
  elementary: {
    label: "초등부",
    columns: ["요일", "시간", "수업"],
    slides: [
      {
        kicker: "Elementary",
        title: "읽기와 어휘 습관부터 세우는 초등 영어",
        sub: "초등 3–6학년, 문법 용어보다 문장이 만들어지는 감각을 익혀 중등 내신으로 자연스럽게 연결합니다.",
        cta: "상담 예약하기",
        note: "초등부 입학은 레벨 확인 후 반 배정이 진행됩니다."
      },
      {
        kicker: "Reading First",
        title: "문장을 읽는 힘, 단어를 쌓는 힘",
        sub: "주간 리딩과 어휘 과제를 짧게 나눠, 숙제가 쌓이지 않으면서도 실력이 남는 구조를 만듭니다.",
        cta: "커리큘럼 보기",
        ctaLink: "#board",
        note: "학기 중 클리닉은 예약제로 운영합니다."
      },
      {
        kicker: "Next Step",
        title: "중등 내신을 앞당기지 않고, 기초를 단단히",
        sub: "선행보다 정확함을 우선합니다. 현재 읽기 속도와 쓰기 습관을 보고 다음 단계를 정합니다.",
        cta: "오시는 길",
        ctaLink: "index.html#contact",
        note: "방문 상담은 사전 예약제로 진행합니다."
      }
    ],
    timetable: [
      {
        name: "1학기",
        period: "3월 – 6월",
        rows: [
          ["월·수", "16:00 – 17:40", "초등 리딩·어휘"],
          ["화·목", "16:00 – 17:40", "초등 문법·쓰기"],
          ["토", "10:00 – 12:00", "클리닉 (선택)"]
        ]
      },
      {
        name: "여름특강",
        period: "7월 – 8월",
        rows: [
          ["월–금", "10:00 – 12:30", "리딩 집중"],
          ["월–금", "14:00 – 16:00", "어휘·쓰기 특강"]
        ]
      },
      {
        name: "2학기",
        period: "9월 – 12월",
        rows: [
          ["월·수", "16:00 – 17:40", "초등 리딩·어휘"],
          ["화·목", "16:00 – 17:40", "초등 문법·쓰기"],
          ["토", "10:00 – 12:00", "클리닉 (선택)"]
        ]
      },
      {
        name: "겨울특강",
        period: "1월 – 2월",
        rows: [
          ["월–금", "10:00 – 12:30", "중등 연계 문법"],
          ["월–금", "14:00 – 16:00", "독해 기초 특강"]
        ]
      }
    ],
    notices: [
      { important: true, title: "2026년 2학기 초등부 레벨 테스트 일정 안내", date: "2026.08.20", body: "2학기 반 배정을 위한 레벨 테스트를 진행합니다.\n예약은 전화 상담 후 확정됩니다." },
      { important: true, title: "초등부 학원 출결 및 숙제 운영 안내", date: "2026.06.16", body: "결석 시 당일 연락을 부탁드리며, 숙제는 수업 다음 날까지 제출하는 것을 원칙으로 합니다." },
      { important: false, title: "여름방학 특강 수강 신청 안내", date: "2026.06.02", body: "초등 리딩 집중반과 어휘·쓰기 특강을 개설합니다. 정원 마감 시 대기 등록이 가능합니다." },
      { important: false, title: "학부모 상담 주간 운영 안내", date: "2026.05.12", body: "학기 중 상담 주간을 운영합니다. 원하시는 시간을 미리 예약해 주세요." },
      { important: false, title: "초등부 교재 및 준비물 안내", date: "2026.03.03", body: "정규 수업 교재는 학원에서 일괄 준비합니다. 별도 준비물은 개강 전 안내드립니다." }
    ]
  },
  middle: {
    label: "중등부",
    columns: ["요일", "시간", "수업"],
    slides: [
      {
        kicker: "Middle School",
        title: "내신 서술형과 고등 구문을 함께",
        sub: "중1–중3, 학교 시험의 디테일을 놓치지 않으면서 고등 독해에 필요한 문장 구조를 쌓습니다.",
        cta: "상담 예약하기",
        note: "내신 기간에는 학교별 범위에 맞춰 진도를 조정합니다."
      },
      {
        kicker: "School Exam",
        title: "수행평가부터 기말고까지, 한 흐름으로",
        sub: "서술형 답안 훈련과 어휘 테스트를 수업에 붙여, 시험 직전에만 몰아치지 않도록 관리합니다.",
        cta: "시간표 보기",
        ctaLink: "#board",
        note: "학교 시험 2주 전부터 내신 집중 모드로 전환합니다."
      },
      {
        kicker: "High Ready",
        title: "고등 독해를 위한 구문과 어휘량",
        sub: "중등에서 끊기지 않도록, 긴 문장을 끊어 읽는 연습과 어휘 확장을 함께 진행합니다.",
        cta: "오시는 길",
        ctaLink: "index.html#contact",
        note: "고등 연계가 필요한 학생은 상담 시 별도 트랙을 안내합니다."
      }
    ],
    timetable: [
      {
        name: "1학기",
        period: "3월 – 6월",
        rows: [
          ["월·수", "18:00 – 21:00", "중등 내신·문법"],
          ["화·목", "18:00 – 21:00", "중등 독해·어휘"],
          ["토", "13:00 – 16:00", "서술형 클리닉"]
        ]
      },
      {
        name: "여름특강",
        period: "7월 – 8월",
        rows: [
          ["월–금", "13:00 – 16:00", "내신 서술형 특강"],
          ["월–금", "16:30 – 19:00", "고등 구문 예비"]
        ]
      },
      {
        name: "2학기",
        period: "9월 – 12월",
        rows: [
          ["월·수", "18:00 – 21:00", "중등 내신·문법"],
          ["화·목", "18:00 – 21:00", "중등 독해·어휘"],
          ["토", "13:00 – 16:00", "서술형 클리닉"]
        ]
      },
      {
        name: "겨울특강",
        period: "1월 – 2월",
        rows: [
          ["월–금", "13:00 – 16:00", "고등 예비 독해"],
          ["월–금", "16:30 – 19:00", "문법 완성 특강"]
        ]
      }
    ],
    notices: [
      { important: true, title: "중등부 2학기 내신 집중 기간 운영 안내", date: "2026.08.28", body: "학교별 시험 범위에 맞춰 2주간 내신 집중 수업을 진행합니다. 해당 주차 시간표는 개별 안내드립니다." },
      { important: true, title: "학원 규정 및 학습 관리 안내", date: "2026.06.16", body: "출결, 숙제, 휴대폰 사용에 대한 학원 규정을 확인해 주세요. 반복 미제출 시 학부모께 연락드립니다." },
      { important: false, title: "중1·중2 레벨 테스트 일정 안내", date: "2026.05.28", body: "신규 등록 및 반 이동을 위한 레벨 테스트를 시행합니다. 사전 예약이 필요합니다." },
      { important: false, title: "여름특강 고등 구문 예비반 개설", date: "2026.05.10", body: "중3 대상 고등 예비 구문 특강을 개설합니다. 정원 제한이 있어 조기 마감될 수 있습니다." },
      { important: false, title: "중등부 교재 변경 안내", date: "2026.02.20", body: "2학기부터 독해 교재가 변경됩니다. 기존 수강생은 수업 중 별도 안내합니다." }
    ]
  },
  high: {
    label: "고등부",
    columns: ["요일", "시간", "수업"],
    slides: [
      {
        kicker: "High School",
        title: "내신 고득점과 수능 독해 속도를 동시에",
        sub: "고1–고3, 학교 시험과 수능을 따로 두지 않고 약점 유형을 분리해 클리닉으로 보완합니다.",
        cta: "상담 예약하기",
        note: "고3은 수능 직전까지 유형별 약점 관리를 유지합니다."
      },
      {
        kicker: "CSAT Track",
        title: "빈칸, 순서, 삽입 — 약점만 따로 훈련",
        sub: "모의고사 오답을 유형별로 묶어, 같은 실수를 반복하지 않도록 주간 클리닉을 운영합니다.",
        cta: "시간표 보기",
        ctaLink: "#board",
        note: "모의고사 직후 오답 클리닉을 우선 편성합니다."
      },
      {
        kicker: "School Score",
        title: "고등 내신, 범위가 아니라 답안의 밀도",
        sub: "서술형과 어법 문항의 감점을 줄이는 데 수업 시간을 씁니다. 시험 2주 전부터 학교별 맞춤으로 전환합니다.",
        cta: "오시는 길",
        ctaLink: "index.html#contact",
        note: "학교 시험 기간 중 별도 보강이 필요할 수 있습니다."
      }
    ],
    timetable: [
      {
        name: "1학기",
        period: "3월 – 6월",
        rows: [
          ["월·수", "19:00 – 22:00", "고등 내신"],
          ["화·목", "19:00 – 22:00", "수능 독해"],
          ["토", "14:00 – 18:00", "유형별 클리닉"]
        ]
      },
      {
        name: "여름특강",
        period: "7월 – 8월",
        rows: [
          ["월–금", "13:00 – 17:00", "수능 독해 집중"],
          ["월–금", "18:00 – 21:00", "고1·고2 내신 특강"]
        ]
      },
      {
        name: "2학기",
        period: "9월 – 12월",
        rows: [
          ["월·수", "19:00 – 22:00", "고등 내신 / 수능"],
          ["화·목", "19:00 – 22:00", "수능 유형 완성"],
          ["토", "14:00 – 18:00", "오답 클리닉"]
        ]
      },
      {
        name: "겨울특강",
        period: "1월 – 2월",
        rows: [
          ["월–금", "13:00 – 17:00", "구문·어휘 리셋"],
          ["월–금", "18:00 – 21:00", "고1 예비 내신"]
        ]
      }
    ],
    notices: [
      { important: true, title: "고등부 2학기 내신반·수능반 편성 안내", date: "2026.08.30", body: "2학기부터 내신 집중과 수능 유형 수업을 요일별로 나눕니다. 반 이동은 상담 후 확정됩니다." },
      { important: true, title: "학원 규정 및 학습 관리 안내", date: "2026.06.16", body: "고등부는 자습 공간 이용 규칙을 포함해 운영 규정을 적용합니다. 자세한 내용은 학원에 비치된 안내문을 참고해 주세요." },
      { important: false, title: "모의고사 오답 클리닉 운영 안내", date: "2026.04.25", body: "전국 모의고사 다음 주 토요일에 오답 클리닉을 진행합니다. 응시 기록이 있는 수강생 우선입니다." },
      { important: false, title: "고1·고2 3월 내신반 개강 안내", date: "2026.01.28", body: "3월 개강 내신반은 레벨 테스트 후 반 배정됩니다. 신청은 전화로 받아 드립니다." },
      { important: false, title: "고3 수능 직전 보강 일정 안내", date: "2026.01.10", body: "수능 전 2주간 약점 유형 보강을 운영합니다. 대상 학생에게 개별 연락드립니다." }
    ]
  }
};

const deepCopy = (value) => JSON.parse(JSON.stringify(value));
let curriculumStore = null;

const GRADE_NAMES = {
  elementary: ["5학년", "6학년"],
  middle: ["1학년", "2학년", "3학년"],
  high: ["1학년", "2학년", "3학년"]
};

let selectedGradeIndex = 0;
let selectedTermIndex = 0;
let adminGradeIndex = 0;
let adminDraft = null;

// 예전 한 장짜리 시간표를 첫 학년으로 옮기고, 나머지 학년 칸을 만듭니다.
const normalizePage = (page, key) => {
  const next = { ...(page || {}) };
  const names = GRADE_NAMES[key] || ["1학년"];
  const timetable = (next.timetable && next.timetable.length)
    ? next.timetable
    : deepCopy((DEFAULT_CURRICULUM[key] || DEFAULT_CURRICULUM.elementary).timetable);
  const savedGrades = Array.isArray(next.grades) ? next.grades : [];
  const hasSavedTerms = savedGrades.some((grade) => Array.isArray(grade && grade.terms) && grade.terms.length);
  next.grades = names.map((name, i) => {
    const prev = savedGrades[i] || {};
    const prevTerms = Array.isArray(prev.terms) ? prev.terms : [];
    const fallback = (!hasSavedTerms && i === 0)
      ? timetable.map((item) => ({
          period: item.period || "",
          rows: deepCopy(item.rows || [])
        }))
      : timetable.map(() => ({ period: "", rows: [] }));
    return {
      name: prev.name || name,
      terms: timetable.map((_, ti) => {
        const term = prevTerms[ti] || fallback[ti] || { period: "", rows: [] };
        return {
          period: term.period || "",
          rows: Array.isArray(term.rows) ? deepCopy(term.rows) : []
        };
      })
    };
  });
  next.timetable = timetable.map((item) => ({
    name: item.name || "",
    period: item.period || "",
    rows: Array.isArray(item.rows) ? item.rows : []
  }));
  return next;
};

const mergeCurriculum = (saved) => ({
  elementary: normalizePage({ ...deepCopy(DEFAULT_CURRICULUM.elementary), ...((saved && saved.elementary) || {}) }, "elementary"),
  middle: normalizePage({ ...deepCopy(DEFAULT_CURRICULUM.middle), ...((saved && saved.middle) || {}) }, "middle"),
  high: normalizePage({ ...deepCopy(DEFAULT_CURRICULUM.high), ...((saved && saved.high) || {}) }, "high")
});

const loadCurriculum = () => {
  if (curriculumStore) return curriculumStore;
  try {
    const raw = localStorage.getItem(CURRICULUM_KEY);
    curriculumStore = raw ? mergeCurriculum(JSON.parse(raw)) : deepCopy(DEFAULT_CURRICULUM);
    return curriculumStore;
  } catch (error) {
    console.error("커리큘럼 저장 내용을 읽는 중 문제가 발생했습니다.", error);
    curriculumStore = deepCopy(DEFAULT_CURRICULUM);
    return curriculumStore;
  }
};

const saveCurriculum = (data) => {
  try {
    curriculumStore = mergeCurriculum(data);
    localStorage.setItem(CURRICULUM_KEY, JSON.stringify(curriculumStore));
    return true;
  } catch (error) {
    console.error("커리큘럼 저장 중 문제가 발생했습니다.", error);
    window.DaechiBest.showToast("저장에 실패했습니다. 브라우저 저장 공간을 확인해 주세요.");
    return false;
  }
};

const escapeHtml = (value) => String(value == null ? "" : value)
  .replace(/&/g, "&amp;")
  .replace(/</g, "&lt;")
  .replace(/>/g, "&gt;")
  .replace(/"/g, "&quot;");

const TIMETABLE_SLOT_COUNT = 4;
const TIMETABLE_ROW_COUNT = 3;

const tableColumns = (data) => {
  const cols = (data && data.columns) || ["요일", "시간", "수업"];
  return [
    cols[0] || "요일",
    cols[1] || "시간",
    cols[2] || "수업"
  ];
};

const currentGrade = (data) => {
  const grades = (data && data.grades) || [];
  if (!grades.length) return { name: "", terms: [] };
  if (selectedGradeIndex >= grades.length) selectedGradeIndex = 0;
  return grades[selectedGradeIndex] || grades[0];
};

const fillColumnsAdmin = (form, data) => {
  const cols = tableColumns(data);
  if (form.elements.col1) form.elements.col1.value = cols[0];
  if (form.elements.col2) form.elements.col2.value = cols[1];
  if (form.elements.col3) form.elements.col3.value = cols[2];
};

const fillGradeFields = (form, data, gradeIndex) => {
  const grade = ((data && data.grades) || [])[gradeIndex] || { terms: [] };
  (data.timetable || []).forEach((item, i) => {
    const n = i + 1;
    const term = (grade.terms || [])[i] || {};
    if (form.elements[`time${n}Name`]) form.elements[`time${n}Name`].value = item.name || "";
    if (form.elements[`time${n}Period`]) form.elements[`time${n}Period`].value = term.period || "";
    for (let r = 1; r <= TIMETABLE_ROW_COUNT; r += 1) {
      const row = (term.rows && term.rows[r - 1]) || ["", "", ""];
      for (let c = 1; c <= 3; c += 1) {
        const field = form.elements[`time${n}r${r}c${c}`];
        if (field) field.value = row[c - 1] || "";
      }
    }
  });
};

const renderAdminGradeTabs = (form, data) => {
  const wrap = form.querySelector("#adminGradeTabs");
  if (!wrap) return;
  wrap.innerHTML = (data.grades || []).map((grade, i) => (
    `<button type="button" data-admin-grade="${i}" class="${i === adminGradeIndex ? "is-active" : ""}">${escapeHtml(grade.name)}</button>`
  )).join("");
};

const readVisibleGradeIntoData = (form, pageData, gradeIndex) => {
  const next = deepCopy(pageData);
  if (!form.elements.time1Name) return next;
  next.timetable = (next.timetable || []).map((item, i) => {
    const n = i + 1;
    return {
      ...item,
      name: form.elements[`time${n}Name`]?.value.trim() || item.name
    };
  });
  if (!next.grades || !next.grades[gradeIndex]) return next;
  next.grades[gradeIndex] = {
    ...next.grades[gradeIndex],
    terms: next.timetable.map((_, i) => {
      const n = i + 1;
      const rows = [];
      for (let r = 1; r <= TIMETABLE_ROW_COUNT; r += 1) {
        const cells = [1, 2, 3].map((c) => (form.elements[`time${n}r${r}c${c}`]?.value || "").trim());
        if (cells.some((cell) => cell)) rows.push(cells);
      }
      return {
        period: (form.elements[`time${n}Period`]?.value || "").trim(),
        rows
      };
    })
  };
  return next;
};

// 설정 화면에 시간표 입력칸을 한 번만 만듭니다.
const buildTimetableAdminFields = (form) => {
  const wrap = form.querySelector("#timetableAdminFields");
  if (!wrap) return;
  if (wrap.dataset.ready !== "1") {
    const columnFields = `
      <div class="time-row-fields">
        <div class="field"><label>1열 이름</label><input name="col1" placeholder="요일" /></div>
        <div class="field"><label>2열 이름</label><input name="col2" placeholder="시간" /></div>
        <div class="field"><label>3열 이름</label><input name="col3" placeholder="수업" /></div>
      </div>
      <p class="time-row-label">학년</p>
      <div class="grade-tabs admin-grade-tabs" id="adminGradeTabs"></div>
    `;
    const blocks = Array.from({ length: TIMETABLE_SLOT_COUNT }, (_, i) => {
      const n = i + 1;
      const rows = Array.from({ length: TIMETABLE_ROW_COUNT }, (_, ri) => {
        const r = ri + 1;
        return `
          <p class="time-row-label">${r}줄</p>
          <div class="time-row-fields">
            <div class="field"><label>1열</label><input name="time${n}r${r}c1" /></div>
            <div class="field"><label>2열</label><input name="time${n}r${r}c2" /></div>
            <div class="field"><label>3열</label><input name="time${n}r${r}c3" /></div>
          </div>
        `;
      }).join("");
      return `
        <div class="time-block">
          <h4>시간표 ${n}</h4>
          <div class="field"><label>왼쪽 목록 이름</label><input name="time${n}Name" placeholder="1학기" /></div>
          <div class="field"><label>부제</label><input name="time${n}Period" placeholder="3월 – 6월" /></div>
          ${rows}
        </div>
      `;
    }).join("");
    wrap.innerHTML = columnFields + blocks;
    wrap.dataset.ready = "1";
  }
  const tabs = form.querySelector("#adminGradeTabs");
  if (tabs && tabs.dataset.bound !== "1") {
    tabs.dataset.bound = "1";
    tabs.addEventListener("click", (event) => {
      const btn = event.target.closest("button[data-admin-grade]");
      if (!btn || !adminDraft) return;
      const nextIndex = Number(btn.dataset.adminGrade);
      if (nextIndex === adminGradeIndex) return;
      adminDraft = readVisibleGradeIntoData(form, adminDraft, adminGradeIndex);
      adminGradeIndex = nextIndex;
      fillGradeFields(form, adminDraft, adminGradeIndex);
      renderAdminGradeTabs(form, adminDraft);
    });
  }
};

const fillTimetableAdmin = (form, data) => {
  const page = currentPage();
  adminDraft = normalizePage(deepCopy(data), page);
  adminGradeIndex = 0;
  buildTimetableAdminFields(form);
  fillColumnsAdmin(form, adminDraft);
  fillGradeFields(form, adminDraft, adminGradeIndex);
  renderAdminGradeTabs(form, adminDraft);
};

const readTimetableAdmin = (form, pageData) => {
  const page = currentPage();
  const next = normalizePage(adminDraft ? deepCopy(adminDraft) : deepCopy(pageData), page);
  if (!form.elements.col1) return next;
  next.columns = [
    form.elements.col1.value.trim() || "요일",
    form.elements.col2.value.trim() || "시간",
    form.elements.col3.value.trim() || "수업"
  ];
  return readVisibleGradeIntoData(form, next, adminGradeIndex);
};

const currentPage = () => document.body.dataset.page || "elementary";

const currentData = () => loadCurriculum()[currentPage()] || DEFAULT_CURRICULUM.elementary;

const renderSlides = (data) => {
  const slider = document.querySelector("#slider");
  if (!slider) return;
  slider.innerHTML = data.slides.map((slide, index) => `
    <article class="slide ${index === 0 ? "is-active" : ""}">
      <div class="slide-inner">
        <div class="slide-copy">
          <div class="eyebrow">${escapeHtml(slide.kicker)}</div>
          <h1>${escapeHtml(slide.title)}</h1>
          <p>${escapeHtml(slide.sub)}</p>
          <div class="hero-actions">
            <a class="btn-primary" href="${escapeHtml(slide.ctaLink || "index.html#contact")}">${escapeHtml(slide.cta)}</a>
          </div>
        </div>
      </div>
      <div class="slide-note">${escapeHtml(slide.note)}</div>
    </article>
  `).join("");

  const dots = document.querySelector("#sliderDots");
  if (dots) {
    dots.innerHTML = data.slides.map((_, index) => (
      `<button type="button" data-slide="${index}" class="${index === 0 ? "is-active" : ""}" aria-label="${index + 1}번째 배너"></button>`
    )).join("");
  }
};

const renderGradeTabs = (data) => {
  const wrap = document.querySelector("#gradeTabs");
  if (!wrap) return;
  const grades = data.grades || [];
  if (selectedGradeIndex >= grades.length) selectedGradeIndex = 0;
  wrap.innerHTML = grades.map((grade, i) => (
    `<button type="button" data-grade="${i}" class="${i === selectedGradeIndex ? "is-active" : ""}" aria-pressed="${i === selectedGradeIndex}">${escapeHtml(grade.name)}</button>`
  )).join("");
};

const renderTimetable = (data) => {
  renderGradeTabs(data);
  const list = document.querySelector("#timetableList");
  if (!list) return;
  list.innerHTML = data.timetable.map((item, index) => `
    <li>
      <button type="button" data-time="${index}">${escapeHtml(item.name)}</button>
    </li>
  `).join("");
};

const renderNotices = (data) => {
  const list = document.querySelector("#noticeList");
  if (!list) return;
  list.innerHTML = data.notices.map((item, index) => `
    <li>
      <button type="button" class="notice-item" data-notice="${index}">
        <span class="notice-main">
          ${item.important ? '<span class="badge-hot">중요</span>' : ""}
          <span class="notice-title">${escapeHtml(item.title)}</span>
        </span>
        <span class="notice-date">${escapeHtml(item.date)}</span>
      </button>
    </li>
  `).join("");
};

const openSchedule = (index, options = {}) => {
  const data = currentData();
  const item = data.timetable[index];
  const panel = document.querySelector("#schedulePanel");
  if (!item || !panel) return;
  selectedTermIndex = index;
  const grade = currentGrade(data);
  const term = (grade.terms || [])[index] || {};
  const cols = tableColumns(data);
  const rows = term.rows || [];
  const period = (term.period || "").trim();
  const subtitle = period && period !== grade.name ? period : grade.name;
  const body = rows.length
    ? `<div class="schedule-table-wrap">
    <table class="schedule-table">
      <thead><tr><th>${escapeHtml(cols[0])}</th><th>${escapeHtml(cols[1])}</th><th>${escapeHtml(cols[2])}</th></tr></thead>
      <tbody>${rows.map((row) => (
        `<tr><td>${escapeHtml(row[0])}</td><td>${escapeHtml(row[1])}</td><td>${escapeHtml(row[2])}</td></tr>`
      )).join("")}</tbody>
    </table>
    </div>`
    : `<p class="schedule-empty">이 학년 시간표는 아직 등록되지 않았습니다.</p>`;
  panel.innerHTML = `
    <h3>${escapeHtml(data.label)} ${escapeHtml(item.name)} 시간표</h3>
    <p>${escapeHtml(subtitle)}</p>
    ${body}
  `;
  panel.classList.add("is-open");
  if (!options.silent) {
    panel.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }
};

const openNotice = (index) => {
  const item = currentData().notices[index];
  const modal = document.querySelector("#noticeModal");
  if (!item || !modal) return;
  modal.querySelector("[data-notice-kicker]").textContent = item.important ? "중요 공지" : "공지사항";
  modal.querySelector("[data-notice-title]").textContent = item.title;
  modal.querySelector("[data-notice-date]").textContent = item.date;
  modal.querySelector("[data-notice-body]").textContent = item.body || "자세한 내용은 학원으로 문의해 주세요.";
  modal.classList.add("is-open");
};

const initSlider = () => {
  const slides = () => [...document.querySelectorAll(".slide")];
  const dots = () => [...document.querySelectorAll("#sliderDots button")];
  let index = 0;
  const show = (next) => {
    const all = slides();
    if (!all.length) return;
    index = (next + all.length) % all.length;
    all.forEach((slide, i) => slide.classList.toggle("is-active", i === index));
    dots().forEach((dot, i) => dot.classList.toggle("is-active", i === index));
  };
  const prev = document.querySelector("#sliderPrev");
  const next = document.querySelector("#sliderNext");
  if (prev) prev.addEventListener("click", () => show(index - 1));
  if (next) next.addEventListener("click", () => show(index + 1));
  document.querySelector("#sliderDots")?.addEventListener("click", (event) => {
    const btn = event.target.closest("button[data-slide]");
    if (!btn) return;
    show(Number(btn.dataset.slide));
  });
  window.setInterval(() => show(index + 1), 6500);
};

const initBoards = () => {
  document.querySelector("#gradeTabs")?.addEventListener("click", (event) => {
    const btn = event.target.closest("button[data-grade]");
    if (!btn) return;
    selectedGradeIndex = Number(btn.dataset.grade);
    renderGradeTabs(currentData());
    const panel = document.querySelector("#schedulePanel");
    if (panel && panel.classList.contains("is-open")) {
      openSchedule(selectedTermIndex, { silent: true });
    }
  });
  document.querySelector("#timetableList")?.addEventListener("click", (event) => {
    const btn = event.target.closest("button[data-time]");
    if (!btn) return;
    openSchedule(Number(btn.dataset.time));
  });
  document.querySelector("#noticeList")?.addEventListener("click", (event) => {
    const btn = event.target.closest("button[data-notice]");
    if (!btn) return;
    openNotice(Number(btn.dataset.notice));
  });
  document.querySelector("#noticeMore")?.addEventListener("click", (event) => {
    event.preventDefault();
    const first = document.querySelector("#noticeList button[data-notice]");
    if (first) first.click();
  });
  document.querySelector("#timeMore")?.addEventListener("click", (event) => {
    event.preventDefault();
    openSchedule(0);
  });
  document.querySelector("#noticeClose")?.addEventListener("click", () => {
    document.querySelector("#noticeModal")?.classList.remove("is-open");
  });
  document.querySelector("#noticeModal")?.addEventListener("click", (event) => {
    if (event.target.id === "noticeModal") event.currentTarget.classList.remove("is-open");
  });
};

const fillCurriculumAdmin = () => {
  const form = document.querySelector("#adminForm");
  if (!form) return;
  const data = currentData();
  data.slides.forEach((slide, i) => {
    const n = i + 1;
    if (form.elements[`slide${n}Title`]) form.elements[`slide${n}Title`].value = slide.title;
    if (form.elements[`slide${n}Sub`]) form.elements[`slide${n}Sub`].value = slide.sub;
    if (form.elements[`slide${n}Note`]) form.elements[`slide${n}Note`].value = slide.note;
  });
  data.notices.forEach((notice, i) => {
    const n = i + 1;
    if (form.elements[`notice${n}Title`]) form.elements[`notice${n}Title`].value = notice.title;
    if (form.elements[`notice${n}Date`]) form.elements[`notice${n}Date`].value = notice.date;
    if (form.elements[`notice${n}Important`]) form.elements[`notice${n}Important`].checked = !!notice.important;
  });
  fillTimetableAdmin(form, data);
};

const saveCurriculumAdmin = () => {
  const form = document.querySelector("#adminForm");
  if (!form) return true;
  const all = loadCurriculum();
  const page = currentPage();
  const next = deepCopy(all[page]);
  next.slides = next.slides.map((slide, i) => {
    const n = i + 1;
    return {
      ...slide,
      title: form.elements[`slide${n}Title`]?.value.trim() || slide.title,
      sub: form.elements[`slide${n}Sub`]?.value.trim() || slide.sub,
      note: form.elements[`slide${n}Note`]?.value.trim() || slide.note
    };
  });
  next.notices = next.notices.map((notice, i) => {
    const n = i + 1;
    return {
      ...notice,
      title: form.elements[`notice${n}Title`]?.value.trim() || notice.title,
      date: form.elements[`notice${n}Date`]?.value.trim() || notice.date,
      important: !!form.elements[`notice${n}Important`]?.checked
    };
  });
  Object.assign(next, readTimetableAdmin(form, next));
  all[page] = next;
  return saveCurriculum(all);
};

const resetCurriculumAdmin = () => {
  const form = document.querySelector("#adminForm");
  if (!form) return;
  const data = DEFAULT_CURRICULUM[currentPage()];
  data.slides.forEach((slide, i) => {
    const n = i + 1;
    if (form.elements[`slide${n}Title`]) form.elements[`slide${n}Title`].value = slide.title;
    if (form.elements[`slide${n}Sub`]) form.elements[`slide${n}Sub`].value = slide.sub;
    if (form.elements[`slide${n}Note`]) form.elements[`slide${n}Note`].value = slide.note;
  });
  data.notices.forEach((notice, i) => {
    const n = i + 1;
    if (form.elements[`notice${n}Title`]) form.elements[`notice${n}Title`].value = notice.title;
    if (form.elements[`notice${n}Date`]) form.elements[`notice${n}Date`].value = notice.date;
    if (form.elements[`notice${n}Important`]) form.elements[`notice${n}Important`].checked = !!notice.important;
  });
  fillTimetableAdmin(form, data);
};

const renderCurriculumPage = () => {
  const grades = currentData().grades || [];
  if (selectedGradeIndex >= grades.length) selectedGradeIndex = 0;
  const data = currentData();
  const dept = document.querySelector("[data-dept-label]");
  if (dept) dept.textContent = data.label;
  renderSlides(data);
  renderTimetable(data);
  renderNotices(data);
  const panel = document.querySelector("#schedulePanel");
  if (panel && panel.classList.contains("is-open")) {
    openSchedule(selectedTermIndex, { silent: true });
  }

  const fileMap = { elementary: "elementary.html", middle: "middle.html", high: "high.html" };
  const file = fileMap[currentPage()];
  document.querySelectorAll(".sub-nav a").forEach((link) => {
    link.classList.toggle("is-active", link.getAttribute("href") === file);
  });
  const parent = document.querySelector(".has-sub > a");
  if (parent && file) parent.setAttribute("href", file);
};

window.fillCurriculumAdmin = fillCurriculumAdmin;
window.saveCurriculumAdmin = saveCurriculumAdmin;
window.resetCurriculumAdmin = resetCurriculumAdmin;
window.renderCurriculumPage = renderCurriculumPage;
window.getCurriculumStore = loadCurriculum;
window.setCurriculumStore = (data) => saveCurriculum(data);
window.initCurriculumUI = () => {
  initSlider();
  initBoards();
};
