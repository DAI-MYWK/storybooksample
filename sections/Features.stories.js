export default {
  title: "Sections/Features",
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "プログラム詳細セクション。提供するサービスの特徴と詳細を紹介します。",
      },
    },
  },
  tags: ["autodocs"],
};

export const Default = () => `
  <section class="features" id="features">
    <div class="container">
      <h2 class="section-title" data-aos="fade-up">プログラム詳細</h2>
      <div class="features-grid">
        <div class="feature-card" data-aos="fade-right">
          <div class="feature-image">
            <img src="./images/pilates_core04.png" alt="マットピラティス" />
            <div class="feature-overlay">
              <i class="fas fa-spa"></i>
            </div>
          </div>
          <div class="feature-content">
            <h3>マットピラティス</h3>
            <p>
              基本的なマットエクササイズで体幹を強化。初心者から上級者まで、しなやかで美しい身体づくりをサポートします。
            </p>
          </div>
        </div>

        <div class="feature-card" data-aos="fade-up">
          <div class="feature-image">
            <img src="./images/machinepilates_core04.png" alt="コアトレーニング" />
            <div class="feature-overlay">
              <i class="fas fa-dumbbell"></i>
            </div>
          </div>
          <div class="feature-content">
            <h3>コアトレーニング</h3>
            <p>
              専用マシンを使用したコアトレーニング。効率的に体幹を鍛え、美しい姿勢と安定した身体を手に入れます。
            </p>
          </div>
        </div>

        <div class="feature-card" data-aos="fade-left">
          <div class="feature-image">
            <img src="./images/community03.png" alt="グループレッスン" />
            <div class="feature-overlay">
              <i class="fas fa-users"></i>
            </div>
          </div>
          <div class="feature-content">
            <h3>グループレッスン</h3>
            <p>
              仲間と一緒に楽しくトレーニング。ミット打ちやパートナーワークで、モチベーション高く続けられます。
            </p>
          </div>
        </div>

        <div class="feature-card" data-aos="fade-up" data-aos-delay="100">
          <div class="feature-image">
            <img src="./images/kickboxing02.png" alt="キックボクシング" />
            <div class="feature-overlay">
              <i class="fas fa-fist-raised"></i>
            </div>
          </div>
          <div class="feature-content">
            <h3>キックボクシング</h3>
            <p>
              本格的なキックボクシングで全身を鍛錬。ストレス発散と脂肪燃焼を同時に実現し、強く美しい身体を作ります。
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
`;

Default.parameters = {
  docs: {
    source: {
      type: "code",
      language: "html",
    },
  },
};
