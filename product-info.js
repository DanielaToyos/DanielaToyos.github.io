document.addEventListener("DOMContentLoaded", function(e) {
    let ProdID=localStorage.getItem("ProdID");
    getJSONData(PRODUCT_INFO_URL + ProdID + ".json").then(function (resultObj){ 
    });
});

let InfoArray = [];

function showInfo(array){

    for(let i = 0; i < InfoArray.length; i++){
      let info = InfoArray[i];

      document.getElementById("Precio").innerHTML = info.currency + info.cost;
      document.getElementById("Descripcion").innerHTML = info.description;
      document.getElementById("Categoria").innerHTML = info.category;
      document.getElementById("Vendidos").innerHTML = info.soldCount;
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
