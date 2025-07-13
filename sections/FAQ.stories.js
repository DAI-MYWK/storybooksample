export default {
  title: "Sections/FAQ",
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "よくある質問セクション。お客様からよくある質問とその回答を表示します。",
      },
    },
  },
  tags: ["autodocs"],
};

export const Default = () => `
  <section class="faq" id="faq">
    <div class="container">
      <h2 class="section-title" data-aos="fade-up">よくある質問</h2>
      <div class="faq-list" data-aos="fade-up" data-aos-delay="200">
        <div class="faq-item">
          <div class="faq-question">
            <span>初心者でも大丈夫ですか？</span>
            <i class="fas fa-plus"></i>
          </div>
          <div class="faq-answer">
            <p>
              はい、大丈夫です。会員の約70%が未経験からスタートしています。基礎から丁寧に指導いたします。
            </p>
          </div>
        </div>

        <div class="faq-item">
          <div class="faq-question">
            <span>女性一人でも通いやすいですか？</span>
            <i class="fas fa-plus"></i>
          </div>
          <div class="faq-answer">
            <p>
              女性会員が多数在籍しており、女性が安心して通える環境を整えています。
            </p>
          </div>
        </div>

        <div class="faq-item">
          <div class="faq-question">
            <span>体験レッスンは何を持参すればよいですか？</span>
            <i class="fas fa-plus"></i>
          </div>
          <div class="faq-answer">
            <p>
              動きやすい服装とタオル、お水をお持ちください。必要な用具は無料でレンタルできます。
            </p>
          </div>
        </div>

        <div class="faq-item">
          <div class="faq-question">
            <span>駐車場はありますか？</span>
            <i class="fas fa-plus"></i>
          </div>
          <div class="faq-answer">
            <p>
              はい、6台分の専用駐車場をご用意しています。満車の場合は近隣のコインパーキングをご利用ください。
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
