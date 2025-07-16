export default {
  title: "skc/Header",
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: "ヘッダー・ナビゲーションセクション。",
      },
    },
  },
  tags: ["autodocs"],
};

export const Default = () => `
  <div class="skc">
    <nav class="navbar" id="navbar">
      <div class="nav-container">
        <div class="nav-logo">
          <span class="logo-text">SKC</span>
          <span class="logo-sub">Pilates & Kickboxing</span>
        </div>
        <ul class="nav-menu">
          <li><a href="#about">スタジオについて</a></li>
          <li><a href="#features">選ばれる理由</a></li>
          <li><a href="#price">料金案内</a></li>
          <li><a href="#staff">インストラクター</a></li>
          <li><a href="#access">アクセス</a></li>
          <li><a href="#contact" class="nav-cta">無料体験予約</a></li>
        </ul>
        <div class="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  </div>
`;
