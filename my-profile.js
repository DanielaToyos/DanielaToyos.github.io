
let apellido = document.getElementById("apellido").value;
let usuario = localStorage.getItem("usuario");
let correo = localStorage.getItem("email");
let segundoApellido = document.getElementById("apellido2").value;
let segundoNombre = document.getElementById("nombre2").value;
let telefono = document.getElementById("telefono").value;

let errors = document.querySelector("#errors");
let passerror = document.querySelector("#passerror");
let completo = document.querySelector("#completo");

/*function uservalidate(){
    if (usuario === "" || usuario === undefined) {
        errors.textContent = "Ingrese un nombre";
    } localStorage.setItem("usuario" , usuario);
}

function apellidovalidate(){
    if (apellido === "" || apellido === undefined) {
        errors.textContent = "Ingrese un apellido";
    } localStorage.setItem("apellido" , apellido);
}

function correovalidate(){
    if (correo === "" || correo === undefined) {
        errors.textContent = "Ingrese un correo";
    } localStorage.setItem("email" , email);
}*/


function validate() {
 
        
        

        completo.textContent = "Sesion iniciada correctamente.";
        errors.textContent = '';
        localStorage.setItem("usuario", usuario);
        localStorage.setItem("email", correo);
        localStorage.setItem("apellido" , apellido);
        localStorage.setItem("segundoNombre" , segundoNombre);
        localStorage.setItem("segundoApellido", segundoApellido);
        localStorage.setItem("telefono" , telefono);
        location.href = "index.html";
    

}


function getItems() {

    document.getElementById("Email").value = correo;
    document.getElementById("nombre").value = usuario;
   // document.getElementById("apellido").value = apellido;
    //document.getElementById("nombre2").value = segundoNombre;
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
/*(function () {
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
});*/

/*function setItems() {
    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("Email").value;


    document.getElementById("guardar").addEventListener("click", () => {
        localStorage.setItem("usuario", nombre);
        localStorage.setItem("email", email);
        localStorage.setItem("apellido", apellido);

    });

}*/


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

    document.getElementById("guardar").addEventListener("click", () => {
        //uservalidate();
        //apellidovalidate();
        //correovalidate();
        validate();
    })

});



