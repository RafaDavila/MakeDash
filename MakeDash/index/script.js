const textElement = document.getElementById("typed-text");
const word = "TRANSFORME";
let index = 0;
let isDeleting = false;

const typingSpeed = 100; // Velocidade de digitação (em milissegundos)
const pauseDuration = 100; // Tempo de pausa após a digitação completa (em milissegundos)
const initialDelay = 1000; // Atraso antes de iniciar a digitação (em milissegundos)

function typeEffect() {
  const currentText = textElement.textContent;

  if (index < word.length && !isDeleting) {
    textElement.textContent = currentText + word.charAt(index);
    index++;
  } else if (index >= word.length && !isDeleting) {
    isDeleting = true;
    setTimeout(typeEffect, pauseDuration);
  } else if (isDeleting) {
    textElement.textContent = currentText.slice(0, -1);
    index--;

    if (index === 0) {
      isDeleting = false;
    }
  }
}

setTimeout(() => {
  setInterval(typeEffect, typingSpeed + pauseDuration); // Intervalo entre cada execução da função typeEffect
  typeEffect(); // Inicia o efeito imediatamente
}, initialDelay);
