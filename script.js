// Smooth scroll para navegación - las portadas de álbum llevan a las secciones
document.querySelectorAll('.album-card').forEach(card => {
    card.addEventListener('click', function(e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        if (href && href.startsWith('#')) {
            const target = document.querySelector(href);
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Smooth scroll para todos los enlaces de navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#home' || targetId === '#') {
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

// Efecto hover mejorado en las portadas de álbum
document.querySelectorAll('.album-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        const image = this.querySelector('.album-image');
        if (image) {
            image.style.transform = 'scale(1.02)';
        }
    });
    
    card.addEventListener('mouseleave', function() {
        const image = this.querySelector('.album-image');
        if (image) {
            image.style.transform = 'scale(1)';
        }
    });
});

// Efecto hover en polaroids de proyectos
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
