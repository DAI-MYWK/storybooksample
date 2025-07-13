export default {
  title: "Sections/Staff",
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "インストラクター紹介セクション。スタッフの経歴と専門分野を紹介します。",
      },
    },
  },
  tags: ["autodocs"],
};

export const Default = () => `
  <section class="staff" id="staff">
    <div class="container">
      <h2 class="section-title" data-aos="fade-up">インストラクター</h2>
      <div class="staff-grid">
        <div class="staff-card" data-aos="zoom-in" data-aos-delay="100">
          <div class="staff-image">
            <img src="./assets/images/men_staff01.png" alt="代表トレーナー" />
            <div class="staff-overlay">
              <div class="staff-social">
                <a href="#"><i class="fab fa-instagram"></i></a>
                <a href="#"><i class="fab fa-twitter"></i></a>
              </div>
            </div>
          </div>
          <div class="staff-info">
            <h3>田中 健太</h3>
            <p class="staff-role">代表トレーナー / キックボクシング指導員</p>
            <p class="staff-desc">
              格闘技経験豊富な本格派。初心者から上級者まで丁寧に指導します。
            </p>
          </div>
        </div>

        <div class="staff-card" data-aos="zoom-in" data-aos-delay="200">
          <div class="staff-image">
            <img
              src="./assets/images/woman_staff01.png"
              alt="ピラティスインストラクター"
            />
            <div class="staff-overlay">
              <div class="staff-social">
                <a href="#"><i class="fab fa-instagram"></i></a>
                <a href="#"><i class="fab fa-youtube"></i></a>
              </div>
            </div>
          </div>
          <div class="staff-info">
            <h3>佐藤 美咲</h3>
            <p class="staff-role">ピラティスインストラクター</p>
            <p class="staff-desc">
              国際資格保有。体の歪みを根本から改善し、美しい姿勢へ導きます。
            </p>
          </div>
        </div>

        <div class="staff-card" data-aos="zoom-in" data-aos-delay="300">
          <div class="staff-image">
            <img src="./assets/images/woman_staff02.png" alt="美容整体師" />
            <div class="staff-overlay">
              <div class="staff-social">
                <a href="#"><i class="fab fa-instagram"></i></a>
                <a href="#"><i class="fab fa-tiktok"></i></a>
              </div>
            </div>
          </div>
          <div class="staff-info">
            <h3>鈴木 愛</h3>
            <p class="staff-role">美容整体師</p>
            <p class="staff-desc">
              美容整体のスペシャリスト。内側から輝く美しさを引き出します。
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
`;
