

document.getElementById('btn-login').addEventListener('click', mostrar);

function mostrar(){
    let email = document.getElementById('inputEmailLogin').value;
    let password = document.getElementById('inputPassLogin').value;
    console.log(email, password);
};
                    