// Acceso al botón con id 'button-open-modal'
const openModalButton = document.querySelector("#button-open-modal");

// Acceso al modal usando la clase 'modal'
const modal = document.querySelector(".modal");

// Acceso al botón con id 'modal-container-close'
const closeModalButton = document.querySelector(".modal-container-close");

openModalButton.addEventListener("click", () => {
  modal.classList.remove("hidden");
  modal.classList.add("visible");
});

closeModalButton.addEventListener("click", () => {
  modal.classList.remove("visible");
  modal.classList.add("hidden");
});
