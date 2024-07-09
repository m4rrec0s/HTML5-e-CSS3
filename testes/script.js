document.addEventListener('DOMContentLoaded', function () {
    const inputFields = document.querySelectorAll('#bloco_login form input');

    inputFields.forEach(function (input) {
        input.addEventListener('focus', function () {
            input.classList.add('active');
        });

        input.addEventListener('blur', function () {
            input.classList.remove('active');
        });
    });

    function formSubmit(event) {
        // Previne o comportamento padrão do formulário de recarregar a página
        event.preventDefault();
    
        // Coleta os valores dos inputs
        const email = document.getElementById('login').value;
        const password = document.getElementById('password').value;
    
        // Mostra os valores no console
        console.log(`Email: ${email}, Password: ${password}`);
    }
        
    }
);