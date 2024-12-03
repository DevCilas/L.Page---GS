var contact = document.querySelector('.contatos');


document.querySelector('#botao_contato').addEventListener('click', function () {
    if (contact.style.display === 'none' || contact.style.display === '') {
        contact.style.display = 'block';
    } else {
        contact.style.display = 'none';
    }
})

document.querySelector('#botao').addEventListener('click', function () {
    if (contact.style.display === 'none' || contact.style.display === '') {
        contact.style.display = 'block';
    } else {
        contact.style.display = 'none';
    }
})

const button = document.getElementById('entrar');

button.addEventListener('mouseenter', () => {
    button.textContent = 'Sair';
    button.classList.add('hovered');
});

button.addEventListener('mouseleave', () => {
    button.textContent = 'Admin';
    button.classList.remove('hovered');
});
button.addEventListener('click', () => {
    if (button.textContent === 'Sair') {
        window.location.href = "index.html";
    }
});



function contato() {
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
           location.href = "../assests/pages/home.html"

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