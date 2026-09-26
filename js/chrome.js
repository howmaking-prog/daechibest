// 여러 페이지에 반복되던 머리글, 바닥글, 학년 관리자 화면입니다.
(() => {
const deptNames = {
  elementary: "초등부",
  middle: "중등부",
  high: "고등부",
  notice: "공지"
};

const logoSrc = () => `img/logo.png?v=${window.SITE_VER || "36"}`;

const header = () => {
  const page = document.body.dataset.page || "home";
  const home = page === "home";
  const dept = deptNames[page] ? `<span class="brand-dept" data-dept-label>${deptNames[page]}</span>` : "";
  const homeHref = home ? "#home" : "index.html";
  const sectionHref = (id) => (home ? `#${id}` : `index.html#${id}`);
  const curriculumOn = page === "elementary" || page === "middle" || page === "high";
  const sub = (name, label) => `<li><a${page === name ? ' class="is-active"' : ""} href="${name}.html">${label}</a></li>`;
  return `
  <header class="site-header">
    <div class="header-inner">
      <a class="brand" href="${homeHref}">
        <span class="brand-mark">
          <img data-logo src="${logoSrc()}" alt="대치베스트 어학원 로고" />
        </span>
        <span class="brand-name" data-bind="academyName">대치베스트 어학원</span>
        ${dept}
      </a>
      <button class="menu-toggle" id="menuToggle" aria-label="메뉴 열기">
        <span></span><span></span><span></span>
      </button>
      <nav class="nav-wrap" id="navWrap">
        <ul class="nav-list">
          <li><a href="${homeHref}">홈</a></li>
          <li><a href="${sectionHref("about")}">학원소개</a></li>
          <li><a href="${sectionHref("features")}">특징</a></li>
          <li class="has-sub">
            <a${curriculumOn ? ' class="is-active"' : ""} href="${curriculumOn ? `${page}.html` : "elementary.html"}">커리큘럼</a>
            <ul class="sub-nav">
              ${sub("elementary", "초등부")}
              ${sub("middle", "중등부")}
              ${sub("high", "고등부")}
            </ul>
          </li>
          <li><a href="${sectionHref("contact")}">오시는 길</a></li>
        </ul>
        <a class="header-cta" data-phone-link href="tel:02-556-3510">${home ? "<span>상담 문의</span>" : "상담 문의"}</a>
      </nav>
    </div>
  </header>`;
};

const footer = (withAdmin) => `
  <footer class="site-footer">
    <div class="footer-inner">
      <p class="copyright">© <span id="year"></span> <span data-bind="academyName">대치베스트 어학원</span>. All rights reserved.</p>
      ${withAdmin ? '<button type="button" class="footer-admin" id="adminOpen">관리자</button>' : ""}
    </div>
  </footer>`;

const adminLock = () => `
  <div class="admin-lock" id="adminLock" hidden>
    <form class="admin-lock-card" id="adminLockForm">
      <h2>관리자 확인</h2>
      <p>비밀번호를 입력해 주세요.</p>
      <input type="password" id="adminPassInput" autocomplete="current-password" required />
      <p class="admin-lock-error" id="adminLockError" hidden>비밀번호가 맞지 않습니다.</p>
      <div class="admin-lock-actions">
        <button type="button" class="admin-lock-cancel" id="adminLockCancel">취소</button>
        <button type="submit" class="admin-lock-ok">확인</button>
      </div>
    </form>
  </div>`;

const syncAccount = () => `
  <div class="admin-sync-actions">
    <button type="button" class="text-btn" id="disconnectToken" hidden>연결 끊기</button>
  </div>
  <div class="admin-pass-change">
    <p class="sync-note">이 기기의 관리자 비밀번호입니다. 다른 기기에 이미 저장돼 있으면, 그 기기에서도 같은 비밀번호로 바꿔 주세요.</p>
    <div class="field">
      <label>현재 비밀번호</label>
      <input type="password" name="currentPass" autocomplete="current-password" />
    </div>
    <div class="field">
      <label>새 비밀번호</label>
      <input type="password" name="newPass" autocomplete="new-password" />
    </div>
    <div class="field">
      <label>새 비밀번호 확인</label>
      <input type="password" name="newPassAgain" autocomplete="new-password" />
    </div>
    <button type="button" class="admin-mini-btn" id="changePassBtn">비밀번호 변경</button>
  </div>`;

const adminFoot = (resetLabel) => `
  <div class="admin-foot">
    <p class="admin-save-status" id="adminSaveStatus" hidden></p>
    <div class="admin-foot-actions">
      <button class="reset-btn" id="resetBtn" type="button">${resetLabel}</button>
      <button class="save-btn" id="saveBtn" type="button">이 기기에 저장</button>
    </div>
  </div>`;

const curriculumEditor = (deptPicks) => `
  ${deptPicks ? `<div class="admin-pills" id="curriculumDeptPicks">
    <button type="button" class="admin-pill is-active" data-curriculum-page="elementary">초등부</button>
    <button type="button" class="admin-pill" data-curriculum-page="middle">중등부</button>
    <button type="button" class="admin-pill" data-curriculum-page="high">고등부</button>
  </div>` : ""}
  <div class="admin-tabs" id="curriculumTabs">
    <button type="button" data-admin-tab="banner">배너</button>
    <button type="button" class="is-active" data-admin-tab="time">시간표</button>
    <button type="button" data-admin-tab="notice">공지</button>
  </div>
  <div id="curriculumForm">
    <section class="admin-section admin-pane" data-admin-pane="banner">
      <h3>배너</h3>
      <p class="admin-hint">위에서 배너를 고르면 그 장만 수정합니다.</p>
      <div id="slidesAdminFields"></div>
    </section>
    <section class="admin-section admin-pane is-active" data-admin-pane="time">
      <h3>시간표</h3>
      <p class="admin-hint">학년과 학기를 고른 뒤, 그 표만 수정합니다.</p>
      <div id="timetableAdminFields"></div>
    </section>
    <section class="admin-section admin-pane" data-admin-pane="notice">
      <h3>공지사항</h3>
      <p class="admin-hint">위에서 공지를 고르면 그 글만 수정합니다. 제목을 비우면 저장할 때 목록에서 삭제됩니다. 날짜는 2026.08.20 형식입니다.</p>
      <div id="noticesAdminFields"></div>
    </section>
  </div>`;

const deptAdmin = () => `
  ${adminLock()}
  <div class="admin-overlay" id="adminOverlay">
    <aside class="admin-panel" role="dialog" aria-labelledby="adminTitle">
      <div class="admin-head">
        <div>
          <h2 id="adminTitle">커리큘럼 수정</h2>
          <p>배너, 시간표, 공지를 고칩니다. 학원 이름·로고·연락처는 홈 화면 관리자에서 수정합니다.</p>
        </div>
        <button class="icon-btn" id="adminClose" aria-label="닫기">×</button>
      </div>
      <form class="admin-body" id="adminForm">
        <details class="admin-fold" id="syncFold">
          <summary>
            <span>PC와 휴대폰 함께 저장</span>
            <span class="sync-status is-off" id="syncStatus">미연결</span>
          </summary>
          <div class="admin-fold-body">
            <p class="sync-note">토큰은 한 번만 넣으면 됩니다. 다른 기기는 관리자 비밀번호만으로 저장됩니다. 지금 열린 학년 페이지만 덮어쓰고, 다른 학년과 홈 본문은 그대로 둡니다.</p>
            <div class="field" id="tokenMaskField" hidden>
              <label>연결된 토큰</label>
              <input id="githubTokenMask" type="text" readonly tabindex="-1" aria-label="연결된 토큰" />
            </div>
            <div class="field">
              <label>GitHub 토큰 <span class="hint">바꿀 때만 입력하세요. 비워 두면 기존 연결을 유지합니다.</span></label>
              <input name="githubToken" type="password" autocomplete="off" placeholder="ghp_ 로 시작하는 값" />
              <a class="token-link" href="https://github.com/settings/tokens/new?scopes=public_repo&description=daechibest" target="_blank" rel="noopener noreferrer">토큰 만들기 (Generate token 클릭)</a>
            </div>
            ${syncAccount()}
          </div>
        </details>
        ${curriculumEditor(false)}
      </form>
      ${adminFoot("배너·공지만 되돌리기")}
    </aside>
  </div>`;

window.DaechiChrome = { header, footer, adminLock, curriculumEditor, deptAdmin };
})();
