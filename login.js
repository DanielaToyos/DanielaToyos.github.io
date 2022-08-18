document.addEventListener("DOMContentLoaded", () => {
    //Boton para registrarse
    document.getElementById("logBtn").addEventListener("click", () => {
        register();



    })
});

function loginvalidate() {
    //parrafo de los errores
    let errors = document.querySelector('#errors');
    let passerror = document.querySelector('#passerror');
    let completo = document.querySelector('#completo');

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