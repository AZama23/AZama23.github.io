// Mostrar/ocultar secciones al hacer clic en los álbumes
document.querySelectorAll('.album-card').forEach(card => {
    card.addEventListener('click', function() {
        const sectionId = this.getAttribute('data-section');
        const section = document.getElementById(sectionId);
        
        // Ocultar todas las secciones
        document.querySelectorAll('.section-content').forEach(sec => {
            sec.classList.add('hidden');
        });
        
        // Mostrar la sección seleccionada
        if (section) {
            section.classList.remove('hidden');
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Efecto hover en las portadas de álbum
document.querySelectorAll('.album-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        const image = this.querySelector('.album-image');
        image.style.transform = 'scale(1.05)';
    });
    
    card.addEventListener('mouseleave', function() {
        const image = this.querySelector('.album-image');
        image.style.transform = 'scale(1)';
    });
});
