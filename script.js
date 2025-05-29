// DOM Content Loaded
document.addEventListener("DOMContentLoaded", function () {
  // Initialize AOS
  AOS.init({
    duration: 800,
    easing: "ease-in-out",
    once: true,
    offset: 100,
  });

  // Initialize all components
  initNavigation();
  initHeroSlider();
  initPriceTabs();
  initFAQ();
  initScrollEffects();
  initParallax();
  initAnimations();
  initMobileMenu();
});

// Navigation functionality
function initNavigation() {
  const navbar = document.getElementById("navbar");
  const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');

  // Navbar scroll effect
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // Smooth scroll for navigation links
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        const offsetTop = targetSection.offsetTop - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    });
  });
}

// Hero image slider
function initHeroSlider() {
  const heroImages = document.querySelectorAll(".hero-image");
  let currentImageIndex = 0;

  if (heroImages.length > 0) {
    // Show first image
    heroImages[0].classList.add("active");

    // Auto-slide images
    setInterval(() => {
      heroImages[currentImageIndex].classList.remove("active");
      currentImageIndex = (currentImageIndex + 1) % heroImages.length;
      heroImages[currentImageIndex].classList.add("active");
    }, 4000);
  }

  // Scroll indicator click
  const scrollIndicator = document.querySelector(".scroll-indicator");
  if (scrollIndicator) {
    scrollIndicator.addEventListener("click", function () {
      const aboutSection = document.querySelector("#about");
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  }
}

// Price tabs functionality
function initPriceTabs() {
  const tabButtons = document.querySelectorAll(".tab-btn");
  const tabContents = document.querySelectorAll(".tab-content");

  tabButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const targetTab = this.getAttribute("data-tab");

      // Remove active class from all buttons and contents
      tabButtons.forEach((btn) => btn.classList.remove("active"));
      tabContents.forEach((content) => content.classList.remove("active"));

      // Add active class to clicked button and corresponding content
      this.classList.add("active");
      const targetContent = document.getElementById(targetTab);
      if (targetContent) {
        targetContent.classList.add("active");
      }

      // Re-trigger AOS animations for the new content
      setTimeout(() => {
        AOS.refresh();
      }, 100);
    });
  });
}

// FAQ functionality
function initFAQ() {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");

    question.addEventListener("click", function () {
      const isActive = item.classList.contains("active");

      // Close all FAQ items
      faqItems.forEach((faqItem) => {
        faqItem.classList.remove("active");
      });

      // Open clicked item if it wasn't active
      if (!isActive) {
        item.classList.add("active");
      }
    });
  });
}

// Scroll effects and animations
function initScrollEffects() {
  const animateElements = document.querySelectorAll(".animate-on-scroll");

  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animated");
      }
    });
  }, observerOptions);

  animateElements.forEach((element) => {
    observer.observe(element);
  });

  // Counter animation for numbers
  const counters = document.querySelectorAll(".counter");
  counters.forEach((counter) => {
    const target = parseInt(counter.getAttribute("data-target"));
    const increment = target / 100;
    let current = 0;

    const updateCounter = () => {
      if (current < target) {
        current += increment;
        counter.textContent = Math.ceil(current);
        requestAnimationFrame(updateCounter);
      } else {
        counter.textContent = target;
      }
    };

    // Start counter when element is visible
    const counterObserver = new IntersectionObserver(function (entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          updateCounter();
          counterObserver.unobserve(entry.target);
        }
      });
    });

    counterObserver.observe(counter);
  });
}

// Parallax effects
function initParallax() {
  const parallaxElements = document.querySelectorAll(".parallax");

  window.addEventListener("scroll", function () {
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.5;

    parallaxElements.forEach((element) => {
      element.style.transform = `translateY(${rate}px)`;
    });
  });

  // Hero parallax effect
  const hero = document.querySelector(".hero");
  if (hero) {
    window.addEventListener("scroll", function () {
      const scrolled = window.pageYOffset;
      const rate = scrolled * 0.3;
      hero.style.transform = `translateY(${rate}px)`;
    });
  }
}

// Advanced animations
function initAnimations() {
  // Floating animation for certain elements
  const floatingElements = document.querySelectorAll(".floating-element");
  floatingElements.forEach((element, index) => {
    element.style.animationDelay = `${index * 0.5}s`;
  });

  // Stagger animation for grid items
  const staggerElements = document.querySelectorAll(".stagger-animation");
  staggerElements.forEach((container) => {
    const items = container.children;
    Array.from(items).forEach((item, index) => {
      item.style.animationDelay = `${index * 0.1}s`;
    });
  });

  // Hover effects for cards
  const cards = document.querySelectorAll(
    ".feature-card, .price-card, .staff-card"
  );
  cards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-10px) scale(1.02)";
    });

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) scale(1)";
    });
  });

  // Image hover effects
  const imageContainers = document.querySelectorAll(
    ".about-img, .staff-image img"
  );
  imageContainers.forEach((img) => {
    img.addEventListener("mouseenter", function () {
      this.style.transform = "scale(1.1) rotate(2deg)";
    });

    img.addEventListener("mouseleave", function () {
      this.style.transform = "scale(1) rotate(0deg)";
    });
  });
}

// Mobile menu functionality
function initMobileMenu() {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", function () {
      navMenu.classList.toggle("active");
      hamburger.classList.toggle("active");
    });

    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll(".nav-menu a");
    navLinks.forEach((link) => {
      link.addEventListener("click", function () {
        navMenu.classList.remove("active");
        hamburger.classList.remove("active");
      });
    });

    // Close menu when clicking outside
    document.addEventListener("click", function (e) {
      if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
        navMenu.classList.remove("active");
        hamburger.classList.remove("active");
      }
    });
  }
}

// Testimonials slider (if using Slick)
function initTestimonialsSlider() {
  if (typeof $ !== "undefined" && $.fn.slick) {
    $(".testimonials-slider").slick({
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });
  }
}

// Staff modal functionality
function initStaffModals() {
  const staffCards = document.querySelectorAll(".staff-card");

  staffCards.forEach((card) => {
    card.addEventListener("click", function () {
      // Create modal content (you can customize this)
      const staffName = this.querySelector("h3").textContent;
      const staffRole = this.querySelector(".staff-role").textContent;
      const staffDesc = this.querySelector(".staff-desc").textContent;
      const staffImage = this.querySelector("img").src;

      // You can implement a modal here or use Magnific Popup
      console.log("Staff clicked:", staffName);
    });
  });
}

// Form validation and submission
function initFormHandling() {
  const forms = document.querySelectorAll("form");

  forms.forEach((form) => {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      // Basic form validation
      const inputs = this.querySelectorAll(
        "input[required], textarea[required]"
      );
      let isValid = true;

      inputs.forEach((input) => {
        if (!input.value.trim()) {
          isValid = false;
          input.classList.add("error");
        } else {
          input.classList.remove("error");
        }
      });

      if (isValid) {
        // Submit form (implement your submission logic here)
        console.log("Form submitted successfully");
        this.reset();
        showNotification("お問い合わせありがとうございます！", "success");
      } else {
        showNotification("必須項目を入力してください。", "error");
      }
    });
  });
}

// Notification system
function showNotification(message, type = "info") {
  const notification = document.createElement("div");
  notification.className = `notification notification-${type}`;
  notification.textContent = message;

  notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 2rem;
        border-radius: 5px;
        color: white;
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;

  if (type === "success") {
    notification.style.background = "#4CAF50";
  } else if (type === "error") {
    notification.style.background = "#f44336";
  } else {
    notification.style.background = "#2196F3";
  }

  document.body.appendChild(notification);

  // Animate in
  setTimeout(() => {
    notification.style.transform = "translateX(0)";
  }, 100);

  // Remove after 3 seconds
  setTimeout(() => {
    notification.style.transform = "translateX(100%)";
    setTimeout(() => {
      document.body.removeChild(notification);
    }, 300);
  }, 3000);
}

// Lazy loading for images
function initLazyLoading() {
  const images = document.querySelectorAll("img[data-src]");

  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove("lazy");
        imageObserver.unobserve(img);
      }
    });
  });

  images.forEach((img) => imageObserver.observe(img));
}

// Performance optimization
function optimizePerformance() {
  // Debounce scroll events
  let scrollTimeout;
  const originalScrollHandler = window.onscroll;

  window.onscroll = function () {
    if (scrollTimeout) {
      clearTimeout(scrollTimeout);
    }
    scrollTimeout = setTimeout(() => {
      if (originalScrollHandler) {
        originalScrollHandler();
      }
    }, 16); // ~60fps
  };

  // Preload critical images
  const criticalImages = [
    "img/hero_pilates.png",
    "img/kickboxing_mitt_training01.png",
    "img/hero_community.png",
  ];

  criticalImages.forEach((src) => {
    const img = new Image();
    img.src = src;
  });
}

// Initialize additional features when jQuery is available
$(document).ready(function () {
  // Initialize Magnific Popup for staff images
  $(".staff-image").magnificPopup({
    type: "image",
    gallery: {
      enabled: true,
    },
    zoom: {
      enabled: true,
      duration: 300,
    },
  });

  // Initialize testimonials slider
  initTestimonialsSlider();

  // Smooth scrolling for all anchor links
  $('a[href*="#"]')
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        if (target.length) {
          event.preventDefault();
          $("html, body").animate(
            {
              scrollTop: target.offset().top - 80,
            },
            1000,
            function () {
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) {
                return false;
              } else {
                $target.attr("tabindex", "-1");
                $target.focus();
              }
            }
          );
        }
      }
    });

  // Add loading animation
  $("body").addClass("loading");
  setTimeout(() => {
    $("body").removeClass("loading");
  }, 500);
});

// Error handling
window.addEventListener("error", function (e) {
  console.error("JavaScript error:", e.error);
});

// Initialize performance optimizations
optimizePerformance();

// Export functions for external use
window.SKC = {
  showNotification,
  initLazyLoading,
  initFormHandling,
};
