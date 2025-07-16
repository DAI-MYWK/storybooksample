export default {
  title: "IrohaPaint/About",
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "塗装会社『いろは』のAboutセクション。会社の特徴と代表の紹介を含む。",
      },
    },
  },
  tags: ["autodocs"],
};

export const Default = () => `
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Kdam+Thmor+Pro&family=Noto+Sans+JP:wght@400;500;700;900&display=swap');
    
    /* About専用CSS */
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

    .iroha-paint .section-title {
        font-size: 4rem;
        color: #333;
        text-align: center;
        margin-bottom: 2rem;
        text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
        letter-spacing: 3px;
        font-family: 'Kdam Thmor Pro', sans-serif;
        font-weight: 700;
    }

    /* About Section */
    .iroha-paint .about {
        position: relative;
        padding: 6rem 0;
        background: #0070FF;
        color: white;
    }

    .iroha-paint .section-bg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
    }

    .iroha-paint .diagonal-stripes {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: repeating-linear-gradient(
            45deg,
            transparent,
            transparent 20px,
            rgba(255, 255, 255, 0.05) 20px,
            rgba(255, 255, 255, 0.05) 40px
        );
    }

    .iroha-paint .blue-splash-overlay {
        position: absolute;
        top: 20%;
        right: 10%;
        width: 200px;
        height: 200px;
        background: rgba(255, 230, 0, 0.3);
        border-radius: 50% 10% 50% 10%;
        animation: paint-float 8s ease-in-out infinite;
    }

    .iroha-paint .about-content {
        position: relative;
        z-index: 2;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 3rem;
        align-items: center;
    }

    .iroha-paint .about-bullets {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }

    .iroha-paint .bullet-item {
        display: flex;
        align-items: center;
        gap: 1rem;
        font-size: 1.2rem;
    }

    .iroha-paint .bullet-icon {
        background: #00C07B;
        color: white;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        flex-shrink: 0;
    }

    .iroha-paint .about-image-section {
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }

    .iroha-paint .quote-section {
        text-align: center;
    }

    .iroha-paint .quote-section blockquote {
        font-size: 2rem;
        font-style: italic;
        color: #FFE600;
        margin-bottom: 1rem;
    }

    .iroha-paint .quote-section cite {
        font-size: 1.2rem;
        color: #ccc;
    }

    .iroha-paint .about-painter-image {
        text-align: center;
    }

    .iroha-paint .painter-portrait {
        max-width: 100%;
        height: auto;
        border-radius: 20px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.3);
    }

    /* Animations */
    @keyframes paint-float {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        50% { transform: translateY(-20px) rotate(180deg); }
    }

    /* Responsive Design */
    @media (max-width: 768px) {
        .iroha-paint .section-title {
            font-size: 2.5rem;
        }
        
        .iroha-paint .about-content {
            grid-template-columns: 1fr;
        }
    }
  </style>
  
  <div class="iroha-paint">
    <section id="about" class="about">
      <div class="section-bg">
        <div class="diagonal-stripes"></div>
        <div class="blue-splash-overlay"></div>
      </div>
      <div class="container">
        <h2 class="section-title">PLAYFUL × PROFESSIONAL</h2>
        <div class="about-content">
          <div class="about-bullets">
            <div class="bullet-item">
              <div class="bullet-icon">✓</div>
              <span>100%自社施工でブレない仕上げ</span>
            </div>
            <div class="bullet-item">
              <div class="bullet-icon">✓</div>
              <span>LINEで毎日レポート、工程が丸見え</span>
            </div>
            <div class="bullet-item">
              <div class="bullet-icon">✓</div>
              <span>燕ローカルだから即行動・即レス</span>
            </div>
            <div class="bullet-item">
              <div class="bullet-icon">✓</div>
              <span>高品質塗料×遊び心のデザイン提案</span>
            </div>
          </div>
          <div class="about-image-section">
            <div class="quote-section">
              <blockquote>
                <p>塗装はクリエイティブだ。</p>
                <cite>— 代表・高橋賢行</cite>
              </blockquote>
            </div>
            <div class="about-painter-image">
              <img
                src="https://via.placeholder.com/250x300/FF2D2D/FFFFFF?text=代表"
                alt="代表・高橋賢行"
                class="painter-portrait"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
`;

export const BulletsOnly = () => `
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Kdam+Thmor+Pro&family=Noto+Sans+JP:wght@400;500;700;900&display=swap');
    
    /* About専用CSS - 箇条書きのみ */
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

    .iroha-paint .section-title {
        font-size: 4rem;
        color: #333;
        text-align: center;
        margin-bottom: 2rem;
        text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
        letter-spacing: 3px;
        font-family: 'Kdam Thmor Pro', sans-serif;
        font-weight: 700;
    }

    .iroha-paint .about {
        position: relative;
        padding: 6rem 0;
        background: #0070FF;
        color: white;
    }

    .iroha-paint .about-bullets {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        max-width: 600px;
        margin: 0 auto;
    }

    .iroha-paint .bullet-item {
        display: flex;
        align-items: center;
        gap: 1rem;
        font-size: 1.2rem;
    }

    .iroha-paint .bullet-icon {
        background: #00C07B;
        color: white;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        flex-shrink: 0;
    }

    @media (max-width: 768px) {
        .iroha-paint .section-title {
            font-size: 2.5rem;
        }
    }
  </style>
  
  <div class="iroha-paint">
    <section id="about" class="about">
      <div class="container">
        <h2 class="section-title">PLAYFUL × PROFESSIONAL</h2>
        <div class="about-bullets">
          <div class="bullet-item">
            <div class="bullet-icon">✓</div>
            <span>100%自社施工でブレない仕上げ</span>
          </div>
          <div class="bullet-item">
            <div class="bullet-icon">✓</div>
            <span>LINEで毎日レポート、工程が丸見え</span>
          </div>
          <div class="bullet-item">
            <div class="bullet-icon">✓</div>
            <span>燕ローカルだから即行動・即レス</span>
          </div>
          <div class="bullet-item">
            <div class="bullet-icon">✓</div>
            <span>高品質塗料×遊び心のデザイン提案</span>
          </div>
        </div>
      </div>
    </section>
  </div>
`;

BulletsOnly.parameters = {
  docs: {
    description: {
      story: "特徴の箇条書きのみ表示。シンプルなレイアウト。",
    },
  },
};
