(function () {
  var root = document.documentElement;

  // ---------- Language ----------
  var LANG_KEY = "sh-portfolio-lang";
  function applyLang(lang) {
    if (lang === "ja") {
      root.setAttribute("data-lang", "ja");
      root.setAttribute("lang", "ja");
    } else {
      root.removeAttribute("data-lang");
      root.setAttribute("lang", "en");
    }
  }

  var savedLang = localStorage.getItem(LANG_KEY);
  if (!savedLang) {
    savedLang = navigator.language && navigator.language.toLowerCase().indexOf("ja") === 0 ? "ja" : "en";
  }
  applyLang(savedLang);

  var langBtn = document.getElementById("langToggle");
  if (langBtn) {
    langBtn.addEventListener("click", function () {
      var current = root.getAttribute("data-lang") === "ja" ? "ja" : "en";
      var next = current === "ja" ? "en" : "ja";
      applyLang(next);
      localStorage.setItem(LANG_KEY, next);
    });
  }

  // ---------- Theme ----------
  var THEME_KEY = "sh-portfolio-theme";
  var savedTheme = localStorage.getItem(THEME_KEY);
  if (savedTheme === "dark" || savedTheme === "light") {
    root.setAttribute("data-theme", savedTheme);
  }

  var themeBtn = document.getElementById("themeToggle");
  if (themeBtn) {
    themeBtn.addEventListener("click", function () {
      var prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
      var current = root.getAttribute("data-theme") || (prefersLight ? "light" : "dark");
      var next = current === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      localStorage.setItem(THEME_KEY, next);
    });
  }
})();
