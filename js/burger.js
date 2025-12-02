const button = document.querySelector(".menu");
const nav = document.querySelector(".header_wrapper_nav")
console.log(button);
button.addEventListener("click", () => {
  if (button.classList.contains("menu_active")) {
    nav.classList.remove("header_wrapper_nav_active")
    button.classList.remove("menu_active");
  } else {
    nav.classList.add("header_wrapper_nav_active");
    button.classList.add("menu_active");
  }
});

