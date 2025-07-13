export default {
  title: "Sections/Information",
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "最新情報セクション。重要なお知らせやキャンペーン情報を表示します。",
      },
    },
  },
  tags: ["autodocs"],
};

export const Default = () => `
  <section class="information" id="information">
    <div class="container">
      <h2 class="section-title" data-aos="fade-up">INFORMATION</h2>
      <div class="info-grid">
        <div class="info-item" data-aos="fade-up" data-aos-delay="100">
          <span class="info-date">2024.07.01</span>
          <span class="info-category">OPEN</span>
          <h3>SKC会津若松店グランドオープン！</h3>
        </div>
        <div class="info-item" data-aos="fade-up" data-aos-delay="200">
          <span class="info-date">2024.06.15</span>
          <span class="info-category">CAMPAIGN</span>
          <h3>入会金最大15,000円OFF キャンペーン開始</h3>
        </div>
        <div class="info-item" data-aos="fade-up" data-aos-delay="300">
          <span class="info-date">2024.06.01</span>
          <span class="info-category">EVENT</span>
          <h3>無料体験レッスン予約受付開始</h3>
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
