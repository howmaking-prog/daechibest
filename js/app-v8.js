// 학원 공통 콘텐츠. 저장하면 GitHub의 공유 파일과 이 기기에 함께 남깁니다.
const STORAGE_KEY = "daechibest_homepage_v5";
const STORE_KEY = "daechibest_sync_v6";
const TOKEN_KEY = "daechibest_github_token";
const ADMIN_PASS_KEY = "daechibest_admin_pass";
const ADMIN_PASS_DEFAULT = "best1369";
const ADMIN_SESSION_KEY = "daechibest_admin_session";
const ADMIN_SESSION_MS = 8 * 60 * 60 * 1000;
const ASSET_VER = window.SITE_VER || "46";
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
  logoImage: DEFAULT_LOGO,
  heroSlogan: "대치동의 기준이 되는 영어",
  heroSub: "초등부터 고등까지, 실력과 자신감을 함께 키우는 대치베스트 어학원입니다. 소수 정예 수업과 체계적인 레벨 관리로 한 명 한 명의 성장을 책임집니다.",
  heroCta: "상담 예약하기",
  // 메인 오른쪽 패널 문구. 관리자 설정에서 바꿀 수 있습니다.
  heroPanelTitle: "Trust. Proven. Growth.",
  heroPanelSub: "대치동 영어 교육의 기본을 지키며, 학생의 다음 단계를 설계합니다.",
  program1Label: "ELEMENTARY",
  program1Name: "초등부",
  program1Range: "초등 3–6",
  program1Desc: "읽기의 기초와 어휘 습관을 먼저 세웁니다. 문법 용어보다 문장이 만들어지는 감각을 익혀, 중등 내신으로 자연스럽게 연결합니다.",
  program2Label: "MIDDLE",
  program2Name: "중등부",
  program2Range: "중1–중3",
  program2Desc: "내신 서술형과 수행평가를 놓치지 않으면서, 고등 독해에 필요한 구문과 어휘량을 함께 쌓습니다.",
  program3Label: "HIGH SCHOOL",
  program3Name: "고등부",
  program3Range: "고1–고3",
  program3Desc: "내신 고득점과 수능 독해 속도를 동시에 관리합니다. 약점 유형을 분리해 클리닉으로 보완합니다.",
  programMore: "자세히 보기 →",
  aboutKicker: "About",
  aboutTitle: "실력의 기본을 세우는 학원",
  aboutText: "대치베스트 어학원은 초·중·고 영어를 한 흐름으로 가르치는 대치동 영어 전문 학원입니다.\n\n문법, 독해, 어휘, 작문을 학년별 목표에 맞게 나누고, 수업 이후 복습과 클리닉까지 연결해 성적이 쌓이는 구조를 만듭니다.",
  aboutSideTitle: "Why Daechi Best",
  aboutSideText: "화려한 구호보다, 수업의 밀도와 관리의 정확함으로 신뢰를 쌓습니다.",
  featuresKicker: "Features",
  featuresTitle: "대치베스트만의 핵심 특징",
  featuresIntro: "학생 한 명의 현재 실력과 다음 목표를 기준으로 수업과 숙제, 피드백을 설계합니다.",
  feature1Label: "PERSONALIZED CLASS",
  feature1Title: "소수 정예 맞춤 수업",
  feature1Desc: "학생 수보다 수업의 밀도를 우선합니다. 현재 레벨과 목표 학교에 맞춰 진도와 숙제를 조정합니다.",
  feature2Label: "LEVEL MANAGEMENT",
  feature2Title: "체계적인 레벨 관리",
  feature2Desc: "입학 상담부터 월간 성취 점검까지, 실력 변화를 숫자와 피드백으로 확인할 수 있게 운영합니다.",
  feature3Label: "BALANCED GOALS",
  feature3Title: "내신과 수능의 균형",
  feature3Desc: "학교 시험과 장기 입시를 따로 두지 않습니다. 학년별 우선순위를 분명히 해 시간을 낭비하지 않습니다.",
  contactKicker: "Location",
  contactTitle: "오시는 길",
  contactIntro: "방문 상담은 사전 예약제로 진행합니다. 아래 연락처로 먼저 문의해 주세요.",
  address: "서울 강남구 선릉로 64길 11-2, 6층",
  phone: "02-556-3510",
  hours: "평일: 14:00 ~ 22:00\n토요일: 10:00 ~ 18:00\n일요일 휴무"
};

// 예전에 저장해 둔 임시 연락처는 새 기본값으로 바꿉니다.
const LEGACY_CONTACT = {
  address: "서울특별시 강남구 대치동 (대치역 인근)",
  phone: "02-555-1212",
  hours: "평일 13:00 – 22:00\n토요일 10:00 – 18:00\n일요일·공휴일 휴무"
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

const currentSitePage = () => document.body.dataset.page || "home";
const isCurriculumPage = () => CURRICULUM_PAGES.includes(currentSitePage());
const isDataImage = (src) => String(src || "").startsWith("data:image/");

// 설정에서 새로 고른 로고. null이면 기존 값을 유지합니다.
let pendingLogoImage = null;
let adminUnlocked = false;
let memory = { v: 6, updatedAt: 0, homepage: null, curriculum: null, homepageUpdatedAt: 0, curriculumUpdatedAt: {}, syncToken: "" };
let editStamp = { homepageAt: 0, pageAt: 0, homepage: null };

const UNUSED_HOME_KEYS = ["logoText", "heroStat1Title", "heroStat1Desc", "heroStat2Title", "heroStat2Desc", "heroStat3Title", "heroStat3Desc", "directions"];

const mergeHomepage = (saved) => {
  const merged = { ...DEFAULT_CONTENT, ...(saved || {}) };
  Object.keys(LEGACY_CONTACT).forEach((key) => {
    if (saved && saved[key] === LEGACY_CONTACT[key]) merged[key] = DEFAULT_CONTENT[key];
  });
  UNUSED_HOME_KEYS.forEach((key) => { delete merged[key]; });
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
        curriculumUpdatedAt: parsed.curriculumUpdatedAt || {},
        syncToken: typeof parsed.syncToken === "string" ? parsed.syncToken : ""
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
        curriculum: null,
        syncToken: ""
      };
    }
  } catch (error) {
    console.error("이전 저장 내용을 읽는 중 문제가 발생했습니다.", error);
  }
  return { v: 6, updatedAt: 0, homepage: { ...DEFAULT_CONTENT }, curriculum: null, syncToken: "" };
};

const writeLocalPayload = (payload) => {
  memory = {
    v: 6,
    updatedAt: Number(payload.updatedAt) || Date.now(),
    homepage: mergeHomepage(payload.homepage),
    curriculum: payload.curriculum || null,
    homepageUpdatedAt: Number(payload.homepageUpdatedAt) || 0,
    curriculumUpdatedAt: payload.curriculumUpdatedAt || {},
    syncToken: typeof payload.syncToken === "string" ? payload.syncToken : (memory.syncToken || "")
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
    else localStorage.removeItem(TOKEN_KEY);
  } catch (error) {
    console.error("토큰을 저장하는 중 문제가 발생했습니다.", error);
  }
};

const bytesToBase64 = (bytes) => {
  let binary = "";
  const chunk = 0x8000;
  for (let i = 0; i < bytes.length; i += chunk) {
    binary += String.fromCharCode(...bytes.subarray(i, i + chunk));
  }
  return btoa(binary);
};

const base64ToBytes = (text) => {
  const binary = atob(text);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i += 1) bytes[i] = binary.charCodeAt(i);
  return bytes;
};

const deriveSyncKey = async (password, salt) => {
  const material = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(password),
    "PBKDF2",
    false,
    ["deriveKey"]
  );
  return crypto.subtle.deriveKey(
    { name: "PBKDF2", salt, iterations: 100000, hash: "SHA-256" },
    material,
    { name: "AES-GCM", length: 256 },
    false,
    ["encrypt", "decrypt"]
  );
};

// 토큰은 관리자 비밀번호로 잠가 공유 파일에 둡니다. 다른 기기는 비밀번호만으로 엽니다.
const sealSyncToken = async (token, password) => {
  const salt = crypto.getRandomValues(new Uint8Array(16));
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const key = await deriveSyncKey(password, salt);
  const cipher = new Uint8Array(await crypto.subtle.encrypt(
    { name: "AES-GCM", iv },
    key,
    new TextEncoder().encode(token)
  ));
  const packed = new Uint8Array(salt.length + iv.length + cipher.length);
  packed.set(salt, 0);
  packed.set(iv, salt.length);
  packed.set(cipher, salt.length + iv.length);
  return `v1.${bytesToBase64(packed)}`;
};

const openSyncToken = async (packed, password) => {
  const raw = String(packed || "");
  if (!raw.startsWith("v1.")) return "";
  const bytes = base64ToBytes(raw.slice(3));
  if (bytes.length < 29) return "";
  const salt = bytes.slice(0, 16);
  const iv = bytes.slice(16, 28);
  const cipher = bytes.slice(28);
  const key = await deriveSyncKey(password, salt);
  const plain = await crypto.subtle.decrypt({ name: "AES-GCM", iv }, key, cipher);
  return new TextDecoder().decode(plain).trim();
};

const adminPassword = () => {
  try {
    return localStorage.getItem(ADMIN_PASS_KEY) || ADMIN_PASS_DEFAULT;
  } catch (error) {
    return ADMIN_PASS_DEFAULT;
  }
};

const adoptSharedToken = async (password) => {
  if (getToken() || !memory.syncToken) return;
  try {
    const token = await openSyncToken(memory.syncToken, password);
    if (token) setToken(token);
  } catch (error) {
    console.error("공유 토큰을 열지 못했습니다.", error);
  }
};

const rememberTokenFromForm = () => {
  const form = $("#adminForm");
  const field = form && form.elements.githubToken;
  if (field && String(field.value || "").trim()) setToken(field.value);
};

const updateSyncStatus = () => {
  const status = $("#syncStatus");
  if (!status) return;
  const token = getToken();
  const connected = !!token;
  status.textContent = connected
    ? "연결됨"
    : "미연결";
  status.classList.toggle("is-on", connected);
  status.classList.toggle("is-off", !connected);
  const mask = $("#githubTokenMask");
  const maskField = $("#tokenMaskField");
  if (mask) mask.value = connected ? "*".repeat(Math.min(token.length, 12)) : "";
  if (maskField) maskField.hidden = !connected;
  const disconnect = $("#disconnectToken");
  if (disconnect) disconnect.hidden = !connected;
  const saveBtn = $("#saveBtn");
  if (saveBtn && !saveBtn.disabled) {
    saveBtn.textContent = connected ? "저장하고 모든 기기에 반영" : "이 기기에 저장";
  }
  const fold = $("#syncFold");
  if (fold && fold.dataset.ready !== "1") {
    fold.open = !connected;
    fold.dataset.ready = "1";
  }
};

const logoSrc = (data) => {
  const src = data && data.logoImage ? String(data.logoImage) : DEFAULT_LOGO;
  // data URL은 일부 기기에서 이미지가 깨지므로 파일로만 보여 줍니다.
  if (isDataImage(src) || src === LOGO_FILE_PATH || src.startsWith(`${LOGO_FILE_PATH}?`)) {
    return `${LOGO_FILE_PATH}?v=${ASSET_VER}`;
  }
  if (src === "img/logo.png" || src.startsWith("img/logo.png?")) return DEFAULT_LOGO;
  return src;
};

const wireLogoFallback = (img) => {
  if (!img || img.dataset.logoReady === "1") return;
  img.dataset.logoReady = "1";
  img.addEventListener("error", () => {
    if (img.dataset.usingFallback === "1") return;
    img.dataset.usingFallback = "1";
    img.src = DEFAULT_LOGO;
  });
};

const applyLogos = (data) => {
  const src = logoSrc(data);
  $$("[data-logo]").forEach((img) => {
    wireLogoFallback(img);
    img.dataset.usingFallback = "";
    img.src = src;
    img.alt = `${data.academyName || "대치베스트 어학원"} 로고`;
  });
  const preview = $("#logoPreview");
  if (preview) {
    wireLogoFallback(preview);
    preview.dataset.usingFallback = "";
    preview.src = src;
  }
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
  if (tokenField) tokenField.value = "";
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

const showToast = (message, duration = 3200) => {
  const toast = $("#toast");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  window.setTimeout(() => toast.classList.remove("show"), duration);
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
    curriculumUpdatedAt: data.curriculumUpdatedAt || {},
    syncToken: typeof data.syncToken === "string" ? data.syncToken : ""
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
    curriculumUpdatedAt: remote.curriculumUpdatedAt || {},
    syncToken: remote.syncToken || memory.syncToken || ""
  };
  writeLocalPayload(next);
  applyContent(loadContent());
  if (next.curriculum && typeof window.setCurriculumStore === "function") {
    window.setCurriculumStore(next.curriculum);
    if (typeof window.renderCurriculumPage === "function") window.renderCurriculumPage();
  }
  if ($("#adminOverlay") && $("#adminOverlay").classList.contains("open")) {
    fillAdminForm(loadContent());
    const curPane = $("#curriculumAdminPane");
    if (typeof window.fillCurriculumAdmin === "function" && (!curPane || !curPane.hidden)) {
      window.fillCurriculumAdmin();
    }
  }
  if (adminUnlocked) {
    adoptSharedToken(adminPassword()).then(() => updateSyncStatus());
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
    const curriculum = { ...(remoteCur || {}) };
    CURRICULUM_PAGES.forEach((key) => {
      if (!curriculum[key] && localCur && localCur[key]) curriculum[key] = localCur[key];
    });
    if (localCur && localCur[page]) curriculum[page] = localCur[page];
    return {
      homepage,
      curriculum,
      homepageUpdatedAt: applyShared && hasDirtySharedFields(formHomepage) ? now : Number((remote && remote.homepageUpdatedAt) || memory.homepageUpdatedAt) || 0,
      curriculumUpdatedAt: { ...remoteStamp, ...localStamp, [page]: now },
      syncToken: (remote && remote.syncToken) || memory.syncToken || ""
    };
  }
  const remoteTime = Number(remote && remote.updatedAt) || 0;
  const localTime = Number(memory.updatedAt) || 0;
  const touched = Array.isArray(options.touchedCurriculumPages) ? options.touchedCurriculumPages : [];
  const curriculum = {
    ...((remoteCur && remoteTime >= localTime) ? (remoteCur || {}) : (localCur || remoteCur || memory.curriculum || {}))
  };
  const curriculumUpdatedAt = { ...((remote && remote.curriculumUpdatedAt) || memory.curriculumUpdatedAt || {}) };
  if (touched.length && localCur) {
    touched.forEach((key) => {
      if (!CURRICULUM_PAGES.includes(key) || !localCur[key]) return;
      curriculum[key] = localCur[key];
      curriculumUpdatedAt[key] = now;
    });
  }
  return {
    homepage: formHomepage,
    curriculum,
    homepageUpdatedAt: now,
    curriculumUpdatedAt,
    syncToken: (remote && remote.syncToken) || memory.syncToken || ""
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

const setAdminMode = (mode) => {
  const homePane = $("#homeAdminPane");
  const curPane = $("#curriculumAdminPane");
  const tabs = $("#adminModeTabs");
  if (!homePane || !curPane || !tabs) return;
  const showCur = mode === "curriculum";
  homePane.hidden = showCur;
  curPane.hidden = !showCur;
  tabs.querySelectorAll("[data-admin-mode]").forEach((btn) => {
    btn.classList.toggle("is-active", btn.dataset.adminMode === (showCur ? "curriculum" : "home"));
  });
  const title = $("#adminTitle");
  if (title) title.textContent = showCur ? "커리큘럼 수정" : "홈페이지 내용 수정";
  const resetBtn = $("#resetBtn");
  if (resetBtn) resetBtn.textContent = showCur ? "배너·공지만 되돌리기" : "홈 문구만 되돌리기";
  if (showCur && typeof window.activateCurriculumAdmin === "function") window.activateCurriculumAdmin();
};

// 홈 방문자는 관리자를 열 때만 커리큘럼 편집 코드를 받습니다.
let curriculumScriptPromise = null;
const ensureCurriculumScript = () => {
  if (typeof window.setCurriculumStore === "function") return Promise.resolve();
  if (curriculumScriptPromise) return curriculumScriptPromise;
  curriculumScriptPromise = new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = `js/curriculum-v10.js?v=${window.SITE_VER || ASSET_VER}`;
    script.onload = () => resolve();
    script.onerror = () => {
      curriculumScriptPromise = null;
      reject(new Error("curriculum-script"));
    };
    document.body.appendChild(script);
  });
  return curriculumScriptPromise;
};

const openAdmin = async () => {
  if ((document.body.dataset.page || "") === "home") {
    try {
      await ensureCurriculumScript();
      if (memory.curriculum && typeof window.setCurriculumStore === "function") {
        window.setCurriculumStore(memory.curriculum);
      }
    } catch (error) {
      console.error("커리큘럼 편집 화면을 불러오지 못했습니다.", error);
      showToast("커리큘럼 편집 화면을 불러오지 못했습니다.");
    }
  }
  const fold = $("#syncFold");
  if (fold) delete fold.dataset.ready;
  fillAdminForm(loadContent());
  const curPane = $("#curriculumAdminPane");
  if (curPane) {
    if (typeof window.resetTouchedCurriculum === "function") window.resetTouchedCurriculum();
    const timeFields = $("#timetableAdminFields");
    if (timeFields) timeFields.innerHTML = "";
    setAdminMode("home");
  } else if (typeof window.fillCurriculumAdmin === "function") {
    window.fillCurriculumAdmin();
  }
  editStamp = {
    homepageAt: Number(memory.homepageUpdatedAt || memory.updatedAt) || 0,
    pageAt: Number((memory.curriculumUpdatedAt || {})[currentSitePage()] || 0) || 0,
    homepage: { ...loadContent() }
  };
  $("#adminOverlay").classList.add("open");
  document.body.style.overflow = "hidden";
};

const setAdminStatus = (message, kind) => {
  const status = $("#adminSaveStatus");
  if (!status) return;
  if (!message) {
    status.hidden = true;
    status.textContent = "";
    delete status.dataset.kind;
    return;
  }
  status.hidden = false;
  status.dataset.kind = kind || "info";
  status.textContent = message;
};

const homepageFieldDirty = () => {
  const form = $("#adminForm");
  if (!form || !editStamp.homepage) return false;
  if (pendingLogoImage !== null) return true;
  const tokenField = form.elements.githubToken;
  if (tokenField && String(tokenField.value || "").trim()) return true;
  const passDirty = ["currentPass", "newPass", "newPassAgain"].some((name) => (
    form.elements[name] && String(form.elements[name].value || "").trim()
  ));
  if (passDirty) return true;
  return Object.keys(DEFAULT_CONTENT).some((key) => {
    const field = form.elements[key];
    if (!field || field.type === "file") return false;
    const saved = editStamp.homepage[key] == null ? "" : String(editStamp.homepage[key]);
    return String(field.value).trim() !== saved.trim();
  });
};

const isAdminDirty = () => {
  if (typeof window.syncCurriculumTouch === "function") window.syncCurriculumTouch();
  const touched = typeof window.getTouchedCurriculumPages === "function"
    ? window.getTouchedCurriculumPages()
    : [];
  return homepageFieldDirty() || touched.length > 0;
};

const closeAdmin = ({ force } = {}) => {
  if (!force && isAdminDirty()) {
    const ok = window.confirm("저장하지 않은 수정이 있습니다. 닫으면 이번 수정은 사라집니다. 닫을까요?");
    if (!ok) return;
  }
  setAdminStatus("");
  $("#adminOverlay").classList.remove("open");
  document.body.style.overflow = "";
};

// 비밀번호가 없으면 처음 한 번 best1369로 저장합니다.
const ensureAdminPass = () => {
  try {
    if (!localStorage.getItem(ADMIN_PASS_KEY)) localStorage.setItem(ADMIN_PASS_KEY, ADMIN_PASS_DEFAULT);
  } catch (error) {
    console.error("관리자 비밀번호를 저장하지 못했습니다.", error);
  }
};

// 비밀번호를 맞춘 뒤 8시간, 또는 브라우저를 닫기 전까지 관리자 화면을 다시 묻지 않습니다.
const hasAdminSession = () => {
  try {
    const until = Number(sessionStorage.getItem(ADMIN_SESSION_KEY)) || 0;
    if (until > Date.now()) return true;
    sessionStorage.removeItem(ADMIN_SESSION_KEY);
  } catch (error) {
    console.error("관리자 세션을 읽지 못했습니다.", error);
  }
  return false;
};

const keepAdminSession = () => {
  try {
    sessionStorage.setItem(ADMIN_SESSION_KEY, String(Date.now() + ADMIN_SESSION_MS));
  } catch (error) {
    console.error("관리자 세션을 저장하지 못했습니다.", error);
  }
};

const openAdminGate = async () => {
  ensureAdminPass();
  if (hasAdminSession()) {
    adminUnlocked = true;
    await adoptSharedToken(adminPassword());
    openAdmin();
    return;
  }
  const lock = $("#adminLock");
  const input = $("#adminPassInput");
  const error = $("#adminLockError");
  if (!lock) {
    openAdmin();
    return;
  }
  if (error) error.hidden = true;
  if (input) input.value = "";
  lock.hidden = false;
  if (input) input.focus();
};

const closeAdminGate = () => {
  const lock = $("#adminLock");
  if (lock) lock.hidden = true;
};

const submitAdminGate = async (event) => {
  event.preventDefault();
  ensureAdminPass();
  const input = $("#adminPassInput");
  const error = $("#adminLockError");
  let saved = ADMIN_PASS_DEFAULT;
  try {
    saved = localStorage.getItem(ADMIN_PASS_KEY) || ADMIN_PASS_DEFAULT;
  } catch (readError) {
    console.error("관리자 비밀번호를 읽지 못했습니다.", readError);
  }
  if (!input || input.value.trim() !== saved) {
    if (error) error.hidden = false;
    return;
  }
  adminUnlocked = true;
  keepAdminSession();
  await adoptSharedToken(input.value.trim());
  closeAdminGate();
  openAdmin();
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

const saveScopeLabel = (page, curriculumKeys) => {
  const names = { elementary: "초등부", middle: "중등부", high: "고등부" };
  const grades = (curriculumKeys || []).map((key) => names[key]).filter(Boolean);
  if (page === "home" && grades.length) return `홈과 ${grades.join(", ")}를`;
  if (page === "home") return "홈을";
  return `${names[page] || "이 페이지"}를`;
};

const disconnectSharedToken = async () => {
  const ok = window.confirm(isAdminDirty()
    ? "연결을 끊을까요? 저장하지 않은 수정은 포함되지 않고, 다른 기기도 비밀번호만으로는 다시 연결되지 않습니다."
    : "GitHub 연결을 끊을까요? 다른 기기도 비밀번호만으로는 다시 연결되지 않습니다.");
  if (!ok) return;
  if (!getToken()) {
    setToken("");
    updateSyncStatus();
    setAdminStatus("이 기기에는 연결된 토큰이 없습니다.", "info");
    return;
  }
  setAdminStatus("연결을 끊는 중입니다.", "busy");
  try {
    const remote = await pullRemote();
    const remoteNewer = remote && Number(remote.updatedAt) > Number(memory.updatedAt || 0);
    const payload = {
      v: 6,
      updatedAt: Date.now(),
      homepage: remoteNewer ? remote.homepage : loadContent(),
      curriculum: remoteNewer ? (remote.curriculum || memory.curriculum) : (localCurriculum() || memory.curriculum),
      homepageUpdatedAt: remoteNewer ? remote.homepageUpdatedAt : memory.homepageUpdatedAt,
      curriculumUpdatedAt: remoteNewer ? (remote.curriculumUpdatedAt || {}) : (memory.curriculumUpdatedAt || {}),
      syncToken: ""
    };
    const pushed = await pushRemotePayload(payload);
    if (!pushed) {
      setAdminStatus("서버 연결 정보는 지우지 못했습니다. 토큰 권한을 확인해 주세요.", "error");
      return;
    }
    setToken("");
    updateSyncStatus();
    setAdminStatus("연결을 끊었습니다. 다시 연결하려면 토큰을 새로 넣어야 합니다.", "ok");
    showToast("연결을 끊었습니다.");
  } catch (error) {
    console.error("연결을 끊지 못했습니다.", error);
    setAdminStatus("연결을 끊지 못했습니다. 네트워크를 확인해 주세요.", "error");
  }
};

const changeAdminPassword = async () => {
  const form = $("#adminForm");
  if (!form) return;
  const current = String(form.elements.currentPass?.value || "").trim();
  const next = String(form.elements.newPass?.value || "").trim();
  const again = String(form.elements.newPassAgain?.value || "").trim();
  if (!current || current !== adminPassword()) {
    setAdminStatus("현재 비밀번호가 맞지 않습니다.", "error");
    return;
  }
  if (next.length < 4) {
    setAdminStatus("새 비밀번호는 4자 이상으로 입력해 주세요.", "error");
    return;
  }
  if (next !== again) {
    setAdminStatus("새 비밀번호가 서로 다릅니다.", "error");
    return;
  }
  try {
    localStorage.setItem(ADMIN_PASS_KEY, next);
  } catch (error) {
    console.error("관리자 비밀번호를 바꾸지 못했습니다.", error);
    setAdminStatus("비밀번호를 저장하지 못했습니다.", "error");
    return;
  }
  ["currentPass", "newPass", "newPassAgain"].forEach((name) => {
    if (form.elements[name]) form.elements[name].value = "";
  });
  const token = getToken();
  if (!token) {
    setAdminStatus("비밀번호를 바꿨습니다. 다른 기기에 이전 비밀번호가 있으면 그 기기에서도 바꿔 주세요.", "ok");
    showToast("비밀번호를 바꿨습니다.", 5200);
    return;
  }
  setAdminStatus("비밀번호를 바꿨습니다. 다른 기기용 연결 정보를 갱신하는 중입니다.", "busy");
  try {
    const remote = await pullRemote();
    const remoteNewer = remote && Number(remote.updatedAt) > Number(memory.updatedAt || 0);
    const payload = {
      v: 6,
      updatedAt: Date.now(),
      homepage: remoteNewer ? remote.homepage : loadContent(),
      curriculum: remoteNewer ? (remote.curriculum || memory.curriculum) : (localCurriculum() || memory.curriculum),
      homepageUpdatedAt: remoteNewer ? remote.homepageUpdatedAt : memory.homepageUpdatedAt,
      curriculumUpdatedAt: remoteNewer ? (remote.curriculumUpdatedAt || {}) : (memory.curriculumUpdatedAt || {}),
      syncToken: await sealSyncToken(token, next)
    };
    const pushed = await pushRemotePayload(payload);
    if (!pushed) {
      setAdminStatus("이 기기 비밀번호는 바꿨습니다. 다른 기기용 연결 정보는 올리지 못했습니다.", "error");
      return;
    }
    setAdminStatus("비밀번호를 바꿨습니다. 다른 기기에 이전 비밀번호가 있으면 그 기기에서도 바꿔 주세요.", "ok");
    showToast("비밀번호를 바꿨습니다.", 5200);
  } catch (error) {
    console.error("비밀번호로 연결 정보를 잠그지 못했습니다.", error);
    setAdminStatus("이 기기 비밀번호는 바꿨습니다. 다른 기기용 연결 정보는 잠그지 못했습니다.", "error");
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

  openBtn.addEventListener("click", openAdminGate);
  const lockForm = $("#adminLockForm");
  const lockCancel = $("#adminLockCancel");
  if (lockForm) lockForm.addEventListener("submit", submitAdminGate);
  if (lockCancel) lockCancel.addEventListener("click", closeAdminGate);
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
        setAdminStatus("학원 이름은 반드시 입력해 주세요.", "error");
        showToast("학원 이름은 반드시 입력해 주세요.");
        return;
      }
      if ($("#adminForm") && $("#adminForm").elements.heroSlogan && !data.heroSlogan) {
        setAdminStatus("학원 이름과 슬로건은 반드시 입력해 주세요.", "error");
        showToast("학원 이름과 슬로건은 반드시 입력해 주세요.");
        return;
      }
      if (typeof window.syncCurriculumTouch === "function") window.syncCurriculumTouch();
      if (typeof window.validateCurriculumAdmin === "function") {
        const problem = window.validateCurriculumAdmin();
        if (problem) {
          setAdminStatus(problem, "error");
          showToast(problem, 5200);
          return;
        }
      }
      const curPane = $("#curriculumAdminPane");
      const touched = typeof window.getTouchedCurriculumPages === "function"
        ? window.getTouchedCurriculumPages()
        : [];
      if ((!curPane || touched.length) && typeof window.saveCurriculumAdmin === "function") {
        const ok = window.saveCurriculumAdmin();
        if (!ok) return;
      }
      saveBtn.disabled = true;
      setAdminStatus("저장 중입니다. 서버에 반영될 때까지 이 창을 닫지 마세요.", "busy");
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
        const merged = mergeSavePayload(data, remote, {
          applyShared,
          touchedCurriculumPages: curPane ? touched : []
        });
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

        if (typeof window.acceptCurriculumEdits === "function") window.acceptCurriculumEdits();
        editStamp.homepage = { ...loadContent() };
        editStamp.homepageAt = Number(memory.homepageUpdatedAt) || 0;
        editStamp.pageAt = Number((memory.curriculumUpdatedAt || {})[page] || 0) || 0;
        pendingLogoImage = null;
        const savedScope = saveScopeLabel(page, curPane ? touched : [page]);
        const token = getToken();
        if (!token) {
          closeAdmin({ force: true });
          showToast(`${savedScope} 저장했습니다. 이 기기에만 반영됩니다. 토큰을 연결하면 다른 기기에도 올라갑니다.`, 5200);
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
          curriculumUpdatedAt: merged.curriculumUpdatedAt,
          syncToken: merged.syncToken || memory.syncToken || ""
        };
        if (getToken()) {
          try {
            payload.syncToken = await sealSyncToken(getToken(), adminPassword());
          } catch (sealError) {
            console.error("공유 토큰을 잠그지 못했습니다.", sealError);
          }
        }
        const synced = await pushRemotePayload(payload);
        applyContent(loadContent());
        if (synced && logoFailed) {
          closeAdmin({ force: true });
          showToast("글은 저장했습니다. 로고 파일은 올리지 못했습니다. 토큰 권한을 확인해 주세요.", 5200);
        } else if (synced) {
          closeAdmin({ force: true });
          showToast(`${savedScope} 저장했습니다. PC와 휴대폰에 함께 반영됩니다.`, 4200);
        } else {
          setAdminStatus("이 기기에는 저장했습니다. 서버에는 반영되지 않았습니다. 토큰 권한을 확인해 주세요.", "error");
          showToast("서버에는 반영되지 않았습니다. 토큰 권한을 확인해 주세요.", 5200);
        }
      } finally {
        saveBtn.disabled = false;
        const status = $("#adminSaveStatus");
        if (status && status.dataset.kind === "busy") setAdminStatus("");
        updateSyncStatus();
      }
    });
  }
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      const editingCurriculum = isCurriculumPage() || ($("#curriculumAdminPane") && !$("#curriculumAdminPane").hidden);
      if (editingCurriculum) {
        const ok = window.confirm("이 페이지의 배너와 공지만 처음 예시 내용으로 되돌릴까요?\n시간표와 학원 이름·전화·주소는 그대로 둡니다.\n저장해야 반영됩니다.");
        if (!ok) return;
        if (typeof window.resetCurriculumAdmin === "function") window.resetCurriculumAdmin();
        showToast("배너와 공지를 예시로 되돌렸습니다. 시간표는 그대로입니다. 저장을 눌러야 반영됩니다.", 5200);
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
  const disconnectBtn = $("#disconnectToken");
  if (disconnectBtn && disconnectBtn.dataset.bound !== "1") {
    disconnectBtn.dataset.bound = "1";
    disconnectBtn.addEventListener("click", disconnectSharedToken);
  }
  const changePassBtn = $("#changePassBtn");
  if (changePassBtn && changePassBtn.dataset.bound !== "1") {
    changePassBtn.dataset.bound = "1";
    changePassBtn.addEventListener("click", changeAdminPassword);
  }
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && $("#adminOverlay") && $("#adminOverlay").classList.contains("open")) closeAdmin();
  });
  const modeTabs = $("#adminModeTabs");
  if (modeTabs && modeTabs.dataset.bound !== "1") {
    modeTabs.dataset.bound = "1";
    modeTabs.addEventListener("click", (event) => {
      const btn = event.target.closest("[data-admin-mode]");
      if (!btn) return;
      setAdminMode(btn.dataset.adminMode);
    });
  }
  if (window.location.hash === "#admin") openAdminGate();
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

// document.write로 머리글을 넣은 뒤에는 이 시점에 문서 준비가 이미 끝난 경우가 있습니다.
if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
else init();
