//array donde se cargarán los datos recibidos:
const ORDER_ASC_BY_NAME = "AZ";
const ORDER_DESC_BY_NAME = "ZA";
const ORDER_BY_PRICE = "Precio";
let productsArray = [];
let currentSortCriteria = undefined;
let minCount = undefined;
let maxCount = undefined;


function sortProducts(criteria, array){
    let result = [];
    if (criteria === ORDER_ASC_BY_NAME)
    {
        result = array.sort(function(a, b) {
            if ( a.products.name < b.products.name ){ return -1; }
            if ( a.products.name > b.products.name ){ return 1; }
            return 0;
        });
    }else if (criteria === ORDER_DESC_BY_NAME){
        result = array.sort(function(a, b) {
            if ( a.products.name > b.products.name ){ return -1; }
            if ( a.products.name < b.products.name ){ return 1; }
            return 0;
        });
    }else if (criteria === ORDER_BY_PRICE){
        result = array.sort(function(a, b) {
            let aCount = parseInt(a.products.cost);
            let bCount = parseInt(b.products.cost);

            if ( aCount > bCount ){ return -1; }
            if ( aCount < bCount ){ return 1; }
            return 0;
        });
    }

    return result;
}


document.addEventListener("DOMContentLoaded", function(e) {
    let id=localStorage.getItem("catID");
    getJSONData(PRODUCTS_URL + id + ".json").then(function (resultObj){ 
    })
})


function showProductsList(array){
    let htmlContentToAppend = "";

    for(let i = 0; i < productsArray.products.length; i++){ 
        let products = productsArray.products[i];
        htmlContentToAppend += `
        <div class="list-group-item list-group-item-action">
            <div class="row">
                <div class="col-3">
                    <img scr="` + products.image + `" alt="product image" class="img-thumbnail">
                </div>
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <div class="mb-1">
                        <h4>`+ products.name + '-' + products.currency + + products.cost +`</h4> 
                        <p> `+ products.description +`</p> 
                        </div>
                        <small class="text-muted">` + products.soldCount + ` vendidos</small> 
                    </div>

                </div>
            </div>
        </div>
        `
        document.getElementById("cat-list-container").innerHTML = htmlContentToAppend; 
    }
}



function sortAndShowProducts(sortCriteria, productsArray){
    currentSortCriteria = sortCriteria;

    if(productsArray.products != undefined){
        currentProductsArray = productsArray.products;
    }

    currentProductsArray = sortProducts(currentSortCriteria, currentProductsArray);

    //Muestro las categorías ordenadas
    showProductsList();
}



document.addEventListener("DOMContentLoaded", function(e){
    let id=localStorage.getItem("catID");
    getJSONData(PRODUCTS_URL + id + ".json").then(function(resultObj){
        if (resultObj.status === "ok"){
            productsArray = resultObj.data;

            showProductsList(productsArray);
        }
    });
})



document.getElementById("sortAsc").addEventListener("click", function(){
    sortAndShowProducts(ORDER_ASC_BY_NAME);
});

document.getElementById("sortDesc").addEventListener("click", function(){
    sortAndShowProducts(ORDER_DESC_BY_NAME);
});

document.getElementById("sortByPrice").addEventListener("click", function(){
    sortAndShowProducts(ORDER_BY_PRICE);
});

document.getElementById("clearRangeFilter").addEventListener("click", function(){
    document.getElementById("rangeFilterCountMin").value = "";
    document.getElementById("rangeFilterCountMax").value = "";

    minCount = undefined;
    maxCount = undefined;

    showProductsList();
});

document.getElementById("rangeFilterCount").addEventListener("click", function(){
    //Obtengo el mínimo y máximo de los intervalos para filtrar por cantidad
    //de productos por categoría.
    minCount = document.getElementById("rangeFilterCountMin").value;
    maxCount = document.getElementById("rangeFilterCountMax").value;

    if ((minCount != undefined) && (minCount != "") && (parseInt(minCount)) >= 0){
        minCount = parseInt(minCount);
    }
    else{
        minCount = undefined;
    }

    if ((maxCount != undefined) && (maxCount != "") && (parseInt(maxCount)) >= 0){
        maxCount = parseInt(maxCount);
    }
    else{
        maxCount = undefined;
    }

    showProductsList();
});


