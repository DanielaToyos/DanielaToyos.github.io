document.addEventListener("DOMContentLoaded", () => {
    //Boton para registrarse
    document.getElementById("logBtn").addEventListener("click", () => {
        loginvalidate();



    })
});

function loginvalidate() {
    //parrafo de los errores
    let errors = document.getElementById("errors");
    let passerror = document.getElementById("passerror");
    let completo = document.getElementById("completo");

    let email = document.getElementById("floatingInput").value;
    let password = document.getElementById("floatingPassword").value;

    if (email === "" || (!email.includes("@") || !email.includes(".com")) || password === undefined) {
        showAlertError();
    } else {
        showAlertSuccess();
    }
}

function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}