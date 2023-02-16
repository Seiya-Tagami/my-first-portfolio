"use strict";

{
  // appear scroll up
  const scrollUpButton = document.querySelector(".js-scroll-up");
  const screenHeight = window.innerHeight;
  const appearPoint = screenHeight * 0.7;
  const triggerLocation = document.getElementById("works");

  window.addEventListener("scroll", () => {
    const elementHeightTotop = triggerLocation.getBoundingClientRect().top;
    if (elementHeightTotop < appearPoint) {
      scrollUpButton.classList.add("u-block");
    } else {
      scrollUpButton.classList.remove("u-block");
    }
  });

  scrollUpButton.addEventListener("click", () => {
    window.scroll({ top: 0, behavior: "smooth" });
  });
}
