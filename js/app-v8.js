// 예전 ?b=15 같은 캐시로 들어온 방문도 최신 파일을 불러옵니다.
// 화면 수정은 css/site.css, js/common.js, js/curriculum.js 만 하시면 됩니다.
(function () {
  var v = Date.now();
  document.querySelectorAll('link[rel="stylesheet"]').forEach(function (link) {
    var href = link.getAttribute("href") || "";
    if (/site(-v\d+)?\.css/i.test(href)) {
      link.href = "css/site.css?v=" + v;
    }
  });
  try {
    var params = new URLSearchParams(location.search);
    if (params.has("b")) {
      params.delete("b");
      var q = params.toString();
      history.replaceState(null, "", location.pathname + (q ? "?" + q : "") + location.hash);
    }
  } catch (error) {}
  var page = document.body && document.body.getAttribute("data-page");
  var add = function (src, after) {
    var script = document.createElement("script");
    script.src = src + "?v=" + v;
    script.onload = after || null;
    (document.body || document.documentElement).appendChild(script);
  };
  if (page && page !== "home") {
    add("js/curriculum.js", function () { add("js/common.js"); });
  } else {
    add("js/common.js");
  }
})();
