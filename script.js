//Scroll to Top
const toTop = document.querySelector(".to-top");
window.onscroll = function scrollToTop() {
  if (
    document.body.scrollTop > 180 ||
    document.documentElement.scrollTop > 180
  ) {
    toTop.style.display = "block";
  } else {
    toTop.style.display = "none";
  }
};

toTop.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

//Nav Slide
const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-items");
  const navLinks = document.querySelectorAll(".nav-items li");

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    navLinks.forEach((item, index) => {
      if (item.style.animation) {
        item.style.animation = "";
      } else {
        item.style.animation = `navLinkFade 1s ease forwards`;
      }
    });
    burger.classList.toggle("toggle");
  });
};

navSlide();
