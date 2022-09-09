
let infoArray = [];

document.addEventListener("DOMContentLoaded", function(e){
    let ProdId = localStorage.getItem("ProdId");
    getJSONData(PRODUCT_INFO_URL + ProdId + ".json").then(function(resultObj){

    });
});

function showProductInfo(array){

    let htmlContentToAppend = "";
    for(let i=0; i < infoArray.length; i++){
        let info = infoArray[i];

        htmlContentToAppend += `
        <div class="list-group-item list-group-item-action">
            <div>
              <h4>Precio</h4>
              <br>
              <p>`+info.currency+ +info.cost+`</p>
              <br>
              <br>
              <h4>Descripcion</h4>
              <br>
              <p>`+info.description+`</p>
              <br>
              <br>
              <h4>Categoria</h4>
              <br>
              <p>`+info.category+`</p>
              <br>
              <br>
              <h4>Cantidad de vendidos</h4>
              <br>
              <p>`+info.soldCount+`</p>
              <br>
              <br>
              <h4>Imagenes ilustrativas</h4>
              <br>
              <img src="`+info.images+`">
            </div>
        </div>
        `
        document.getElementById("cat-list-container").innerHTML = htmlContentToAppend; 
    }
}

document.addEventListener("DOMContentLoaded", function(e){
    let ProdId = localStorage.getItem("ProdId");
    getJSONData(PRODUCT_INFO_URL + ProdId + ".json").then(function(resultObj){
        if(resultObj.status === "ok"){
            infoArray = resultObj.data;
            showProductInfo(resultObj);
        }
    });
});
