export default {
  title: "skc/Access",
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: "アクセス・地図セクション。",
      },
    },
  },
  tags: ["autodocs"],
};

export const Default = () => `
  <div class="skc">
    <section class="access" id="access">
      <div class="container">
        <h2 class="section-title" data-aos="fade-up">店舗情報・アクセス</h2>
        <div class="access-content">
          <div class="access-info" data-aos="fade-right">
            <div class="access-details">
              <h3>SKC 会津若松店</h3>
              <div class="detail-item">
                <i class="fas fa-map-marker-alt"></i>
                <span>福島県会津若松市御旗町4-2</span>
              </div>
              <div class="detail-item">
                <i class="fas fa-clock"></i>
                <span>営業時間: 平日 9:00-21:00 / 土日 9:00-18:00</span>
              </div>
              <div class="detail-item">
                <i class="fas fa-car"></i>
                <span>駐車場: 6台完備</span>
              </div>
              <div class="detail-item">
                <i class="fas fa-phone"></i>
                <span>0242-XX-XXXX</span>
              </div>
            </div>
            <img src="./images/access.png" alt="店舗外観" class="access-image" />
          </div>
          <div class="access-map" data-aos="fade-left">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d139.93280331531895!3d37.49563797981234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDI5JzQ0LjMiTiAxMznCsDU1JzU4LjEiRQ!5e0!3m2!1sja!2sjp!4v1234567890123"
              width="100%"
              height="400"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
            >
            </iframe>
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
