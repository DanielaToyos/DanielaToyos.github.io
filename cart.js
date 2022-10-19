let carrito = [];
/*let objetoComprado = [];*/


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

function subtotalGeneral(){
    let subtotal = "";
    subtotal === document.getElementById("total") 
    document.getElementById("subtotalGeneral").innerHTML = subtotal
    return subtotal
};




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
            <td>${articulo.currency}<span id="total">${articulo.unitCost}</span></td>
        </tr>
        `

        document.getElementById('infoCarrito').innerHTML = articulos;
    }
};


function multiplicacion() {
    var total = "";
    total += parseInt(carrito.articles[0].unitCost) * parseInt(document.getElementById("cantidad").value)
    document.getElementById("total").innerHTML = total
};



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

});

/*document.getElementById("comprar").addEventListener("click" , function() {
    compra(array);
});

document.getElementById("comprar").addEventListener("click" , function() {
    getJSONData
})*/



