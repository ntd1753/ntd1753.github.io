const listCategory = JSON.parse(localStorage.getItem('listCategory')); // Thay 'yourCategoryStorageKey' bằng tên key thích hợp
const product = JSON.parse(localStorage.getItem('product'));

$(document).ready(function(){

    const urlParams = new URLSearchParams(window.location.search);
    const productName = urlParams.get('name');
    console.log(productName);
    // Filter the products by name
    const productSearch = product.filter(item => {
        return item.title.toLowerCase().includes(productName.toLowerCase());
    });
    
    renderUI(productSearch);
});
function renderUI(title){
    let listProd = "";
    title.forEach(items => {
        listProd +=`<div class="col-lg-3 col-6">
        <a href="product.html?productId=${items.id}" style="text-decoration: none;">
        <div class="card" style="width=100%">
            <img src="${items.img}" class="card-img-top" alt="...">
            <div class="card-body">
                <div class="card-title">${items.title}</div>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">${items.author}</li>
            </ul>
            <div class="card-body">
                <div class="price">${items.price}đ</div>
            </div>
        </div></a>
    </div>`
    });
    RenderListSearch();
    $('.product-list .row').html(listProd);

}
function RenderListSearch(){ 
    let html="";  
    listCategory.forEach(items => {
        html += `<li>
        <input type="radio" name="category" value="${items.id}" class="choice-radio">
        <label for="${items.category}">${items.category}</label>
    </li>`;
    });
    $('#choice-category #list-choice-category').html(html);
    $('.choice-radio').on('change', function(){
        let htmlCheckbox="";
        let id = $(this).val();
        searchResultCategory(id);
        let newListCategory = listCategory.filter(x => x.id.toString() === id);
        let genre = newListCategory[0].genre;
        $('#title-genre').css('display','block');
        genre.forEach(items => {

            htmlCheckbox += `<li>
        <input type="checkbox" name="${items}" value="${items}" class="checkbox-genre">
        <label for="${items}">${items}</label>
        </li>`;
        });
        $('#choice-category #list-choice-genre').html(htmlCheckbox);
        
    });
    

};
function searchResultCategory(id) {
    let result="";
    let category = listCategory.find(x => x.id.toString() === id).category.toLowerCase();

    let listProductCategory = product.filter(x => x.category.toLowerCase() === category);
    listProductCategory.forEach(items =>{
        result +=`<div class="col-lg-3 col-6">
        <a href="product.html?productId=${items.id}" style="text-decoration: none;">
        <div class="card" style="width=100%">
            <img src="${items.img}" class="card-img-top" alt="...">
            <div class="card-body">
                <div class="card-title">${items.title}</div>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">${items.author}</li>
            </ul>
            <div class="card-body">
                <div class="price">${items.price}đ</div>
            </div>
        </div></a>
    </div>`;
    })
    $('.product-list .row').html(result);
    
    $(document).on('change', '.checkbox-genre', function(){
        let genreResult = "";
        const checkedGenres = $('.checkbox-genre:checked').map(function() {
            return $(this).val().toLowerCase();
        }).get();
        // Lưu trạng thái của các checkbox genre vào LocalStorage
        localStorage.setItem('genreChecked', JSON.stringify(checkedGenres));
        let genreChecked =  JSON.parse(localStorage.getItem('genreChecked'));
        product.forEach(items => {
            let count=0;
            items.genre.forEach(x => {
                genreChecked.forEach(genreItems => {
                    if (x.toLowerCase() === genreItems) {
                        count++;
                        
                    }
                })
                
            });
            if(count === genreChecked.length){
                genreResult += `<div class="col-lg-3 col-6">
                            <div class="card" style="width=100%">
                                <img src="${items.img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${items.title}</h5>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">${items.author}</li>
                                </ul>
                                <div class="card-body">
                                    <div class="price">${items.price}đ</div>
                                </div>
                            </div>
                        </div>`;
            }
        });
        $('.product-list .row').html(genreResult);
    });
}



