// Acceso a cada imagen - botón con la clase '.btn-hero'.
const buttonsHero = document.querySelectorAll(".btn-hero");

// Acceso al modal usando la clase 'modal'
const modal = document.querySelector(".modal");

// Acceso al botón con la clase 'modal-container-close'
const closeModalButton = document.querySelector(".modal-container-close");

buttonsHero.forEach((buttonHero) =>
  buttonHero.addEventListener("click", () => {
    modal.classList.remove("hidden");
    modal.classList.add("visible");
  })
);

closeModalButton.addEventListener("click", () => {
  modal.classList.remove("visible");
  modal.classList.add("hidden");
});
