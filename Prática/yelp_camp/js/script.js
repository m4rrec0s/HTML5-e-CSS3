document.querySelectorAll('.redirect-button').forEach(function(button) {
    button.addEventListener('click', function() {
        // Obtém o URL do atributo 'data-redirect' e redireciona
        var redirectUrl = this.getAttribute('data-redirect');
        window.location.href = redirectUrl;
    });
});

document.getElementById('olho').addEventListener('mousedown', function() {
    document.getElementById('password').type = 'text';
  });
  
document.getElementById('olho').addEventListener('mouseup', function() {
document.getElementById('password').type = 'password';
});

// Para que o password não fique exposto apos mover a imagem.
document.getElementById('olho').addEventListener('mousemove', function() {
document.getElementById('password').type = 'password';
});

