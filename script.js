document.querySelector(".burger").addEventListener("click", function (e) {
  e.preventDefault();
  if (this.classList.contains("is-active")) {
    this.classList.remove("is-active");
    document.querySelector(".menu").classList.add("menu--hiden");
  } else {
    this.classList.add("is-active");
    document.querySelector(".menu").classList.remove("menu--hiden");
  }
});
