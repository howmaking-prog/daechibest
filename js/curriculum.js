// 초등·중등·고등 페이지 기본 내용. 실제 수정은 이 파일만 하면 됩니다.
const UNIFIED_STORE_KEY = "daechibest_sync_v6";
const LEGACY_CURRICULUM_KEY = "daechibest_curriculum";

const DEFAULT_CURRICULUM = {
  elementary: {
    label: "초등부",
    englishLabel: "ELEMENTARY",
    rangeLabel: "초등 5–6",
    courseDesc: "읽기의 기초와 어휘 습관을 먼저 세웁니다. 문법 용어보다 문장이 만들어지는 감각을 익혀, 중등 내신으로 자연스럽게 연결합니다.",
    timetableTitle: "시간표",
    noticeTitle: "공지사항",
    moreLabel: "더보기 >",
    importantLabel: "중요 공지",
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
    englishLabel: "MIDDLE",
    rangeLabel: "중1–중3",
    courseDesc: "내신 서술형과 수행평가를 놓치지 않으면서, 고등 독해에 필요한 구문과 어휘량을 함께 쌓습니다.",
    timetableTitle: "시간표",
    noticeTitle: "공지사항",
    moreLabel: "더보기 >",
    importantLabel: "중요 공지",
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
    englishLabel: "HIGH SCHOOL",
    rangeLabel: "고1–고3",
    courseDesc: "내신 고득점과 수능 독해 속도를 동시에 관리합니다. 약점 유형을 분리해 클리닉으로 보완합니다.",
    timetableTitle: "시간표",
    noticeTitle: "공지사항",
    moreLabel: "더보기 >",
    importantLabel: "중요 공지",
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

const DEFAULT_COLUMNS = ["요일", "시간", "수업"];
const emptyTerm = (name = "") => ({ name, period: "", rows: [] });

const normalizeColumns = (cols) => {
  if (Array.isArray(cols) && cols.length) return cols.map((c) => String(c == null ? "" : c));
  return DEFAULT_COLUMNS.slice();
};

const padRow = (row, count) => Array.from({ length: Math.max(1, count) }, (_, i) => String((row && row[i] != null) ? row[i] : ""));

const normalizeTerm = (term, fallbackName, colCount) => ({
  name: String((term && term.name) || fallbackName || "").trim(),
  period: String((term && term.period) || "").trim(),
  rows: Array.isArray(term && term.rows) ? term.rows.map((row) => padRow(row, colCount)) : []
});

const moveItem = (list, from, to) => {
  const next = (list || []).slice();
  if (from < 0 || to < 0 || from >= next.length || to >= next.length) return next;
  const [item] = next.splice(from, 1);
  next.splice(to, 0, item);
  return next;
};

const adminScroller = () => document.querySelector(".admin-body");

// 입력칸이 있으면 빈 값도 그대로 쓰고, 칸이 없을 때만 예전 값을 지킵니다.
const withFormText = (form, name, prev) => {
  const field = form.elements[name];
  if (!field) return prev;
  return String(field.value || "").trim();
};

// 예전 한 장짜리 시간표를 첫 학년으로 옮기고, 학년마다 학기·칼럼을 따로 둡니다.
const normalizePage = (page, key) => {
  const next = { ...(page || {}) };
  const names = GRADE_NAMES[key] || ["1학년"];
  const pageColumns = normalizeColumns(next.columns);
  const timetable = (next.timetable && next.timetable.length)
    ? next.timetable
    : deepCopy((DEFAULT_CURRICULUM[key] || DEFAULT_CURRICULUM.elementary).timetable);
  const savedGrades = Array.isArray(next.grades) ? next.grades.filter(Boolean) : [];
  const hasSavedGrades = savedGrades.some((grade) => Array.isArray(grade.terms));
  next.timetable = (timetable || []).map((item, i) => ({
    name: item.name || `학기 ${i + 1}`,
    period: item.period || "",
    rows: Array.isArray(item.rows) ? item.rows : []
  }));
  const termsFromLegacy = (gradeIndex) => next.timetable.map((item) => ({
    name: item.name || "",
    period: gradeIndex === 0 ? (item.period || "") : "",
    rows: gradeIndex === 0 ? (item.rows || []).map((row) => padRow(row, pageColumns.length)) : []
  }));
  if (hasSavedGrades) {
    next.grades = savedGrades.map((prev, i) => {
      const columns = normalizeColumns(prev.columns || pageColumns);
      const source = Array.isArray(prev.terms) && prev.terms.length ? prev.terms : termsFromLegacy(i);
      const terms = source.map((term, ti) => normalizeTerm(
        term,
        (next.timetable[ti] && next.timetable[ti].name) || `학기 ${ti + 1}`,
        columns.length
      ));
      return {
        name: (prev.name || "").trim() || names[i] || `학년 ${i + 1}`,
        columns,
        terms: terms.length ? terms : [emptyTerm("1학기")]
      };
    });
    next.columns = (next.grades[0] && next.grades[0].columns) || pageColumns;
    return next;
  }
  next.grades = names.map((name, i) => ({
    name,
    columns: pageColumns.slice(),
    terms: termsFromLegacy(i).map((term) => normalizeTerm(term, term.name, pageColumns.length))
  }));
  next.columns = pageColumns;
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
    curriculumUpdatedAt: prev.curriculumUpdatedAt || {}
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

const tableColumns = (data, grade) => {
  const cols = (grade && grade.columns) || (data && data.columns) || DEFAULT_COLUMNS;
  return normalizeColumns(cols);
};

const currentGrade = (data) => {
  const grades = (data && data.grades) || [];
  if (!grades.length) return { name: "", columns: DEFAULT_COLUMNS.slice(), terms: [] };
  if (selectedGradeIndex >= grades.length) selectedGradeIndex = 0;
  return grades[selectedGradeIndex] || grades[0];
};

const fillGradeFields = (form, data, gradeIndex) => {
  const grade = ((data && data.grades) || [])[gradeIndex] || { terms: [], columns: DEFAULT_COLUMNS.slice() };
  const cols = normalizeColumns(grade.columns);
  cols.forEach((name, i) => {
    const field = form.elements[`col${i + 1}`];
    if (field) field.value = name;
  });
  (grade.terms || []).forEach((term, i) => {
    const n = i + 1;
    const block = form.querySelector(`[data-term-index="${i}"]`);
    const rowCount = Number(block?.dataset.rows || 0);
    if (form.elements[`time${n}Name`]) form.elements[`time${n}Name`].value = term.name || "";
    if (form.elements[`time${n}Period`]) form.elements[`time${n}Period`].value = term.period || "";
    for (let r = 1; r <= rowCount; r += 1) {
      const row = (term.rows && term.rows[r - 1]) || [];
      for (let c = 1; c <= cols.length; c += 1) {
        const field = form.elements[`time${n}r${r}c${c}`];
        if (field) field.value = row[c - 1] || "";
      }
    }
  });
};

const readVisibleGradeIntoData = (form, pageData, gradeIndex, keepEmpty = true) => {
  const next = deepCopy(pageData);
  (next.grades || []).forEach((grade, i) => {
    grade.name = withFormText(form, `gradeName${i}`, grade.name || "");
  });
  if (!next.grades || !next.grades[gradeIndex]) return next;
  const colFields = [];
  for (let c = 1; form.elements[`col${c}`]; c += 1) {
    colFields.push(withFormText(form, `col${c}`, ""));
  }
  const columns = colFields.length ? colFields : normalizeColumns(next.grades[gradeIndex].columns);
  const termBlocks = [...form.querySelectorAll("[data-term-index]")];
  next.grades[gradeIndex] = {
    ...next.grades[gradeIndex],
    columns,
    terms: termBlocks.map((block) => {
      const i = Number(block.dataset.termIndex);
      const n = i + 1;
      const rowCount = Number(block.dataset.rows || 0);
      const rows = [];
      for (let r = 1; r <= rowCount; r += 1) {
        const cells = columns.map((_, ci) => (form.elements[`time${n}r${r}c${ci + 1}`]?.value || "").trim());
        if (keepEmpty || cells.some((cell) => cell)) rows.push(cells);
      }
      return {
        name: withFormText(form, `time${n}Name`, ""),
        period: withFormText(form, `time${n}Period`, ""),
        rows
      };
    })
  };
  next.columns = next.grades[0] ? next.grades[0].columns : columns;
  return next;
};

const rebuildTimetableAdmin = (form) => {
  const wrap = form.querySelector("#timetableAdminFields");
  if (!wrap || !adminDraft) return;
  const grades = adminDraft.grades || [];
  if (adminGradeIndex >= grades.length) adminGradeIndex = 0;
  const grade = grades[adminGradeIndex] || { name: "", columns: DEFAULT_COLUMNS.slice(), terms: [emptyTerm("1학기")] };
  const columns = normalizeColumns(grade.columns);
  const terms = Array.isArray(grade.terms) && grade.terms.length ? grade.terms : [emptyTerm("1학기")];
  const columnFields = `
    <p class="time-row-label">이 학년 열 이름</p>
    <div class="admin-col-list" data-col-count="${columns.length}">
      ${columns.map((name, i) => `
        <div class="admin-col-item">
          <div class="field">
            <label>${i + 1}열 이름</label>
            <input name="col${i + 1}" placeholder="${escapeHtml(DEFAULT_COLUMNS[i] || `${i + 1}열`)}" />
          </div>
          <button type="button" class="admin-mini-btn" data-remove-col="${i}" ${columns.length <= 1 ? "disabled" : ""}>열 삭제</button>
        </div>
      `).join("")}
    </div>
    <div class="admin-inline-actions">
      <button type="button" class="admin-mini-btn" data-add-col>열 추가</button>
    </div>
    <p class="time-row-label">학년</p>
    <div class="admin-grade-list" id="adminGradeTabs">
      ${grades.map((item, i) => `
        <div class="admin-grade-item ${i === adminGradeIndex ? "is-active" : ""}" data-grade-row="${i}">
          <button type="button" class="admin-drag" draggable="true" data-drag-grade="${i}" aria-label="학년 순서 바꾸기">↕</button>
          <button type="button" class="admin-grade-pick" data-admin-grade="${i}">선택</button>
          <input name="gradeName${i}" value="${escapeHtml(item.name || "")}" aria-label="학년 이름" />
          <div class="admin-grade-tools">
            <button type="button" class="admin-mini-btn" data-grade-up="${i}" ${i === 0 ? "disabled" : ""}>위</button>
            <button type="button" class="admin-mini-btn" data-grade-down="${i}" ${i === grades.length - 1 ? "disabled" : ""}>아래</button>
            <button type="button" class="admin-mini-btn" data-remove-grade="${i}" ${grades.length <= 1 ? "disabled" : ""}>삭제</button>
          </div>
        </div>
      `).join("")}
    </div>
    <div class="admin-inline-actions">
      <button type="button" class="admin-mini-btn" data-add-grade>학년 추가</button>
    </div>
  `;
  const blocks = terms.map((term, i) => {
    const n = i + 1;
    const rowCount = Math.max((term.rows || []).length, 1);
    const rows = Array.from({ length: rowCount }, (_, ri) => {
      const r = ri + 1;
      return `
        <div class="time-row-wrap">
          <div class="time-row-head">
            <p class="time-row-label">${r}줄</p>
            <button type="button" class="admin-mini-btn" data-remove-row="${i}:${ri}">이 줄 삭제</button>
          </div>
          <div class="time-row-fields" style="grid-template-columns: repeat(${Math.max(columns.length, 1)}, minmax(0, 1fr));">
            ${columns.map((colName, ci) => `
              <div class="field"><label>${escapeHtml(colName || `${ci + 1}열`)}</label><input name="time${n}r${r}c${ci + 1}" /></div>
            `).join("")}
          </div>
        </div>
      `;
    }).join("");
    return `
      <div class="time-block" data-term-index="${i}" data-rows="${rowCount}">
        <div class="time-block-head">
          <button type="button" class="admin-drag" draggable="true" data-drag-term="${i}" aria-label="학기 순서 바꾸기">↕</button>
          <h4>시간표 ${n}</h4>
          <div class="admin-inline-actions">
            <button type="button" class="admin-mini-btn" data-term-up="${i}" ${i === 0 ? "disabled" : ""}>위</button>
            <button type="button" class="admin-mini-btn" data-term-down="${i}" ${i === terms.length - 1 ? "disabled" : ""}>아래</button>
            <button type="button" class="admin-mini-btn" data-remove-term="${i}" ${terms.length <= 1 ? "disabled" : ""}>이 학기 삭제</button>
          </div>
        </div>
        <div class="field"><label>왼쪽 목록 이름</label><input name="time${n}Name" placeholder="1학기" /></div>
        <div class="field"><label>부제 <span class="hint">기간만 적으면 됩니다. 학년 이름은 넣지 않아도 됩니다.</span></label><input name="time${n}Period" placeholder="3월 – 6월" /></div>
        ${rows}
        <div class="admin-inline-actions">
          <button type="button" class="admin-mini-btn" data-add-row="${i}">줄 추가</button>
        </div>
      </div>
    `;
  }).join("");
  wrap.innerHTML = `${columnFields}${blocks}
    <div class="admin-inline-actions">
      <button type="button" class="admin-mini-btn" data-add-term>학기 추가</button>
    </div>`;
  fillGradeFields(form, adminDraft, adminGradeIndex);
};

const applyAdminChange = (form, mutator, focusSel) => {
  if (!adminDraft) return;
  const box = adminScroller();
  const top = box ? box.scrollTop : 0;
  adminDraft = readVisibleGradeIntoData(form, adminDraft, adminGradeIndex, true);
  mutator(adminDraft);
  rebuildTimetableAdmin(form);
  if (box) box.scrollTop = top;
  if (focusSel) {
    const el = typeof focusSel === "function" ? focusSel(form) : form.querySelector(focusSel);
    if (el && typeof el.scrollIntoView === "function") el.scrollIntoView({ block: "nearest", inline: "nearest" });
  }
};

const bindTimetableAdminEvents = (form) => {
  const wrap = form.querySelector("#timetableAdminFields");
  if (!wrap || wrap.dataset.bound === "1") return;
  wrap.dataset.bound = "1";
  let dragState = null;
  wrap.addEventListener("focusin", (event) => {
    if (!adminDraft) return;
    const input = event.target.closest("input[name^='gradeName']");
    if (!input) return;
    const nextIndex = Number(String(input.name).replace("gradeName", ""));
    if (Number.isNaN(nextIndex) || nextIndex === adminGradeIndex) return;
    applyAdminChange(form, () => {
      adminGradeIndex = nextIndex;
    });
    form.elements[`gradeName${nextIndex}`]?.focus();
  });
  wrap.addEventListener("click", (event) => {
    if (!adminDraft) return;
    const pick = event.target.closest("[data-admin-grade]");
    if (pick) {
      const nextIndex = Number(pick.dataset.adminGrade);
      if (nextIndex === adminGradeIndex) return;
      applyAdminChange(form, () => {
        adminGradeIndex = nextIndex;
      });
      return;
    }
    if (event.target.closest("[data-add-grade]")) {
      applyAdminChange(form, (draft) => {
        const current = (draft.grades || [])[adminGradeIndex] || {};
        draft.grades = draft.grades || [];
        draft.grades.push({
          name: `학년 ${draft.grades.length + 1}`,
          columns: normalizeColumns(current.columns),
          terms: [emptyTerm("1학기")]
        });
        adminGradeIndex = draft.grades.length - 1;
      }, (root) => root.querySelector("[data-grade-row]:last-of-type"));
      return;
    }
    const removeGrade = event.target.closest("[data-remove-grade]");
    if (removeGrade) {
      applyAdminChange(form, (draft) => {
        if ((draft.grades || []).length <= 1) return;
        const idx = Number(removeGrade.dataset.removeGrade);
        draft.grades.splice(idx, 1);
        if (adminGradeIndex >= draft.grades.length) adminGradeIndex = draft.grades.length - 1;
        else if (adminGradeIndex > idx) adminGradeIndex -= 1;
      });
      return;
    }
    const gradeUp = event.target.closest("[data-grade-up]");
    if (gradeUp) {
      const idx = Number(gradeUp.dataset.gradeUp);
      applyAdminChange(form, (draft) => {
        draft.grades = moveItem(draft.grades, idx, idx - 1);
        if (adminGradeIndex === idx) adminGradeIndex = idx - 1;
        else if (adminGradeIndex === idx - 1) adminGradeIndex = idx;
      });
      return;
    }
    const gradeDown = event.target.closest("[data-grade-down]");
    if (gradeDown) {
      const idx = Number(gradeDown.dataset.gradeDown);
      applyAdminChange(form, (draft) => {
        draft.grades = moveItem(draft.grades, idx, idx + 1);
        if (adminGradeIndex === idx) adminGradeIndex = idx + 1;
        else if (adminGradeIndex === idx + 1) adminGradeIndex = idx;
      });
      return;
    }
    if (event.target.closest("[data-add-term]")) {
      applyAdminChange(form, (draft) => {
        const g = (draft.grades || [])[adminGradeIndex];
        if (!g) return;
        g.terms = g.terms || [];
        g.terms.push(emptyTerm("새 학기"));
      }, (root) => root.querySelector(".time-block:last-of-type"));
      return;
    }
    const removeTerm = event.target.closest("[data-remove-term]");
    if (removeTerm) {
      applyAdminChange(form, (draft) => {
        const g = (draft.grades || [])[adminGradeIndex];
        if (!g || (g.terms || []).length <= 1) return;
        g.terms.splice(Number(removeTerm.dataset.removeTerm), 1);
      });
      return;
    }
    const termUp = event.target.closest("[data-term-up]");
    if (termUp) {
      const idx = Number(termUp.dataset.termUp);
      applyAdminChange(form, (draft) => {
        const g = (draft.grades || [])[adminGradeIndex];
        if (!g) return;
        g.terms = moveItem(g.terms, idx, idx - 1);
      });
      return;
    }
    const termDown = event.target.closest("[data-term-down]");
    if (termDown) {
      const idx = Number(termDown.dataset.termDown);
      applyAdminChange(form, (draft) => {
        const g = (draft.grades || [])[adminGradeIndex];
        if (!g) return;
        g.terms = moveItem(g.terms, idx, idx + 1);
      });
      return;
    }
    if (event.target.closest("[data-add-col]")) {
      applyAdminChange(form, (draft) => {
        const g = (draft.grades || [])[adminGradeIndex];
        if (!g) return;
        g.columns = normalizeColumns(g.columns);
        g.columns.push(`${g.columns.length + 1}열`);
        (g.terms || []).forEach((term) => {
          (term.rows || []).forEach((row) => row.push(""));
        });
      });
      return;
    }
    const removeCol = event.target.closest("[data-remove-col]");
    if (removeCol) {
      applyAdminChange(form, (draft) => {
        const g = (draft.grades || [])[adminGradeIndex];
        if (!g) return;
        g.columns = normalizeColumns(g.columns);
        if (g.columns.length <= 1) return;
        const idx = Number(removeCol.dataset.removeCol);
        g.columns.splice(idx, 1);
        (g.terms || []).forEach((term) => {
          (term.rows || []).forEach((row) => row.splice(idx, 1));
        });
      });
      return;
    }
    const addRow = event.target.closest("[data-add-row]");
    if (addRow) {
      const idx = Number(addRow.dataset.addRow);
      applyAdminChange(form, (draft) => {
        const g = (draft.grades || [])[adminGradeIndex];
        if (!g) return;
        g.terms = g.terms || [];
        if (!g.terms[idx]) g.terms[idx] = emptyTerm("새 학기");
        g.terms[idx].rows = g.terms[idx].rows || [];
        g.terms[idx].rows.push(padRow([], normalizeColumns(g.columns).length));
      }, `[data-term-index="${idx}"] .time-row-wrap:last-of-type`);
      return;
    }
    const removeRow = event.target.closest("[data-remove-row]");
    if (!removeRow) return;
    applyAdminChange(form, (draft) => {
      const [ti, ri] = String(removeRow.dataset.removeRow || "").split(":").map(Number);
      const g = (draft.grades || [])[adminGradeIndex];
      const term = g && g.terms && g.terms[ti];
      if (!term || !Array.isArray(term.rows)) return;
      term.rows.splice(ri, 1);
    });
  });
  wrap.addEventListener("dragstart", (event) => {
    const handle = event.target.closest("[data-drag-grade], [data-drag-term]");
    if (!handle) {
      event.preventDefault();
      return;
    }
    const type = handle.dataset.dragGrade != null ? "grade" : "term";
    const index = Number(type === "grade" ? handle.dataset.dragGrade : handle.dataset.dragTerm);
    dragState = { type, index };
    event.dataTransfer.effectAllowed = "move";
    event.dataTransfer.setData("text/plain", `${type}:${index}`);
    handle.closest(".admin-grade-item, .time-block")?.classList.add("is-dragging");
  });
  wrap.addEventListener("dragend", () => {
    dragState = null;
    wrap.querySelectorAll(".is-dragging, .is-dragover").forEach((el) => {
      el.classList.remove("is-dragging", "is-dragover");
    });
  });
  wrap.addEventListener("dragover", (event) => {
    if (!dragState) return;
    const target = event.target && event.target.closest ? event.target : event.target.parentElement;
    const row = dragState.type === "grade"
      ? target.closest("[data-grade-row]")
      : target.closest("[data-term-index]");
    if (!row) return;
    event.preventDefault();
    wrap.querySelectorAll(".is-dragover").forEach((el) => el.classList.remove("is-dragover"));
    row.classList.add("is-dragover");
  });
  wrap.addEventListener("drop", (event) => {
    event.preventDefault();
    if (!dragState) return;
    const target = event.target && event.target.closest ? event.target : event.target.parentElement;
    const row = dragState.type === "grade"
      ? target.closest("[data-grade-row]")
      : target.closest("[data-term-index]");
    wrap.querySelectorAll(".is-dragging, .is-dragover").forEach((el) => {
      el.classList.remove("is-dragging", "is-dragover");
    });
    if (!row) return;
    const from = dragState.index;
    const to = Number(dragState.type === "grade" ? row.dataset.gradeRow : row.dataset.termIndex);
    dragState = null;
    if (Number.isNaN(to) || from === to) return;
    applyAdminChange(form, (draft) => {
      if (row.dataset.gradeRow != null) {
        draft.grades = moveItem(draft.grades, from, to);
        adminGradeIndex = to;
        return;
      }
      const g = (draft.grades || [])[adminGradeIndex];
      if (!g) return;
      g.terms = moveItem(g.terms, from, to);
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
  const next = adminDraft ? deepCopy(adminDraft) : deepCopy(pageData);
  const read = compactGradeRows(readVisibleGradeIntoData(form, next, adminGradeIndex, false));
  const first = (read.grades || [])[0];
  return {
    columns: (first && first.columns) || read.columns,
    timetable: ((first && first.terms) || []).map((term) => ({
      name: term.name || "",
      period: term.period || "",
      rows: []
    })),
    grades: read.grades
  };
};

const PAGE_COPY_FIELDS = ["label", "englishLabel", "rangeLabel", "courseDesc", "timetableTitle", "noticeTitle", "moreLabel", "importantLabel"];

// 홈에 이미 저장한 부서 이름·학년 범위가 있으면 설정 칸에 같이 보여 줍니다.
const fillPageCopyAdmin = (form, data) => {
  if (!form) return;
  const home = (window.DaechiBest && window.DaechiBest.loadContent)
    ? window.DaechiBest.loadContent()
    : {};
  const mapped = {
    elementary: { label: "elemName", englishLabel: "elemEn", rangeLabel: "elemRange", courseDesc: "elemDesc" },
    middle: { label: "middleName", englishLabel: "middleEn", rangeLabel: "middleRange", courseDesc: "middleDesc" },
    high: { label: "highName", englishLabel: "highEn", rangeLabel: "highRange", courseDesc: "highDesc" }
  }[currentPage()] || {};
  const pick = (key) => {
    const fromPage = data[key];
    if (fromPage != null && String(fromPage).trim()) return fromPage;
    const homeKey = mapped[key];
    return (homeKey && home[homeKey]) || "";
  };
  if (form.elements.deptLabel) form.elements.deptLabel.value = pick("label");
  PAGE_COPY_FIELDS.forEach((key) => {
    if (key === "label") return;
    if (form.elements[key]) form.elements[key].value = pick(key);
  });
};

const readPageCopyAdmin = (form, pageData) => {
  const next = { ...(pageData || {}) };
  next.label = withFormText(form, "deptLabel", next.label || "");
  PAGE_COPY_FIELDS.forEach((key) => {
    if (key === "label") return;
    next[key] = withFormText(form, key, next[key] || "");
  });
  return next;
};

const currentPage = () => document.body.dataset.page || "elementary";

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
  const terms = (currentGrade(data).terms || []);
  if (selectedTermIndex >= terms.length) selectedTermIndex = Math.max(0, terms.length - 1);
  list.innerHTML = terms.map((item, index) => `
    <li>
      <button type="button" data-time="${index}">${escapeHtml(item.name || `학기 ${index + 1}`)}</button>
    </li>
  `).join("");
};

const renderNotices = (data) => {
  const list = document.querySelector("#noticeList");
  if (!list) return;
  list.innerHTML = data.notices.map((item, index) => {
    if (!(item.title || "").trim()) return "";
    return `
    <li>
      <button type="button" class="notice-item" data-notice="${index}">
        <span class="notice-main">
          ${item.important ? '<span class="badge-hot">중요</span>' : ""}
          <span class="notice-title">${escapeHtml(item.title)}</span>
        </span>
        <span class="notice-date">${escapeHtml(item.date)}</span>
      </button>
    </li>
  `;
  }).join("");
};

const openSchedule = (index, options = {}) => {
  const data = currentData();
  const grade = currentGrade(data);
  const terms = grade.terms || [];
  const item = terms[index];
  const panel = document.querySelector("#schedulePanel");
  if (!item || !panel) return;
  selectedTermIndex = index;
  const cols = tableColumns(data, grade);
  const rows = item.rows || [];
  const period = (item.period || "").trim();
  const gradeName = (grade.name || "").trim();
  const termName = (item.name || "").trim();
  // 학년 이름·학기 이름과 같은 부제는 탭과 겹치므로 숨깁니다.
  const subtitle = period && period !== gradeName && period !== termName ? period : "";
  const body = rows.length
    ? `<div class="schedule-table-wrap">
    <table class="schedule-table">
      <thead><tr>${cols.map((col) => `<th>${escapeHtml(col)}</th>`).join("")}</tr></thead>
      <tbody>${rows.map((row) => (
        `<tr>${cols.map((_, ci) => `<td>${escapeHtml((row && row[ci]) || "")}</td>`).join("")}</tr>`
      )).join("")}</tbody>
    </table>
    </div>`
    : `<p class="schedule-empty">이 학년 시간표는 아직 등록되지 않았습니다.</p>`;
  panel.innerHTML = `
    <h3>${escapeHtml(data.label)} ${escapeHtml(termName ? `${termName} ${data.timetableTitle || "시간표"}` : (data.timetableTitle || "시간표"))}</h3>
    ${subtitle ? `<p>${escapeHtml(subtitle)}</p>` : ""}
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
  modal.querySelector("[data-notice-kicker]").textContent = item.important
    ? (currentData().importantLabel || "중요 공지")
    : (currentData().noticeTitle || "공지사항");
  modal.querySelector("[data-notice-title]").textContent = item.title;
  modal.querySelector("[data-notice-date]").textContent = item.date;
  modal.querySelector("[data-notice-body]").textContent = item.body || "";
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
    renderTimetable(currentData());
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

const emptySlide = () => ({
  kicker: "",
  title: "",
  sub: "",
  cta: "상담 예약하기",
  ctaLink: "index.html#contact",
  note: ""
});

const emptyNotice = () => ({
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
  const blocks = [...form.querySelectorAll("[data-slide-block]")];
  return blocks.map((_, i) => ({
    kicker: withFormText(form, `slide${i}Kicker`, ""),
    title: withFormText(form, `slide${i}Title`, ""),
    sub: withFormText(form, `slide${i}Sub`, ""),
    note: withFormText(form, `slide${i}Note`, ""),
    cta: withFormText(form, `slide${i}Cta`, ""),
    ctaLink: withFormText(form, `slide${i}CtaLink`, "")
  }));
};

const readNoticesFromForm = (form) => {
  const blocks = [...form.querySelectorAll("[data-notice-block]")];
  return blocks.map((_, i) => ({
    title: withFormText(form, `notice${i}Title`, ""),
    date: withFormText(form, `notice${i}Date`, ""),
    body: withFormText(form, `notice${i}Body`, ""),
    important: !!form.elements[`notice${i}Important`]?.checked
  }));
};

const rebuildSlidesAdmin = (form) => {
  const wrap = form.querySelector("#slidesAdminFields");
  if (!wrap || !adminDraft) return;
  const slides = adminDraft.slides || [];
  wrap.innerHTML = slides.map((slide, i) => `
    <div class="time-block" data-slide-block="${i}">
      <div class="time-block-head">
        <h4>배너 ${i + 1}</h4>
        <div class="admin-inline-actions">
          <button type="button" class="admin-mini-btn" data-slide-up="${i}" ${i === 0 ? "disabled" : ""}>위로</button>
          <button type="button" class="admin-mini-btn" data-slide-down="${i}" ${i === slides.length - 1 ? "disabled" : ""}>아래로</button>
          <button type="button" class="admin-mini-btn" data-remove-slide="${i}" ${slides.length <= 1 ? "disabled" : ""}>이 배너 삭제</button>
        </div>
      </div>
      <div class="field"><label>영문 라벨</label><input name="slide${i}Kicker" placeholder="Elementary" /></div>
      <div class="field"><label>제목</label><input name="slide${i}Title" /></div>
      <div class="field"><label>설명</label><textarea name="slide${i}Sub"></textarea></div>
      <div class="field"><label>하단 안내 문구</label><input name="slide${i}Note" /></div>
      <div class="field"><label>버튼 문구</label><input name="slide${i}Cta" placeholder="상담 예약하기" /></div>
      <div class="field"><label>버튼 링크</label><input name="slide${i}CtaLink" placeholder="index.html#contact" /></div>
    </div>
  `).join("") + `
    <div class="admin-inline-actions">
      <button type="button" class="admin-mini-btn" data-add-slide>배너 추가</button>
    </div>`;
  slides.forEach((slide, i) => {
    if (form.elements[`slide${i}Kicker`]) form.elements[`slide${i}Kicker`].value = slide.kicker || "";
    if (form.elements[`slide${i}Title`]) form.elements[`slide${i}Title`].value = slide.title || "";
    if (form.elements[`slide${i}Sub`]) form.elements[`slide${i}Sub`].value = slide.sub || "";
    if (form.elements[`slide${i}Note`]) form.elements[`slide${i}Note`].value = slide.note || "";
    if (form.elements[`slide${i}Cta`]) form.elements[`slide${i}Cta`].value = slide.cta || "";
    if (form.elements[`slide${i}CtaLink`]) form.elements[`slide${i}CtaLink`].value = slide.ctaLink || "";
  });
};

const rebuildNoticesAdmin = (form) => {
  const wrap = form.querySelector("#noticesAdminFields");
  if (!wrap || !adminDraft) return;
  const notices = adminDraft.notices || [];
  wrap.innerHTML = notices.map((notice, i) => `
    <div class="time-block" data-notice-block="${i}">
      <div class="time-block-head">
        <h4>공지 ${i + 1}</h4>
        <div class="admin-inline-actions">
          <button type="button" class="admin-mini-btn" data-notice-up="${i}" ${i === 0 ? "disabled" : ""}>위로</button>
          <button type="button" class="admin-mini-btn" data-notice-down="${i}" ${i === notices.length - 1 ? "disabled" : ""}>아래로</button>
          <button type="button" class="admin-mini-btn" data-remove-notice="${i}">이 공지 삭제</button>
        </div>
      </div>
      <div class="field"><label>제목</label><input name="notice${i}Title" /></div>
      <div class="field"><label>날짜</label><input name="notice${i}Date" /></div>
      <div class="field"><label>본문</label><textarea name="notice${i}Body"></textarea></div>
      <label class="field-check"><input type="checkbox" name="notice${i}Important" /> 중요 표시</label>
    </div>
  `).join("") + `
    <div class="admin-inline-actions">
      <button type="button" class="admin-mini-btn" data-add-notice>공지 추가</button>
    </div>`;
  notices.forEach((notice, i) => {
    if (form.elements[`notice${i}Title`]) form.elements[`notice${i}Title`].value = notice.title || "";
    if (form.elements[`notice${i}Date`]) form.elements[`notice${i}Date`].value = notice.date || "";
    if (form.elements[`notice${i}Body`]) form.elements[`notice${i}Body`].value = notice.body || "";
    if (form.elements[`notice${i}Important`]) form.elements[`notice${i}Important`].checked = !!notice.important;
  });
};

const bindSlideNoticeAdmin = (form) => {
  const slidesWrap = form.querySelector("#slidesAdminFields");
  if (slidesWrap && slidesWrap.dataset.bound !== "1") {
    slidesWrap.dataset.bound = "1";
    slidesWrap.addEventListener("click", (event) => {
      if (!adminDraft) return;
      if (event.target.closest("[data-add-slide]")) {
        adminDraft.slides = readSlidesFromForm(form);
        adminDraft.slides.push(emptySlide());
        rebuildSlidesAdmin(form);
        return;
      }
      const remove = event.target.closest("[data-remove-slide]");
      if (remove) {
        adminDraft.slides = readSlidesFromForm(form);
        if (adminDraft.slides.length <= 1) return;
        adminDraft.slides.splice(Number(remove.dataset.removeSlide), 1);
        rebuildSlidesAdmin(form);
        return;
      }
      const up = event.target.closest("[data-slide-up]");
      if (up) {
        const i = Number(up.dataset.slideUp);
        adminDraft.slides = swapItems(readSlidesFromForm(form), i, i - 1);
        rebuildSlidesAdmin(form);
        return;
      }
      const down = event.target.closest("[data-slide-down]");
      if (!down) return;
      const i = Number(down.dataset.slideDown);
      adminDraft.slides = swapItems(readSlidesFromForm(form), i, i + 1);
      rebuildSlidesAdmin(form);
    });
  }
  const noticesWrap = form.querySelector("#noticesAdminFields");
  if (noticesWrap && noticesWrap.dataset.bound !== "1") {
    noticesWrap.dataset.bound = "1";
    noticesWrap.addEventListener("click", (event) => {
      if (!adminDraft) return;
      if (event.target.closest("[data-add-notice]")) {
        adminDraft.notices = readNoticesFromForm(form);
        adminDraft.notices.push(emptyNotice());
        rebuildNoticesAdmin(form);
        return;
      }
      const remove = event.target.closest("[data-remove-notice]");
      if (remove) {
        adminDraft.notices = readNoticesFromForm(form);
        adminDraft.notices.splice(Number(remove.dataset.removeNotice), 1);
        rebuildNoticesAdmin(form);
        return;
      }
      const up = event.target.closest("[data-notice-up]");
      if (up) {
        const i = Number(up.dataset.noticeUp);
        adminDraft.notices = swapItems(readNoticesFromForm(form), i, i - 1);
        rebuildNoticesAdmin(form);
        return;
      }
      const down = event.target.closest("[data-notice-down]");
      if (!down) return;
      const i = Number(down.dataset.noticeDown);
      adminDraft.notices = swapItems(readNoticesFromForm(form), i, i + 1);
      rebuildNoticesAdmin(form);
    });
  }
};

const fillCurriculumAdmin = () => {
  const form = document.querySelector("#adminForm");
  if (!form) return;
  const data = currentData();
  adminDraft = normalizePage(deepCopy(data), currentPage());
  if (!Array.isArray(adminDraft.slides) || !adminDraft.slides.length) {
    adminDraft.slides = deepCopy((DEFAULT_CURRICULUM[currentPage()] || DEFAULT_CURRICULUM.elementary).slides);
  }
  if (!Array.isArray(adminDraft.notices)) adminDraft.notices = [];
  bindSlideNoticeAdmin(form);
  rebuildSlidesAdmin(form);
  rebuildNoticesAdmin(form);
  fillTimetableAdmin(form, adminDraft, { keepDraft: true });
  fillPageCopyAdmin(form, adminDraft);
};

const saveCurriculumAdmin = () => {
  const form = document.querySelector("#adminForm");
  if (!form) return true;
  const all = loadCurriculum();
  const page = currentPage();
  const next = readPageCopyAdmin(form, deepCopy(all[page]));
  next.slides = readSlidesFromForm(form);
  next.notices = readNoticesFromForm(form);
  Object.assign(next, readTimetableAdmin(form, next));
  all[page] = next;
  return saveCurriculum(all);
};

const resetCurriculumAdmin = () => {
  const form = document.querySelector("#adminForm");
  if (!form) return;
  const current = currentData();
  const defaults = DEFAULT_CURRICULUM[currentPage()] || DEFAULT_CURRICULUM.elementary;
  adminDraft = normalizePage(deepCopy(current), currentPage());
  adminDraft.slides = deepCopy(defaults.slides);
  adminDraft.notices = deepCopy(defaults.notices);
  bindSlideNoticeAdmin(form);
  rebuildSlidesAdmin(form);
  rebuildNoticesAdmin(form);
  fillTimetableAdmin(form, adminDraft, { keepDraft: true });
  fillPageCopyAdmin(form, adminDraft);
};

const renderCurriculumPage = () => {
  const grades = currentData().grades || [];
  if (selectedGradeIndex >= grades.length) selectedGradeIndex = 0;
  const data = currentData();
  const dept = document.querySelector("[data-dept-label]");
  if (dept) dept.textContent = data.label;
  document.querySelectorAll("[data-board]").forEach((el) => {
    const key = el.dataset.board;
    if (data[key] != null) el.textContent = data[key];
  });
  const hero = document.querySelector(".dept-hero");
  if (hero) hero.setAttribute("aria-label", `${data.label || ""} 배너`.trim());
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
