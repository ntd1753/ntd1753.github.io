let product = JSON.parse(localStorage.getItem('product'));

$(document).ready(function(){

    const urlParams = new URLSearchParams(window.location.search);
    const productName = urlParams.get('name');
    const productCate = urlParams.get('category');
    let productSearch = [];
    // Filter the products by name
    if(productName != null){
        if(productName === ""){
                productSearch= product.filter(x => x) ;
                console.log(productSearch);
        } else{
            productSearch = product.filter(item => {
                return item.title.toLowerCase().includes(productName.toLowerCase());
            });
            console.log(productSearch);
        }
    } else if( productCate != null){
        let categoryFromUrl = listCategory.find(x => x.id.toString() === productCate).category ;
        productSearch = product.filter(item => {
            return item.category.toLowerCase().includes(categoryFromUrl.toLowerCase());
        });
        
    }
    renderUI(productSearch);
    });

function RenderListSearch(){ 
    let html="";  
    listCategory.forEach(items => {
        html += `<li>
        <input type="radio" name="category" value="${items.id}" class="choice-radio">
        <label for="${items.category}">${items.category}</label>
    </li>`;
    });
    $('#choice-category #list-choice-category').html(html);
};
function searchResultCategory(id) {
    let result="";
    let category = listCategory.find(x => x.id.toString() === id).category.toLowerCase();

    let listProductCategory = product.filter(x => x.category.toLowerCase() === category);
    listProductCategory.forEach(items =>{
        let price =formatCurrency(items.price);
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
                <div class="price">${price}</div>
            </div>
        </div></a>
    </div>`;
    })
    $('.product-list .row').html(result);
    
    
}

function renderUI(resultSearch){
    let html = "";
    resultSearch.forEach(items => {
        let price =formatCurrency(items.price);
        html +=`<div class="col-lg-3 col-6">
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
                <div class="price">${price}</div>
            </div>
        </div></a>
    </div>`
    });
    $('.product-list .row').html(html);
    RenderListSearch()
}
$(document).ready(function(){
    $('.choice-radio').on('change', function(){
        let htmlCheckbox="";
        let id = $(this).val();
        localStorage.setItem('categorychecked', JSON.stringify(id));
        
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
});
$(document).on('change', '.checkbox-genre', function(){
    let genreResult = "";
    const checkedGenres = $('.checkbox-genre:checked').map(function() {
        return $(this).val().toLowerCase();
    }).get();
    // Lưu trạng thái của các checkbox genre vào LocalStorage
    let categoryChecked = JSON.parse(localStorage.getItem('categorychecked'));
    categoryChecked = listCategory.find(item => item.id.toString() === categoryChecked).category;
    let categoryCheckedProd = product.filter(item => item.category.toLowerCase() === categoryChecked.toLowerCase());
    localStorage.setItem('genreChecked', JSON.stringify(checkedGenres));
    let genreChecked = JSON.parse(localStorage.getItem('genreChecked'));
    let productResult =[];
    if(genreChecked.length === 0){
        let result ="";
        categoryCheckedProd.forEach(items =>{
            let price =formatCurrency(items.price);
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
                    <div class="price">${price}</div>
                </div>
            </div></a>
        </div>`;
        productResult.push(items);
        });
        localStorage.setItem('productResult', JSON.stringify(productResult));
        $('.product-list .row').html(result);
    }else{
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
                let price =formatCurrency(items.price);
                genreResult += `<div class="col-lg-3 col-6">
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
                        <div class="price">${price}</div>
                    </div>
                </div></a>
            </div>`;
                productResult.push(items);
            }
        });
        localStorage.setItem('productResult', JSON.stringify(productResult));
        $('.product-list .row').html(genreResult);
    }
    
});

$(document).ready(function(){
    $('#submit-btn').on('click', function(){
        let resultPrice ="" ;
        let productResult = JSON.parse(localStorage.getItem('productResult'));
        let priceMin = $('.input-min').val();
        let priceMax = $('.input-max').val();
        console.log(priceMax);
        productResult.forEach( item => {
            if(item.price >= priceMin && item.price <= priceMax){
                let price =formatCurrency(item.price);
                resultPrice += `<div class="col-lg-3 col-6">
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
                        <div class="price">${price}</div>
                    </div>
                </div></a>
            </div>`;
            }
        })
        $('.product-list .row').html(resultPrice);

    });

});
function formatCurrency(number) {
    let newNumber= number;
    // Sử dụng toLocaleString để định dạng số và thêm dấu phân cách hàng nghìn
    return newNumber.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
}
$(window).on('beforeunload', function() {
    // Xóa trường dữ liệu "result" khỏi localStorage
    localStorage.removeItem('productResult');
});