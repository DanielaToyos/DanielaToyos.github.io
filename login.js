document.addEventListener("DOMContentLoaded", () => {
    
    document.getElementById("logBtn").addEventListener("click", () => {
        loginvalidate();



    })
});

function loginvalidate() {
    
    let errors = document.querySelector("#errors");
    let passerror = document.querySelector("#passerror");
    let completo = document.querySelector("#completo");

    let email = document.getElementById("floatingInput").value;
    let password = document.getElementById("floatingPassword").value;

    if (email === "" || email === undefined || password === undefined || password === "") {
        showAlertError();
    } else {
        showAlertSuccess();
    }

    if (email === "" || email === undefined) {
        errors.textContent = "Ingrese Email";
    } else if (password === undefined || password === "") {
        passerror.textContent = "Ingrese Contraseña"; 
    } else {
    completo.textContent = "Sesion iniciada correctamente.";
    errors.textContent = '';
    }

}

function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}