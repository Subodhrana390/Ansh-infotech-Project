function loadTailwind() {
  if (!document.getElementById("tailwind-css")) {
    const script = document.createElement("script");
    script.id = "tailwind-css";
    script.src = "https://cdn.tailwindcss.com";
    script.async = true;
    script.onload = () => {
      tailwind.config = {
        theme: {
          extend: {},
        },
      };
    };
    document.head.appendChild(script);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  loadTailwind();
});

document.addEventListener("scroll", function () {
  let scrollPosition = window.scrollY;
  let videoContainer = document.getElementById("videoContainer");

  videoContainer.style.backgroundPosition = `center ${scrollPosition * 0.5}px`;
});

let openFaq = null;
function toggleFaq(button) {
  if (!button) return;

  const content = button.nextElementSibling;
  const icon = button.querySelector("i.fas");

  if (button === openFaq) {
    button.classList.remove("active");
    content.classList.add("max-h-0");
    icon.classList.remove("rotate-180");
    openFaq = null;
    return;
  }

  if (openFaq) {
    openFaq.classList.remove("active");
    openFaq.nextElementSibling.classList.add("max-h-0");
    openFaq.querySelector("i.fas").classList.remove("rotate-180");
  }

  button.classList.add("active");
  content.classList.remove("max-h-0");
  icon.classList.add("rotate-180");
  openFaq = button;
}

function initializeSwiper(selector, settings) {
  return new Swiper(selector, {
    loop: true,
    autoplay: { delay: 2000, disableOnInteraction: false },
    pagination: { el: ".swiper-pagination", clickable: true },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    ...settings,
  });
}

initializeSwiper(".testimonialSwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  breakpoints: { 640: { slidesPerView: 1 }, 1024: { slidesPerView: 2 } },
});

initializeSwiper(".teamSwiper", {
  spaceBetween: 20,
  slidesPerView: 1,
  autoplay: { delay: 1000 },
  breakpoints: { 768: { slidesPerView: 2 }, 1024: { slidesPerView: 4 } },
});
