let nombre = document.getElementById("nombre").value;
let apellido = document.getElementById("apellido").value;


function correo(){
    let correo = localStorage.getItem("email");

    document.getElementById("Email").value = correo;
}

function guardarDatos(){
    if (nombre === "" || nombre === undefined || apellido === undefined || apellido === "") {
        localStorage.setItem("nombre" , nombre);
        localStorage.setItem("apellido" , apellido);
    }
}











document.addEventListener('DOMContentLoaded', () => {
    let usuario = localStorage.getItem("usuario");

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

    correo();

    document.getElementById("logBtn").addEventListener("click", () => {
        guardarDatos();
    })
});



