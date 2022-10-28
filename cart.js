let carrito = [];
var subtotal = "";
//let shipercentaje = "";
let porcentaje = document.getElementsByName("porcentaje");
/*let objetoComprado = [];*/
//let costo = document.getElementsByName("costo");


/*function compra(array){

    let articulos = "";

    for (let i = 0; i < objetoComprado.length; i++) {
        let articulo = objetoComprado[i];

        articulos += `
        <tr>
            <th scope="row"><img class="images" src="${articulo.images[0]}" alt="product image"  height="100"></img></th>
            <td>${articulo.name}</td>
            <td>${articulo.currency} <span id="costounitario">${articulo.cost}</span></td>
            <td><input type="number" class="form-control" id="cantidad" value="1" required min="1"></td>
            <td>${articulo.currency}<span id="total">${articulo.cost}</span></td>
        </tr>
        `

        document.getElementById('infoCarrito').innerHTML = articulos;
    }

}*/

/* prueba */
function sumar(){ ///Entiéndase que esto no es lo más prolijo
    //Solamente tiene como fin mostrar un posible uso de selección
    //por clase y nombre de etiqueta


    for (let i=0; i< porcentaje.length; i++){
        if (porcentaje[i].checked){
            costoEnvio = subtotal * parseFloat(porcentaje[i].value);
        }

    }

    document.getElementById('envio').innerHTML=(costoEnvio).toFixed(2);
}





/*document.getElementById("id15").addEventListener("change", function(){
    shipercentaje = 0.15;
});
document.getElementById("id7").addEventListener("change", function(){
    shipercentaje = 0.07;
});
document.getElementById("id5").addEventListener("change", function(){
    shipercentaje = 0.05;
});*/

/*function subtotalGeneral() {
    var subtotal = "";
    subtotal += parseInt(carrito.articles[0].unitCost)
};*/




function mostrarCarrito(array) {

    let articulos = "";

    for (let i = 0; i < carrito.articles.length; i++) {
        let articulo = carrito.articles[i];

        articulos += `
        <tr>
            <th scope="row"><img class="images" src="${articulo.image}" alt="product image"  height="100"></img></th>
            <td>${articulo.name}</td>
            <td>${articulo.currency} <span id="costounitario">${articulo.unitCost}</span></td>
            <td><input type="number" class="form-control" id="cantidad" value="${articulo.count}" required min="1"></td>
            <td>${articulo.currency}<span name="costo" id="subtotal">${articulo.unitCost}</span></td>
        </tr>
        `

        document.getElementById('infoCarrito').innerHTML = articulos;
    }
};


function multiplicacion() {
    subtotal += parseInt(carrito.articles[0].unitCost) * parseInt(document.getElementById("cantidad").value)

    document.getElementById("subtotal").innerHTML = subtotal
    document.getElementById("sub").innerHTML = subtotal
};

/*function porcentaje() {
    var porcentaje = "";
    porcentaje += parseInt(document.getElementById("sub")) * parseInt(shipercentaje)
    document.getElementById("envio").innerHTML = porcentaje
   
};*/

/*function sumar(){
    var suma = "";
    suma += parseInt(document.getElementById("sub")) + parseInt(document.getElementById("envio"))
    document.getElementById("total").innerHTML = suma
}*/





document.addEventListener('DOMContentLoaded', function () {
    let user = 25801
    getJSONData(CART_INFO_URL + user + EXT_TYPE).then(function (resultObj) {
        if (resultObj.status === "ok") {
            carrito = resultObj.data;

            mostrarCarrito(carrito);

            document.getElementById("cantidad").addEventListener('change', function () {
                multiplicacion();
            });
        }

    });

    for (let i=0; i< envio.length; i++){
        envio[i].addEventListener('click',()=>{
            sumar();
        })

    }

});


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

/*document.getElementById("comprar").addEventListener("click" , function() {
    compra(array);
});

document.getElementById("comprar").addEventListener("click" , function() {
    getJSONData
})*/



