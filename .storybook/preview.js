// CSS/JSファイルのインポート
import "../css/skc-fitness.css";
import "../css/iroha-paint.css";
import "../js/script.js";
import "../js/skc-fitness.js";
import "../js/iroha-paint.js";

// Storybook基本設定
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
