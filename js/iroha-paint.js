/* 塗装会社いろはの名前空間化されたJavaScript */
/* 元のデザインを保持しながら IrohaPaint 名前空間で名前空間化 */

const IrohaPaint = {
  // 初期化フラグ
  initialized: false,

  // 初期化メソッド
  init() {
    if (this.initialized) return;

    const container = document.querySelector(".iroha-paint");
    if (!container) return;

    // 各コンポーネントの初期化
    this.initMobileNavigation();
    this.initSmoothScrolling();
    this.initPaintElements();
    this.initIntersectionObserver();
    this.initPaintBrushCursor();
    this.initCTAButtons();
    this.initServiceCards();
    this.initParallaxEffect();
    this.initClickSplash();
    this.initCharacterAnimation();
    this.initNeonText();
    this.initLoadingAnimation();

    this.initialized = true;
    console.log("🎨 NO LIMIT COLOR! - Website loaded with maximum energy! 🚀");
  },

  // モバイルナビゲーション
  initMobileNavigation() {
    const container = document.querySelector(".iroha-paint");
    if (!container) return;

    const hamburger = container.querySelector(".hamburger");
    const navMenu = container.querySelector(".nav-menu");

    if (hamburger && navMenu) {
      hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
      });
    }
  },

  // スムーススクロール
  initSmoothScrolling() {
    const container = document.querySelector(".iroha-paint");
    if (!container) return;

    container.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", (e) => {
        e.preventDefault();
        const target = container.querySelector(anchor.getAttribute("href"));
        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
          // モバイルメニューを閉じる
          const hamburger = container.querySelector(".hamburger");
          const navMenu = container.querySelector(".nav-menu");
          if (hamburger && navMenu) {
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
          }
        }
      });
    });
  },

  // ペイントエフェクトアニメーション
  initPaintElements() {
    const container = document.querySelector(".iroha-paint");
    if (!container) return;

    const paintSplashes = container.querySelectorAll(".paint-splash");
    const paintDrips = container.querySelectorAll(".paint-drip");

    const animatePaintElements = () => {
      const scrollY = window.scrollY;

      paintSplashes.forEach((splash, index) => {
        const speed = 0.5 + index * 0.2;
        const yPos = -(scrollY * speed);
        splash.style.transform = `translateY(${yPos}px) rotate(${
          45 + scrollY * 0.1
        }deg)`;
      });

      paintDrips.forEach((drip, index) => {
        const speed = 0.3 + index * 0.1;
        const yPos = scrollY * speed;
        drip.style.transform = `translateY(${yPos}px)`;
      });
    };

    window.addEventListener("scroll", animatePaintElements);
  },

  // Intersection Observer for Animations
  initIntersectionObserver() {
    const container = document.querySelector(".iroha-paint");
    if (!container) return;

    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
        }
      });
    }, observerOptions);

    // アニメーション対象要素を観察
    container
      .querySelectorAll(
        ".service-card, .reason-item, .timeline-item, .work-item"
      )
      .forEach((el) => {
        observer.observe(el);
      });
  },

  // ペイントブラシカーソル効果
  initPaintBrushCursor() {
    const container = document.querySelector(".iroha-paint");
    if (!container) return;

    let paintBrush = null;

    const createPaintBrush = () => {
      paintBrush = document.createElement("div");
      paintBrush.className = "paint-brush-cursor";
      paintBrush.style.cssText = `
        position: fixed;
        width: 20px;
        height: 20px;
        background: radial-gradient(circle, #FF2D2D, #0070FF);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        opacity: 0;
        transition: opacity 0.3s ease;
        mix-blend-mode: multiply;
      `;
      document.body.appendChild(paintBrush);
    };

    const updatePaintBrush = (e) => {
      if (paintBrush) {
        paintBrush.style.left = e.clientX - 10 + "px";
        paintBrush.style.top = e.clientY - 10 + "px";
      }
    };

    createPaintBrush();
    window.addEventListener("mousemove", updatePaintBrush);
  },

  // CTAボタンのペイント効果
  initCTAButtons() {
    const container = document.querySelector(".iroha-paint");
    if (!container) return;

    container.querySelectorAll(".cta-button").forEach((button) => {
      button.addEventListener("mouseenter", () => {
        const paintBrush = document.querySelector(".paint-brush-cursor");
        if (paintBrush) paintBrush.style.opacity = "0.7";

        // ペイントドリップ効果
        const drip = document.createElement("div");
        drip.style.cssText = `
          position: absolute;
          bottom: -5px;
          left: 50%;
          transform: translateX(-50%);
          width: 10px;
          height: 0;
          background: linear-gradient(180deg, currentColor, transparent);
          animation: paint-drip 1s ease-out forwards;
          pointer-events: none;
        `;

        button.appendChild(drip);

        setTimeout(() => {
          if (drip.parentNode) drip.parentNode.removeChild(drip);
        }, 1000);
      });

      button.addEventListener("mouseleave", () => {
        const paintBrush = document.querySelector(".paint-brush-cursor");
        if (paintBrush) paintBrush.style.opacity = "0";
      });
    });
  },

  // サービスカードのカラーアニメーション
  initServiceCards() {
    const container = document.querySelector(".iroha-paint");
    if (!container) return;

    container.querySelectorAll(".service-card").forEach((card) => {
      card.addEventListener("mouseenter", () => {
        const color = card.dataset.color;
        if (color) {
          card.style.borderTop = `5px solid ${color}`;
          card.style.transform = "translateY(-10px) rotate(2deg) scale(1.02)";
        }
      });

      card.addEventListener("mouseleave", () => {
        card.style.borderTop = "none";
        card.style.transform = "translateY(0) rotate(0deg) scale(1)";
      });
    });
  },

  // パララックス効果
  initParallaxEffect() {
    const container = document.querySelector(".iroha-paint");
    if (!container) return;

    const parallaxEffect = () => {
      const scrolled = window.pageYOffset;
      const parallaxElements = container.querySelectorAll(
        ".section-bg, .brush-stroke-bg, .giant-brush-bg"
      );

      parallaxElements.forEach((element) => {
        const speed = 0.5;
        const yPos = -(scrolled * speed);
        element.style.transform = `translateY(${yPos}px)`;
      });
    };

    window.addEventListener("scroll", parallaxEffect);
  },

  // クリックスプラッシュ
  initClickSplash() {
    const container = document.querySelector(".iroha-paint");
    if (!container) return;

    const createClickSplash = (e) => {
      const splash = document.createElement("div");
      const colors = ["#FF2D2D", "#0070FF", "#00C07B", "#FF9800"];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];

      splash.style.cssText = `
        position: fixed;
        width: 30px;
        height: 30px;
        background: ${randomColor};
        border-radius: 50% 20% 50% 20%;
        pointer-events: none;
        z-index: 1000;
        left: ${e.clientX - 15}px;
        top: ${e.clientY - 15}px;
        animation: splash-expand 0.6s ease-out forwards;
      `;

      document.body.appendChild(splash);

      setTimeout(() => {
        if (splash.parentNode) splash.parentNode.removeChild(splash);
      }, 600);
    };

    container.addEventListener("click", createClickSplash);
  },

  // キャラクターアニメーション
  initCharacterAnimation() {
    const container = document.querySelector(".iroha-paint");
    if (!container) return;

    const animateCharacters = () => {
      const characters = container.querySelectorAll(".character");
      const scrollPercent =
        window.scrollY /
        (document.documentElement.scrollHeight - window.innerHeight);

      characters.forEach((character, index) => {
        const bounce = Math.sin(Date.now() * 0.003 + index) * 10;
        const rotation = Math.sin(Date.now() * 0.002 + index) * 5;
        character.style.transform = `translateY(${bounce}px) rotate(${rotation}deg)`;
      });
    };

    window.addEventListener("scroll", () => {
      requestAnimationFrame(animateCharacters);
    });
  },

  // ネオンテキスト効果
  initNeonText() {
    const container = document.querySelector(".iroha-paint");
    if (!container) return;

    const animateNeonText = () => {
      const neonTitle = container.querySelector(".section-title.neon");
      if (neonTitle) {
        const intensity = Math.sin(Date.now() * 0.005) * 0.5 + 0.5;
        neonTitle.style.textShadow = `
          0 0 ${20 + intensity * 20}px #FFE600,
          0 0 ${40 + intensity * 40}px #FFE600,
          0 0 ${60 + intensity * 60}px #FFE600
        `;
      }
    };

    setInterval(animateNeonText, 100);
  },

  // ローディングアニメーション
  initLoadingAnimation() {
    const container = document.querySelector(".iroha-paint");
    if (!container) return;

    window.addEventListener("load", () => {
      const heroTitle = container.querySelector(".hero-title");
      if (heroTitle) {
        heroTitle.style.animation = "none";
        heroTitle.offsetHeight; // Trigger reflow
        heroTitle.style.animation = "titleReveal 2s ease-out forwards";
      }
    });
  },

  // 破棄メソッド
  destroy() {
    this.initialized = false;
  },
};

// Storybook用の初期化
setTimeout(() => {
  if (document.querySelector(".iroha-paint")) {
    IrohaPaint.init();
  }
}, 100);

// DOMContentLoaded時にも初期化
document.addEventListener("DOMContentLoaded", () => {
  if (document.querySelector(".iroha-paint")) {
    IrohaPaint.init();
  }
});

// 追加のアニメーション用CSS
const style = document.createElement("style");
style.textContent = `
  @keyframes paint-drip {
    to {
      height: 20px;
      opacity: 0;
    }
  }
  
  @keyframes splash-expand {
    0% {
      transform: scale(0) rotate(0deg);
      opacity: 1;
    }
    100% {
      transform: scale(3) rotate(180deg);
      opacity: 0;
    }
  }
  
  .animate-in {
    animation: slideInUp 0.8s ease-out forwards;
  }
  
  @keyframes slideInUp {
    from {
      opacity: 0;
      transform: translateY(50px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .nav-menu.active {
    display: flex !important;
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background: rgba(255, 230, 0, 0.98);
    padding: 2rem;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  }
  
  .hamburger.active span:nth-child(1) {
    transform: rotate(-45deg) translate(-5px, 6px);
  }
  
  .hamburger.active span:nth-child(2) {
    opacity: 0;
  }
  
  .hamburger.active span:nth-child(3) {
    transform: rotate(45deg) translate(-5px, -6px);
  }
  
  @keyframes titleReveal {
    0% {
      opacity: 0;
      transform: scale(0.8) rotate(-5deg);
    }
    50% {
      transform: scale(1.1) rotate(2deg);
    }
    100% {
      opacity: 1;
      transform: scale(1) rotate(0deg);
    }
  }
  
  @media (max-width: 768px) {
    .nav-menu {
      display: none;
    }
  }
`;
document.head.appendChild(style);
