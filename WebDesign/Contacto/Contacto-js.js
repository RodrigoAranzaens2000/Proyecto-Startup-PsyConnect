document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const messageDiv = document.createElement('div');
    form.prepend(messageDiv);

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        if (validateForm()) {
            submitForm();
        }
    });

    function validateForm() {
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name === '' || email === '' || !isValidEmail(email)) {
            showMessage('Por favor, completa todos los campos requeridos con información válida.', 'error');
            return false;
        }

        showMessage('Formulario válido. Enviando...', 'info');
        return true;
    }

    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    function showMessage(message, type) {
        messageDiv.textContent = message;
        messageDiv.className = type;
        messageDiv.style.display = 'block';
    }

    function submitForm() {
        setTimeout(() => {
            showMessage('¡Formulario enviado con éxito!', 'success');
            form.reset();
        }, 2000);
    }
});
