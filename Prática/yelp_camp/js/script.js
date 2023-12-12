//Função para redirecionar para a página certa
document.querySelectorAll('.redirect-button').forEach(function(button) {
    button.addEventListener('click', function() {
        // Obtém o URL do atributo 'data-redirect' e redireciona
        var redirectUrl = this.getAttribute('data-redirect');
        window.location.href = redirectUrl;
    });
});

//Função do Olho do Password
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


// Função para verificar o login e redirecionar para a página principal
// Variável para verificar se o usuário está logado (pode ser um valor booleano ou variável de sessão)

// Função para verificar o login e redirecionar para a página principal
function realizarLogin() {
    // Lógica para verificar o login (substitua por sua própria lógica)
    var email = document.getElementById("email").value;
    var senha = document.getElementById("password").value;

    // Substitua a lógica abaixo com a lógica real de verificação de login
    if (email === "usuario@example.com" && senha === "senha123") {
        // Login bem-sucedido, redirecione para a página principal
        window.location.href = "logado.html";
        alterarLinksPrincipal(); // Chame a função para alterar os links
    } else {
        // Login falhou, você pode adicionar mensagens de erro ou outras ações aqui
        alert("Login falhou. Verifique seu email e senha.");
    }
}

// Adicione um ouvinte de evento para o formulário de login
document.getElementById("form-login").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário
    realizarLogin(); // Chama a função de login ao enviar o formulário
});