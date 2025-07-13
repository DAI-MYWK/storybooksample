// 共通のCSSとJSを読み込み
import "../css/style.css";

// AOS CSSを読み込み
const aosCSS = document.createElement("link");
aosCSS.rel = "stylesheet";
aosCSS.href = "https://unpkg.com/aos@2.3.1/dist/aos.css";
document.head.appendChild(aosCSS);

// Magnific Popup CSSを読み込み
const magnificCSS = document.createElement("link");
magnificCSS.rel = "stylesheet";
magnificCSS.href =
  "https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/magnific-popup.min.css";
document.head.appendChild(magnificCSS);

// jQueryとその他の必要なライブラリを読み込み
const loadExternalLibraries = () => {
  // jQuery
  const jqueryScript = document.createElement("script");
  jqueryScript.src = "https://code.jquery.com/jquery-3.6.0.min.js";
  jqueryScript.async = false;
  document.head.appendChild(jqueryScript);

  // AOS (Animate On Scroll)
  const aosScript = document.createElement("script");
  aosScript.src = "https://unpkg.com/aos@2.3.1/dist/aos.js";
  aosScript.async = false;
  document.head.appendChild(aosScript);

  // Magnific Popup
  const magnificScript = document.createElement("script");
  magnificScript.src =
    "https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/jquery.magnific-popup.min.js";
  magnificScript.async = false;
  document.head.appendChild(magnificScript);
};

// ライブラリを読み込み
loadExternalLibraries();

// jQueryが読み込まれてからscript.jsを読み込み
const waitForJQuery = setInterval(() => {
  if (typeof window.$ !== "undefined") {
    clearInterval(waitForJQuery);
    import("../js/script.js");
  }
}, 100);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
