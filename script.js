
let index = 0;

function mudarSlide(direcao) {
    const slides = document.querySelector(".slides");
    const totalImagens = document.querySelectorAll(".slides img").length;

    index += direcao;

    if (index < 0) {
        index = totalImagens - 1;
    } else if (index >= totalImagens) {
        index = 0;
    }

    slides.style.transform = `translateX(${-index * 100}%)`;
}

function toggleMenu() {
    const nav = document.getElementById('navLinks');
    nav.classList.toggle('active');
  }
  