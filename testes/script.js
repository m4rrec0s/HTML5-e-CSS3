document.addEventListener('DOMContentLoaded', function () {
    const inputFields = document.querySelectorAll('#bloco_login input');

    inputFields.forEach(function (input) {
        // Adiciona um ouvinte de evento para o evento de foco
        input.addEventListener('focus', function () {
            input.classList.add('active');
        });

        // Adiciona um ouvinte de evento para o evento de desfoque
        input.addEventListener('blur', function () {
            input.classList.remove('active');
        });
    });
});