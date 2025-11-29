// Smooth scroll para navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#inicio' || targetId === '#') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        }
        const target = document.querySelector(targetId);
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Efecto hover en polaroids
document.querySelectorAll('.polaroid').forEach(polaroid => {
    polaroid.addEventListener('mouseenter', function() {
        const image = this.querySelector('.polaroid-img');
        if (image) {
            image.style.transform = 'scale(1.05)';
        }
    });
    
    polaroid.addEventListener('mouseleave', function() {
        const image = this.querySelector('.polaroid-img');
        if (image) {
            image.style.transform = 'scale(1)';
        }
    });
});
