var login_form = document.querySelector('.form');



document.querySelector('#botao1').addEventListener('click', function () {
    if (login_form.style.display === 'none' || login_form.style.display === '') {
        login_form.style.display = 'block';
    } else {
        login_form.style.display = 'none';
    }
})

document.querySelector('#botao2').addEventListener('click', function () {
    if (login_form.style.display === 'none' || login_form.style.display === '') {
        login_form.style.display = 'block';
    } else {
        login_form.style.display = 'none';
    }
})

document.querySelector('#botao3').addEventListener('click', function () {
    if (login_form.style.display === 'none' || login_form.style.display === '') {
        login_form.style.display = 'block';
    } else {
        login_form.style.display = 'none';
    }
})

document.querySelector('#botao4').addEventListener('click', function () {
    if (login_form.style.display === 'none' || login_form.style.display === '') {
        login_form.style.display = 'block';
    } else {
        login_form.style.display = 'none';
    }
})

document.querySelector('#botao5').addEventListener('click', function () {
    if (login_form.style.display === 'none' || login_form.style.display === '') {
        login_form.style.display = 'block';
    } else {
        login_form.style.display = 'none';
    }
})

document.querySelector('#botao6').addEventListener('click', function () {
    if (login_form.style.display === 'none' || login_form.style.display === '') {
        login_form.style.display = 'block';
    } else {
        login_form.style.display = 'none';
    }
})

document.querySelector('#botao7').addEventListener('click', function () {
    if (login_form.style.display === 'none' || login_form.style.display === '') {
        login_form.style.display = 'block';
    } else {
        login_form.style.display = 'none';
    }
})
document.querySelector('#botao8').addEventListener('click', function () {
    if (login_form.style.display === 'none' || login_form.style.display === '') {
        login_form.style.display = 'block';
    } else {
        login_form.style.display = 'none';
    }
})




function logar() {
    var user = document.getElementById('usuario').value;
    var senha = document.getElementById('senha').value;
    if(user == "admin" && senha == "admin"){
        Swal.fire({
            title: 'Login efetuado com sucesso!',
            text: 'Você será redirecionado',
            icon: 'success',
            confirmButtonText: 'OK'
            
            
          })
        login_form.style.display = 'none';
        
        
    } else{
        Swal.fire(
            {
            title: 'Usuário ou senha incorretos',
            text: 'Tente novamente',
            icon: 'error'
            
            
          }
        )
    }
    
}