const direccion = "https://japceibal.github.io/emercado-api/cats_products/101.json"


function showProductsList(){

  htmlContentToAppend += `
            <div onclick="setCatID(${products.id})" class="list-group-item list-group-item-action cursor-active">
                <div class="row">
                    <div class="col-3">
                        <img src="${products.image}" alt="${products.description}" class="img-thumbnail">
                    </div>
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">${products.name} - ${products.currency} ${products.cost}</h4>
                            <small class="text-muted">${products.soldCount} artículos</small>
                        </div>
                        <p class="mb-1">${products.description}</p>
                    </div>
                </div>
            </div>
            `
         document.getElementById("cat-list-container").innerHTML = htmlContentToAppend;
}


document.addEventListener("DOMContentLoaded", ()=>{

    fetch(direccion)
    .then(respuesta => respuesta.json())
    .then(datos => {
        console.log(datos);
        showProductsList(datos);
    })
})