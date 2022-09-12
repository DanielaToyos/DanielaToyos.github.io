document.addEventListener("DOMContentLoaded", function(e) {
    let ProdID=localStorage.getItem("ProdID");
    getJSONData(PRODUCT_INFO_URL + ProdID + ".json").then(function (resultObj){ 
    });
});

let InfoArray = [];

function showInfo(array){

    let htmlContentToAppend = "";

    for(let i=0; i < InfoArray.length; i++){
        let info = InfoArray[i];

        htmlContentToAppend += `
        <div>
          <h4>'Precio'</h4>
          <p>`+info.currency+ +info.cost+`</p>
          <br>
          <h4>'Descripcion'</h4>
          <p>`+info.description+`</p>
          <br>
          <h4>'Categoria'</h4>
          <p>`+info.category+`</p>
          <br>
          <h4>Cantidad de vendidos</h4>
          <p>`+info.soldCount+`</p>
          <br>
          <h4>Imagenes ilustrativas</h4>
          <img src="`+info.images+`">        
        </div>`

        document.getElementById("cat-list-container").innerHTML = htmlContentToAppend;
    }
}

document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCT_INFO_URL).then(function(resultObj){
        if (resultObj.status === "ok"){
            InfoArray = resultObj.data
            showInfo();
        }
    });
});
