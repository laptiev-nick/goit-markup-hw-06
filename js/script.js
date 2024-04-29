const openModal = document.querySelector(".order-button");
const closeModal = document.querySelector(".close-button");
const backdrop = document.querySelector(".modal-overlay");
const openMenuBtn = document.querySelector(".open-menu-btn");
const mobMenu = document.querySelector(".mob-menu");
const menuCloseBtn = document.querySelector(".menu-close-btn");

openModal.onclick = () => {
  console.log(1);
  backdrop.classList.remove("close");
  backdrop.classList.add("open");
};

closeModal.onclick = () => {
  backdrop.classList.remove("open");
  backdrop.classList.add("close");
};

openMenuBtn.onclick = () => {
  mobMenu.classList.add("is-open");
};
menuCloseBtn.onclick = () => {
  mobMenu.classList.remove("is-open");
};
