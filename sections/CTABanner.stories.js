export default {
  title: "skc/CTABanner",
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: "CTA（行動喚起）バナーセクション。",
      },
    },
  },
  tags: ["autodocs"],
};

export const Default = () => `
  <div class="skc">
    <section class="cta-banner" id="contact">
      <div class="cta-background">
        <img src="./images/studio02.png" alt="スタジオ夜景" />
        <div class="cta-overlay"></div>
      </div>
      <div class="container">
        <div class="cta-content" data-aos="fade-up">
          <h2>まずは無料体験から</h2>
          <p>あなた史上、最高のカラダへの第一歩を踏み出しませんか</p>
          <div class="cta-buttons">
            <a href="#" class="btn btn-primary">
              <i class="fas fa-calendar-check"></i>
              1分で予約
            </a>
            <a href="#" class="btn btn-outline">
              <i class="fab fa-line"></i>
              LINE相談
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
`;

Default.parameters = {
  docs: {
    source: {
      type: "code",
      language: "html",
    },
  },
};
