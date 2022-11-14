let usuario = localStorage.getItem("usuario");
let email = localStorage.getItem("email");
let nombre = document.getElementById("nombre").value;
let nombre2 = document.getElementById("nombre2").value;
let apellido = document.getElementById("apellido").value;
let apellido2 = document.getElementById("apellido2").value;
let correo = document.getElementById("Email").value;
let telefono = document.getElementById("telefono").value;


function profilevalidate() {

    if(nombre === "" || || apellido === "" || correo === ""){
        alert("Por favor llenar los campos obligatorios");
    } else {
        alert("Los cambios han sido guardados con exito");
        localStorage.setItem("usuario" , nombre);
        localStorage.setItem("apellido" , apellido);
        localStorage.setItem("email" , correo);
        localStorage.setItem("nombre2" , nombre2);
        localStorage.setItem("apellido2" , apellido2);
        localStorage.setItem("telefono" , telefono);
    }

}

function agarrarInfo() {
    correo = localStorage.getItem("email");
    nombre = localStorage.getItem("usuario");
    apellido = localStorage.getItem("apellido");
    nombre2 = localStorage.getItem("nombre2");
    apellido2 = localStorage.getItem("apellido2");
    telefono = localStorage.getItem("telefono");
}



/*function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}*/


document.addEventListener('DOMContentLoaded', () => {
    

    if(usuario == null) {
        alert("No hay nadie loggeado");
        location.href = "login.html";
    } else {
        document.getElementById("usuario").innerHTML = usuario;
    }

    document.getElementById("cierro").addEventListener("click", () => {
        alert("Sesion cerrada.");
        localStorage.clear();
        location.href = "login.html";
    })

    agarrarInfo();

    document.getElementById("guardar").addEventListener("click", () => {
        profilevalidate();

    })
    
})


