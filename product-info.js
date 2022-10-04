


function showInfo(InfoArray) {
    let productImages ="";
    let relProds="";

    document.getElementById('Nombre').innerHTML = InfoArray.name;
    document.getElementById('Precio').innerHTML = InfoArray.currency + InfoArray.cost;
    document.getElementById('Descripcion').innerHTML = InfoArray.description;
    document.getElementById('Categoria').innerHTML = InfoArray.category;
    document.getElementById('Vendidos').innerHTML = InfoArray.soldCount;
    for (let i = 0; i < InfoArray.images.length; i++) {
        let imagenes = InfoArray.images[i];
        productImages +=`
        <div class="col-2 contenido">
         <img src="${imagenes}" alt="product image" class="img-thumbnail"></img>
        </div>
        `
        document.getElementById('Imagenes').innerHTML = productImages;

    }
    for (let i = 0; i < InfoArray.relatedProducts.length; i++) {
        let relacionado = InfoArray.relatedProducts[i];
        relProds +=`
        <div class="list-group-item list-group-item-action cursor-active">
          <h4 class="mb-1">${relacionado.name}</h4>
          <img src="${relacionado.image}" alt="product image" class="img-thumbnail"></img>
        </div>
        `
        document.getElementById('relacionados').innerHTML = relProds;
    }
}

function puntuacion(puntos){
    var estrellas="";
    for(let i = 1; i <= 5; i++){
        if(i <= puntos){
            estrellas += `<i class="fa fa-star checked"></i>`;
        }else{
            estrellas += `<i class="fa fa-star"></i>`;
        }
    }

    return estrellas;
}

document.getElementById('puntaje').addEventListener('change', function(){
    puntuacion(document.getElementById('puntaje').value);
});



function showComments(CommentsArray) {
    let htmlContentToAppend = "";
    for (let i = 0; i < CommentsArray.length; i++) {
        let comment = CommentsArray[i];

        htmlContentToAppend += `
        <div class="list-group-item list-group-item-action">
                <div class="row">
                  <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                      <h4 class="mb-1">${comment.user}</h4>
                      <small class="text-muted">${comment.dateTime}</small>
                    </div>
                    <p class="mb-1">${comment.description}</p>
                    <p>${puntuacion(comment.score)}</p>
                  </div>
                </div>
        </div>
        `

        document.getElementById('comentarios').innerHTML = htmlContentToAppend;
    }
}




document.addEventListener("DOMContentLoaded", function (e) {

    let ProdID = localStorage.getItem("ProdID");

    getJSONData(PRODUCT_INFO_URL + ProdID + ".json").then(function (resultObj) {
        if (resultObj.status === "ok") {
            InfoArray = resultObj.data
            showInfo(InfoArray);
        }
    });

    getJSONData(PRODUCT_INFO_COMMENTS_URL + ProdID + ".json").then(function (resultObj) {
        if (resultObj.status === "ok") {
            CommentsArray = resultObj.data
            showComments(CommentsArray);
        }
    });
});
