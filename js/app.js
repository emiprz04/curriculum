const menu = document.querySelector(".menu");
const abrirMenu = document.querySelector(".abrir-menu");
const cerrarMenu = document.querySelector(".cerrar-menu");

function alternarMenu() {
    menu.classList.toggle("menu-abierto");
}

abrirMenu.addEventListener("click", alternarMenu);
cerrarMenu.addEventListener("click", alternarMenu);

const menuLinks = document.querySelectorAll('.menu a[href^="#"]');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute("id");
      const menuLink = document.querySelector(`.menu a[href="#${id}"]`);

      if (entry.isIntersecting) {
        document.querySelector(".menu a.selected").classList.remove("selected");
        menuLink.classList.add("selected");
      }
    });
  },
  { rootMargin: "-25% 0px -65% 0px" }
);

menuLinks.forEach((menuLink) => {
  menuLink.addEventListener("click", function () {
    menu.classList.remove("menu-abierto");
  });

  const hash = menuLink.getAttribute("href");
  const target = document.querySelector(hash);
  if (target) {
    observer.observe(target);
  }
});