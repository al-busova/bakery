const refs = {
  openModalBtn: document.querySelector("[data-modal-open]"),
  closeModalBtn: document.querySelector("[data-modal-close]"),
  backdrop: document.querySelector("[data-modal]"),
};

refs.openModalBtn.addEventListener("click", openModal);

function openModal() {
  refs.backdrop.classList.remove("is-hidden");
  refs.closeModalBtn.addEventListener("click", closeModal);
  refs.backdrop.addEventListener("click", handleBackdrop);
  window.addEventListener("keydown", handleKeyDown);
  document.body.style.overflow = "hidden";
}

function closeModal() {
  refs.backdrop.classList.add("is-hidden");
  document.body.style.overflow = "";
  removeListener();
}

function handleKeyDown(e) {
  if (e.code === "Escape") {
    closeModal();
  }
}

function handleBackdrop(e) {
  if (e.target === e.currentTarget) {
    closeModal();
  }
}
function removeListener() {
  refs.closeModalBtn.removeEventListener("click", closeModal);
  refs.backdrop.removeEventListener("click", handleBackdrop);
  window.removeEventListener("keydown", handleKeyDown);
}
