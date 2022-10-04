
const ORDER_ASC_BY_COST = "Precio Asc.";
const ORDER_DESC_BY_COST = "Precio Desc.";
const ORDER_BY_PROD_SOLDCOUNT = "Relevancia";
let currentProductsArray = [];
let currentSortCriteria = undefined;
let minCount = undefined;
let maxCount = undefined;


function sortProducts(criteria, array) {
    let result = [];
    if (criteria === ORDER_ASC_BY_COST) {
        result = array.products.sort(function (a, b) {
            let acost = parseInt(a.cost);
            let bcost = parseInt(b.cost);
            if (acost < bcost) { return -1; }
            if (acost > bcost) { return 1; }
            return 0;
        });
    } else if (criteria === ORDER_DESC_BY_COST) {
        result = array.products.sort(function (a, b) {
            let acost = parseInt(a.cost);
            let bcost = parseInt(b.cost);
            if (acost > bcost) { return -1; }
            if (acost < bcost) { return 1; }
            return 0;
        });
    } else if (criteria === ORDER_BY_PROD_SOLDCOUNT) {
        result = array.products.sort(function (a, b) {
            let asoldCount = parseInt(a.soldCount);
            let bsoldCount = parseInt(b.soldCount);

            if (asoldCount > bsoldCount) { return -1; }
            if (asoldCount < bsoldCount) { return 1; }
            return 0;
        });
    }

    return result;
}





document.addEventListener("DOMContentLoaded", function (e) {
    let id = localStorage.getItem("catID");
    getJSONData(PRODUCTS_URL + id + ".json").then(function (resultObj) {
    });
});


function showProductsList(array) {

    let htmlContentToAppend = "";

    for (let i = 0; i < currentProductsArray.products.length; i++) {
        let products = currentProductsArray.products[i];

        if (((minCount == undefined) || (minCount != undefined && parseInt(products.cost) >= minCount)) &&
            ((maxCount == undefined) || (maxCount != undefined && parseInt(products.cost) <= maxCount))) {


            htmlContentToAppend += `
          <div onclick="setProdID(${products.id})" class="list-group-item list-group-item-action cursor-active">
              <div class="row">
                  <div class="col-3">
                      <img src="` + products.image + `" alt="product image" class="img-thumbnail">
                  </div>
                  <div class="col">
                      <div class="d-flex w-100 justify-content-between">
                          <div class="mb-1">
                          <h4>`+ products.name + '-' + products.currency + + products.cost + `</h4> 
                          <p> `+ products.description + `</p> 
                          </div>
                          <small class="text-muted">` + products.soldCount + ` vendidos</small> 
                      </div>

                  </div>
              </div>
          </div>
          `

        }

        document.getElementById("cat-list-container").innerHTML = htmlContentToAppend;
    }
}



function sortAndShowProducts(sortCriteria, productsArray) {
    currentSortCriteria = sortCriteria;

    if (productsArray != undefined) {
        currentProductsArray = productsArray;
    }

    currentProductsArray = sortProducts(currentSortCriteria, currentProductsArray);

    //Muestro las categorías ordenadas
    showProductsList();
}



document.addEventListener("DOMContentLoaded", function (e) {
    let id = localStorage.getItem("catID");
    getJSONData(PRODUCTS_URL + id + ".json").then(function (resultObj) {
        if (resultObj.status === "ok") {
            currentProductsArray = resultObj.data;

            showProductsList();
        }
    });

    document.getElementById("sortAsc").addEventListener("click", function () {
        sortAndShowProducts(ORDER_ASC_BY_COST);
    });

    document.getElementById("sortDesc").addEventListener("click", function () {
        sortAndShowProducts(ORDER_DESC_BY_COST);
    });

    document.getElementById("sortBySoldCount").addEventListener("click", function () {
        sortAndShowProducts(ORDER_BY_PROD_SOLDCOUNT);
    });

    document.getElementById("clearRangeFilter").addEventListener("click", function () {
        document.getElementById("rangeFilterCountMin").value = "";
        document.getElementById("rangeFilterCountMax").value = "";

        minCount = undefined;
        maxCount = undefined;

        showProductsList();
    });

    document.getElementById("rangeFilterCount").addEventListener("click", function () {
        //Obtengo el mínimo y máximo de los intervalos para filtrar por cantidad
        //de productos por categoría.
        minCount = document.getElementById("rangeFilterCountMin").value;
        maxCount = document.getElementById("rangeFilterCountMax").value;

        if ((minCount != undefined) && (minCount != "") && (parseInt(minCount)) >= 0) {
            minCount = parseInt(minCount);
        }
        else {
            minCount = undefined;
        }

        if ((maxCount != undefined) && (maxCount != "") && (parseInt(maxCount)) >= 0) {
            maxCount = parseInt(maxCount);
        }
        else {
            maxCount = undefined;
        }

        showProductsList();
    });

    const search = document.getElementById("search");
    search.addEventListener("keyup", z => {
        const searchString = z.target.value;
        const filteredProducts = currentProductsArray.filter(products => {
            return (
                products.name.includes(searchString) ||
                products.description.includes(searchString)
            );
        });
        showProductsList(filteredProducts);
    });



});


function setProdID(prodId) {
    localStorage.setItem("ProdID", prodId);
    window.location = "product-info.html"
}





