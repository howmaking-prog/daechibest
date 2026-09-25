// 학원 공통 콘텐츠. 저장하면 GitHub의 공유 파일과 이 기기에 함께 남깁니다.
const STORAGE_KEY = "daechibest_homepage_v5";
const STORE_KEY = "daechibest_sync_v6";
const TOKEN_KEY = "daechibest_github_token";
const ADMIN_PASS_KEY = "daechibest_admin_pass";
const ADMIN_UNLOCK_KEY = "daechibest_admin_ok";
const ADMIN_PASS_DEFAULT = "best1369";
const ASSET_VER = "6";
const DEFAULT_LOGO = `img/logo.png?v=${ASSET_VER}`;
const REPO_FILE = "data/site.json";
const REPO_RAW_URL = "https://raw.githubusercontent.com/howmaking-prog/daechibest/main/data/site.json";
const REPO_API_URL = "https://api.github.com/repos/howmaking-prog/daechibest/contents/data/site.json";
const LOGO_FILE_PATH = "img/logo-custom.png";
const LOGO_API_URL = "https://api.github.com/repos/howmaking-prog/daechibest/contents/img/logo-custom.png";
const TOKEN_CREATE_URL = "https://github.com/settings/tokens/new?scopes=public_repo&description=daechibest";
const CURRICULUM_PAGES = ["elementary", "middle", "high"];
const SHARED_HOME_KEYS = ["academyName", "logoImage", "phone", "hours", "address"];
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

const currentSitePage = () => document.body.dataset.page || "home";
const isCurriculumPage = () => CURRICULUM_PAGES.includes(currentSitePage());
const isDataImage = (src) => String(src || "").startsWith("data:image/");

// 설정에서 새로 고른 로고. null이면 기존 값을 유지합니다.
let pendingLogoImage = null;
let memory = { v: 6, updatedAt: 0, homepage: null, curriculum: null, homepageUpdatedAt: 0, curriculumUpdatedAt: {} };
let editStamp = { homepageAt: 0, pageAt: 0, homepage: null };

const mergeHomepage = (saved) => {
  const merged = { ...DEFAULT_CONTENT, ...(saved || {}) };
  Object.keys(LEGACY_CONTACT).forEach((key) => {
    if (saved && saved[key] === LEGACY_CONTACT[key]) merged[key] = DEFAULT_CONTENT[key];
  });
  return merged;
};

const readLocalPayload = () => {
  try {
    const raw = localStorage.getItem(STORE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      return {
        v: 6,
        updatedAt: Number(parsed.updatedAt) || 0,
        homepage: mergeHomepage(parsed.homepage),
        curriculum: parsed.curriculum || null,
        homepageUpdatedAt: Number(parsed.homepageUpdatedAt) || 0,
        curriculumUpdatedAt: parsed.curriculumUpdatedAt || {}
      };
    }
  } catch (error) {
    console.error("공유 저장 내용을 읽는 중 문제가 발생했습니다.", error);
  }
  try {
    const old = localStorage.getItem(STORAGE_KEY);
    if (old) {
      return {
        v: 6,
        updatedAt: 0,
        homepage: mergeHomepage(JSON.parse(old)),
        curriculum: null
      };
    }
  } catch (error) {
    console.error("이전 저장 내용을 읽는 중 문제가 발생했습니다.", error);
  }
  return { v: 6, updatedAt: 0, homepage: { ...DEFAULT_CONTENT }, curriculum: null };
};

const writeLocalPayload = (payload) => {
  memory = {
    v: 6,
    updatedAt: Number(payload.updatedAt) || Date.now(),
    homepage: mergeHomepage(payload.homepage),
    curriculum: payload.curriculum || null,
    homepageUpdatedAt: Number(payload.homepageUpdatedAt) || 0,
    curriculumUpdatedAt: payload.curriculumUpdatedAt || {}
  };
  try {
    localStorage.setItem(STORE_KEY, JSON.stringify(memory));
    try {
      localStorage.removeItem("daechibest_curriculum");
    } catch (error) {
      console.error("이전 저장 키를 정리하지 못했습니다.", error);
    }
    return true;
  } catch (error) {
    console.error("저장 중 문제가 발생했습니다.", error);
    showToast("저장에 실패했습니다. 브라우저 저장 공간을 확인해 주세요.");
    return false;
  }
};

const getToken = () => {
  try {
    return String(localStorage.getItem(TOKEN_KEY) || "").trim();
  } catch (error) {
    return "";
  }
};

const setToken = (token) => {
  try {
    const value = String(token || "").trim();
    if (value) localStorage.setItem(TOKEN_KEY, value);
  } catch (error) {
    console.error("토큰을 저장하는 중 문제가 발생했습니다.", error);
  }
};

const rememberTokenFromForm = () => {
  const form = $("#adminForm");
  const field = form && form.elements.githubToken;
  if (field && String(field.value || "").trim()) setToken(field.value);
};

// 관리자 비밀번호는 처음값 best1369이고, 설정에서 바꾼 값만 이 기기·공유 저장에 남깁니다.
const getAdminPass = () => {
  try {
    const local = String(localStorage.getItem(ADMIN_PASS_KEY) || "").trim();
    if (local) return local;
  } catch (error) {
    console.error("관리자 비밀번호를 읽는 중 문제가 발생했습니다.", error);
  }
  const fromSite = memory.homepage && memory.homepage.adminPass;
  if (fromSite && String(fromSite).trim()) return String(fromSite).trim();
  return ADMIN_PASS_DEFAULT;
};

const setAdminPass = (value) => {
  const next = String(value || "").trim();
  if (!next) return "";
  try {
    localStorage.setItem(ADMIN_PASS_KEY, next);
  } catch (error) {
    console.error("관리자 비밀번호를 저장하는 중 문제가 발생했습니다.", error);
  }
  return next;
};

const rememberAdminPassFromForm = () => {
  const form = $("#adminForm");
  const field = form && form.elements.adminPassword;
  const value = field && String(field.value || "").trim();
  if (!value) return "";
  return setAdminPass(value);
};

const isAdminUnlocked = () => {
  try {
    return sessionStorage.getItem(ADMIN_UNLOCK_KEY) === "1";
  } catch (error) {
    return false;
  }
};

const markAdminUnlocked = () => {
  try {
    sessionStorage.setItem(ADMIN_UNLOCK_KEY, "1");
  } catch (error) {
    console.error("관리자 잠금 해제를 기억하는 중 문제가 발생했습니다.", error);
  }
};

const updateSyncStatus = () => {
  const status = $("#syncStatus");
  if (!status) return;
  const connected = !!getToken();
  status.textContent = connected
    ? "연결됨 · 저장하면 PC와 휴대폰에 함께 반영됩니다."
    : "미연결 · 토큰을 붙여넣어야 다른 기기에도 저장됩니다.";
  status.classList.toggle("is-on", connected);
  status.classList.toggle("is-off", !connected);
};

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

const loadContent = () => mergeHomepage(memory.homepage);

const saveContent = (data) => {
  const curriculum = typeof window.getCurriculumStore === "function"
    ? window.getCurriculumStore()
    : memory.curriculum;
  return writeLocalPayload({
    updatedAt: Date.now(),
    homepage: data,
    curriculum
  });
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
  const tokenField = form.elements.githubToken;
  if (tokenField && !String(tokenField.value || "").trim()) tokenField.value = getToken();
  const passField = form.elements.adminPassword;
  if (passField) passField.value = "";
  updateSyncStatus();
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
  const passField = form.elements.adminPassword;
  if (passField && String(passField.value || "").trim()) {
    next.adminPass = String(passField.value).trim();
  }
  return next;
};

const readLogoFile = (file) => new Promise((resolve, reject) => {
  // 올린 이미지는 파일로 두기 위해 크기만 맞추고, 검은 배경은 씌우지 않습니다.
  try {
    if (!file || !file.type.startsWith("image/")) {
      reject(new Error("이미지 파일만 올릴 수 있습니다."));
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      const image = new Image();
      image.onload = () => {
        const max = 512;
        const scale = Math.min(1, max / Math.max(image.width, image.height));
        const canvas = document.createElement("canvas");
        canvas.width = Math.max(1, Math.round(image.width * scale));
        canvas.height = Math.max(1, Math.round(image.height * scale));
        const ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height);
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
  window.setTimeout(() => toast.classList.remove("show"), 3200);
};

const toBase64 = (text) => {
  const bytes = new TextEncoder().encode(text);
  let binary = "";
  bytes.forEach((byte) => {
    binary += String.fromCharCode(byte);
  });
  return btoa(binary);
};

const parseRemote = (data) => {
  if (!data || typeof data !== "object") return null;
  return {
    v: 6,
    updatedAt: Number(data.updatedAt) || 0,
    homepage: data.homepage ? mergeHomepage(data.homepage) : null,
    curriculum: data.curriculum || null,
    homepageUpdatedAt: Number(data.homepageUpdatedAt) || 0,
    curriculumUpdatedAt: data.curriculumUpdatedAt || {}
  };
};

const fetchJson = async (url) => {
  const res = await fetch(`${url}${url.includes("?") ? "&" : "?"}t=${Date.now()}`, {
    cache: "no-store",
    headers: { Accept: "application/json" }
  });
  if (!res.ok) throw new Error("remote");
  return res.json();
};

const pullRemote = async () => {
  const urls = [REPO_RAW_URL, REPO_FILE];
  for (const url of urls) {
    try {
      const parsed = parseRemote(await fetchJson(url));
      if (parsed) return parsed;
    } catch (error) {
      console.error("공유 저장 내용을 불러오지 못했습니다.", error);
    }
  }
  return null;
};

const applyRemote = (remote) => {
  if (!remote) return;
  const next = {
    updatedAt: remote.updatedAt || Date.now(),
    homepage: remote.homepage || loadContent(),
    curriculum: remote.curriculum || memory.curriculum,
    homepageUpdatedAt: Number(remote.homepageUpdatedAt) || 0,
    curriculumUpdatedAt: remote.curriculumUpdatedAt || {}
  };
  writeLocalPayload(next);
  applyContent(loadContent());
  if (next.curriculum && typeof window.setCurriculumStore === "function") {
    window.setCurriculumStore(next.curriculum);
    if (typeof window.renderCurriculumPage === "function") window.renderCurriculumPage();
  }
  if ($("#adminOverlay") && $("#adminOverlay").classList.contains("open")) {
    fillAdminForm(loadContent());
    if (typeof window.fillCurriculumAdmin === "function") window.fillCurriculumAdmin();
  }
};

const githubHeaders = (token) => ({
  Accept: "application/vnd.github+json",
  Authorization: `Bearer ${token}`,
  "Content-Type": "application/json",
  "X-GitHub-Api-Version": "2022-11-28"
});

const putGithubContents = async (apiUrl, contentBase64, message, token) => {
  const headers = githubHeaders(token);
  const send = async () => {
    let sha = "";
    const meta = await fetch(`${apiUrl}?ref=main`, { headers, cache: "no-store" });
    if (meta.ok) {
      const info = await meta.json();
      sha = info && info.sha ? info.sha : "";
    }
    const body = { message, content: contentBase64, branch: "main" };
    if (sha) body.sha = sha;
    return fetch(apiUrl, { method: "PUT", headers, body: JSON.stringify(body) });
  };
  try {
    let res = await send();
    if (res.status === 409) res = await send();
    if (!res.ok) {
      console.error("공유 저장에 실패했습니다.", res.status);
      return false;
    }
    return true;
  } catch (error) {
    console.error("공유 저장 중 문제가 발생했습니다.", error);
    return false;
  }
};

const localCurriculum = () => (
  typeof window.getCurriculumStore === "function"
    ? window.getCurriculumStore()
    : memory.curriculum
);

// 지금 고친 페이지만 덮고, 나머지 학년·홈 내용은 방금 받은 원격 값을 살립니다.
const mergeSavePayload = (formHomepage, remote, options = {}) => {
  const page = currentSitePage();
  const now = Date.now();
  const remoteHome = mergeHomepage((remote && remote.homepage) || memory.homepage);
  const remoteCur = (remote && remote.curriculum) || null;
  const localCur = localCurriculum();
  const remoteStamp = (remote && remote.curriculumUpdatedAt) || {};
  const localStamp = memory.curriculumUpdatedAt || {};
  const applyShared = options.applyShared !== false;
  if (isCurriculumPage()) {
    const homepage = { ...remoteHome };
    if (applyShared) {
      SHARED_HOME_KEYS.forEach((key) => {
        if (key === "logoImage" && pendingLogoImage !== null) {
          homepage[key] = formHomepage[key];
          return;
        }
        const formVal = String(formHomepage[key] || "").trim();
        const snapVal = String((editStamp.homepage && editStamp.homepage[key]) || "").trim();
        if (formVal !== snapVal) homepage[key] = formHomepage[key];
      });
    }
    // 학년 페이지에서도 비밀번호를 바꾸면 홈 공유 저장에 함께 남깁니다.
    if (formHomepage.adminPass) homepage.adminPass = formHomepage.adminPass;
    const curriculum = { ...(remoteCur || {}) };
    CURRICULUM_PAGES.forEach((key) => {
      if (!curriculum[key] && localCur && localCur[key]) curriculum[key] = localCur[key];
    });
    if (localCur && localCur[page]) curriculum[page] = localCur[page];
    return {
      homepage,
      curriculum,
      homepageUpdatedAt: applyShared && (hasDirtySharedFields(formHomepage) || !!formHomepage.adminPass) ? now : Number((remote && remote.homepageUpdatedAt) || memory.homepageUpdatedAt) || 0,
      curriculumUpdatedAt: { ...remoteStamp, ...localStamp, [page]: now }
    };
  }
  const remoteTime = Number(remote && remote.updatedAt) || 0;
  const localTime = Number(memory.updatedAt) || 0;
  const curriculum = (remoteCur && remoteTime >= localTime)
    ? remoteCur
    : (localCur || remoteCur || memory.curriculum || null);
  return {
    homepage: formHomepage,
    curriculum,
    homepageUpdatedAt: now,
    curriculumUpdatedAt: (remote && remote.curriculumUpdatedAt) || memory.curriculumUpdatedAt || {}
  };
};

const hasDirtySharedFields = (formHomepage) => SHARED_HOME_KEYS.some((key) => {
  if (key === "logoImage" && pendingLogoImage !== null) return true;
  const formVal = String(formHomepage[key] || "").trim();
  const snapVal = String((editStamp.homepage && editStamp.homepage[key]) || "").trim();
  return formVal !== snapVal;
});

const stripLogoDataUrl = (homepage) => {
  const next = { ...homepage };
  if (!isDataImage(next.logoImage)) return next;
  const prev = memory.homepage && memory.homepage.logoImage;
  next.logoImage = prev && !isDataImage(prev) ? prev : DEFAULT_LOGO;
  return next;
};

const uploadLogoIfNeeded = async (homepage, token) => {
  const next = { ...homepage };
  if (!isDataImage(next.logoImage)) return next;
  const raw = String(next.logoImage).split(",")[1];
  if (!raw) return stripLogoDataUrl(next);
  const ok = await putGithubContents(LOGO_API_URL, raw, "학원 로고를 저장합니다.", token);
  if (!ok) throw new Error("logo");
  next.logoImage = `${LOGO_FILE_PATH}?v=${Date.now()}`;
  return next;
};

const pushRemotePayload = async (payload) => {
  const token = getToken();
  if (!token) return false;
  const ok = await putGithubContents(
    REPO_API_URL,
    toBase64(JSON.stringify(payload)),
    "학원 사이트 내용을 저장합니다.",
    token
  );
  if (!ok) return false;
  writeLocalPayload(payload);
  return true;
};

const openAdmin = () => {
  closeAdminLock();
  fillAdminForm(loadContent());
  if (typeof window.fillCurriculumAdmin === "function") window.fillCurriculumAdmin();
  editStamp = {
    homepageAt: Number(memory.homepageUpdatedAt || memory.updatedAt) || 0,
    pageAt: Number((memory.curriculumUpdatedAt || {})[currentSitePage()] || 0) || 0,
    homepage: { ...loadContent() }
  };
  $("#adminOverlay").classList.add("open");
  document.body.style.overflow = "hidden";
};

const closeAdmin = () => {
  if ($("#adminOverlay")) $("#adminOverlay").classList.remove("open");
  if (!$("#adminLock") || !$("#adminLock").classList.contains("open")) {
    document.body.style.overflow = "";
  }
};

const closeAdminLock = () => {
  const lock = $("#adminLock");
  if (!lock) return;
  lock.classList.remove("open");
  const error = $("#adminLockError");
  if (error) error.hidden = true;
  const input = $("#adminLockInput");
  if (input) input.value = "";
  if (!$("#adminOverlay") || !$("#adminOverlay").classList.contains("open")) {
    document.body.style.overflow = "";
  }
};

const submitAdminLock = () => {
  const input = $("#adminLockInput");
  const typed = input ? String(input.value || "") : "";
  if (typed === getAdminPass()) {
    markAdminUnlocked();
    openAdmin();
    return;
  }
  const error = $("#adminLockError");
  if (error) error.hidden = false;
  if (input) {
    input.value = "";
    input.focus();
  }
};

const ensureAdminLock = () => {
  if ($("#adminLock")) return;
  const wrap = document.createElement("div");
  wrap.className = "admin-lock";
  wrap.id = "adminLock";
  wrap.innerHTML = `
    <div class="admin-lock-card" role="dialog" aria-modal="true" aria-labelledby="adminLockTitle">
      <h2 id="adminLockTitle">관리자 확인</h2>
      <p>비밀번호를 입력해 주세요.</p>
      <input id="adminLockInput" type="password" autocomplete="current-password" placeholder="비밀번호" />
      <p class="admin-lock-error" id="adminLockError" hidden>비밀번호가 올바르지 않습니다.</p>
      <div class="admin-lock-actions">
        <button type="button" class="reset-btn" id="adminLockCancel">취소</button>
        <button type="button" class="save-btn" id="adminLockSubmit">확인</button>
      </div>
    </div>
  `;
  document.body.appendChild(wrap);
  wrap.addEventListener("click", (event) => {
    if (event.target.id === "adminLock") closeAdminLock();
  });
  const cancelBtn = $("#adminLockCancel");
  const submitBtn = $("#adminLockSubmit");
  const input = $("#adminLockInput");
  if (cancelBtn) cancelBtn.addEventListener("click", closeAdminLock);
  if (submitBtn) submitBtn.addEventListener("click", submitAdminLock);
  if (input) {
    input.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        submitAdminLock();
      }
    });
  }
};

const requestAdminAccess = () => {
  if (isAdminUnlocked()) {
    openAdmin();
    return;
  }
  ensureAdminLock();
  const lock = $("#adminLock");
  const error = $("#adminLockError");
  const input = $("#adminLockInput");
  if (error) error.hidden = true;
  if (input) input.value = "";
  if (lock) lock.classList.add("open");
  document.body.style.overflow = "hidden";
  window.setTimeout(() => input && input.focus(), 40);
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

  ensureAdminLock();
  openBtn.addEventListener("click", requestAdminAccess);
  if (closeBtn) closeBtn.addEventListener("click", closeAdmin);
  overlay.addEventListener("click", (event) => {
    if (event.target.id === "adminOverlay") closeAdmin();
  });
  if (saveBtn) {
    saveBtn.addEventListener("click", async () => {
      rememberTokenFromForm();
      updateSyncStatus();
      const data = readAdminForm();
      if (!data.academyName) {
        showToast("학원 이름은 반드시 입력해 주세요.");
        return;
      }
      if ($("#adminForm") && $("#adminForm").elements.heroSlogan && !data.heroSlogan) {
        showToast("학원 이름과 슬로건은 반드시 입력해 주세요.");
        return;
      }
      if (typeof window.saveCurriculumAdmin === "function") {
        const ok = window.saveCurriculumAdmin();
        if (!ok) return;
      }
      rememberAdminPassFromForm();
      saveBtn.disabled = true;
      try {
        const remote = await pullRemote();
        const page = currentSitePage();
        if (isCurriculumPage()) {
          const remotePageAt = Number((remote && remote.curriculumUpdatedAt && remote.curriculumUpdatedAt[page]) || 0);
          if (remotePageAt && editStamp.pageAt && remotePageAt > editStamp.pageAt) {
            const ok = window.confirm("다른 기기에서 이 페이지가 더 최근에 저장되었습니다. 지금 수정한 내용으로 덮어쓸까요?");
            if (!ok) return;
          }
        } else {
          const remoteHomeAt = Number((remote && remote.homepageUpdatedAt) || 0);
          if (remoteHomeAt && editStamp.homepageAt && remoteHomeAt > editStamp.homepageAt) {
            const ok = window.confirm("다른 기기에서 홈 내용이 더 최근에 저장되었습니다. 지금 수정한 내용으로 덮어쓸까요?");
            if (!ok) return;
          }
        }
        let applyShared = true;
        const remoteHomeAt = Number((remote && remote.homepageUpdatedAt) || 0);
        if (isCurriculumPage() && hasDirtySharedFields(data) && remoteHomeAt && editStamp.homepageAt && remoteHomeAt > editStamp.homepageAt) {
          applyShared = window.confirm("학원 이름·전화·주소 등이 다른 기기에서 더 최근에 저장되었습니다. 지금 값으로 덮어쓸까요?");
        }
        const merged = mergeSavePayload(data, remote, { applyShared });
        if (!writeLocalPayload({
          updatedAt: Date.now(),
          homepage: merged.homepage,
          curriculum: merged.curriculum,
          homepageUpdatedAt: merged.homepageUpdatedAt,
          curriculumUpdatedAt: merged.curriculumUpdatedAt
        })) return;
        if (merged.curriculum && typeof window.setCurriculumStore === "function") {
          window.setCurriculumStore(merged.curriculum);
        }
        applyContent(loadContent());
        if (typeof window.renderCurriculumPage === "function") window.renderCurriculumPage();

        const token = getToken();
        if (!token) {
          closeAdmin();
          showToast("이 기기에만 저장됐습니다. 위쪽 토큰을 연결하면 다른 기기에도 반영됩니다.");
          return;
        }

        let homepageForRemote = merged.homepage;
        let logoFailed = false;
        try {
          homepageForRemote = await uploadLogoIfNeeded(merged.homepage, token);
        } catch (error) {
          console.error("로고 파일을 올리지 못했습니다.", error);
          homepageForRemote = stripLogoDataUrl(merged.homepage);
          logoFailed = true;
        }
        if (isDataImage(homepageForRemote.logoImage)) {
          homepageForRemote = stripLogoDataUrl(homepageForRemote);
        }

        const payload = {
          v: 6,
          updatedAt: Date.now(),
          homepage: homepageForRemote,
          curriculum: merged.curriculum,
          homepageUpdatedAt: merged.homepageUpdatedAt,
          curriculumUpdatedAt: merged.curriculumUpdatedAt
        };
        const synced = await pushRemotePayload(payload);
        applyContent(loadContent());
        closeAdmin();
        if (synced && logoFailed) {
          showToast("글은 저장했습니다. 로고 파일은 올리지 못했습니다. 토큰 권한을 확인해 주세요.");
        } else if (synced) {
          const page = currentSitePage();
          const labels = { home: "홈", elementary: "초등부", middle: "중등부", high: "고등부" };
          showToast(`${labels[page] || "이 페이지"}만 저장했습니다. PC와 휴대폰에 함께 반영됩니다.`);
        } else {
          showToast("이 기기에만 저장됐습니다. 토큰 권한을 확인해 주세요.");
        }
      } finally {
        saveBtn.disabled = false;
      }
    });
  }
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      if (isCurriculumPage()) {
        const ok = window.confirm("이 페이지의 배너와 공지만 처음 예시 내용으로 되돌릴까요?\n시간표와 학원 이름·전화·주소는 그대로 둡니다.\n저장해야 반영됩니다.");
        if (!ok) return;
        if (typeof window.resetCurriculumAdmin === "function") window.resetCurriculumAdmin();
        showToast("이 페이지만 되돌렸습니다. 저장을 눌러야 반영됩니다.");
        return;
      }
      const ok = window.confirm("홈 페이지 문구만 처음 내용으로 되돌릴까요?\n초·중·고 시간표와 공지는 그대로 둡니다.\n저장해야 반영됩니다.");
      if (!ok) return;
      fillAdminForm(DEFAULT_CONTENT);
      pendingLogoImage = DEFAULT_LOGO;
      const preview = $("#logoPreview");
      if (preview) preview.src = DEFAULT_LOGO;
      showToast("홈 문구만 되돌렸습니다. 저장을 눌러야 반영됩니다.");
    });
  }
  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    if ($("#adminLock") && $("#adminLock").classList.contains("open")) {
      closeAdminLock();
      return;
    }
    closeAdmin();
    const modal = $("#noticeModal");
    if (modal) modal.classList.remove("is-open");
  });
  if (window.location.hash === "#admin") requestAdminAccess();
};

const init = () => {
  try {
    memory = readLocalPayload();
    const year = $("#year");
    if (year) year.textContent = String(new Date().getFullYear());
    applyContent(loadContent());
    initNav();
    initAdmin();
    if (memory.curriculum && typeof window.setCurriculumStore === "function") {
      window.setCurriculumStore(memory.curriculum);
    }
    if (typeof window.renderCurriculumPage === "function") window.renderCurriculumPage();
    if (typeof window.initCurriculumUI === "function") window.initCurriculumUI();
    pullRemote()
      .then((remote) => {
        if (!remote) return;
        const remoteTime = Number(remote.updatedAt) || 0;
        const localTime = Number(memory.updatedAt) || 0;
        if (remoteTime >= localTime || !localTime) applyRemote(remote);
      })
      .catch((error) => {
        console.error("공유 저장 내용을 동기화하지 못했습니다.", error);
      });
  } catch (error) {
    console.error("페이지를 준비하는 중 문제가 발생했습니다.", error);
  }
};

window.DaechiBest = {
  $, $$, loadContent, saveContent, applyContent, showToast, DEFAULT_CONTENT, TOKEN_CREATE_URL
};

document.addEventListener("DOMContentLoaded", init);
