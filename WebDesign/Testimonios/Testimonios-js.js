document.addEventListener('DOMContentLoaded', () => {
    const testimonials = document.querySelectorAll('.testimonial');
    const prevBtn = document.getElementById('prev');
    const nextBtn = document.getElementById('next');
    let currentIndex = 0;

    function showTestimonial(index) {
        testimonials.forEach((testimonial, idx) => {
            if (idx === index) {
                testimonial.classList.add('active');
            } else {
                testimonial.classList.remove('active');
            }
        });
    }

    function nextTestimonial() {
        currentIndex++;
        if (currentIndex >= testimonials.length) {
            currentIndex = 0;
        }
        showTestimonial(currentIndex);
    }

    function prevTestimonial() {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = testimonials.length - 1;
        }
        showTestimonial(currentIndex);
    }

    nextBtn.addEventListener('click', nextTestimonial);
    prevBtn.addEventListener('click', prevTestimonial);

    // Mostrar el primer testimonio al cargar la página
    showTestimonial(currentIndex);

    // Automáticamente cambiar de testimonio cada 5 segundos
    setInterval(nextTestimonial, 5000);
});
