const direccion = "https://japceibal.github.io/emercado-api/cats_products/101.json"

document.addEventListener('DOMContentLoaded', ()=>{

    fetch(direccion)
    .then(respuesta => respuesta.json())
    .then(datos => {
        document.getElementById('nombre').innerHTML=products.name;
        document.getElementById('descripcion').innerHTML=procucts.description;
        document.getElementById('costo').innerHTML=products.cost;
        document.getElementById('moneda').innerHTML=products.currency;
        document.getElementById('vendidos').innerHTML=products.soldCount;
    });
})