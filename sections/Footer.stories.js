export default {
  title: "skc/Footer",
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: "フッターセクション。",
      },
    },
  },
  tags: ["autodocs"],
};

export const Default = () => `
  <div class="skc">
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-logo">
            <span class="logo-text">SKC</span>
            <span class="logo-sub">Pilates & Kickboxing</span>
          </div>
          <div class="footer-info">
            <p>福島県会津若松市御旗町4-2</p>
            <p>TEL: 0242-XX-XXXX</p>
            <p>営業時間: 平日 9:00-21:00 / 土日 9:00-18:00</p>
          </div>
          <div class="footer-social">
            <a href="#"><i class="fab fa-instagram"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-youtube"></i></a>
            <a href="#"><i class="fab fa-line"></i></a>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2024 SKC Pilates & Kickboxing. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
`;
