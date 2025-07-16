export default {
  title: "IrohaPaint/Services",
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "塗装会社『いろは』のサービス紹介セクション。4つのサービスメニューを紹介。",
      },
    },
  },
  tags: ["autodocs"],
};

export const Default = () => `
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Kdam+Thmor+Pro&family=Noto+Sans+JP:wght@400;500;700;900&display=swap');
    
    /* Services専用CSS */
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

    /* Services Section */
    .iroha-paint .services {
        position: relative;
        padding: 6rem 0;
        background: #FFE600;
    }

    .iroha-paint .brush-stroke-bg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(45deg, transparent 30%, rgba(255, 45, 45, 0.1) 50%, transparent 70%);
        animation: brush-sweep 10s ease-in-out infinite;
    }

    .iroha-paint .services-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 2rem;
        position: relative;
        z-index: 2;
    }

    .iroha-paint .service-card {
        background: white;
        border-radius: 20px;
        padding: 2rem;
        text-align: center;
        box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        transition: transform 0.3s, box-shadow 0.3s;
        position: relative;
        overflow: hidden;
    }

    .iroha-paint .service-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 20px 40px rgba(0,0,0,0.15);
    }

    .iroha-paint .service-image {
        margin-bottom: 1.5rem;
    }

    .iroha-paint .service-painter {
        max-width: 100%;
        height: auto;
        border-radius: 10px;
    }

    .iroha-paint .card-header {
        margin-bottom: 1rem;
    }

    .iroha-paint .card-header h3 {
        font-size: 1.5rem;
        color: #333;
        margin-bottom: 0.5rem;
        font-family: 'Kdam Thmor Pro', sans-serif;
        font-weight: 700;
    }

    .iroha-paint .subtitle {
        color: #666;
        font-size: 1rem;
    }

    .iroha-paint .service-card p {
        color: #666;
        line-height: 1.6;
    }

    .iroha-paint .paint-splash-card {
        position: absolute;
        width: 60px;
        height: 60px;
        border-radius: 50% 10% 50% 10%;
        top: 20px;
        right: 20px;
        animation: paint-bounce 2s infinite;
    }

    .iroha-paint .paint-splash-card.red {
        background: #FF2D2D;
    }

    .iroha-paint .paint-splash-card.blue {
        background: #0070FF;
    }

    .iroha-paint .paint-splash-card.green {
        background: #00C07B;
    }

    .iroha-paint .paint-splash-card.orange {
        background: #FF9800;
    }

    /* Animations */
    @keyframes brush-sweep {
        0% { transform: translateX(-100%) rotate(0deg); }
        100% { transform: translateX(100%) rotate(360deg); }
    }

    @keyframes paint-bounce {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.1); }
    }

    /* Responsive Design */
    @media (max-width: 768px) {
        .iroha-paint .section-title {
            font-size: 2.5rem;
        }
        
        .iroha-paint .services-grid {
            grid-template-columns: 1fr;
        }
    }
  </style>
  
  <div class="iroha-paint">
    <section id="services" class="services">
      <div class="brush-stroke-bg"></div>
      <div class="container">
        <h2 class="section-title">MENU</h2>
        <div class="services-grid">
          <div class="service-card" data-color="#FF2D2D">
            <div class="service-image">
              <img
                src="https://via.placeholder.com/300x200/FF2D2D/FFFFFF?text=BASIC+PAINT"
                alt="外壁・屋根塗装"
                class="service-painter"
              />
            </div>
            <div class="card-header">
              <h3>BASIC PAINT</h3>
              <span class="subtitle">外壁 & 屋根</span>
            </div>
            <p>耐候＋美観の王道３回塗り。フッ素樹脂で10年キープ。</p>
            <div class="paint-splash-card red"></div>
          </div>
          <div class="service-card" data-color="#0070FF">
            <div class="service-image">
              <img
                src="https://via.placeholder.com/300x200/0070FF/FFFFFF?text=ROOM+BOOST"
                alt="内装・家具塗装"
                class="service-painter"
              />
            </div>
            <div class="card-header">
              <h3>ROOM BOOST</h3>
              <span class="subtitle">内装 & 家具</span>
            </div>
            <p>匂い少なめ塗料で、部屋も気分もクリーンUP。</p>
            <div class="paint-splash-card blue"></div>
          </div>
          <div class="service-card" data-color="#00C07B">
            <div class="service-image">
              <img
                src="https://via.placeholder.com/300x200/00C07B/FFFFFF?text=POP+REPAIR"
                alt="ちょこっと補修"
                class="service-painter"
              />
            </div>
            <div class="card-header">
              <h3>POP REPAIR</h3>
              <span class="subtitle">ちょこっと補修</span>
            </div>
            <p>雨樋１本からOK。気軽に頼める"街のペイント屋"。</p>
            <div class="paint-splash-card green"></div>
          </div>
          <div class="service-card" data-color="#FF9800">
            <div class="service-image">
              <img
                src="https://via.placeholder.com/300x200/FF9800/FFFFFF?text=COLOR+DESIGN"
                alt="配色コンサル"
                class="service-painter"
              />
            </div>
            <div class="card-header">
              <h3>COLOR DESIGN</h3>
              <span class="subtitle">配色コンサル</span>
            </div>
            <p>カラーシミュレーションで未来のわが家を先取り！</p>
            <div class="paint-splash-card orange"></div>
          </div>
        </div>
      </div>
    </section>
  </div>
`;

export const CardsOnly = () => `
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Kdam+Thmor+Pro&family=Noto+Sans+JP:wght@400;500;700;900&display=swap');
    
    /* Services専用CSS - カードのみ */
    .iroha-paint * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    .iroha-paint {
        font-family: 'Noto Sans JP', sans-serif;
        line-height: 1.6;
        background: #FFE600;
        padding: 4rem 0;
    }

    .iroha-paint .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 20px;
    }

    .iroha-paint .services-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 2rem;
    }

    .iroha-paint .service-card {
        background: white;
        border-radius: 20px;
        padding: 2rem;
        text-align: center;
        box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        transition: transform 0.3s, box-shadow 0.3s;
        position: relative;
        overflow: hidden;
    }

    .iroha-paint .service-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 20px 40px rgba(0,0,0,0.15);
    }

    .iroha-paint .service-image {
        margin-bottom: 1.5rem;
    }

    .iroha-paint .service-painter {
        max-width: 100%;
        height: auto;
        border-radius: 10px;
    }

    .iroha-paint .card-header {
        margin-bottom: 1rem;
    }

    .iroha-paint .card-header h3 {
        font-size: 1.5rem;
        color: #333;
        margin-bottom: 0.5rem;
        font-family: 'Kdam Thmor Pro', sans-serif;
        font-weight: 700;
    }

    .iroha-paint .subtitle {
        color: #666;
        font-size: 1rem;
    }

    .iroha-paint .service-card p {
        color: #666;
        line-height: 1.6;
    }

    .iroha-paint .paint-splash-card {
        position: absolute;
        width: 60px;
        height: 60px;
        border-radius: 50% 10% 50% 10%;
        top: 20px;
        right: 20px;
        animation: paint-bounce 2s infinite;
    }

    .iroha-paint .paint-splash-card.red {
        background: #FF2D2D;
    }

    .iroha-paint .paint-splash-card.blue {
        background: #0070FF;
    }

    .iroha-paint .paint-splash-card.green {
        background: #00C07B;
    }

    .iroha-paint .paint-splash-card.orange {
        background: #FF9800;
    }

    @keyframes paint-bounce {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.1); }
    }

    @media (max-width: 768px) {
        .iroha-paint .services-grid {
            grid-template-columns: 1fr;
        }
    }
  </style>
  
  <div class="iroha-paint">
    <div class="container">
      <div class="services-grid">
        <div class="service-card">
          <div class="service-image">
            <img
              src="https://via.placeholder.com/300x200/FF2D2D/FFFFFF?text=BASIC+PAINT"
              alt="外壁・屋根塗装"
              class="service-painter"
            />
          </div>
          <div class="card-header">
            <h3>BASIC PAINT</h3>
            <span class="subtitle">外壁 & 屋根</span>
          </div>
          <p>耐候＋美観の王道３回塗り。フッ素樹脂で10年キープ。</p>
          <div class="paint-splash-card red"></div>
        </div>
        <div class="service-card">
          <div class="service-image">
            <img
              src="https://via.placeholder.com/300x200/0070FF/FFFFFF?text=ROOM+BOOST"
              alt="内装・家具塗装"
              class="service-painter"
            />
          </div>
          <div class="card-header">
            <h3>ROOM BOOST</h3>
            <span class="subtitle">内装 & 家具</span>
          </div>
          <p>匂い少なめ塗料で、部屋も気分もクリーンUP。</p>
          <div class="paint-splash-card blue"></div>
        </div>
        <div class="service-card">
          <div class="service-image">
            <img
              src="https://via.placeholder.com/300x200/00C07B/FFFFFF?text=POP+REPAIR"
              alt="ちょこっと補修"
              class="service-painter"
            />
          </div>
          <div class="card-header">
            <h3>POP REPAIR</h3>
            <span class="subtitle">ちょこっと補修</span>
          </div>
          <p>雨樋１本からOK。気軽に頼める"街のペイント屋"。</p>
          <div class="paint-splash-card green"></div>
        </div>
        <div class="service-card">
          <div class="service-image">
            <img
              src="https://via.placeholder.com/300x200/FF9800/FFFFFF?text=COLOR+DESIGN"
              alt="配色コンサル"
              class="service-painter"
            />
          </div>
          <div class="card-header">
            <h3>COLOR DESIGN</h3>
            <span class="subtitle">配色コンサル</span>
          </div>
          <p>カラーシミュレーションで未来のわが家を先取り！</p>
          <div class="paint-splash-card orange"></div>
        </div>
      </div>
    </div>
  </div>
`;

CardsOnly.parameters = {
  docs: {
    description: {
      story: "サービスカードのみ表示。背景アニメーションなし。",
    },
  },
};
