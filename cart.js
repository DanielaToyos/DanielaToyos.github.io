let carrito = [];

function mostrarCarrito() {

    let articulos = '';

    for (let i = 0; i < carrito.articles.length; i++) {
        let articulo = carrito.articles[i];

        articulos += `
        <tr class="list-group-item list-group-item-action">
            <td><img src="${articulo.image}" alt="product image" class="img-thumbnail"></img></td>
            <td><p>${articulo.name}</p></td>
            <td><p>${articulo.currency} ${articulo.unitCost}</p></td>
            <td><div class="form-floating">
            <input type="text" class="form-control" id="cantidad" placeholder="cantidad" required>
            <label for="cantidad">${articulo.count}</label>
            </div></td>
            <td><p>${articulo.currency} (parseInt(${articulo.unitCost})*${articulo.count})</p></td>
        </tr>
        `

        document.getElementById('infoCarrito').innerHTML = articulos;
    }
};


document.addEventListener('DOMContentLoaded', function () {
    getJSONData(CART_BUY_URL).then(function (resultObj) {
        if (resultObj.status === "ok") {
             carrito = resultObj.data;

            mostrarCarrito();
        }
    });
});