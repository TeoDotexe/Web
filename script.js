document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();
    
    if (name && email && message) {
        const templateParams = {
            from_name: name,
            from_email: email,
            message: message,
            date: new Date().toLocaleString()
        };
        
        emailjs.send('service_fntbknp', 'template_1fnttuh', templateParams)
            .then(function(response) {
                alert('Mensagem enviada com sucesso!');
                
                // Limpa os campos do formulário após o envio
                nameInput.value = '';
                emailInput.value = '';
                messageInput.value = '';
            }, function(error) {
                alert('Ocorreu um erro ao enviar a mensagem: ' + JSON.stringify(error));
            });
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});

document.querySelectorAll('.gallery-img').forEach(item => {
    item.addEventListener('click', event => {
        const targetModal = event.target.dataset.target;
        $(targetModal).modal('show');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const themeToggleBtn = document.getElementById('theme-toggle');

    // Verifica o tema atual no localStorage
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
        document.body.classList.add('dark-theme');
    }

    themeToggleBtn.addEventListener('click', function() {
        document.body.classList.toggle('dark-theme');

        // Salva a preferência do usuário no localStorage
        if (document.body.classList.contains('dark-theme')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });
});