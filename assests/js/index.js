var login_form = document.querySelector('#loginForm');
var corpo = document.querySelector('#corpo')

document.querySelector('#login').addEventListener('click', function () {
    if (login_form.style.display === 'none' || login_form.style.display === '') {
        login_form.style.display = 'block';
    } else {
        login_form.style.display = 'none';
    }
})

function submitLogin() {
    alert ('Login realizado!');
        login_form.style.display = 'none';
}