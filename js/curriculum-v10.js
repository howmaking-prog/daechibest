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

const emptyTerm = () => ({ period: "", rows: [] });

const padTerms = (terms, count) => {
  const list = Array.isArray(terms) ? terms : [];
  return Array.from({ length: count }, (_, i) => {
    const term = list[i] || emptyTerm();
    return {
      period: term.period || "",
      rows: Array.isArray(term.rows) ? deepCopy(term.rows) : []
    };
  });
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
  const termCount = Math.max(
    timetable.length,
    ...savedGrades.map((grade) => (Array.isArray(grade.terms) ? grade.terms.length : 0)),
    1
  );
  next.timetable = Array.from({ length: termCount }, (_, i) => {
    const item = timetable[i] || {};
    return {
      name: item.name || `학기 ${i + 1}`,
      period: item.period || "",
      rows: Array.isArray(item.rows) ? item.rows : []
    };
  });
  if (hasSavedGrades) {
    next.grades = savedGrades.map((prev, i) => ({
      name: (prev.name || "").trim() || names[i] || `학년 ${i + 1}`,
      terms: padTerms(prev.terms, termCount)
    }));
    return next;
  }
  next.grades = names.map((name, i) => {
    const fallback = i === 0
      ? next.timetable.map((item) => ({
          period: item.period || "",
          rows: deepCopy(item.rows || [])
        }))
      : next.timetable.map(() => emptyTerm());
    return { name, terms: padTerms(fallback, termCount) };
  });
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
  const cols = (data && data.columns) || ["", "", ""];
  if (form.elements.col1) form.elements.col1.value = cols[0] || "";
  if (form.elements.col2) form.elements.col2.value = cols[1] || "";
  if (form.elements.col3) form.elements.col3.value = cols[2] || "";
  const grade = ((data && data.grades) || [])[gradeIndex] || { terms: [] };
  (data.timetable || []).forEach((item, i) => {
    const n = i + 1;
    const term = (grade.terms || [])[i] || {};
    const block = form.querySelector(`[data-term="${n}"]`);
    const rowCount = Number(block?.dataset.rows || 0);
    if (form.elements[`time${n}Name`]) form.elements[`time${n}Name`].value = item.name || "";
    if (form.elements[`time${n}Period`]) form.elements[`time${n}Period`].value = term.period || "";
    for (let r = 1; r <= rowCount; r += 1) {
      const row = (term.rows && term.rows[r - 1]) || ["", "", ""];
      for (let c = 1; c <= 3; c += 1) {
        const field = form.elements[`time${n}r${r}c${c}`];
        if (field) field.value = row[c - 1] || "";
      }
    }
  });
};

const readVisibleGradeIntoData = (form, pageData, gradeIndex, keepEmpty = true) => {
  const next = deepCopy(pageData);
  const termCount = (next.timetable || []).length;
  next.timetable = Array.from({ length: termCount }, (_, i) => {
    const n = i + 1;
    const prev = next.timetable[i] || {};
    return {
      ...prev,
      name: withFormText(form, `time${n}Name`, prev.name || "")
    };
  });
  if (form.elements.col1) {
    next.columns = [
      withFormText(form, "col1", ""),
      withFormText(form, "col2", ""),
      withFormText(form, "col3", "")
    ];
  }
  (next.grades || []).forEach((grade, i) => {
    grade.name = withFormText(form, `gradeName${i}`, grade.name || "");
  });
  if (!next.grades || !next.grades[gradeIndex]) return next;
  next.grades[gradeIndex] = {
    ...next.grades[gradeIndex],
    terms: next.timetable.map((_, i) => {
      const n = i + 1;
      const block = form.querySelector(`[data-term="${n}"]`);
      const rowCount = Number(block?.dataset.rows || 0);
      const rows = [];
      for (let r = 1; r <= rowCount; r += 1) {
        const cells = [1, 2, 3].map((c) => (form.elements[`time${n}r${r}c${c}`]?.value || "").trim());
        if (keepEmpty || cells.some((cell) => cell)) rows.push(cells);
      }
      return {
        period: withFormText(form, `time${n}Period`, ""),
        rows
      };
    })
  };
  return next;
};

const rebuildTimetableAdmin = (form) => {
  const wrap = form.querySelector("#timetableAdminFields");
  if (!wrap || !adminDraft) return;
  const grades = adminDraft.grades || [];
  const timetable = adminDraft.timetable || [];
  const grade = grades[adminGradeIndex] || { terms: [] };
  if (adminGradeIndex >= grades.length) adminGradeIndex = 0;
  const columnFields = `
    <div class="time-row-fields">
      <div class="field"><label>1열 이름</label><input name="col1" placeholder="요일" /></div>
      <div class="field"><label>2열 이름</label><input name="col2" placeholder="시간" /></div>
      <div class="field"><label>3열 이름</label><input name="col3" placeholder="수업" /></div>
    </div>
    <p class="time-row-label">학년</p>
    <div class="admin-grade-list" id="adminGradeTabs">
      ${grades.map((item, i) => `
        <div class="admin-grade-item ${i === adminGradeIndex ? "is-active" : ""}">
          <button type="button" class="admin-grade-pick" data-admin-grade="${i}">선택</button>
          <input name="gradeName${i}" value="${escapeHtml(item.name || "")}" aria-label="학년 이름" />
          <button type="button" class="admin-mini-btn" data-remove-grade="${i}" ${grades.length <= 1 ? "disabled" : ""}>삭제</button>
        </div>
      `).join("")}
    </div>
    <div class="admin-inline-actions">
      <button type="button" class="admin-mini-btn" data-add-grade>학년 추가</button>
    </div>
  `;
  const blocks = timetable.map((item, i) => {
    const n = i + 1;
    const term = (grade.terms || [])[i] || emptyTerm();
    const rowCount = Math.max((term.rows || []).length, 1);
    const rows = Array.from({ length: rowCount }, (_, ri) => {
      const r = ri + 1;
      return `
        <div class="time-row-wrap">
          <div class="time-row-head">
            <p class="time-row-label">${r}줄</p>
            <button type="button" class="admin-mini-btn" data-remove-row="${i}:${ri}">이 줄 삭제</button>
          </div>
          <div class="time-row-fields">
            <div class="field"><label>1열</label><input name="time${n}r${r}c1" /></div>
            <div class="field"><label>2열</label><input name="time${n}r${r}c2" /></div>
            <div class="field"><label>3열</label><input name="time${n}r${r}c3" /></div>
          </div>
        </div>
      `;
    }).join("");
    return `
      <div class="time-block" data-term="${n}" data-rows="${rowCount}">
        <div class="time-block-head">
          <h4>시간표 ${n}</h4>
          <button type="button" class="admin-mini-btn" data-remove-term="${i}" ${timetable.length <= 1 ? "disabled" : ""}>이 학기 삭제</button>
        </div>
        <div class="field"><label>왼쪽 목록 이름</label><input name="time${n}Name" placeholder="1학기" /></div>
        <div class="field"><label>부제</label><input name="time${n}Period" placeholder="3월 – 6월" /></div>
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
  wrap.addEventListener("focusin", (event) => {
    if (!adminDraft) return;
    const input = event.target.closest("input[name^='gradeName']");
    if (!input) return;
    const nextIndex = Number(String(input.name).replace("gradeName", ""));
    if (Number.isNaN(nextIndex) || nextIndex === adminGradeIndex) return;
    adminDraft = readVisibleGradeIntoData(form, adminDraft, adminGradeIndex, true);
    adminGradeIndex = nextIndex;
    rebuildTimetableAdmin(form);
    form.elements[`gradeName${nextIndex}`]?.focus();
  });
  wrap.addEventListener("click", (event) => {
    if (!adminDraft) return;
    const pick = event.target.closest("[data-admin-grade]");
    if (pick) {
      const nextIndex = Number(pick.dataset.adminGrade);
      if (nextIndex === adminGradeIndex) return;
      adminDraft = readVisibleGradeIntoData(form, adminDraft, adminGradeIndex, true);
      adminGradeIndex = nextIndex;
      rebuildTimetableAdmin(form);
      return;
    }
    if (event.target.closest("[data-add-grade]")) {
      applyAdminChange(form, (draft) => {
        const count = (draft.timetable || []).length;
        draft.grades = draft.grades || [];
        draft.grades.push({
          name: `학년 ${draft.grades.length + 1}`,
          terms: Array.from({ length: count }, () => emptyTerm())
        });
        adminGradeIndex = draft.grades.length - 1;
      });
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
    if (event.target.closest("[data-add-term]")) {
      applyAdminChange(form, (draft) => {
        draft.timetable = draft.timetable || [];
        draft.timetable.push({ name: "새 학기", period: "", rows: [] });
        (draft.grades || []).forEach((grade) => {
          grade.terms = grade.terms || [];
          grade.terms.push(emptyTerm());
        });
      });
      return;
    }
    const removeTerm = event.target.closest("[data-remove-term]");
    if (removeTerm) {
      applyAdminChange(form, (draft) => {
        if ((draft.timetable || []).length <= 1) return;
        const idx = Number(removeTerm.dataset.removeTerm);
        draft.timetable.splice(idx, 1);
        (draft.grades || []).forEach((grade) => {
          if (Array.isArray(grade.terms)) grade.terms.splice(idx, 1);
        });
      });
      return;
    }
    const addRow = event.target.closest("[data-add-row]");
    if (addRow) {
      applyAdminChange(form, (draft) => {
        const idx = Number(addRow.dataset.addRow);
        const grade = (draft.grades || [])[adminGradeIndex];
        if (!grade) return;
        grade.terms = grade.terms || [];
        if (!grade.terms[idx]) grade.terms[idx] = emptyTerm();
        grade.terms[idx].rows = grade.terms[idx].rows || [];
        grade.terms[idx].rows.push(["", "", ""]);
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
  if (selectedTermIndex >= (data.timetable || []).length) selectedTermIndex = 0;
  list.innerHTML = data.timetable.map((item, index) => `
    <li>
      <button type="button" data-time="${index}">${escapeHtml(item.name)}</button>
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
  const current = currentData();
  const defaults = DEFAULT_CURRICULUM[currentPage()] || DEFAULT_CURRICULUM.elementary;
  adminDraft = normalizePage(deepCopy(current), currentPage());
  adminDraft.slides = deepCopy(defaults.slides);
  adminDraft.notices = deepCopy(defaults.notices);
  bindSlideNoticeAdmin(form);
  rebuildSlidesAdmin(form);
  rebuildNoticesAdmin(form);
  fillTimetableAdmin(form, adminDraft, { keepDraft: true });
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
