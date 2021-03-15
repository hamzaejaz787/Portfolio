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
