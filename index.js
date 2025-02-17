// Configurações para o texto e o intervalo de digitação
const nameElement = document.getElementById("typing-name");
const text = "Francisco Araújo";
const typingSpeed = 150; // Velocidade de digitação (ms)
let charIndex = 0;

// Função de digitação
function typeEffect() {
    if (charIndex < text.length) {
        nameElement.textContent += text.charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, typingSpeed);
    }
}

// Iniciar a animação
window.addEventListener("DOMContentLoaded", typeEffect);
