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

function createAccount() {

    const fs = require('fs');
    const express = require('express');
    const bodyParser = require('body-parser');

    let username = document.getElementById('Username').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    const usuarios = {username:"", email:"", password:""}

    if (username || email in usuarios) {
        window.alert("Username or email already exists. Please choose a different one.")
    } else {
        const userData = `${username} ${email} ${password}\n`;
        fs.appendFileSync( usuarios , userData);    
        window.alert("Conta adicionada!")
    }
}