
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
});

function correo(){
    let correo = localStorage.getItem("email");

    document.getElementById("Email").value = correo;
}

document.addEventListener('DOMContentLoaded', function () {
    correo();
});
