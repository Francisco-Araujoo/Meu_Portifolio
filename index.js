document.addEventListener('DOMContentLoaded', () => {
    // Efeito de digitação
    const typingElement = document.getElementById('typing-name');
    const name = 'Francisco Araujo';
    let i = 0;

    function type() {
        if (i < name.length) {
            typingElement.textContent += name.charAt(i);
            i++;
            setTimeout(type, 100);
        } else {
            typingElement.style.borderRight = 'none';
        }
    }

    type();

    // Partículas tecnológicas
    const canvas = document.getElementById('particles');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = 100;

    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 3 + 1;
            this.speedX = Math.random() * 2 - 1;
            this.speedY = Math.random() * 2 - 1;
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;

            if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
            if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
        }

        draw() {
            ctx.fillStyle = 'rgba(0, 221, 235, 0.6)';
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    function init() {
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });
        requestAnimationFrame(animate);
    }

    init();
    animate();

    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });

    // Modal para certificados
    const modal = document.getElementById('cert-modal');
    const modalImage = document.getElementById('modal-image');
    const modalTitle = document.getElementById('modal-title');
    const modalClose = document.querySelector('.modal-close');
    const certLinks = document.querySelectorAll('.cert-link');

    certLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const imgSrc = link.getAttribute('href');
            const imgAlt = link.querySelector('img').getAttribute('alt');
            modalImage.src = imgSrc;
            modalImage.alt = imgAlt;
            modalTitle.textContent = imgAlt;
            modal.style.display = 'flex';
            modal.setAttribute('aria-hidden', 'false');
        });
    });

    modalClose.addEventListener('click', () => {
        modal.style.display = 'none';
        modal.setAttribute('aria-hidden', 'true');
    });

    // Fechar modal ao clicar fora
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            modal.setAttribute('aria-hidden', 'true');
        }
    });

    // Fechar modal com tecla Esc
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'flex') {
            modal.style.display = 'none';
            modal.setAttribute('aria-hidden', 'true');
        }
    });
});