
let apellido = document.getElementById("apellido").value;
let usuario = localStorage.getItem("usuario");
let correo = localStorage.getItem("email");



function getItems() {

    document.getElementById("Email").value = correo;
    document.getElementById("nombre").value = usuario;
}

/*function guardarDatos(){
    if (nombre === "" || nombre === undefined || apellido === undefined || apellido === "") {
        localStorage.setItem("nombre" , nombre);
        localStorage.setItem("apellido" , apellido);
    }
}*/


/*document.getElementById("validacionUsuario").addEventListener('submit', event => {
    if (!this.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();

    }
    document.body.classList.add('was-validated');
    ['change', 'input'].forEach(evento => { document.body.addEventListener(evento, validaciones) })

})*/

    // Ejemplo de JavaScript inicial para deshabilitar el envío de formularios si hay campos no válidos
    (function () {
        'use strict'

        // Obtener todos los formularios a los que queremos aplicar estilos de validación de Bootstrap personalizados
        var forms = document.querySelectorAll('.needs-validation')

        // Bucle sobre ellos y evitar el envío
        Array.prototype.slice.call(forms)
            .forEach(function (form) {
                form.addEventListener('submit', function (event) {
                    if (!form.checkValidity()) {
                        event.preventDefault()
                        event.stopPropagation()
                    }

                    form.classList.add('was-validated')
                }, false)
            })
    });

    function setItems(){
        let nombre = document.getElementById("nombre").value;
        let email = document.getElementById("Email").value;
        

        document.getElementById("guardar").addEventListener("click", () => {
            localStorage.setItem("usuario", nombre);
            localStorage.setItem("email", email);
            localStorage.setItem("apellido", apellido);
            
        });
       
    }


document.addEventListener('DOMContentLoaded', () => {

    if (usuario == null) {
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

    getItems();
    setItems();

});



