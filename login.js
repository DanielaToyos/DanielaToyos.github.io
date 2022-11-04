
function loginvalidate() {
    
    let errors = document.querySelector("#errors");
    let passerror = document.querySelector("#passerror");
    let completo = document.querySelector("#completo");

    let usuario = document.getElementById("floatingInput").value;
    let password = document.getElementById("floatingPassword").value;
    let email = document.getElementById("email").value;

    if (usuario === "" || usuario === undefined || password === undefined || password === "") {
        showAlertError();
    } else {
        showAlertSuccess();
    }

    if (usuario === "" || usuario === undefined) {
        errors.textContent = "Ingrese nombre de usuario";
    } else if (password === undefined || password === "") {
        passerror.textContent = "Ingrese contraseña"; 
    } else {
    completo.textContent = "Sesion iniciada correctamente.";
    errors.textContent = '';
    localStorage.setItem("usuario" ,usuario);
    localStorage.setItem("email" , email);
    location.href="index.html";
    }

}

function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

document.addEventListener("DOMContentLoaded", () => {
    
    document.getElementById("logBtn").addEventListener("click", () => {
        loginvalidate();
    })
});
