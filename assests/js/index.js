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





function logar() {
    var user = document.getElementById('usuario').value;
    var senha = document.getElementById('senha').value;
    if(user == "admin" && senha == "admin"){
        Swal.fire({
            title: 'Login efetuado com sucesso!',
            text: 'Você será redirecionado',
            icon: 'success',
            confirmButtonText: 'OK',
            confirmButtonColor: '#00b73f',
           
            
            
          }).then((result) => {
           window.location.href = "assests/pages/home.html";

        })
        login_form.style.display = 'none';
        
        
    } else{
        Swal.fire(
            {
            title: 'Usuário ou senha incorretos',
            text: 'Tente novamente',
            icon: 'error',
            confirmButtonText: 'OK',
            showCancelButton: 'Cancelar',
            cancelButtonText: 'Cancelar',
            confirmButtonColor: '#00b73f',
            cancelButtonColor: '#ea4335',
            
       
            
            
          }
        ).then((result) => {
            if (result.isDismissed) {
                location.reload()
            } 

        })
    }
    
}


// Formulário de cadastro

var register_form = document.querySelector('.registro');

document.querySelector('#botao8').addEventListener('click', function () {
    if (register_form.style.display === 'none' || register_form.style.display === '') {
        register_form.style.display = 'block';
    } else {
        register_form.style.display = 'none';
    }
})


function cadastrar() {
    var user = document.getElementById('usuario_cadastro').value;
    var senha = document.getElementById('senha_cadastro').value;
    if(user !== '' && senha !== ''){
        Swal.fire({
            title: 'Cadastro efetuado com sucesso!',
            text: `Usuário: ${user}    ----   Senha: ${senha}`,
            icon: 'success',
            confirmButtonText: 'OK',
            confirmButtonColor: '#00b73f',
           
            
            
          }).then((result) => {
           window.location.href = "assests/pages/home.html";

        })
        login_form.style.display = 'none';
        
        
    } else{
        Swal.fire(
            {
            title: 'Certifique-se de preencher todos os campos',
            text: 'Tente novamente',
            icon: 'error',
            confirmButtonText: 'OK',
            showCancelButton: 'Cancelar',
            cancelButtonText: 'Cancelar',
            confirmButtonColor: '#00b73f',
            cancelButtonColor: '#ea4335',
            
       
            
            
          }
        ).then((result) => {
            if (result.isDismissed) {
                location.reload()
            } 

        })
    }
    
}

