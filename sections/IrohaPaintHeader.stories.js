export default {
  title: "IrohaPaint/Header",
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "塗装会社『いろは』のナビゲーションヘッダー。固定ポジションで常に表示される。",
      },
    },
  },
  tags: ["autodocs"],
};

export const Default = () => `
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Kdam+Thmor+Pro&family=Noto+Sans+JP:wght@400;500;700;900&display=swap');
    
    /* Header専用CSS */
    .iroha-paint * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    .iroha-paint {
        font-family: 'Noto Sans JP', sans-serif;
        line-height: 1.6;
    }

    /* Navigation */
    .iroha-paint .navbar {
        background: #FFE600;
        padding: 1rem 0;
        position: fixed;
        width: 100%;
        top: 0;
        z-index: 1000;
        box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    }

    .iroha-paint .nav-container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .iroha-paint .logo {
        position: relative;
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .iroha-paint .logo-text {
        font-size: 2rem;
        font-weight: 900;
        color: #333;
        font-family: 'Kdam Thmor Pro', sans-serif;
    }

    .iroha-paint .paint-splash-mini {
        width: 30px;
        height: 30px;
        background: #FF2D2D;
        border-radius: 50% 10% 50% 10%;
        animation: paint-bounce 2s infinite;
    }

    .iroha-paint .nav-menu {
        display: flex;
        list-style: none;
        gap: 2rem;
    }

    .iroha-paint .nav-menu a {
        color: #333;
        text-decoration: none;
        font-weight: 500;
        transition: color 0.3s;
    }

    .iroha-paint .nav-menu a:hover {
        color: #FF2D2D;
    }

    .iroha-paint .hamburger {
        display: none;
        flex-direction: column;
        cursor: pointer;
    }

    .iroha-paint .hamburger span {
        width: 25px;
        height: 3px;
        background: #333;
        margin: 3px 0;
        transition: 0.3s;
    }

    /* Animations */
    @keyframes paint-bounce {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.1); }
    }

    /* Responsive */
    @media (max-width: 768px) {
        .iroha-paint .nav-menu {
            display: none;
        }
        
        .iroha-paint .hamburger {
            display: flex;
        }
    }
  </style>
  
  <div class="iroha-paint">
    <nav class="navbar">
      <div class="nav-container">
        <div class="logo">
          <span class="logo-text">いろは</span>
          <div class="paint-splash-mini"></div>
        </div>
        <ul class="nav-menu">
          <li><a href="#hero">ホーム</a></li>
          <li><a href="#about">私たちについて</a></li>
          <li><a href="#services">サービス</a></li>
          <li><a href="#works">施工事例</a></li>
          <li><a href="#contact">お問い合わせ</a></li>
        </ul>
        <div class="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
    
    <!-- スペーサー（fixed positionの下にコンテンツを配置するため） -->
    <div style="height: 80px;"></div>
  </div>
`;

export const Mobile = () => `
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Kdam+Thmor+Pro&family=Noto+Sans+JP:wght@400;500;700;900&display=swap');
    
    /* Header専用CSS - モバイル強制表示 */
    .iroha-paint * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    .iroha-paint {
        font-family: 'Noto Sans JP', sans-serif;
        line-height: 1.6;
    }

    .iroha-paint .navbar {
        background: #FFE600;
        padding: 1rem 0;
        position: fixed;
        width: 100%;
        top: 0;
        z-index: 1000;
        box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    }

    .iroha-paint .nav-container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .iroha-paint .logo {
        position: relative;
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .iroha-paint .logo-text {
        font-size: 1.5rem;
        font-weight: 900;
        color: #333;
        font-family: 'Kdam Thmor Pro', sans-serif;
    }

    .iroha-paint .paint-splash-mini {
        width: 25px;
        height: 25px;
        background: #FF2D2D;
        border-radius: 50% 10% 50% 10%;
        animation: paint-bounce 2s infinite;
    }

    .iroha-paint .nav-menu {
        display: none;
    }

    .iroha-paint .hamburger {
        display: flex;
        flex-direction: column;
        cursor: pointer;
    }

    .iroha-paint .hamburger span {
        width: 25px;
        height: 3px;
        background: #333;
        margin: 3px 0;
        transition: 0.3s;
    }

    @keyframes paint-bounce {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.1); }
    }
  </style>
  
  <div class="iroha-paint">
    <nav class="navbar">
      <div class="nav-container">
        <div class="logo">
          <span class="logo-text">いろは</span>
          <div class="paint-splash-mini"></div>
        </div>
        <div class="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
    
    <div style="height: 80px;"></div>
  </div>
`;

Mobile.parameters = {
  viewport: {
    defaultViewport: "mobile1",
  },
  docs: {
    description: {
      story: "モバイル表示。ハンバーガーメニューが表示されます。",
    },
  },
};
