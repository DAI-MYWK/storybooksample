export default {
  title: "skc/Hero",
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "メインビジュアル・ヒーローセクション。サイトの第一印象を決める重要な要素です。",
      },
    },
  },
  tags: ["autodocs"],
};

export const Default = () => `
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Noto+Sans+JP:wght@300;400;500;700&family=Playfair+Display:wght@400;700&display=swap');
    @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css');
  </style>
  
  <div class="skc">
    <header class="hero" id="hero">
      <div class="hero-background">
        <div class="hero-image-container">
          <img
            src="./assets/images/hero_community.png"
            alt="コミュニティ"
            class="hero-image hero-image-3"
          />
          <img
            src="./assets/images/hero_pilates.png"
            alt="ピラティス"
            class="hero-image hero-image-2"
          />
          <img
            src="./assets/images/kickboxing_mitt_training01.png"
            alt="キックボクシング"
            class="hero-image hero-image-1"
          />
        </div>
        <div class="hero-overlay"></div>
      </div>

      <div class="hero-content">
        <div class="hero-badge" data-aos="zoom-in" data-aos-delay="300">
          <span class="badge-text">7.1</span>
          <span class="badge-sub">Grand Open</span>
        </div>

        <h1 class="hero-title" data-aos="fade-down" data-aos-delay="500">
          <span class="title-main">美しさを鍛える時代へ。</span>
          <span class="title-accent">
            しなやかに、うるわしく、つよく、うつくしく
          </span>
        </h1>

        <p class="hero-subtitle" data-aos="fade-up" data-aos-delay="700">
          Pilates × Kickboxing × 美容整体
        </p>

        <div class="hero-cta" data-aos="zoom-in" data-aos-delay="900">
          <p class="cta-text">あなた史上、最高のカラダへ</p>
          <div class="cta-buttons">
            <a href="#contact" class="btn btn-primary">
              <i class="fas fa-calendar-check"></i>
              無料体験予約
            </a>
            <a href="#line" class="btn btn-outline">
              <i class="fab fa-line"></i>
              LINEで相談
            </a>
          </div>
        </div>
      </div>

      <div class="scroll-indicator" data-aos="fade-in" data-aos-delay="1200">
        <span>SCROLL</span>
        <div class="scroll-line"></div>
      </div>
    </header>
  </div>
`;

// ソースコード表示をより詳細に設定
Default.parameters = {
  docs: {
    source: {
      type: "code",
      language: "html",
    },
  },
};
