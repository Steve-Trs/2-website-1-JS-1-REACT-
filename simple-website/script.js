const burgerMenu = document.querySelector(".burger-menu");
const sidebar = document.querySelector(".sidebar");

burgerMenu.addEventListener("click", toggleNav);

function toggleNav() {
  burgerMenu.classList.toggle("active");
  sidebar.classList.toggle("active");
}

const sidebarLinks = document.querySelectorAll(".sidebar-link");

sidebarLinks.forEach((link) => {
  link.addEventListener("click", () => {
    burgerMenu.click();
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const leftArrow = document.querySelector(".left-arrow");
  const rightArrow = document.querySelector(".right-arrow");
  const cards = document.querySelectorAll(".card");

  let currentCardIndex = 0;

  function showCard(i) {
    const currentCard = cards[currentCardIndex];
    const nextCard = cards[i];

    currentCard.style.transition = "opacity 0.4s ease";
    currentCard.style.opacity = 0;

    setTimeout(() => {
      currentCard.classList.remove("active");
      nextCard.classList.add("active");
      currentCard.style.transition = "";
      currentCard.style.opacity = 1;
    }, 400);

    currentCardIndex = i;
  }

  function goToNextCard() {
    let nextIndex = (currentCardIndex + 1) % cards.length;
    showCard(nextIndex);
  }

  function goToPreviousCard() {
    let prevIndex = (currentCardIndex - 1 + cards.length) % cards.length;
    showCard(prevIndex);
  }

  rightArrow.addEventListener("click", goToNextCard);
  leftArrow.addEventListener("click", goToPreviousCard);

  showCard(currentCardIndex);
});

const currentYear = new Date().getFullYear();

document.getElementById("current-year").textContent = currentYear;
