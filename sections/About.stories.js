export default {
  title: "skc/About",
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: "フィットネスジムの特徴や理念を紹介するセクション。",
      },
    },
  },
  tags: ["autodocs"],
};

export const Default = () => `
  <div class="skc">
    <section class="about" id="about">
      <div class="container">
        <div class="about-content">
          <div class="about-text" data-aos="fade-right">
            <h2 class="section-title">ABOUT SKC</h2>
            <div class="about-description">
              <p class="about-lead">
                ピラティス×キックボクシング×美容整体<br />すべてを融合した新感覚フィットネス
              </p>
              <p>
                美しさを鍛える時代へ。従来のフィットネスの枠を超えた、新しいアプローチで理想のカラダづくりをサポートします。しなやかに、うるわしく、つよく、うつくしく。
              </p>
            </div>
            <div class="about-features">
              <div class="feature-item">
                <i class="fas fa-spa"></i>
                <span>美容整体</span>
              </div>
              <div class="feature-item">
                <i class="fas fa-heart"></i>
                <span>ピラティス</span>
              </div>
              <div class="feature-item">
                <i class="fas fa-fist-raised"></i>
                <span>キックボクシング</span>
              </div>
            </div>
          </div>
          <div class="about-images" data-aos="fade-left">
            <div class="image-stack">
              <img
                src="./images/studio01.png"
                alt="スタジオ内観"
                class="about-img about-img-1"
              />
              <img
                src="./images/entrance.png"
                alt="エントランス"
                class="about-img about-img-2"
              />
              <img
                src="./images/studio02.png"
                alt="設備"
                class="about-img about-img-3"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
`;
