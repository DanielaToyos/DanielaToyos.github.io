
let CommentsArray = [];

function showInfo(InfoArray){

    document.getElementById('Nombre').innerHTML=InfoArray.name;
    document.getElementById('Precio').innerHTML=InfoArray.currency + InfoArray.cost;
    document.getElementById('Descripcion').innerHTML=InfoArray.description;
    document.getElementById('Categoria').innerHTML=InfoArray.category;
    document.getElementById('Vendidos').innerHTML=InfoArray.soldCount;
    for (let i in InfoArray.images){
        document.getElementById('Imagenes').innerHTML += InfoArray.images[i];
    }
}

function showComments(CommentsArray){

    let htmlContentToAppend ="";
    for(let i = 0; i < CommentsArray.length; i++){
        let comment = CommentsArray[i];

        htmlContentToAppend +=`
        <div class="list-group-item list-group-item-action">
                <div class="row">
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">`+comment.user+`</h4>
                            <small class="text-muted">`+comment.dateTime+`</small>
                        </div>
                        <p class="mb-1">`+comment.description+`</p>
                    </div>
                </div>
        </div>
        `
        document.getElementById('Comentarios').innerHTML = htmlContentToAppend;
    } 
}

document.addEventListener("DOMContentLoaded", function(e){
    let ProdID=localStorage.getItem("ProdID");
    getJSONData(PRODUCT_INFO_URL + ProdID + ".json").then(function(resultObj){
        if (resultObj.status === "ok"){
            InfoArray = resultObj.data
            showInfo(InfoArray);
        }
    });

    getJSONData(PRODUCT_INFO_COMMENTS_URL + ProdID + ".json").then(function(resultObj){
        if (resultObj.status === "ok"){
            CommentsArray = resultObj.data
            showComments(CommentsArray);
        }
    });
});
