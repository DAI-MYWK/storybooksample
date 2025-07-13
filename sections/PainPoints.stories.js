export default {
  title: "Sections/PainPoints",
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "お悩みセクション。ターゲットユーザーの課題や悩みを提示します。",
      },
    },
  },
  tags: ["autodocs"],
};

export const Default = () => `
  <section class="pain-points">
    <div class="container">
      <h2 class="section-title" data-aos="fade-up">
        こんなお悩みありませんか？
      </h2>
      <div class="pain-grid">
        <div class="pain-item" data-aos="fade-up" data-aos-delay="100">
          <i class="fas fa-weight-scale"></i>
          <p>
            自己流ダイエットで<br /><span class="highlight"
              >リバウンドを繰り返す</span
            >
          </p>
        </div>
        <div class="pain-item" data-aos="fade-up" data-aos-delay="200">
          <i class="fas fa-user-ninja"></i>
          <p>
            運動習慣がなく<br /><span class="highlight"
              >何から始めればいいかわからない</span
            >
          </p>
        </div>
        <div class="pain-item" data-aos="fade-up" data-aos-delay="300">
          <i class="fas fa-chair"></i>
          <p>
            デスクワークで<br /><span class="highlight"
              >猫背・腰痛がつらい</span
            >
          </p>
        </div>
        <div class="pain-item" data-aos="fade-up" data-aos-delay="400">
          <i class="fas fa-heart-crack"></i>
          <p>
            美しい姿勢と<br /><span class="highlight"
              >しなやかな身体に憧れる</span
            >
          </p>
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
