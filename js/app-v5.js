// 학원 공통 콘텐츠. 관리자가 저장하면 LocalStorage 값이 기본값을 덮어씁니다.
const STORAGE_KEY = "daechibest_homepage_v5";
const ASSET_VER = "5";
const DEFAULT_LOGO = `img/logo.png?v=${ASSET_VER}`;
const DEFAULT_CONTENT = {
  academyName: "대치베스트 어학원",
  logoText: "대",
  logoImage: DEFAULT_LOGO,
  heroSlogan: "대치동의 기준이 되는 영어",
  heroSub: "초등부터 고등까지, 실력과 자신감을 함께 키우는 대치베스트 어학원입니다. 소수 정예 수업과 체계적인 레벨 관리로 한 명 한 명의 성장을 책임집니다.",
  heroCta: "상담 예약하기",
  // 메인 오른쪽 패널 문구. 관리자 설정에서 바꿀 수 있습니다.
  heroPanelTitle: "Trust. Proven. Growth.",
  heroPanelSub: "대치동 영어 교육의 기본을 지키며, 학생의 다음 단계를 설계합니다.",
  heroStat1Title: "초·중·고",
  heroStat1Desc: "연계 커리큘럼",
  heroStat2Title: "콘텐츠",
  heroStat2Desc: "연구 시스템",
  heroStat3Title: "강사진",
  heroStat3Desc: "맞춤 밀착관리",
  aboutTitle: "실력의 기본을 세우는 학원",
  aboutText: "대치베스트 어학원은 초·중·고 영어를 한 흐름으로 가르치는 대치동 영어 전문 학원입니다.\n\n문법, 독해, 어휘, 작문을 학년별 목표에 맞게 나누고, 수업 이후 복습과 클리닉까지 연결해 성적이 쌓이는 구조를 만듭니다.",
  feature1Title: "소수 정예 맞춤 수업",
  feature1Desc: "학생 수보다 수업의 밀도를 우선합니다. 현재 레벨과 목표 학교에 맞춰 진도와 숙제를 조정합니다.",
  feature2Title: "체계적인 레벨 관리",
  feature2Desc: "입학 상담부터 월간 성취 점검까지, 실력 변화를 숫자와 피드백으로 확인할 수 있게 운영합니다.",
  feature3Title: "내신과 수능의 균형",
  feature3Desc: "학교 시험과 장기 입시를 따로 두지 않습니다. 학년별 우선순위를 분명히 해 시간을 낭비하지 않습니다.",
  address: "서울 강남구 선릉로 64길 11-2, 6층",
  phone: "02-556-3510",
  hours: "평일: 14:00 ~ 22:00\n토요일: 10:00 ~ 18:00\n일요일 휴무",
  directions: "서울 강남구 선릉로 64길 11-2, 6층에 있습니다. 방문 전 전화로 상담 시간을 예약해 주세요."
};

// 예전에 저장해 둔 임시 연락처는 새 기본값으로 바꿉니다.
const LEGACY_CONTACT = {
  address: "서울특별시 강남구 대치동 (대치역 인근)",
  phone: "02-555-1212",
  hours: "평일 13:00 – 22:00\n토요일 10:00 – 18:00\n일요일·공휴일 휴무",
  directions: "3호선 대치역 인근, 도보 이동이 편리한 위치에 있습니다. 방문 전 전화로 상담 시간을 예약해 주세요."
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

// 설정에서 새로 고른 로고. null이면 기존 값을 유지합니다.
let pendingLogoImage = null;

const logoSrc = (data) => {
  const src = data && data.logoImage ? data.logoImage : DEFAULT_LOGO;
  // 예전에 저장된 경로에도 캐시 방지용 버전을 붙입니다.
  if (src === "img/logo.png") return DEFAULT_LOGO;
  return src;
};

const applyLogos = (data) => {
  const src = logoSrc(data);
  $$("[data-logo]").forEach((img) => {
    img.src = src;
    img.alt = `${data.academyName || "대치베스트 어학원"} 로고`;
  });
  const preview = $("#logoPreview");
  if (preview) preview.src = src;
};

const loadContent = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { ...DEFAULT_CONTENT };
    const saved = JSON.parse(raw);
    const merged = { ...DEFAULT_CONTENT, ...saved };
    Object.keys(LEGACY_CONTACT).forEach((key) => {
      if (saved[key] === LEGACY_CONTACT[key]) merged[key] = DEFAULT_CONTENT[key];
    });
    return merged;
  } catch (error) {
    console.error("저장 내용을 읽는 중 문제가 발생했습니다.", error);
    return { ...DEFAULT_CONTENT };
  }
};

const saveContent = (data) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    return true;
  } catch (error) {
    console.error("저장 중 문제가 발생했습니다.", error);
    showToast("저장에 실패했습니다. 브라우저 저장 공간을 확인해 주세요.");
    return false;
  }
};

const applyContent = (data) => {
  $$("[data-bind]").forEach((el) => {
    const key = el.dataset.bind;
    if (!Object.prototype.hasOwnProperty.call(data, key)) return;
    if (key === "logoImage") return;
    el.textContent = data[key];
  });

  applyLogos(data);

  $$("[data-phone-link]").forEach((el) => {
    el.href = `tel:${String(data.phone || "").replace(/\s+/g, "")}`;
  });

  const map = $("#mapFrame");
  if (map && data.address) {
    map.src = `https://maps.google.com/maps?q=${encodeURIComponent(data.address)}&z=16&output=embed`;
  }

  const page = document.body.dataset.page;
  const names = { elementary: "초등부", middle: "중등부", high: "고등부" };
  document.title = page && names[page]
    ? `${names[page]} | ${data.academyName}`
    : (data.academyName || "대치베스트 어학원");
};

const fillAdminForm = (data) => {
  const form = $("#adminForm");
  if (!form) return;
  Object.keys(DEFAULT_CONTENT).forEach((key) => {
    const field = form.elements[key];
    if (!field || field.type === "file") return;
    field.value = data[key] || "";
  });
  pendingLogoImage = null;
  const preview = $("#logoPreview");
  if (preview) preview.src = logoSrc(data);
  const file = $("#logoFile");
  if (file) file.value = "";
};

const readAdminForm = () => {
  const form = $("#adminForm");
  const next = { ...loadContent() };
  if (!form) return next;
  Object.keys(DEFAULT_CONTENT).forEach((key) => {
    const field = form.elements[key];
    if (!field || field.type === "file") return;
    next[key] = String(field.value).trim();
  });
  if (pendingLogoImage !== null) next.logoImage = pendingLogoImage;
  return next;
};

const readLogoFile = (file) => new Promise((resolve, reject) => {
  // 올린 이미지는 저장 용량을 위해 작게 맞춘 뒤 사용합니다.
  try {
    if (!file || !file.type.startsWith("image/")) {
      reject(new Error("이미지 파일만 올릴 수 있습니다."));
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      const image = new Image();
      image.onload = () => {
        const max = 256;
        const scale = Math.min(1, max / Math.max(image.width, image.height));
        const canvas = document.createElement("canvas");
        canvas.width = Math.max(1, Math.round(image.width * scale));
        canvas.height = Math.max(1, Math.round(image.height * scale));
        const ctx = canvas.getContext("2d");
        ctx.fillStyle = "#000000";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
        resolve(canvas.toDataURL("image/png"));
      };
      image.onerror = () => reject(new Error("이미지를 읽지 못했습니다."));
      image.src = String(reader.result);
    };
    reader.onerror = () => reject(new Error("파일을 읽지 못했습니다."));
    reader.readAsDataURL(file);
  } catch (error) {
    reject(error);
  }
});

const showToast = (message) => {
  const toast = $("#toast");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  window.setTimeout(() => toast.classList.remove("show"), 2200);
};

const openAdmin = () => {
  fillAdminForm(loadContent());
  if (typeof window.fillCurriculumAdmin === "function") window.fillCurriculumAdmin();
  $("#adminOverlay").classList.add("open");
  document.body.style.overflow = "hidden";
};

const closeAdmin = () => {
  $("#adminOverlay").classList.remove("open");
  document.body.style.overflow = "";
};

const initNav = () => {
  const toggle = $("#menuToggle");
  const nav = $("#navWrap");
  if (toggle && nav) {
    toggle.addEventListener("click", () => nav.classList.toggle("open"));
  }
  // 모바일 메뉴를 닫고, 같은 페이지의 앵커만 부드럽게 이동합니다.
  $$(".nav-list a").forEach((link) => {
    link.addEventListener("click", (event) => {
      const href = link.getAttribute("href") || "";
      if (nav) nav.classList.remove("open");
      if (!href.startsWith("#")) return;
      const target = document.querySelector(href);
      if (!target) return;
      event.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
      history.pushState(null, "", href);
    });
  });
  $$(".header-cta").forEach((link) => {
    link.addEventListener("click", () => nav && nav.classList.remove("open"));
  });
};

const initLogoAdmin = () => {
  const file = $("#logoFile");
  const clearBtn = $("#logoClear");
  const preview = $("#logoPreview");
  if (file) {
    file.addEventListener("change", () => {
      const picked = file.files && file.files[0];
      if (!picked) return;
      readLogoFile(picked)
        .then((dataUrl) => {
          pendingLogoImage = dataUrl;
          if (preview) preview.src = dataUrl;
          showToast("로고를 올렸습니다. 저장을 누르면 반영됩니다.");
        })
        .catch((error) => {
          console.error("로고를 읽는 중 문제가 발생했습니다.", error);
          showToast(error.message || "로고를 올리지 못했습니다.");
        });
    });
  }
  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      pendingLogoImage = DEFAULT_LOGO;
      if (preview) preview.src = DEFAULT_LOGO;
      if (file) file.value = "";
    });
  }
};

const initAdmin = () => {
  initLogoAdmin();
  const openBtn = $("#adminOpen");
  const closeBtn = $("#adminClose");
  const overlay = $("#adminOverlay");
  const saveBtn = $("#saveBtn");
  const resetBtn = $("#resetBtn");
  if (!openBtn || !overlay) return;

  openBtn.addEventListener("click", openAdmin);
  if (closeBtn) closeBtn.addEventListener("click", closeAdmin);
  overlay.addEventListener("click", (event) => {
    if (event.target.id === "adminOverlay") closeAdmin();
  });
  if (saveBtn) {
    saveBtn.addEventListener("click", () => {
      const data = readAdminForm();
      if (!data.academyName) {
        showToast("학원 이름은 반드시 입력해 주세요.");
        return;
      }
      if ($("#adminForm") && $("#adminForm").elements.heroSlogan && !data.heroSlogan) {
        showToast("학원 이름과 슬로건은 반드시 입력해 주세요.");
        return;
      }
      if (!saveContent(data)) return;
      if (typeof window.saveCurriculumAdmin === "function") {
        const ok = window.saveCurriculumAdmin();
        if (!ok) return;
      }
      applyContent(data);
      if (typeof window.renderCurriculumPage === "function") window.renderCurriculumPage();
      closeAdmin();
      showToast("저장되었습니다. 화면에 반영했어요.");
    });
  }
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      const ok = window.confirm("처음 기본 내용으로 되돌릴까요? 저장 버튼을 눌러야 화면에 반영됩니다.");
      if (!ok) return;
      fillAdminForm(DEFAULT_CONTENT);
      pendingLogoImage = DEFAULT_LOGO;
      const preview = $("#logoPreview");
      if (preview) preview.src = DEFAULT_LOGO;
      if (typeof window.resetCurriculumAdmin === "function") window.resetCurriculumAdmin();
    });
  }
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeAdmin();
      const modal = $("#noticeModal");
      if (modal) modal.classList.remove("is-open");
    }
  });
  if (window.location.hash === "#admin") openAdmin();
};

const init = () => {
  try {
    const year = $("#year");
    if (year) year.textContent = String(new Date().getFullYear());
        applyContent(loadContent());
        initNav();
        initAdmin();
        if (typeof window.renderCurriculumPage === "function") window.renderCurriculumPage();
        if (typeof window.initCurriculumUI === "function") window.initCurriculumUI();
  } catch (error) {
    console.error("페이지를 준비하는 중 문제가 발생했습니다.", error);
  }
};

window.DaechiBest = {
  $, $$, loadContent, saveContent, applyContent, showToast, DEFAULT_CONTENT
};

document.addEventListener("DOMContentLoaded", init);
