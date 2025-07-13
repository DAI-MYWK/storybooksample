export default {
  title: "Sections/Price",
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "料金案内セクション。月額プランと単発レッスンの料金を表示します。",
      },
    },
  },
  tags: ["autodocs"],
};

export const Default = () => `
  <section class="price" id="price">
    <div class="container">
      <h2 class="section-title" data-aos="fade-up">料金案内</h2>
      <div class="price-tabs" data-aos="fade-up" data-aos-delay="200">
        <button class="tab-btn active" data-tab="monthly-plans">
          月額プラン
        </button>
        <button class="tab-btn" data-tab="single-lessons">
          単発レッスン
        </button>
      </div>

      <div class="price-content">
        <div class="tab-content active" id="monthly-plans">
          <div class="price-grid">
            <div class="price-card" data-aos="zoom-in" data-aos-delay="100">
              <h3>VIP "Special Body+"</h3>
              <div class="price-amount">
                <span class="currency">¥</span>
                <span class="amount">55,000</span>
                <span class="period">/月</span>
              </div>
              <ul class="price-features">
                <li>〜美も、力も、時間もあなたのもの。最上級ボディへ招待〜</li>
                <li>完全サポート/モデル思考の方</li>
                <li>美容整体1回（込）</li>
                <li>プライベート3回（込）</li>
                <li>選べるカスタム4回（込）</li>
                <li>水素水</li>
              </ul>
            </div>

            <div class="price-card featured" data-aos="zoom-in" data-aos-delay="200">
              <div class="popular-badge">人気</div>
              <h3>beauty fit "Silhouette+"</h3>
              <div class="price-amount">
                <span class="currency">¥</span>
                <span class="amount">29,800</span>
                <span class="period">/月</span>
              </div>
              <ul class="price-features">
                <li>〜なりたい自分を、ラインで騙る〜</li>
                <li>美しく形を整えたい方</li>
                <li>プライベート2回（込）</li>
                <li>タワーマシン2回（込）</li>
                <li>選べるカスタム枠4回（別料）</li>
                <li>水素水</li>
              </ul>
            </div>

            <div class="price-card" data-aos="zoom-in" data-aos-delay="300">
              <h3>Belle Libre</h3>
              <div class="price-amount">
                <span class="currency">¥</span>
                <span class="amount">14,300</span>
                <span class="period">/月</span>
              </div>
              <ul class="price-features">
                <li>〜美を整え、磨き、自由に楽しむ〜</li>
                <li>お得にアップデートしたい方</li>
                <li>マシン2回（込）</li>
                <li>マット2回（込）</li>
                <li>選べるカスタム枠2回（別料）</li>
                <li>水素水</li>
              </ul>
            </div>

            <div class="price-card" data-aos="zoom-in" data-aos-delay="400">
              <h3>REISM4</h3>
              <div class="price-amount">
                <span class="currency">¥</span>
                <span class="amount">8,800</span>
                <span class="period">/月</span>
              </div>
              <ul class="price-features">
                <li>〜週1の積み重ねが、未来のシルエットになる〜</li>
                <li>習慣化/マイペース通い</li>
                <li>マシン1回（込）</li>
                <li>マット1回（込）</li>
                <li>マット予約無制限（別料）</li>
              </ul>
            </div>

            <div class="price-card" data-aos="zoom-in" data-aos-delay="500">
              <h3>STEP2</h3>
              <div class="price-amount">
                <span class="currency">¥</span>
                <span class="amount">5,500</span>
                <span class="period">/月</span>
              </div>
              <ul class="price-features">
                <li>〜まず2回、変化を感じて〜</li>
                <li>まずは試してみたい方</li>
                <li>マット2回（込）</li>
                <li>マット予約無制限（別料）</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="tab-content" id="single-lessons">
          <div class="price-grid">
            <div class="price-card" data-aos="zoom-in" data-aos-delay="100">
              <h3>グループマット</h3>
              <div class="price-amount">
                <span class="currency">¥</span>
                <span class="amount">1,100</span>
                <span class="period">/回</span>
              </div>
              <ul class="price-features">
                <li>ビジター：3,300円</li>
                <li>基本のマットピラティス</li>
                <li>初心者歓迎</li>
              </ul>
            </div>

            <div class="price-card" data-aos="zoom-in" data-aos-delay="200">
              <h3>キックボクシング</h3>
              <div class="price-amount">
                <span class="currency">¥</span>
                <span class="amount">1,100</span>
                <span class="period">/回</span>
              </div>
              <ul class="price-features">
                <li>ビジター：3,300円</li>
                <li>格闘技エクササイズ</li>
                <li>ストレス発散効果</li>
              </ul>
            </div>

            <div class="price-card" data-aos="zoom-in" data-aos-delay="300">
              <h3>マシン</h3>
              <div class="price-amount">
                <span class="currency">¥</span>
                <span class="amount">3,300</span>
                <span class="period">/回</span>
              </div>
              <ul class="price-features">
                <li>ビジター：5,500円</li>
                <li>マシンピラティス</li>
                <li>効果的なトレーニング</li>
              </ul>
            </div>

            <div class="price-card" data-aos="zoom-in" data-aos-delay="400">
              <h3>トリオマット</h3>
              <div class="price-amount">
                <span class="currency">¥</span>
                <span class="amount">4,400</span>
                <span class="period">/回</span>
              </div>
              <ul class="price-features">
                <li>ビジター：5,500円</li>
                <li>3名までの少人数制</li>
                <li>丁寧な指導</li>
              </ul>
            </div>

            <div class="price-card" data-aos="zoom-in" data-aos-delay="500">
              <h3>タワーマシン</h3>
              <div class="price-amount">
                <span class="currency">¥</span>
                <span class="amount">4,400</span>
                <span class="period">/回</span>
              </div>
              <ul class="price-features">
                <li>ビジター：5,500円</li>
                <li>専用タワーマシン使用</li>
                <li>本格的なピラティス</li>
              </ul>
            </div>

            <div class="price-card" data-aos="zoom-in" data-aos-delay="600">
              <h3>パーソナル</h3>
              <div class="price-amount">
                <span class="currency">¥</span>
                <span class="amount">11,000</span>
                <span class="period">/回</span>
              </div>
              <ul class="price-features">
                <li>ビジター：15,000円</li>
                <li>完全マンツーマン</li>
                <li>オーダーメイドプログラム</li>
              </ul>
            </div>

            <div class="price-card" data-aos="zoom-in" data-aos-delay="700">
              <h3>美容整体</h3>
              <div class="price-amount">
                <span class="currency">¥</span>
                <span class="amount">15,000</span>
                <span class="period">/回</span>
              </div>
              <ul class="price-features">
                <li>ビジター：22,000円</li>
                <li>専門的な美容整体</li>
                <li>身体の歪み改善</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="campaign-banner" data-aos="zoom-in" data-aos-delay="400">
        <span class="campaign-text">入会金最大15,000円OFF</span>
        <span class="campaign-period">7月末まで</span>
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
