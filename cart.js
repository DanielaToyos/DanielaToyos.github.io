let carrito = [];
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

        document.getElementById('infoCarrito'); = articulos;
    }

}*/

/* prueba */
function sumar() {

    let subtotal = parseInt(carrito.articles[0].unitCost) * parseInt(document.getElementById("cantidad").value)

    let costoEnvio = 0;

    for (let i = 0; i < porcentaje.length; i++) {
        if (porcentaje[i].checked) {
            costoEnvio = subtotal * parseFloat(porcentaje[i].value);
        };
    };

    document.getElementById("subtotal").innerHTML = subtotal;
    document.getElementById("sub").innerHTML = subtotal;
    document.getElementById('envio').innerHTML = parseFloat((costoEnvio).toFixed(2));
    document.getElementById('total').innerHTML = parseFloat((subtotal).toFixed(2)) + parseFloat((costoEnvio).toFixed(2));

};




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
            <td><input onchange='sumar()' type="number" class="form-control" id="cantidad" value="${articulo.count}" required min="1"></td>
            <td>${articulo.currency}<span name="costo" id="subtotal">${articulo.unitCost}</span></td>
        </tr>
        `

        document.getElementById('infoCarrito').innerHTML = articulos;
    }
};


/*function multiplicacion() {
    subtotal += parseInt(carrito.articles[0].unitCost) * parseInt(document.getElementById("cantidad").value)

    document.getElementById("subtotal").innerHTML = subtotal
    document.getElementById("sub").innerHTML = subtotal
};*/

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


function desactivarCampos(){

    var numTarjeta = document.getElementById("numTarjeta");
    var codSeg = document.getElementById("codSeg");
    var venc = document.getElementById("venc");
    var numCuenta = document.getElementById("numCuenta");


    document.getElementById("botonTarjeta").addEventListener('click', function(e) {
        numTarjeta.removeAttribute("disabled")
        codSeg.removeAttribute("disabled")
        venc.removeAttribute("disabled")
        numCuenta.setAttribute("disabled" , "")
    });

    document.getElementById("botonTransferencia").addEventListener('click', function(e) {
        numCuenta.removeAttribute("disabled")
        numTarjeta.setAttribute("disabled" , "")
        codSeg.setAttribute("disabled" , "")
        venc.setAttribute("disabled" , "")
    });

}





document.addEventListener('DOMContentLoaded', function () {
    let user = 25801
    getJSONData(CART_INFO_URL + user + EXT_TYPE).then(function (resultObj) {
        if (resultObj.status === "ok") {
            carrito = resultObj.data;

            mostrarCarrito(carrito);
        };

    });

    for (let i = 0; i < porcentaje.length; i++) {
        porcentaje[i].addEventListener('click', () => {
            sumar();
        })

    }

    desactivarCampos();

    

});


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

/*document.getElementById("comprar").addEventListener("click" , function() {
    compra(array);
});

document.getElementById("comprar").addEventListener("click" , function() {
    getJSONData
})*/

/*function desactivarCampos() {

    var numTarjeta = document.getElementById("numTarjeta");
    var codSeg = document.getElementById("codSeg");
    var venc = document.getElementById("venc");
    var numCuenta = document.getElementById("numCuenta");

    document.getElementById("botonTarjeta").innerHTML.addEventListener('click', function(e) {
        numTarjeta.disabled = false;
        codSeg.disabled = false;
        venc.disabled = false;
        numCuenta.disabled = true;
    });

    document.getElementById("botonTransferencia").innerHTML.addEventListener('click', function(e) {
        numTarjeta.disabled = true;
        codSeg.disabled = true;
        venc.disabled = true;
        numCuenta.disabled = false;
    });

};*/


