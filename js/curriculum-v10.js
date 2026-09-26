// 초등·중등·고등 페이지 기본 내용. 함영원 공지/제목은 사용하지 않고 대치베스트 문구로 구성합니다.
const UNIFIED_STORE_KEY = "daechibest_sync_v6";
const LEGACY_CURRICULUM_KEY = "daechibest_curriculum";

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
      { id: "el-1", important: true, title: "2026년 2학기 초등부 레벨 테스트 일정 안내", date: "2026.08.20", body: "2학기 반 배정을 위한 레벨 테스트를 진행합니다.\n예약은 전화 상담 후 확정됩니다." },
      { id: "el-2", important: true, title: "초등부 학원 출결 및 숙제 운영 안내", date: "2026.06.16", body: "결석 시 당일 연락을 부탁드리며, 숙제는 수업 다음 날까지 제출하는 것을 원칙으로 합니다." },
      { id: "el-3", important: false, title: "여름방학 특강 수강 신청 안내", date: "2026.06.02", body: "초등 리딩 집중반과 어휘·쓰기 특강을 개설합니다. 정원 마감 시 대기 등록이 가능합니다." },
      { id: "el-4", important: false, title: "학부모 상담 주간 운영 안내", date: "2026.05.12", body: "학기 중 상담 주간을 운영합니다. 원하시는 시간을 미리 예약해 주세요." },
      { id: "el-5", important: false, title: "초등부 교재 및 준비물 안내", date: "2026.03.03", body: "정규 수업 교재는 학원에서 일괄 준비합니다. 별도 준비물은 개강 전 안내드립니다." }
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
      { id: "mid-1", important: true, title: "중등부 2학기 내신 집중 기간 운영 안내", date: "2026.08.28", body: "학교별 시험 범위에 맞춰 2주간 내신 집중 수업을 진행합니다. 해당 주차 시간표는 개별 안내드립니다." },
      { id: "mid-2", important: true, title: "학원 규정 및 학습 관리 안내", date: "2026.06.16", body: "출결, 숙제, 휴대폰 사용에 대한 학원 규정을 확인해 주세요. 반복 미제출 시 학부모께 연락드립니다." },
      { id: "mid-3", important: false, title: "중1·중2 레벨 테스트 일정 안내", date: "2026.05.28", body: "신규 등록 및 반 이동을 위한 레벨 테스트를 시행합니다. 사전 예약이 필요합니다." },
      { id: "mid-4", important: false, title: "여름특강 고등 구문 예비반 개설", date: "2026.05.10", body: "중3 대상 고등 예비 구문 특강을 개설합니다. 정원 제한이 있어 조기 마감될 수 있습니다." },
      { id: "mid-5", important: false, title: "중등부 교재 변경 안내", date: "2026.02.20", body: "2학기부터 독해 교재가 변경됩니다. 기존 수강생은 수업 중 별도 안내합니다." }
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
      { id: "hi-1", important: true, title: "고등부 2학기 내신반·수능반 편성 안내", date: "2026.08.30", body: "2학기부터 내신 집중과 수능 유형 수업을 요일별로 나눕니다. 반 이동은 상담 후 확정됩니다." },
      { id: "hi-2", important: true, title: "학원 규정 및 학습 관리 안내", date: "2026.06.16", body: "고등부는 자습 공간 이용 규칙을 포함해 운영 규정을 적용합니다. 자세한 내용은 학원에 비치된 안내문을 참고해 주세요." },
      { id: "hi-3", important: false, title: "모의고사 오답 클리닉 운영 안내", date: "2026.04.25", body: "전국 모의고사 다음 주 토요일에 오답 클리닉을 진행합니다. 응시 기록이 있는 수강생 우선입니다." },
      { id: "hi-4", important: false, title: "고1·고2 3월 내신반 개강 안내", date: "2026.01.28", body: "3월 개강 내신반은 레벨 테스트 후 반 배정됩니다. 신청은 전화로 받아 드립니다." },
      { id: "hi-5", important: false, title: "고3 수능 직전 보강 일정 안내", date: "2026.01.10", body: "수능 전 2주간 약점 유형 보강을 운영합니다. 대상 학생에게 개별 연락드립니다." }
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
let adminTermIndex = 0;
let adminSlideIndex = 0;
let adminNoticeIndex = 0;
let adminDraft = null;
let scheduleShowsAll = false;

const emptyTerm = () => ({ name: "새 학기", period: "", rows: [] });
const fallbackColumns = ["요일", "시간", "수업"];

const copyColumns = (cols, fallback) => {
  const source = Array.isArray(cols) && cols.length ? cols : (fallback || fallbackColumns);
  return [0, 1, 2].map((i) => (source[i] == null ? fallbackColumns[i] : String(source[i])));
};

const normalizeTerm = (term, index, shared) => {
  const base = term || {};
  const fromShared = shared || {};
  return {
    name: String(base.name || fromShared.name || `학기 ${index + 1}`),
    period: String(base.period || ""),
    rows: Array.isArray(base.rows) ? deepCopy(base.rows) : []
  };
};

// 학기 이름·열 이름·줄은 학년마다 따로 둡니다. 예전 저장본은 페이지 공통 값을 학년별로 복사합니다.
const buildGrade = (prev, index, names, timetable, pageColumns) => {
  const shared = timetable || [];
  const own = Array.isArray(prev && prev.terms) ? prev.terms : [];
  const count = own.length || shared.length || 1;
  const terms = Array.from({ length: count }, (_, i) => {
    if (own.length) return normalizeTerm(own[i], i, shared[i]);
    const item = shared[i] || {};
    return {
      name: item.name || `학기 ${i + 1}`,
      period: index === 0 ? (item.period || "") : "",
      rows: index === 0 && Array.isArray(item.rows) ? deepCopy(item.rows) : []
    };
  });
  return {
    name: ((prev && prev.name) || "").trim() || names[index] || `학년 ${index + 1}`,
    columns: copyColumns(prev && prev.columns, pageColumns),
    terms
  };
};

// 입력칸이 있으면 빈 값도 그대로 쓰고, 칸이 없을 때만 예전 값을 지킵니다.
const withFormText = (form, name, prev) => {
  const field = form.elements[name];
  if (!field) return prev;
  return String(field.value || "").trim();
};

// 예전 한 장짜리 시간표를 첫 학년으로 옮기고, 저장된 학년·학기 개수는 그대로 살립니다.
const normalizePage = (page, key) => {
  const next = { ...(page || {}) };
  const names = GRADE_NAMES[key] || ["1학년"];
  const timetable = (next.timetable && next.timetable.length)
    ? next.timetable
    : deepCopy((DEFAULT_CURRICULUM[key] || DEFAULT_CURRICULUM.elementary).timetable);
  const savedGrades = Array.isArray(next.grades) ? next.grades.filter(Boolean) : [];
  const hasSavedGrades = savedGrades.some((grade) => Array.isArray(grade.terms));
  next.timetable = timetable.map((item, i) => ({
    name: item.name || `학기 ${i + 1}`,
    period: item.period || "",
    rows: Array.isArray(item.rows) ? item.rows : []
  }));
  const pageColumns = copyColumns(next.columns, fallbackColumns);
  next.columns = pageColumns;
  const source = hasSavedGrades ? savedGrades : names.map((name) => ({ name }));
  next.grades = source.map((prev, i) => buildGrade(prev, i, names, next.timetable, pageColumns));
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
    const saved = readUnifiedCurriculum();
    curriculumStore = saved ? mergeCurriculum(saved) : deepCopy(DEFAULT_CURRICULUM);
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
    writeUnifiedCurriculum(curriculumStore);
    return true;
  } catch (error) {
    console.error("커리큘럼 저장 중 문제가 발생했습니다.", error);
    window.DaechiBest.showToast("저장에 실패했습니다. 브라우저 저장 공간을 확인해 주세요.");
    return false;
  }
};

const readUnifiedCurriculum = () => {
  try {
    const raw = localStorage.getItem(UNIFIED_STORE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed && parsed.curriculum) return parsed.curriculum;
    }
  } catch (error) {
    console.error("공유 저장 내용에서 커리큘럼을 읽는 중 문제가 발생했습니다.", error);
  }
  try {
    const old = localStorage.getItem(LEGACY_CURRICULUM_KEY);
    if (old) return JSON.parse(old);
  } catch (error) {
    console.error("이전 커리큘럼 저장 내용을 읽는 중 문제가 발생했습니다.", error);
  }
  return null;
};

const writeUnifiedCurriculum = (curriculum) => {
  let prev = {};
  try {
    const raw = localStorage.getItem(UNIFIED_STORE_KEY);
    if (raw) prev = JSON.parse(raw) || {};
  } catch (error) {
    prev = {};
  }
  const payload = {
    v: prev.v || 6,
    updatedAt: Date.now(),
    homepage: prev.homepage || null,
    curriculum,
    homepageUpdatedAt: prev.homepageUpdatedAt || 0,
    curriculumUpdatedAt: prev.curriculumUpdatedAt || {},
    syncToken: typeof prev.syncToken === "string" ? prev.syncToken : ""
  };
  localStorage.setItem(UNIFIED_STORE_KEY, JSON.stringify(payload));
  try {
    localStorage.removeItem(LEGACY_CURRICULUM_KEY);
  } catch (error) {
    console.error("이전 저장 키를 정리하지 못했습니다.", error);
  }
};

const escapeHtml = (value) => String(value == null ? "" : value)
  .replace(/&/g, "&amp;")
  .replace(/</g, "&lt;")
  .replace(/>/g, "&gt;")
  .replace(/"/g, "&quot;");

const tableColumns = (data) => {
  const fallback = ["요일", "시간", "수업"];
  const cols = (data && data.columns) || fallback;
  return [0, 1, 2].map((i) => (cols[i] == null ? fallback[i] : String(cols[i])));
};

const currentGrade = (data) => {
  const grades = (data && data.grades) || [];
  if (!grades.length) return { name: "", terms: [] };
  if (selectedGradeIndex >= grades.length) selectedGradeIndex = 0;
  return grades[selectedGradeIndex] || grades[0];
};

const fillGradeFields = (form, data, gradeIndex) => {
  const grade = ((data && data.grades) || [])[gradeIndex] || { terms: [] };
  const cols = grade.columns || (data && data.columns) || ["", "", ""];
  const term = (grade.terms || [])[adminTermIndex] || emptyTerm();
  if (form.elements.gradeName) form.elements.gradeName.value = grade.name || "";
  if (form.elements.col1) form.elements.col1.value = cols[0] || "";
  if (form.elements.col2) form.elements.col2.value = cols[1] || "";
  if (form.elements.col3) form.elements.col3.value = cols[2] || "";
  if (form.elements.termName) form.elements.termName.value = term.name || "";
  if (form.elements.termPeriod) form.elements.termPeriod.value = term.period || "";
  const block = form.querySelector("[data-term]");
  const rowCount = Number(block?.dataset.rows || 0);
  for (let r = 1; r <= rowCount; r += 1) {
    const row = (term.rows && term.rows[r - 1]) || ["", "", ""];
    for (let c = 1; c <= 3; c += 1) {
      const field = form.elements[`row${r}c${c}`];
      if (field) field.value = row[c - 1] || "";
    }
  }
};

const readVisibleGradeIntoData = (form, pageData, gradeIndex, keepEmpty = true) => {
  const next = deepCopy(pageData);
  if (!next.grades || !next.grades[gradeIndex]) return next;
  const grade = next.grades[gradeIndex];
  if (form.elements.gradeName) grade.name = withFormText(form, "gradeName", grade.name || "");
  if (form.elements.col1) {
    grade.columns = [
      withFormText(form, "col1", ""),
      withFormText(form, "col2", ""),
      withFormText(form, "col3", "")
    ];
  }
  const block = form.querySelector("[data-term]");
  if (!block) return next;
  const termIndex = Number(block.dataset.termIndex);
  const rowCount = Number(block.dataset.rows || 0);
  const rows = [];
  for (let r = 1; r <= rowCount; r += 1) {
    const cells = [1, 2, 3].map((c) => (form.elements[`row${r}c${c}`]?.value || "").trim());
    if (keepEmpty || cells.some((cell) => cell)) rows.push(cells);
  }
  grade.terms = grade.terms || [];
  const prev = grade.terms[termIndex] || emptyTerm();
  grade.terms[termIndex] = {
    name: withFormText(form, "termName", prev.name || ""),
    period: withFormText(form, "termPeriod", prev.period || ""),
    rows
  };
  return next;
};

const rebuildTimetableAdmin = (form) => {
  const wrap = form.querySelector("#timetableAdminFields");
  if (!wrap || !adminDraft) return;
  const grades = adminDraft.grades || [];
  if (adminGradeIndex >= grades.length) adminGradeIndex = 0;
  const grade = grades[adminGradeIndex] || { terms: [] };
  const terms = grade.terms && grade.terms.length ? grade.terms : [emptyTerm()];
  if (!grade.terms || !grade.terms.length) grade.terms = terms;
  if (adminTermIndex >= terms.length) adminTermIndex = 0;
  const term = terms[adminTermIndex] || emptyTerm();
  const rowCount = Math.max((term.rows || []).length, 1);
  const gradePills = grades.map((item, i) => `
    <button type="button" class="admin-pill ${i === adminGradeIndex ? "is-active" : ""}" data-admin-grade="${i}">${escapeHtml(item.name || `학년 ${i + 1}`)}</button>
  `).join("");
  const termPills = terms.map((item, i) => `
    <button type="button" class="admin-pill ${i === adminTermIndex ? "is-active" : ""}" data-admin-term="${i}">${escapeHtml(item.name || `학기 ${i + 1}`)}</button>
  `).join("");
  const rows = Array.from({ length: rowCount }, (_, ri) => {
    const r = ri + 1;
    return `
      <div class="time-row-wrap">
        <div class="time-row-head">
          <p class="time-row-label">${r}줄</p>
          <div class="admin-inline-actions">
            <button type="button" class="admin-mini-btn" data-row-up="${adminTermIndex}:${ri}" ${ri === 0 ? "disabled" : ""}>위로</button>
            <button type="button" class="admin-mini-btn" data-row-down="${adminTermIndex}:${ri}" ${ri === rowCount - 1 ? "disabled" : ""}>아래로</button>
            <button type="button" class="admin-mini-btn" data-remove-row="${adminTermIndex}:${ri}">삭제</button>
          </div>
        </div>
        <div class="time-row-fields">
          <div class="field"><input name="row${r}c1" aria-label="1열" /></div>
          <div class="field"><input name="row${r}c2" aria-label="2열" /></div>
          <div class="field"><input name="row${r}c3" aria-label="3열" /></div>
        </div>
      </div>
    `;
  }).join("");
  wrap.innerHTML = `
    <p class="time-row-label">학년</p>
    <div class="admin-pills">${gradePills}<button type="button" class="admin-pill" data-add-grade>학년 추가</button></div>
    <div class="admin-split">
      <div class="field"><label>학년 이름</label><input name="gradeName" /></div>
      <button type="button" class="admin-mini-btn" data-remove-grade ${grades.length <= 1 ? "disabled" : ""}>이 학년 삭제</button>
    </div>
    <p class="time-row-label">학기</p>
    <div class="admin-pills">${termPills}<button type="button" class="admin-pill" data-add-term>학기 추가</button></div>
    <div class="time-block" data-term="1" data-term-index="${adminTermIndex}" data-rows="${rowCount}">
      <div class="admin-split">
        <div class="field"><label>학기 이름</label><input name="termName" placeholder="1학기" /></div>
        <div class="field"><label>부제</label><input name="termPeriod" placeholder="3월 – 6월" /></div>
        <button type="button" class="admin-mini-btn" data-remove-term="${adminTermIndex}" ${terms.length <= 1 ? "disabled" : ""}>이 학기 삭제</button>
      </div>
      <p class="time-row-label">표 머리글</p>
      <div class="time-row-fields">
        <div class="field"><input name="col1" placeholder="요일" aria-label="1열 이름" /></div>
        <div class="field"><input name="col2" placeholder="시간" aria-label="2열 이름" /></div>
        <div class="field"><input name="col3" placeholder="수업" aria-label="3열 이름" /></div>
      </div>
      ${rows}
      <div class="admin-inline-actions">
        <button type="button" class="admin-mini-btn" data-add-row>줄 추가</button>
      </div>
    </div>
  `;
  fillGradeFields(form, adminDraft, adminGradeIndex);
};

const applyAdminChange = (form, mutator) => {
  if (!adminDraft) return;
  adminDraft = readVisibleGradeIntoData(form, adminDraft, adminGradeIndex, true);
  mutator(adminDraft);
  rebuildTimetableAdmin(form);
};

const bindTimetableAdminEvents = (form) => {
  const wrap = form.querySelector("#timetableAdminFields");
  if (!wrap || wrap.dataset.bound === "1") return;
  wrap.dataset.bound = "1";
  wrap.addEventListener("click", (event) => {
    if (!adminDraft) return;
    const pick = event.target.closest("[data-admin-grade]");
    if (pick) {
      const nextIndex = Number(pick.dataset.adminGrade);
      if (nextIndex === adminGradeIndex) return;
      adminDraft = readVisibleGradeIntoData(form, adminDraft, adminGradeIndex, true);
      adminGradeIndex = nextIndex;
      adminTermIndex = 0;
      rebuildTimetableAdmin(form);
      return;
    }
    const termPick = event.target.closest("[data-admin-term]");
    if (termPick) {
      const nextIndex = Number(termPick.dataset.adminTerm);
      if (nextIndex === adminTermIndex) return;
      adminDraft = readVisibleGradeIntoData(form, adminDraft, adminGradeIndex, true);
      adminTermIndex = nextIndex;
      rebuildTimetableAdmin(form);
      return;
    }
    if (event.target.closest("[data-add-grade]")) {
      applyAdminChange(form, (draft) => {
        const current = (draft.grades || [])[adminGradeIndex] || {};
        draft.grades = draft.grades || [];
        draft.grades.push({
          name: `학년 ${draft.grades.length + 1}`,
          columns: deepCopy(current.columns || fallbackColumns),
          terms: [emptyTerm()]
        });
        adminGradeIndex = draft.grades.length - 1;
        adminTermIndex = 0;
      });
      return;
    }
    if (event.target.closest("[data-remove-grade]")) {
      applyAdminChange(form, (draft) => {
        if ((draft.grades || []).length <= 1) return;
        draft.grades.splice(adminGradeIndex, 1);
        if (adminGradeIndex >= draft.grades.length) adminGradeIndex = draft.grades.length - 1;
        adminTermIndex = 0;
      });
      return;
    }
    if (event.target.closest("[data-add-term]")) {
      applyAdminChange(form, (draft) => {
        const grade = (draft.grades || [])[adminGradeIndex];
        if (!grade) return;
        grade.terms = grade.terms || [];
        grade.terms.push(emptyTerm());
        adminTermIndex = grade.terms.length - 1;
      });
      return;
    }
    const removeTerm = event.target.closest("[data-remove-term]");
    if (removeTerm) {
      applyAdminChange(form, (draft) => {
        const grade = (draft.grades || [])[adminGradeIndex];
        if (!grade || (grade.terms || []).length <= 1) return;
        grade.terms.splice(Number(removeTerm.dataset.removeTerm), 1);
        if (adminTermIndex >= grade.terms.length) adminTermIndex = grade.terms.length - 1;
      });
      return;
    }
    if (event.target.closest("[data-add-row]")) {
      applyAdminChange(form, (draft) => {
        const grade = (draft.grades || [])[adminGradeIndex];
        if (!grade) return;
        grade.terms = grade.terms || [];
        if (!grade.terms[adminTermIndex]) grade.terms[adminTermIndex] = emptyTerm();
        grade.terms[adminTermIndex].rows = grade.terms[adminTermIndex].rows || [];
        grade.terms[adminTermIndex].rows.push(["", "", ""]);
      });
      return;
    }
    const moveRow = event.target.closest("[data-row-up], [data-row-down]");
    if (moveRow) {
      applyAdminChange(form, (draft) => {
        const raw = moveRow.dataset.rowUp != null ? moveRow.dataset.rowUp : moveRow.dataset.rowDown;
        const [ti, ri] = String(raw || "").split(":").map(Number);
        const delta = moveRow.dataset.rowUp != null ? -1 : 1;
        const grade = (draft.grades || [])[adminGradeIndex];
        const term = grade && grade.terms && grade.terms[ti];
        if (!term || !Array.isArray(term.rows)) return;
        const to = ri + delta;
        if (to < 0 || to >= term.rows.length) return;
        term.rows = swapItems(term.rows, ri, to);
      });
      return;
    }
    const removeRow = event.target.closest("[data-remove-row]");
    if (!removeRow) return;
    applyAdminChange(form, (draft) => {
      const [ti, ri] = String(removeRow.dataset.removeRow || "").split(":").map(Number);
      const grade = (draft.grades || [])[adminGradeIndex];
      const term = grade && grade.terms && grade.terms[ti];
      if (!term || !Array.isArray(term.rows)) return;
      term.rows.splice(ri, 1);
    });
  });
};

const fillTimetableAdmin = (form, data, options = {}) => {
  const page = currentPage();
  if (!options.keepDraft) {
    adminDraft = normalizePage(deepCopy(data), page);
    adminGradeIndex = 0;
  }
  bindTimetableAdminEvents(form);
  rebuildTimetableAdmin(form);
};

const compactGradeRows = (data) => {
  (data.grades || []).forEach((grade) => {
    (grade.terms || []).forEach((term) => {
      term.rows = (term.rows || []).filter((row) => (row || []).some((cell) => String(cell || "").trim()));
    });
  });
  return data;
};

const readTimetableAdmin = (form, pageData) => {
  const page = currentPage();
  const next = adminDraft ? deepCopy(adminDraft) : deepCopy(pageData);
  const read = compactGradeRows(normalizePage(readVisibleGradeIntoData(form, next, adminGradeIndex, false), page));
  return {
    columns: read.columns,
    timetable: read.timetable,
    grades: read.grades
  };
};

// 홈 관리자에서 보고 있는 초·중·고. 실제로 고친 페이지만 저장합니다.
let adminCurriculumPage = "elementary";
const touchedCurriculumPages = new Set();

const currentPage = () => {
  const page = document.body.dataset.page || "elementary";
  if (page !== "home") return page;
  return adminCurriculumPage || "elementary";
};

const currentData = () => loadCurriculum()[currentPage()] || DEFAULT_CURRICULUM.elementary;

const renderSlides = (data) => {
  const slider = document.querySelector("#slider");
  if (!slider) return;
  const slides = data.slides || [];
  slider.innerHTML = slides.map((slide, index) => `
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
    dots.innerHTML = slides.map((_, index) => (
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
  const terms = (currentGrade(data).terms) || [];
  if (selectedTermIndex >= terms.length) selectedTermIndex = 0;
  list.innerHTML = terms.map((item, index) => `
    <li>
      <button type="button" data-time="${index}" class="${!scheduleShowsAll && index === selectedTermIndex ? "is-active" : ""}">${escapeHtml(item.name)}</button>
    </li>
  `).join("");
  const more = document.querySelector("#timeMore");
  if (more) {
    more.textContent = scheduleShowsAll ? "접기" : "더보기 >";
    more.classList.toggle("is-active", scheduleShowsAll);
  }
};

const renderNotices = (data) => {
  const list = document.querySelector("#noticeList");
  if (!list) return;
  list.innerHTML = data.notices.map((item, index) => {
    if (!(item.title || "").trim()) return "";
    const params = new URLSearchParams();
    params.set("dept", currentPage());
    if (item.id) params.set("id", item.id);
    else params.set("n", String(index));
    const href = `notice.html#${params.toString()}`;
    return `
    <li>
      <a class="notice-item" href="${href}">
        <span class="notice-main">
          ${item.important ? '<span class="badge-hot">중요</span>' : ""}
          <span class="notice-title">${escapeHtml(item.title)}</span>
        </span>
        <span class="notice-date">${escapeHtml(item.date)}</span>
      </a>
    </li>
  `;
  }).join("");
};

const scheduleTableHtml = (rows, cols) => (
  rows.length
    ? `<div class="schedule-table-wrap">
    <table class="schedule-table">
      <thead><tr><th>${escapeHtml(cols[0])}</th><th>${escapeHtml(cols[1])}</th><th>${escapeHtml(cols[2])}</th></tr></thead>
      <tbody>${rows.map((row) => (
        `<tr><td>${escapeHtml(row[0])}</td><td>${escapeHtml(row[1])}</td><td>${escapeHtml(row[2])}</td></tr>`
      )).join("")}</tbody>
    </table>
    </div>`
    : `<p class="schedule-empty">이 학년 시간표는 아직 등록되지 않았습니다.</p>`
);

const termSubtitle = (term, gradeName) => {
  const period = (term.period || "").trim();
  return period && period !== gradeName ? period : gradeName;
};

const markScheduleList = () => {
  document.querySelectorAll("#timetableList button[data-time]").forEach((btn) => {
    const on = !scheduleShowsAll && Number(btn.dataset.time) === selectedTermIndex;
    btn.classList.toggle("is-active", on);
  });
  const more = document.querySelector("#timeMore");
  if (more) {
    more.textContent = scheduleShowsAll ? "접기" : "더보기 >";
    more.classList.toggle("is-active", scheduleShowsAll);
  }
};

const openSchedule = (index, options = {}) => {
  const data = currentData();
  const panel = document.querySelector("#schedulePanel");
  const grade = currentGrade(data);
  const terms = grade.terms || [];
  if (!panel || !terms.length) return;
  scheduleShowsAll = false;
  selectedTermIndex = Math.min(Math.max(Number(index) || 0, 0), terms.length - 1);
  const term = terms[selectedTermIndex] || {};
  const cols = tableColumns({ columns: grade.columns || data.columns });
  panel.innerHTML = `
    <section class="schedule-block">
      <h3>${escapeHtml(data.label)} ${escapeHtml(term.name || "")} 시간표</h3>
      <p>${escapeHtml(termSubtitle(term, grade.name))}</p>
      ${scheduleTableHtml(term.rows || [], cols)}
    </section>
  `;
  panel.classList.add("is-open");
  markScheduleList();
  if (!options.silent) panel.scrollIntoView({ behavior: "smooth", block: "nearest" });
};

// 더보기는 첫 학기만 열지 않고, 선택한 학년의 학기 시간표를 모두 보여 줍니다.
const openAllSchedules = (options = {}) => {
  const data = currentData();
  const panel = document.querySelector("#schedulePanel");
  const grade = currentGrade(data);
  const terms = grade.terms || [];
  if (!panel) return;
  scheduleShowsAll = true;
  const cols = tableColumns({ columns: grade.columns || data.columns });
  panel.innerHTML = terms.map((term) => `
    <section class="schedule-block">
      <h3>${escapeHtml(data.label)} ${escapeHtml(term.name || "")} 시간표</h3>
      <p>${escapeHtml(termSubtitle(term, grade.name))}</p>
      ${scheduleTableHtml(term.rows || [], cols)}
    </section>
  `).join("") || `<p class="schedule-empty">등록된 시간표가 없습니다.</p>`;
  panel.classList.add("is-open");
  markScheduleList();
  if (!options.silent) panel.scrollIntoView({ behavior: "smooth", block: "nearest" });
};

const initSlider = () => {
  if (!document.querySelector("#slider")) return;
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
    const data = currentData();
    const terms = (currentGrade(data).terms) || [];
    if (selectedTermIndex >= terms.length) selectedTermIndex = 0;
    renderTimetable(data);
    if (scheduleShowsAll) openAllSchedules({ silent: true });
    else openSchedule(selectedTermIndex, { silent: true });
  });
  document.querySelector("#timetableList")?.addEventListener("click", (event) => {
    const btn = event.target.closest("button[data-time]");
    if (!btn) return;
    openSchedule(Number(btn.dataset.time));
  });
  document.querySelector("#timeMore")?.addEventListener("click", (event) => {
    event.preventDefault();
    if (scheduleShowsAll) openSchedule(selectedTermIndex);
    else openAllSchedules();
  });
};

const emptySlide = () => ({
  kicker: "",
  title: "",
  sub: "",
  cta: "상담 예약하기",
  ctaLink: "index.html#contact",
  note: ""
});

const newNoticeId = () => `n${Date.now().toString(36)}${Math.random().toString(36).slice(2, 6)}`;

const emptyNotice = () => ({
  id: newNoticeId(),
  title: "",
  date: "",
  body: "",
  important: false
});

const swapItems = (list, from, to) => {
  const next = (list || []).slice();
  if (from < 0 || to < 0 || from >= next.length || to >= next.length) return next;
  const hold = next[from];
  next[from] = next[to];
  next[to] = hold;
  return next;
};

const readSlidesFromForm = (form) => {
  const slides = deepCopy((adminDraft && adminDraft.slides) || []);
  const block = form.querySelector("[data-slide-block]");
  if (!block || !slides.length) return slides;
  const i = Number(block.dataset.slideBlock);
  slides[i] = {
    kicker: withFormText(form, "slideKicker", ""),
    title: withFormText(form, "slideTitle", ""),
    sub: withFormText(form, "slideSub", ""),
    note: withFormText(form, "slideNote", ""),
    cta: withFormText(form, "slideCta", ""),
    ctaLink: withFormText(form, "slideCtaLink", "")
  };
  return slides;
};

const readNoticesFromForm = (form) => {
  const notices = deepCopy((adminDraft && adminDraft.notices) || []);
  const block = form.querySelector("[data-notice-block]");
  if (!block) return notices;
  const i = Number(block.dataset.noticeBlock);
  const previous = notices[i] || {};
  notices[i] = {
    id: previous.id || newNoticeId(),
    title: withFormText(form, "noticeTitle", ""),
    date: withFormText(form, "noticeDate", ""),
    body: withFormText(form, "noticeBody", ""),
    important: !!form.elements.noticeImportant?.checked
  };
  return notices;
};

const rebuildSlidesAdmin = (form) => {
  const wrap = form.querySelector("#slidesAdminFields");
  if (!wrap || !adminDraft) return;
  const slides = adminDraft.slides || [];
  if (!slides.length) {
    wrap.innerHTML = `<button type="button" class="admin-mini-btn" data-add-slide>배너 추가</button>`;
    return;
  }
  if (adminSlideIndex >= slides.length) adminSlideIndex = 0;
  const slide = slides[adminSlideIndex] || emptySlide();
  const pills = slides.map((item, i) => `
    <button type="button" class="admin-pill ${i === adminSlideIndex ? "is-active" : ""}" data-slide-pick="${i}">${escapeHtml(item.title || `배너 ${i + 1}`)}</button>
  `).join("");
  wrap.innerHTML = `
    <div class="admin-pills">${pills}<button type="button" class="admin-pill" data-add-slide>배너 추가</button></div>
    <div class="time-block" data-slide-block="${adminSlideIndex}">
      <div class="admin-inline-actions">
        <button type="button" class="admin-mini-btn" data-slide-up="${adminSlideIndex}" ${adminSlideIndex === 0 ? "disabled" : ""}>앞으로</button>
        <button type="button" class="admin-mini-btn" data-slide-down="${adminSlideIndex}" ${adminSlideIndex === slides.length - 1 ? "disabled" : ""}>뒤로</button>
        <button type="button" class="admin-mini-btn" data-remove-slide="${adminSlideIndex}" ${slides.length <= 1 ? "disabled" : ""}>이 배너 삭제</button>
      </div>
      <div class="field"><label>영문 라벨</label><input name="slideKicker" placeholder="Elementary" /></div>
      <div class="field"><label>제목</label><input name="slideTitle" /></div>
      <div class="field"><label>설명</label><textarea name="slideSub"></textarea></div>
      <div class="field"><label>하단 안내 문구</label><input name="slideNote" /></div>
      <div class="field"><label>버튼 문구</label><input name="slideCta" placeholder="상담 예약하기" /></div>
      <div class="field"><label>버튼 링크</label><input name="slideCtaLink" placeholder="index.html#contact" /></div>
    </div>`;
  if (form.elements.slideKicker) form.elements.slideKicker.value = slide.kicker || "";
  if (form.elements.slideTitle) form.elements.slideTitle.value = slide.title || "";
  if (form.elements.slideSub) form.elements.slideSub.value = slide.sub || "";
  if (form.elements.slideNote) form.elements.slideNote.value = slide.note || "";
  if (form.elements.slideCta) form.elements.slideCta.value = slide.cta || "";
  if (form.elements.slideCtaLink) form.elements.slideCtaLink.value = slide.ctaLink || "";
};

const rebuildNoticesAdmin = (form) => {
  const wrap = form.querySelector("#noticesAdminFields");
  if (!wrap || !adminDraft) return;
  const notices = adminDraft.notices || [];
  if (!notices.length) {
    wrap.innerHTML = `<button type="button" class="admin-mini-btn" data-add-notice>공지 추가</button>`;
    return;
  }
  if (adminNoticeIndex >= notices.length) adminNoticeIndex = 0;
  const notice = notices[adminNoticeIndex] || emptyNotice();
  const pills = notices.map((item, i) => `
    <button type="button" class="admin-pill ${i === adminNoticeIndex ? "is-active" : ""}" data-notice-pick="${i}">${escapeHtml(item.title || `공지 ${i + 1}`)}</button>
  `).join("");
  wrap.innerHTML = `
    <div class="admin-pills">${pills}<button type="button" class="admin-pill" data-add-notice>공지 추가</button></div>
    <div class="time-block" data-notice-block="${adminNoticeIndex}">
      <div class="admin-inline-actions">
        <button type="button" class="admin-mini-btn" data-notice-up="${adminNoticeIndex}" ${adminNoticeIndex === 0 ? "disabled" : ""}>앞으로</button>
        <button type="button" class="admin-mini-btn" data-notice-down="${adminNoticeIndex}" ${adminNoticeIndex === notices.length - 1 ? "disabled" : ""}>뒤로</button>
        <button type="button" class="admin-mini-btn" data-remove-notice="${adminNoticeIndex}">이 공지 삭제</button>
      </div>
      <div class="field"><label>제목</label><input name="noticeTitle" /></div>
      <div class="field"><label>날짜</label><input name="noticeDate" /></div>
      <div class="field"><label>본문</label><textarea name="noticeBody"></textarea></div>
      <label class="field-check"><input type="checkbox" name="noticeImportant" /> 중요 표시</label>
    </div>`;
  if (form.elements.noticeTitle) form.elements.noticeTitle.value = notice.title || "";
  if (form.elements.noticeDate) form.elements.noticeDate.value = notice.date || "";
  if (form.elements.noticeBody) form.elements.noticeBody.value = notice.body || "";
  if (form.elements.noticeImportant) form.elements.noticeImportant.checked = !!notice.important;
};

const bindSlideNoticeAdmin = (form) => {
  const slidesWrap = form.querySelector("#slidesAdminFields");
  if (slidesWrap && slidesWrap.dataset.bound !== "1") {
    slidesWrap.dataset.bound = "1";
    slidesWrap.addEventListener("click", (event) => {
      if (!adminDraft) return;
      const pick = event.target.closest("[data-slide-pick]");
      if (pick) {
        const next = Number(pick.dataset.slidePick);
        if (next === adminSlideIndex) return;
        adminDraft.slides = readSlidesFromForm(form);
        adminSlideIndex = next;
        rebuildSlidesAdmin(form);
        return;
      }
      if (event.target.closest("[data-add-slide]")) {
        adminDraft.slides = readSlidesFromForm(form);
        adminDraft.slides.push(emptySlide());
        adminSlideIndex = adminDraft.slides.length - 1;
        rebuildSlidesAdmin(form);
        return;
      }
      const remove = event.target.closest("[data-remove-slide]");
      if (remove) {
        adminDraft.slides = readSlidesFromForm(form);
        if (adminDraft.slides.length <= 1) return;
        adminDraft.slides.splice(Number(remove.dataset.removeSlide), 1);
        if (adminSlideIndex >= adminDraft.slides.length) adminSlideIndex = adminDraft.slides.length - 1;
        rebuildSlidesAdmin(form);
        return;
      }
      const up = event.target.closest("[data-slide-up]");
      if (up) {
        const i = Number(up.dataset.slideUp);
        adminDraft.slides = swapItems(readSlidesFromForm(form), i, i - 1);
        adminSlideIndex = Math.max(0, i - 1);
        rebuildSlidesAdmin(form);
        return;
      }
      const down = event.target.closest("[data-slide-down]");
      if (!down) return;
      const i = Number(down.dataset.slideDown);
      adminDraft.slides = swapItems(readSlidesFromForm(form), i, i + 1);
      adminSlideIndex = Math.min(adminDraft.slides.length - 1, i + 1);
      rebuildSlidesAdmin(form);
    });
  }
  const noticesWrap = form.querySelector("#noticesAdminFields");
  if (noticesWrap && noticesWrap.dataset.bound !== "1") {
    noticesWrap.dataset.bound = "1";
    noticesWrap.addEventListener("click", (event) => {
      if (!adminDraft) return;
      const pick = event.target.closest("[data-notice-pick]");
      if (pick) {
        const next = Number(pick.dataset.noticePick);
        if (next === adminNoticeIndex) return;
        adminDraft.notices = readNoticesFromForm(form);
        adminNoticeIndex = next;
        rebuildNoticesAdmin(form);
        return;
      }
      if (event.target.closest("[data-add-notice]")) {
        adminDraft.notices = readNoticesFromForm(form);
        adminDraft.notices.push(emptyNotice());
        adminNoticeIndex = adminDraft.notices.length - 1;
        rebuildNoticesAdmin(form);
        return;
      }
      const remove = event.target.closest("[data-remove-notice]");
      if (remove) {
        adminDraft.notices = readNoticesFromForm(form);
        adminDraft.notices.splice(Number(remove.dataset.removeNotice), 1);
        if (adminNoticeIndex >= adminDraft.notices.length) adminNoticeIndex = Math.max(0, adminDraft.notices.length - 1);
        rebuildNoticesAdmin(form);
        return;
      }
      const up = event.target.closest("[data-notice-up]");
      if (up) {
        const i = Number(up.dataset.noticeUp);
        adminDraft.notices = swapItems(readNoticesFromForm(form), i, i - 1);
        adminNoticeIndex = Math.max(0, i - 1);
        rebuildNoticesAdmin(form);
        return;
      }
      const down = event.target.closest("[data-notice-down]");
      if (!down) return;
      const i = Number(down.dataset.noticeDown);
      adminDraft.notices = swapItems(readNoticesFromForm(form), i, i + 1);
      adminNoticeIndex = Math.min(adminDraft.notices.length - 1, i + 1);
      rebuildNoticesAdmin(form);
    });
  }
};
const bindCurriculumTabs = () => {
  const tabs = document.querySelector("#curriculumTabs");
  if (!tabs || tabs.dataset.bound === "1") return;
  tabs.dataset.bound = "1";
  tabs.addEventListener("click", (event) => {
    const btn = event.target.closest("[data-admin-tab]");
    if (!btn) return;
    const name = btn.dataset.adminTab;
    tabs.querySelectorAll("[data-admin-tab]").forEach((el) => el.classList.toggle("is-active", el === btn));
    document.querySelectorAll("[data-admin-pane]").forEach((pane) => {
      pane.classList.toggle("is-active", pane.dataset.adminPane === name);
    });
  });
};

const bindDeptPicks = () => {
  const picks = document.querySelector("#curriculumDeptPicks");
  if (!picks || picks.dataset.bound === "1") return;
  picks.dataset.bound = "1";
  picks.addEventListener("click", (event) => {
    const btn = event.target.closest("[data-curriculum-page]");
    if (!btn) return;
    const page = btn.dataset.curriculumPage;
    if (!page || page === currentPage()) return;
    if (touchedCurriculumPages.has(currentPage())) saveCurriculumAdmin();
    adminCurriculumPage = page;
    picks.querySelectorAll("[data-curriculum-page]").forEach((el) => {
      el.classList.toggle("is-active", el === btn);
    });
    fillCurriculumAdmin();
  });
};

const bindCurriculumDirty = () => {
  const form = document.querySelector("#curriculumForm");
  if (!form || form.dataset.dirtyBound === "1") return;
  form.dataset.dirtyBound = "1";
  const mark = () => touchedCurriculumPages.add(currentPage());
  form.addEventListener("input", mark);
  form.addEventListener("change", mark);
  form.addEventListener("click", (event) => {
    if (event.target.closest("button, input, textarea, select")) mark();
  });
};

const fillCurriculumAdmin = () => {
  const form = document.querySelector("#adminForm");
  if (!form) return;
  const data = currentData();
  adminDraft = normalizePage(deepCopy(data), currentPage());
  adminGradeIndex = 0;
  adminTermIndex = 0;
  adminSlideIndex = 0;
  adminNoticeIndex = 0;
  if (!Array.isArray(adminDraft.slides) || !adminDraft.slides.length) {
    adminDraft.slides = deepCopy((DEFAULT_CURRICULUM[currentPage()] || DEFAULT_CURRICULUM.elementary).slides);
  }
  if (!Array.isArray(adminDraft.notices)) adminDraft.notices = [];
  bindCurriculumTabs();
  bindSlideNoticeAdmin(form);
  rebuildSlidesAdmin(form);
  rebuildNoticesAdmin(form);
  fillTimetableAdmin(form, adminDraft, { keepDraft: true });
};

const saveCurriculumAdmin = () => {
  const form = document.querySelector("#adminForm");
  if (!form) return true;
  const all = loadCurriculum();
  const page = currentPage();
  const next = deepCopy(all[page]);
  next.slides = readSlidesFromForm(form);
  next.notices = readNoticesFromForm(form);
  Object.assign(next, readTimetableAdmin(form, next));
  all[page] = next;
  return saveCurriculum(all);
};

const resetCurriculumAdmin = () => {
  const form = document.querySelector("#adminForm");
  if (!form) return;
  touchedCurriculumPages.add(currentPage());
  const current = currentData();
  const defaults = DEFAULT_CURRICULUM[currentPage()] || DEFAULT_CURRICULUM.elementary;
  adminDraft = normalizePage(deepCopy(current), currentPage());
  adminDraft.slides = deepCopy(defaults.slides);
  adminDraft.notices = deepCopy(defaults.notices).map((item, i) => ({
    ...item,
    id: item.id || `default-${currentPage()}-${i + 1}`
  }));
  bindSlideNoticeAdmin(form);
  rebuildSlidesAdmin(form);
  rebuildNoticesAdmin(form);
  fillTimetableAdmin(form, adminDraft, { keepDraft: true });
};

const DEPT_FILES = {
  elementary: "elementary.html",
  middle: "middle.html",
  high: "high.html"
};

// 공지 고유 번호로 상세 페이지를 채웁니다. 예전 주소의 순서 번호도 그대로 엽니다.
const renderNoticePage = () => {
  const root = document.querySelector(".notice-page");
  if (!root) return;
  const hashParams = new URLSearchParams(window.location.hash.replace(/^#/, ""));
  const searchParams = new URLSearchParams(window.location.search);
  const dept = hashParams.get("dept") || searchParams.get("dept");
  const noticeId = hashParams.get("id") || searchParams.get("id");
  const hasIndex = hashParams.has("n") || searchParams.has("n");
  const index = Number(hashParams.has("n") ? hashParams.get("n") : searchParams.get("n"));
  const labels = { elementary: "초등부", middle: "중등부", high: "고등부" };
  const file = DEPT_FILES[dept] || "index.html";
  const back = document.querySelector("#noticeBack");
  if (back) back.setAttribute("href", file);
  const deptLabel = document.querySelector("[data-dept-label]");
  if (deptLabel) deptLabel.textContent = labels[dept] || "공지";
  document.querySelectorAll(".sub-nav a").forEach((link) => {
    link.classList.toggle("is-active", link.getAttribute("href") === file);
  });
  const parent = document.querySelector(".has-sub > a");
  if (parent && DEPT_FILES[dept]) {
    parent.setAttribute("href", file);
    parent.classList.add("is-active");
  }
  const page = DEPT_FILES[dept] ? loadCurriculum()[dept] : null;
  const notices = page && Array.isArray(page.notices) ? page.notices : [];
  let item = noticeId ? notices.find((notice) => notice && notice.id === noticeId) : null;
  if (!item && hasIndex && Number.isInteger(index) && index >= 0) item = notices[index] || null;
  const titleEl = document.querySelector("#noticeTitle");
  const kicker = document.querySelector("#noticeKicker");
  const dateEl = document.querySelector("#noticeDate");
  const bodyEl = document.querySelector("#noticeBody");
  if (!item || !(item.title || "").trim()) {
    if (kicker) kicker.textContent = "공지사항";
    if (titleEl) titleEl.textContent = "공지를 찾을 수 없습니다";
    if (dateEl) dateEl.textContent = "";
    if (bodyEl) bodyEl.textContent = "삭제되었거나 주소가 올바르지 않습니다.";
    document.title = "공지사항 | 대치베스트 어학원";
    return;
  }
  if (kicker) kicker.textContent = item.important ? "중요 공지" : "공지사항";
  if (titleEl) titleEl.textContent = item.title;
  if (dateEl) dateEl.textContent = item.date || "";
  if (bodyEl) bodyEl.textContent = item.body || "";
  document.title = `${item.title} | ${labels[dept] || "공지"} | 대치베스트 어학원`;
};

const renderCurriculumPage = () => {
  if ((document.body.dataset.page || "") === "notice") {
    renderNoticePage();
    return;
  }
  if ((document.body.dataset.page || "") === "home") return;
  const grades = currentData().grades || [];
  if (selectedGradeIndex >= grades.length) selectedGradeIndex = 0;
  const data = currentData();
  const dept = document.querySelector("[data-dept-label]");
  if (dept) dept.textContent = data.label;
  renderSlides(data);
  renderTimetable(data);
  renderNotices(data);
  if (scheduleShowsAll) openAllSchedules({ silent: true });
  else if (((currentGrade(data).terms) || []).length) openSchedule(selectedTermIndex, { silent: true });

  const file = DEPT_FILES[currentPage()];
  document.querySelectorAll(".sub-nav a").forEach((link) => {
    link.classList.toggle("is-active", link.getAttribute("href") === file);
  });
  const parent = document.querySelector(".has-sub > a");
  if (parent && file) parent.setAttribute("href", file);
};

window.fillCurriculumAdmin = fillCurriculumAdmin;
window.saveCurriculumAdmin = () => {
  const pane = document.querySelector("#curriculumAdminPane");
  if (pane && !touchedCurriculumPages.has(currentPage())) return true;
  return saveCurriculumAdmin();
};
window.resetCurriculumAdmin = resetCurriculumAdmin;
window.activateCurriculumAdmin = () => {
  bindDeptPicks();
  bindCurriculumDirty();
  const picks = document.querySelector("#curriculumDeptPicks");
  const active = picks && picks.querySelector("[data-curriculum-page].is-active");
  adminCurriculumPage = (active && active.dataset.curriculumPage) || adminCurriculumPage || "elementary";
  const timeFields = document.querySelector("#timetableAdminFields");
  if (!timeFields || !timeFields.childElementCount) fillCurriculumAdmin();
};
window.getTouchedCurriculumPages = () => [...touchedCurriculumPages];
window.resetTouchedCurriculum = () => {
  touchedCurriculumPages.clear();
  adminCurriculumPage = "elementary";
};
window.renderCurriculumPage = renderCurriculumPage;
window.getCurriculumStore = loadCurriculum;
window.setCurriculumStore = (data) => saveCurriculum(data);
window.initCurriculumUI = () => {
  initSlider();
  initBoards();
};

// 공통 스크립트가 먼저 준비되면, 학년 페이지는 이 파일이 도착한 뒤에 다시 그립니다.
if (document.readyState !== "loading") {
  const page = (document.body && document.body.dataset.page) || "";
  if (page && page !== "home") {
    renderCurriculumPage();
    window.initCurriculumUI();
  }
}
