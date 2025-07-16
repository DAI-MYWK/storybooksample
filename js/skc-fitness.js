/* スコープ化されたFitnessコンポーネント用JavaScript */
/* 既存のJS（js/script.js）をSkcFitness名前空間で名前空間化 */

const SkcFitness = {
  // 初期化フラグ
  initialized: false,

  // 初期化メソッド
  init() {
    if (this.initialized) return;

    const container = document.querySelector(".skc");
    if (!container) return;

    // AOS初期化
    if (typeof AOS !== "undefined") {
      AOS.init({
        duration: 800,
        easing: "ease-in-out",
        once: true,
        offset: 100,
      });
    }

    // 各コンポーネントの初期化
    this.initNavigation();
    this.initHeroSlider();
    this.initPriceTabs();
    this.initFAQ();
    this.initScrollEffects();
    this.initParallax();
    this.initAnimations();
    this.initMobileMenu();

    this.initialized = true;
  },

  // Navigation機能
  initNavigation() {
    const container = document.querySelector(".skc");
    if (!container) return;

    const navbar = container.querySelector("#navbar");
    const navLinks = container.querySelectorAll('.nav-menu a[href^="#"]');

    // ナビゲーションスクロール効果
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        navbar && navbar.classList.add("scrolled");
      } else {
        navbar && navbar.classList.remove("scrolled");
      }
    });

    // スムーススクロール
    navLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href");
        const targetSection = container.querySelector(targetId);

        if (targetSection) {
          const offsetTop = targetSection.offsetTop - 80;
          window.scrollTo({
            top: offsetTop,
            behavior: "smooth",
          });
        }
      });
    });
  },

  // ヒーロー画像スライダー
  initHeroSlider() {
    const container = document.querySelector(".skc");
    if (!container) return;

    const heroImages = container.querySelectorAll(".hero-image");
    let currentImageIndex = 0;

    if (heroImages.length > 0) {
      // 最初の画像を表示
      heroImages[0].classList.add("active");

      // 自動スライド
      setInterval(() => {
        heroImages[currentImageIndex].classList.remove("active");
        currentImageIndex = (currentImageIndex + 1) % heroImages.length;
        heroImages[currentImageIndex].classList.add("active");
      }, 4000);
    }

    // スクロールインジケーター
    const scrollIndicator = container.querySelector(".scroll-indicator");
    if (scrollIndicator) {
      scrollIndicator.addEventListener("click", () => {
        const aboutSection = container.querySelector("#about");
        if (aboutSection) {
          aboutSection.scrollIntoView({ behavior: "smooth" });
        }
      });
    }
  },

  // 価格タブ機能
  initPriceTabs() {
    const container = document.querySelector(".skc");
    if (!container) return;

    const tabButtons = container.querySelectorAll(".tab-btn");
    const tabContents = container.querySelectorAll(".tab-content");

    tabButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const targetTab = button.getAttribute("data-tab");

        // 全てのアクティブクラスを削除
        tabButtons.forEach((btn) => btn.classList.remove("active"));
        tabContents.forEach((content) => content.classList.remove("active"));

        // クリックされたボタンと対応するコンテンツにアクティブクラスを追加
        button.classList.add("active");
        const targetContent = container.querySelector("#" + targetTab);
        if (targetContent) {
          targetContent.classList.add("active");
        }
      });
    });
  },

  // FAQ機能
  initFAQ() {
    const container = document.querySelector(".skc");
    if (!container) return;

    const faqItems = container.querySelectorAll(".faq-item");

    faqItems.forEach((item) => {
      const question = item.querySelector(".faq-question");
      question.addEventListener("click", () => {
        const isActive = item.classList.contains("active");

        // 他のFAQアイテムを閉じる
        faqItems.forEach((otherItem) => {
          otherItem.classList.remove("active");
        });

        // クリックされたアイテムをトグル
        if (!isActive) {
          item.classList.add("active");
        }
      });
    });
  },

  // スクロール効果
  initScrollEffects() {
    const container = document.querySelector(".skc");
    if (!container) return;

    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-on-scroll");
        }
      });
    }, observerOptions);

    // アニメーション対象要素を観察
    const animateElements = container.querySelectorAll(
      ".info-item, .about-img, .feature-card, .price-card, .staff-card, .testimonial-item"
    );
    animateElements.forEach((el) => {
      observer.observe(el);
    });
  },

  // パララックス効果
  initParallax() {
    const container = document.querySelector(".skc");
    if (!container) return;

    window.addEventListener("scroll", () => {
      const scrolled = window.pageYOffset;
      const parallaxElements = container.querySelectorAll(".parallax");

      parallaxElements.forEach((element) => {
        const speed = element.dataset.speed || 0.5;
        const yPos = -(scrolled * speed);
        element.style.transform = `translateY(${yPos}px)`;
      });
    });
  },

  // アニメーション
  initAnimations() {
    const container = document.querySelector(".skc");
    if (!container) return;

    // フローティング要素アニメーション
    const floatingElements = container.querySelectorAll(".floating-element");
    floatingElements.forEach((element, index) => {
      element.style.animationDelay = `${index * 0.5}s`;
    });

    // スクロールアニメーション
    const animateOnScrollElements =
      container.querySelectorAll(".animate-on-scroll");

    const animationObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animated");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    animateOnScrollElements.forEach((element) => {
      animationObserver.observe(element);
    });
  },

  // モバイルメニュー
  initMobileMenu() {
    const container = document.querySelector(".skc");
    if (!container) return;

    const hamburger = container.querySelector(".hamburger");
    const navMenu = container.querySelector(".nav-menu");

    if (hamburger && navMenu) {
      hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
      });

      // メニューリンクをクリックしたときにメニューを閉じる
      const navLinks = container.querySelectorAll(".nav-menu a");
      navLinks.forEach((link) => {
        link.addEventListener("click", () => {
          hamburger.classList.remove("active");
          navMenu.classList.remove("active");
        });
      });
    }
  },

  // 破棄メソッド
  destroy() {
    // イベントリスナーをクリーンアップ
    window.removeEventListener("scroll", this.handleScroll);
    this.initialized = false;
  },

  // スクロールハンドラー（破棄時に削除するため）
  handleScroll() {
    // スクロール関連の処理
  },
};

// Storybook用の初期化
setTimeout(() => {
  if (document.querySelector(".skc")) {
    SkcFitness.init();
  }
}, 100);

// DOMContentLoaded時にも初期化
document.addEventListener("DOMContentLoaded", () => {
  if (document.querySelector(".skc")) {
    SkcFitness.init();
  }
});
