
const products = JSON.parse(localStorage.getItem('product'));
$(document).ready(function(){
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('productId');
    // Filter the products by name
    const productSearch = products.find(item => item.id.toString() === productId);
    console.log(productSearch);
    renderUI(productSearch);
    $('#addtocart').on('click', function(){
        const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        const existingItem = cartItems.find(item => item.id === productSearch.id);
        if (existingItem) {
            existingItem.quantity += Number($('#quantity1').val());
        } else {
            cartItems.push({
                id: productSearch.id,
                title: productSearch.title,
                price: Number(productSearch.price),
                quantity:Number($('#quantity1').val()),
                img: productSearch.img
            });
        }
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }
    );
});
function renderUI(product) {
    let price = formatCurrency(product.price);
    let html=`
    <div class="col-lg-6">
        <img class="d-block w-100" src="${product.img}" alt="">
    </div>
    <div class="col-lg-6" id="product-info">
        <div id="home-link">
            <span>Trang chủ</span>
            <span>/</span>
            <span>${product.category}</span>
        </div>
        <h1 id="product-title">${product.title}
        </h1>
        <div class="is-divider small"></div>
        <div class="price">${price}</div>
        <div class="nav">
            <ul class="sub-nav">
                <li>Nhà xuất bản: ${product.nxb}</li>
                <li>Công ty phát hành: Happy Live</li>
                <li>Kích thước: 24 x 16 x 3 cm</li>
                <li>Dịch Giả: Thái Phạm – Đỗ Phan Thu Hà</li>
                <li>Số trang: 441 trang</li>
            </ul>
        </div>
        <div class="wvn-gift"><span class="tieu-de"><i class="icon-gift"></i><strong> QUÀ TẶNG KÈM</strong></span>
            <ul class="gift-list" style="list-style-type: square;">
                <li>
                    <span style="color: #000000;">
                        <strong>Tặng</strong>
                    </span>: 
                    <span style="color: #ff6600;">
                        <strong>Giấy nhớ + Bút Highlight</strong>
                    </span>
                    cho đơn hàng từ 
                    <span style="color: #ff6600;">
                        <strong>499k</strong>
                    </span>
                </li>
                <li><span style="color: #ff0000;"><strong><span style="color: #000000;">Tặng</span></strong></span><span style="color: #000000;">:</span> <span style="color: #0000ff;"><strong>Sổ da cao cấp + Bút ghi chú</strong></span> cho đơn hàng từ <span style="color: #0000ff;"><strong>699k</strong></span></li>
                <li><span style="color: #000000;"><strong>Tặng</strong></span>: Sách <span style="color: #008080;"><strong>Đắc nhân tâm</strong></span> cho đơn hàng từ <span style="color: #008080;"><strong>899k</strong></span></li>
            </ul>
        </div>
        <div class="row">
            <div class="quantity d-flex justify-content-center col-3">
                <input type="number" id="quantity1" 
                    class="input-text qty text" min="1" max="" 
                    name="quantity" value="1" title="SL"inputmode="numeric">
            </div>    
            <div class="col-9">
                <button type="submit" name="add-to-cart" id="addtocart">
                    Thêm vào giỏ hàng
                </button>
            </div>
        </div>
    </div>`;
   
    $('#product-content .row').html(html);
    $('.des-sub').html(product.describe);
    let sameGenre = "";
    let sameAuth= "";
    products.forEach(item => {
        if(item.author === product.author){
            if(item.id === product.id){
                sameAuth +="";
            }else{
                let price = formatCurrency(item.price);
                    sameAuth += `<div class="col-lg-3 col-6">
                    <div class="card" style="max-width: 18rem;">
                        <img src="${item.img}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${item.title}</h5>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">${item.author}</li>
                        </ul>
                        <div class="card-body">
                            <div class="price">${price}</div>
                        </div>
                    </div>
                </div>`;
            }
        }
    });
    $('#relate .row').html(sameAuth);
}
function formatCurrency(number) {
    let newNumber= number;
    // Sử dụng toLocaleString để định dạng số và thêm dấu phân cách hàng nghìn
    return newNumber.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
}