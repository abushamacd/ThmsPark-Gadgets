// $(".ab_carousel").slick({ dots: true });

// search overlay
document.addEventListener("DOMContentLoaded", () => {
  const qs = (selector) => document.querySelector(selector);
  const searchOverlay = qs("#search-overlay");

  qs("#open-search").addEventListener("click", () => {
    searchOverlay.style.display = "block";
    qs("#search-input").focus();
  });

  qs("#close-search").addEventListener("click", () => {
    searchOverlay.style.display = "none";
  });

  window.addEventListener("click", (event) => {
    if (event.target === searchOverlay) {
      searchOverlay.style.display = "none";
    }
  });
});

// mobile menu
document.getElementById("mobile_menu_open").addEventListener("click", () => {
  document.getElementById("mobile-menu").classList.add("active");
});

document.getElementById("mobile_menu_close").addEventListener("click", () => {
  document.getElementById("mobile-menu").classList.remove("active");
});

// mobile dropdown
const dropdownTriggers = document.querySelectorAll(".mobile_dropdown_trigger");
dropdownTriggers.forEach((trigger) => {
  trigger.addEventListener("click", () => {
    const dropdown = trigger.nextElementSibling;

    dropdown.classList.toggle("active");
    trigger.querySelector("i").classList.toggle("active");
  });
});

// scroll
window.addEventListener("scroll", () => {
  const header = document.getElementById("myHeader");
  const content = document.getElementById("myContent");
  const sticky = header.offsetTop;

  if (window.scrollY > sticky) {
    header.classList.add("sticky");
    content.classList.add("sticky-header");
  } else {
    header.classList.remove("sticky");
    content.classList.remove("sticky-header");
  }
});

// back to top
window.onscroll = () => {
  document.getElementById("myBtn").style.display =
    document.body.scrollTop > 80 || document.documentElement.scrollTop > 80
      ? "block"
      : "none";
};

const topFunction = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// banner
$(".banner_carousel").slick({ dots: true, arrows: false, autoplay: true });
