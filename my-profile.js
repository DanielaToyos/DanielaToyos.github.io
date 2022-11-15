let usuario = localStorage.getItem("usuario");
let email = localStorage.getItem("email");
let nombre2 = localStorage.getItem("nombre2");
let apellido = localStorage.getItem("apellido");
let apellido2 = localStorage.getItem("apellido2");
let telefono = localStorage.getItem("telefono");


function profilevalidate() {

    localStorage.setItem("usuario" , document.getElementById("nombre").value);
    localStorage.setItem("apellido" , document.getElementById("apellido").value );
    localStorage.setItem("email" , document.getElementById("correo").value);
    localStorage.setItem("nombre2" , document.getElementById("nombre2").value);
    localStorage.setItem("apellido2" , document.getElementById("apellido2").value);
    localStorage.setItem("telefono" , document.getElementById("telefono").value);

}

function agarrarInfo() {
    
    document.getElementById("nombre").value = usuario;
    document.getElementById("apellido").value = apellido;
    document.getElementById("correo").value = email;
    document.getElementById("nombre2").value = nombre2;
    document.getElementById("apellido2").value = apellido2;
    document.getElementById("telefono").value = telefono;

}



function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}


document.addEventListener('DOMContentLoaded', () => {
    

    if(usuario == null) {
        alert("No hay nadie loggeado");
        location.href = "login.html";
    } else {
        document.getElementById("usuario").innerHTML = usuario;
        nombre == usuario;
    }

    document.getElementById("cierro").addEventListener("click", () => {
        alert("Sesion cerrada.");
        localStorage.clear();
        location.href = "login.html";
    })

    if(email !== null){
        correo == email;
    }

    agarrarInfo();

    document.getElementById("guardar").addEventListener("click", () => {

        let userName = document.getElementById("nombre").value;
        let lastName = document.getElementById("apellido").value;
        let userEmail = document.getElementById("correo").value;

        if(userName === "" || lastName === "" || userEmail === ""){
            showAlertError();
        } else {
            showAlertSuccess();
            profilevalidate();
        }

    })
    
})


