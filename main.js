const menu = document.querySelector(".menu");
menu.addEventListener("click", () => {
  document.querySelector(".sideBar").classList.add("translateSlide");
});

document.querySelector(".fa-xmark").addEventListener("click", () => {
  document.querySelector(".sideBar").classList.remove("translateSlide");
});
