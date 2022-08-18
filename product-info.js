const direccion = "https://japceibal.github.io/emercado-api/cats_products/101.json"

let categoriesArray = [];


for(let i = 0; i < array.length; i++){ 
    let category = array[i];
    htmlContentToAppend +=`
    <div class="list-group-item list-group-item-action">
        <div class="row">
            <div class="col-3">
                <img src="` + products.image + `" alt="product image" class="img-thumbnail">
            </div>
            <div class="col">
                <div class="d-flex w-100 justify-content-between">
                    <div class="mb-1">
                    <h4>`+ products.name +`</h4> 
                    <p> `+ products.description +`</p> 
                    </div>
                    <small class="text-muted">` + products.soldCount + ` artículos</small> 
                </div>

            </div>
        </div>
    </div>
    ` 
    document.getElementById("cat-list-container").innerHTML = htmlContentToAppend; 
}