document.querySelectorAll('.redirect-button').forEach(function(button) {
    button.addEventListener('click', function() {
        // Obtém o URL do atributo 'data-redirect' e redireciona
        var redirectUrl = this.getAttribute('data-redirect');
        window.location.href = redirectUrl;
    });
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