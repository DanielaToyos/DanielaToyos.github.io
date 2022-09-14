
function showInfo(InfoArray){

    document.getElementById('Precio').innerHTML=InfoArray.currency + InfoArray.cost;
    document.getElementById('Descripcion').innerHTML=InfoArray.description;
    document.getElementById('Categoria').innerHTML=InfoArray.category;
    document.getElementById('Vendidos').innerHTML=InfoArray.soldCount;
}

document.addEventListener("DOMContentLoaded", function(e){
    let ProdID=localStorage.getItem("ProdID");
    getJSONData(PRODUCT_INFO_URL + ProdID + ".json").then(function(resultObj){
        if (resultObj.status === "ok"){
            InfoArray = resultObj.data
            showInfo(InfoArray);
        }
    });
});
