let carrito = [];


function mostrarCarrito(array) {

    let articulos = "";

    for (let i = 0; i < carrito.articles.length; i++) {
        let articulo = carrito.articles[i]; 

        articulos += `
        <tr>
            <th scope="row"><img src="${articulo.image}" alt="product image" style="width: 25%"></th>
            <td>${articulo.name}</td>
            <td>${articulo.currency} ${articulo.unitCost}</td>
            <td><input type="text" class="form-control" id="cantidad" placeholder="ingrese cantidad" required>${articulo.count}</td>
        </tr>
        `

        document.getElementById('infoCarrito').innerHTML = articulos;
    }
};


document.addEventListener('DOMContentLoaded', function () {
    let user = 25801
    getJSONData(CART_INFO_URL + user + EXT_TYPE).then(function (resultObj) {
        if (resultObj.status === "ok") {
            carrito = resultObj.data;

            mostrarCarrito(carrito);
        }
    });
});