const readMoreButtons = document.querySelectorAll('.read-more-btn');

readMoreButtons.forEach(button => {
    button.addEventListener('click', () => {
        const character = button.closest('.character');
        character.classList.toggle('expanded');
        if (character.classList.contains('expanded')) {
            button.textContent = 'Mostrar menos';
        } else {
            button.textContent = '... Ler mais';
        }
    });
});