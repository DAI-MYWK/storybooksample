export default {
  title: "IrohaPaint/Footer",
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: "塗装会社『いろは』のフッター。シンプルなコピーライト表示。",
      },
    },
  },
  tags: ["autodocs"],
};

export const Default = () => `
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Kdam+Thmor+Pro&family=Noto+Sans+JP:wght@400;500;700;900&display=swap');
    
    /* Footer専用CSS */
    .iroha-paint * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    .iroha-paint {
        font-family: 'Noto Sans JP', sans-serif;
        line-height: 1.6;
    }

    .iroha-paint .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 20px;
    }

    /* Footer */
    .iroha-paint .footer {
        background: #222;
        color: white;
        text-align: center;
        padding: 2rem 0;
    }

    .iroha-paint .footer p {
        font-size: 0.9rem;
        color: #ccc;
    }
  </style>
  
  <div class="iroha-paint">
    <footer class="footer">
      <div class="container">
        <p>© いろは - NO LIMIT COLOR! 2025</p>
      </div>
    </footer>
  </div>
`;

export const WithLogo = () => `
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Kdam+Thmor+Pro&family=Noto+Sans+JP:wght@400;500;700;900&display=swap');
    
    /* Footer専用CSS - ロゴ付き */
    .iroha-paint * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    .iroha-paint {
        font-family: 'Noto Sans JP', sans-serif;
        line-height: 1.6;
    }

    .iroha-paint .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 20px;
    }

    .iroha-paint .footer {
        background: #222;
        color: white;
        text-align: center;
        padding: 3rem 0;
    }

    .iroha-paint .footer-logo {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        margin-bottom: 1rem;
    }

    .iroha-paint .footer-logo-text {
        font-size: 1.5rem;
        font-weight: 900;
        color: #FFE600;
        font-family: 'Kdam Thmor Pro', sans-serif;
    }

    .iroha-paint .footer-paint-splash {
        width: 20px;
        height: 20px;
        background: #FF2D2D;
        border-radius: 50% 10% 50% 10%;
        animation: paint-bounce 2s infinite;
    }

    .iroha-paint .footer-tagline {
        font-size: 1rem;
        color: #FFE600;
        margin-bottom: 1rem;
        font-weight: 500;
    }

    .iroha-paint .footer p {
        font-size: 0.9rem;
        color: #ccc;
    }

    @keyframes paint-bounce {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.1); }
    }
  </style>
  
  <div class="iroha-paint">
    <footer class="footer">
      <div class="container">
        <div class="footer-logo">
          <span class="footer-logo-text">いろは</span>
          <div class="footer-paint-splash"></div>
        </div>
        <p class="footer-tagline">NO LIMIT COLOR!</p>
        <p>© いろは 2025 - 塗装はもっと自由で楽しい</p>
      </div>
    </footer>
  </div>
`;

WithLogo.parameters = {
  docs: {
    description: {
      story: "ロゴとタグライン付きの充実版フッター。",
    },
  },
};
