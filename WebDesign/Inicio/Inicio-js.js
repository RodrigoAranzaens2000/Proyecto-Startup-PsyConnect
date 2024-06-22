document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('infoForm');
    const messageDiv = document.getElementById('message');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        if (validateForm()) {
            submitForm();
        }
    });

    function validateForm() {
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const age = document.querySelector('input[name="age"]:checked');
        const services = document.querySelectorAll('input[name="service"]:checked');

        if (name === '') {
            showMessage('Por favor, introduce tu nombre.', 'error');
            return false;
        }
        if (email === '' || !isValidEmail(email)) {
            showMessage('Por favor, introduce un email válido.', 'error');
            return false;
        }
        if (phone === '' || !isValidPhone(phone)) {
            showMessage('Por favor, introduce un número de teléfono válido.', 'error');
            return false;
        }
        if (!age) {
            showMessage('Por favor, selecciona tu rango de edad.', 'error');
            return false;
        }
        if (services.length === 0) {
            showMessage('Por favor, selecciona al menos un servicio.', 'error');
            return false;
        }

        return true;
    }

    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    function isValidPhone(phone) {
        return /^\d{9,}$/.test(phone);
    }

    function showMessage(message, type) {
        messageDiv.textContent = message;
        messageDiv.className = type;
        messageDiv.style.display = 'block';
    }

    function submitForm() {
        // Simulamos un envío asíncrono
        showMessage('Enviando formulario...', 'info');
        
        setTimeout(() => {
            showMessage('¡Formulario enviado con éxito!', 'success');
            form.reset();
        }, 2000);
    }
});
