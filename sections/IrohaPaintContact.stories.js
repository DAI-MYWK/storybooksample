export default {
  title: "IrohaPaint/Contact",
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "塗装会社『いろは』のお問い合わせセクション。電話・メール・フォームの連絡手段を提供。",
      },
    },
  },
  tags: ["autodocs"],
};

export const Default = () => `
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Kdam+Thmor+Pro&family=Noto+Sans+JP:wght@400;500;700;900&display=swap');
    
    /* Contact専用CSS */
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

    /* Contact Section */
    .iroha-paint .contact {
        position: relative;
        padding: 6rem 0;
        background: #333;
        color: white;
    }

    .iroha-paint .paint-frame-bg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(45deg, #333 25%, transparent 25%), 
                    linear-gradient(-45deg, #333 25%, transparent 25%), 
                    linear-gradient(45deg, transparent 75%, #333 75%), 
                    linear-gradient(-45deg, transparent 75%, #333 75%);
        background-size: 20px 20px;
        background-position: 0 0, 0 10px, 10px -10px, -10px 0px;
        opacity: 0.1;
    }

    .iroha-paint .contact-lead {
        text-align: center;
        font-size: 1.5rem;
        margin-bottom: 3rem;
        color: #ccc;
    }

    .iroha-paint .contact-content {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 3rem;
        align-items: center;
        margin-bottom: 3rem;
    }

    .iroha-paint .contact-options {
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }

    .iroha-paint .contact-item {
        display: flex;
        align-items: center;
        gap: 1.5rem;
        padding: 1.5rem;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 15px;
        backdrop-filter: blur(10px);
    }

    .iroha-paint .contact-icon {
        font-size: 2rem;
        width: 60px;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #FFE600;
        border-radius: 50%;
        flex-shrink: 0;
    }

    .iroha-paint .contact-info h4 {
        font-size: 1.2rem;
        margin-bottom: 0.5rem;
        color: #FFE600;
    }

    .iroha-paint .contact-info p {
        font-size: 1.1rem;
        font-weight: bold;
        margin-bottom: 0.5rem;
    }

    .iroha-paint .contact-info span {
        color: #ccc;
        font-size: 0.9rem;
    }

    .iroha-paint .contact-image {
        text-align: center;
    }

    .iroha-paint .contact-painter {
        max-width: 100%;
        height: auto;
        border-radius: 20px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.3);
    }

    .iroha-paint .cta-button {
        display: inline-flex;
        align-items: center;
        gap: 1rem;
        padding: 1.5rem 2rem;
        background: #0070FF;
        color: white;
        text-decoration: none;
        border-radius: 50px;
        font-weight: bold;
        font-size: 1.1rem;
        transition: transform 0.3s, box-shadow 0.3s;
        box-shadow: 0 4px 15px rgba(0, 112, 255, 0.3);
        margin: 0 auto;
    }

    .iroha-paint .cta-button:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 25px rgba(0, 112, 255, 0.4);
    }

    .iroha-paint .arrow-icon {
        font-size: 1.5rem;
        transition: transform 0.3s;
    }

    .iroha-paint .cta-button:hover .arrow-icon {
        transform: translateX(5px);
    }

    /* Responsive Design */
    @media (max-width: 768px) {
        .iroha-paint .section-title {
            font-size: 2.5rem;
        }
        
        .iroha-paint .contact-content {
            grid-template-columns: 1fr;
        }
    }
  </style>
  
  <div class="iroha-paint">
    <section id="contact" class="contact">
      <div class="paint-frame-bg"></div>
      <div class="container">
        <h2 class="section-title">LET'S TALK!</h2>
        <p class="contact-lead">
          塗るか迷ったら、とりあえず聞いてみよう。<br />
          燕・三条・長岡エリアならスグ伺います！
        </p>
        <div class="contact-content">
          <div class="contact-options">
            <div class="contact-item">
              <div class="contact-icon">📞</div>
              <div class="contact-info">
                <h4>電話で相談</h4>
                <p>080-5076-0489</p>
                <span>8:00〜19:00</span>
              </div>
            </div>
            <div class="contact-item">
              <div class="contact-icon">✉️</div>
              <div class="contact-info">
                <h4>メールで相談</h4>
                <p>iroha_coat@icloud.com</p>
                <span>24時間受付</span>
              </div>
            </div>
          </div>
          <div class="contact-image">
            <img
              src="https://via.placeholder.com/250x300/0070FF/FFFFFF?text=お問い合わせ"
              alt="お問い合わせ"
              class="contact-painter"
            />
          </div>
        </div>
        <a href="#" class="cta-button secondary">
          <span>24H フォームで相談</span>
          <div class="arrow-icon">→</div>
        </a>
      </div>
    </section>
  </div>
`;

export const ContactOptions = () => `
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Kdam+Thmor+Pro&family=Noto+Sans+JP:wght@400;500;700;900&display=swap');
    
    /* Contact専用CSS - 連絡手段のみ */
    .iroha-paint * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    .iroha-paint {
        font-family: 'Noto Sans JP', sans-serif;
        line-height: 1.6;
        background: #333;
        color: white;
        padding: 4rem 0;
    }

    .iroha-paint .container {
        max-width: 800px;
        margin: 0 auto;
        padding: 0 20px;
    }

    .iroha-paint .contact-options {
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }

    .iroha-paint .contact-item {
        display: flex;
        align-items: center;
        gap: 1.5rem;
        padding: 1.5rem;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 15px;
        backdrop-filter: blur(10px);
    }

    .iroha-paint .contact-icon {
        font-size: 2rem;
        width: 60px;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #FFE600;
        border-radius: 50%;
        flex-shrink: 0;
    }

    .iroha-paint .contact-info h4 {
        font-size: 1.2rem;
        margin-bottom: 0.5rem;
        color: #FFE600;
    }

    .iroha-paint .contact-info p {
        font-size: 1.1rem;
        font-weight: bold;
        margin-bottom: 0.5rem;
    }

    .iroha-paint .contact-info span {
        color: #ccc;
        font-size: 0.9rem;
    }

    .iroha-paint .cta-button {
        display: inline-flex;
        align-items: center;
        gap: 1rem;
        padding: 1.5rem 2rem;
        background: #0070FF;
        color: white;
        text-decoration: none;
        border-radius: 50px;
        font-weight: bold;
        font-size: 1.1rem;
        transition: transform 0.3s, box-shadow 0.3s;
        box-shadow: 0 4px 15px rgba(0, 112, 255, 0.3);
        margin: 2rem auto 0;
    }

    .iroha-paint .cta-button:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 25px rgba(0, 112, 255, 0.4);
    }

    .iroha-paint .arrow-icon {
        font-size: 1.5rem;
        transition: transform 0.3s;
    }

    .iroha-paint .cta-button:hover .arrow-icon {
        transform: translateX(5px);
    }
  </style>
  
  <div class="iroha-paint">
    <div class="container">
      <div class="contact-options">
        <div class="contact-item">
          <div class="contact-icon">📞</div>
          <div class="contact-info">
            <h4>電話で相談</h4>
            <p>080-5076-0489</p>
            <span>8:00〜19:00</span>
          </div>
        </div>
        <div class="contact-item">
          <div class="contact-icon">✉️</div>
          <div class="contact-info">
            <h4>メールで相談</h4>
            <p>iroha_coat@icloud.com</p>
            <span>24時間受付</span>
          </div>
        </div>
      </div>
      <a href="#" class="cta-button">
        <span>24H フォームで相談</span>
        <div class="arrow-icon">→</div>
      </a>
    </div>
  </div>
`;

ContactOptions.parameters = {
  docs: {
    description: {
      story: "連絡手段のみ表示。シンプルなレイアウト。",
    },
  },
};
