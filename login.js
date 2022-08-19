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

    if (email === "" || (!email.includes("@") || !email.includes(".com")) || password === undefined || password === "") {
        showAlertError();
    } else {
        showAlertSuccess();
    }

    if (email === "") {
        errors.textContent = "Ingrese Email";
    } else if (!email.includes("@") || !email.includes(".com")) {
        errors.textContent = "Formato de mail incorrecto, debe tener @ y .com";
    } else if (password === undefined || password === "") {
        passerror.textContent = "Ingrese Contraseña"; 
    } else if (email.includes("@") && email.includes(".com") && (password !== undefined || password !== "")) {
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