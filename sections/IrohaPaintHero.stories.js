export default {
  title: "IrohaPaint/Hero",
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "塗装会社『いろは』のヒーローセクション。メインキャッチコピーとCTAボタンを含む。",
      },
    },
  },
  tags: ["autodocs"],
};

export const Default = () => `
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Kdam+Thmor+Pro&family=Noto+Sans+JP:wght@400;500;700;900&display=swap');
    
    /* Hero専用CSS */
    .iroha-paint * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    .iroha-paint {
        font-family: 'Noto Sans JP', sans-serif;
        line-height: 1.6;
        overflow-x: hidden;
    }

    /* Hero Section */
    .iroha-paint .hero {
        position: relative;
        background: linear-gradient(135deg, #FFE600 0%, #FFD700 100%);
        padding: 8rem 0 4rem;
        overflow: hidden;
    }

    .iroha-paint .paint-splash {
        position: absolute;
        opacity: 0.7;
        animation: paint-float 6s ease-in-out infinite;
    }

    .iroha-paint .red-splash {
        top: 20%;
        left: 10%;
        width: 150px;
        height: 150px;
        background: #FF2D2D;
        border-radius: 50% 10% 50% 10%;
        animation-delay: 0s;
    }

    .iroha-paint .blue-splash {
        top: 60%;
        right: 15%;
        width: 100px;
        height: 100px;
        background: #0070FF;
        border-radius: 10% 50% 10% 50%;
        animation-delay: 2s;
    }

    .iroha-paint .paint-drip {
        position: absolute;
        width: 20px;
        height: 100px;
        background: #00C07B;
        border-radius: 10px 10px 50% 50%;
        animation: paint-drip 4s ease-in-out infinite;
    }

    .iroha-paint .drip-1 {
        top: 30%;
        left: 20%;
        animation-delay: 1s;
    }

    .iroha-paint .drip-2 {
        top: 70%;
        right: 30%;
        animation-delay: 3s;
    }

    .iroha-paint .drip-3 {
        top: 50%;
        left: 70%;
        animation-delay: 5s;
    }

    .iroha-paint .hero-container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 20px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 3rem;
        align-items: center;
    }

    .iroha-paint .hero-content {
        z-index: 10;
        position: relative;
    }

    .iroha-paint .hero-title {
        font-size: 5rem;
        line-height: 1;
        margin-bottom: 1rem;
        color: #333;
        font-family: 'Kdam Thmor Pro', sans-serif;
        font-weight: 700;
    }

    .iroha-paint .title-line {
        display: block;
        animation: title-pop 1s ease-out;
    }

    .iroha-paint .title-line:nth-child(1) {
        animation-delay: 0.2s;
    }

    .iroha-paint .title-line:nth-child(2) {
        animation-delay: 0.4s;
    }

    .iroha-paint .title-line.highlight {
        color: #FF2D2D;
        animation-delay: 0.6s;
    }

    .iroha-paint .hero-subtitle {
        font-size: 1.5rem;
        color: #333;
        margin-bottom: 1rem;
        font-weight: 500;
    }

    .iroha-paint .hero-lead {
        font-size: 1.2rem;
        color: #666;
        margin-bottom: 2rem;
        line-height: 1.8;
    }

    .iroha-paint .cta-button {
        display: inline-flex;
        align-items: center;
        gap: 1rem;
        padding: 1.5rem 2rem;
        background: #FF2D2D;
        color: white;
        text-decoration: none;
        border-radius: 50px;
        font-weight: bold;
        font-size: 1.1rem;
        transition: transform 0.3s, box-shadow 0.3s;
        box-shadow: 0 4px 15px rgba(255, 45, 45, 0.3);
    }

    .iroha-paint .cta-button:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 25px rgba(255, 45, 45, 0.4);
    }

    .iroha-paint .paint-brush-icon {
        font-size: 1.5rem;
        animation: brush-wiggle 1s ease-in-out infinite;
    }

    .iroha-paint .hero-image {
        position: relative;
        text-align: center;
    }

    .iroha-paint .hero-painter {
        max-width: 100%;
        height: auto;
        border-radius: 20px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.2);
    }

    .iroha-paint .paint-effect-overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(45deg, transparent 30%, rgba(255, 45, 45, 0.1) 50%, transparent 70%);
        pointer-events: none;
        animation: paint-sweep 3s ease-in-out infinite;
    }

    /* Animations */
    @keyframes paint-float {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        50% { transform: translateY(-20px) rotate(180deg); }
    }

    @keyframes paint-drip {
        0% { transform: translateY(0px); opacity: 1; }
        50% { transform: translateY(20px); opacity: 0.7; }
        100% { transform: translateY(0px); opacity: 1; }
    }

    @keyframes title-pop {
        0% { transform: translateY(20px); opacity: 0; }
        100% { transform: translateY(0); opacity: 1; }
    }

    @keyframes brush-wiggle {
        0%, 100% { transform: rotate(0deg); }
        25% { transform: rotate(-10deg); }
        75% { transform: rotate(10deg); }
    }

    @keyframes paint-sweep {
        0% { transform: translateX(-100%); }
        100% { transform: translateX(100%); }
    }

    /* Responsive Design */
    @media (max-width: 768px) {
        .iroha-paint .hero-container {
            grid-template-columns: 1fr;
            text-align: center;
        }
        
        .iroha-paint .hero-title {
            font-size: 3rem;
        }
    }
  </style>
  
  <div class="iroha-paint">
    <section id="hero" class="hero">
      <div class="paint-splash red-splash"></div>
      <div class="paint-splash blue-splash"></div>
      <div class="paint-drip drip-1"></div>
      <div class="paint-drip drip-2"></div>
      <div class="paint-drip drip-3"></div>

      <div class="hero-container">
        <div class="hero-content">
          <h1 class="hero-title">
            <span class="title-line">NO</span>
            <span class="title-line">LIMIT</span>
            <span class="title-line highlight">COLOR!</span>
          </h1>
          <p class="hero-subtitle">
            住まいにインパクトと安心を。塗装はもっと自由で楽しい。
          </p>
          <p class="hero-lead">
            完全自社施工の〈いろは〉が、燕の街に<br />
            ビビッドな彩りと長持ちするクオリティをもたらします。
          </p>
          <a href="#contact" class="cta-button primary">
            <span>無料でカラー提案を受ける</span>
            <div class="paint-brush-icon">🎨</div>
          </a>
        </div>
        <div class="hero-image">
          <img
            src="https://via.placeholder.com/500x400/FFE600/333333?text=NO+LIMIT+COLOR!"
            alt="NO LIMIT COLOR! ペインター"
            class="hero-painter"
          />
          <div class="paint-effect-overlay"></div>
        </div>
      </div>
    </section>
  </div>
`;

export const WithoutAnimations = () => `
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Kdam+Thmor+Pro&family=Noto+Sans+JP:wght@400;500;700;900&display=swap');
    
    /* Hero専用CSS - アニメーション無効 */
    .iroha-paint * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    .iroha-paint {
        font-family: 'Noto Sans JP', sans-serif;
        line-height: 1.6;
        overflow-x: hidden;
    }

    .iroha-paint .hero {
        position: relative;
        background: linear-gradient(135deg, #FFE600 0%, #FFD700 100%);
        padding: 8rem 0 4rem;
        overflow: hidden;
    }

    .iroha-paint .hero-container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 20px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 3rem;
        align-items: center;
    }

    .iroha-paint .hero-content {
        z-index: 10;
        position: relative;
    }

    .iroha-paint .hero-title {
        font-size: 5rem;
        line-height: 1;
        margin-bottom: 1rem;
        color: #333;
        font-family: 'Kdam Thmor Pro', sans-serif;
        font-weight: 700;
    }

    .iroha-paint .title-line {
        display: block;
    }

    .iroha-paint .title-line.highlight {
        color: #FF2D2D;
    }

    .iroha-paint .hero-subtitle {
        font-size: 1.5rem;
        color: #333;
        margin-bottom: 1rem;
        font-weight: 500;
    }

    .iroha-paint .hero-lead {
        font-size: 1.2rem;
        color: #666;
        margin-bottom: 2rem;
        line-height: 1.8;
    }

    .iroha-paint .cta-button {
        display: inline-flex;
        align-items: center;
        gap: 1rem;
        padding: 1.5rem 2rem;
        background: #FF2D2D;
        color: white;
        text-decoration: none;
        border-radius: 50px;
        font-weight: bold;
        font-size: 1.1rem;
        transition: transform 0.3s, box-shadow 0.3s;
        box-shadow: 0 4px 15px rgba(255, 45, 45, 0.3);
    }

    .iroha-paint .cta-button:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 25px rgba(255, 45, 45, 0.4);
    }

    .iroha-paint .paint-brush-icon {
        font-size: 1.5rem;
    }

    .iroha-paint .hero-image {
        position: relative;
        text-align: center;
    }

    .iroha-paint .hero-painter {
        max-width: 100%;
        height: auto;
        border-radius: 20px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.2);
    }

    @media (max-width: 768px) {
        .iroha-paint .hero-container {
            grid-template-columns: 1fr;
            text-align: center;
        }
        
        .iroha-paint .hero-title {
            font-size: 3rem;
        }
    }
  </style>
  
  <div class="iroha-paint">
    <section id="hero" class="hero">
      <div class="hero-container">
        <div class="hero-content">
          <h1 class="hero-title">
            <span class="title-line">NO</span>
            <span class="title-line">LIMIT</span>
            <span class="title-line highlight">COLOR!</span>
          </h1>
          <p class="hero-subtitle">
            住まいにインパクトと安心を。塗装はもっと自由で楽しい。
          </p>
          <p class="hero-lead">
            完全自社施工の〈いろは〉が、燕の街に<br />
            ビビッドな彩りと長持ちするクオリティをもたらします。
          </p>
          <a href="#contact" class="cta-button primary">
            <span>無料でカラー提案を受ける</span>
            <div class="paint-brush-icon">🎨</div>
          </a>
        </div>
        <div class="hero-image">
          <img
            src="https://via.placeholder.com/500x400/FFE600/333333?text=NO+LIMIT+COLOR!"
            alt="NO LIMIT COLOR! ペインター"
            class="hero-painter"
          />
        </div>
      </div>
    </section>
  </div>
`;

WithoutAnimations.parameters = {
  docs: {
    description: {
      story: "アニメーション無効版。静的なデザインのみ表示されます。",
    },
  },
};
