export default {
  title: "skc/Testimonials",
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: "お客様の声・口コミセクション。",
      },
    },
  },
  tags: ["autodocs"],
};

export const Default = () => `
  <div class="skc">
    <section class="testimonials">
      <div class="container">
        <h2 class="section-title" data-aos="fade-up">お客様の声</h2>
        <div
          class="testimonials-slider"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div class="testimonial-item">
            <img src="./images/client_testimonial_smile01.png" alt="お客様の声" />
            <div class="testimonial-content">
              <p>"3ヶ月で姿勢が改善され、周りから美しくなったと言われます。"</p>
              <span class="testimonial-name">A.Sさん（30代女性）</span>
            </div>
          </div>
          <div class="testimonial-item">
            <img src="./images/client_testimonial_smile02.png" alt="お客様の声" />
            <div class="testimonial-content">
              <p>"キックボクシングでストレス発散！楽しく続けられます。"</p>
              <span class="testimonial-name">M.Tさん（40代女性）</span>
            </div>
          </div>
          <div class="testimonial-item">
            <img src="./images/client_testimonial_smile03.png" alt="お客様の声" />
            <div class="testimonial-content">
              <p>"美容整体で長年の肩こりが改善されました。"</p>
              <span class="testimonial-name">R.Kさん（20代女性）</span>
            </div>
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
