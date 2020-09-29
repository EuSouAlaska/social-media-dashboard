var themeSwitcher = document.getElementById("switch-theme");
var currentTheme = "light";

themeSwitcher.addEventListener(
  "click",
  function () {
    var lightTheme = "./light-theme.css";
    var darkTheme = "./dark-theme.css";

    var oldCss = document.getElementsByTagName("link").item(2);

    var newCss = document.createElement("link");
    newCss.setAttribute("rel", "stylesheet");
    newCss.setAttribute("type", "text/css");

    if (currentTheme === "light") {
      newCss.setAttribute("href", darkTheme);
      currentTheme = "dark";
    } else if (currentTheme === "dark") {
      newCss.setAttribute("href", lightTheme);
      currentTheme = "light";
    }

    document.getElementsByTagName("head").item(0).replaceChild(newCss, oldCss);
  },
  false
);

/* SCRIPT BY https://github.com/winstoncodes */
