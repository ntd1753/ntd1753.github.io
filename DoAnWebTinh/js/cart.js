const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

function renderUI() {
    let html = "";
    let sumPrice =0;
    let tamTinh=0;
    if (cartItems.length === 0) {
        html = "<li>chưa có sản phẩm nào trong giỏ hàng</li>";
    } else {
        html = "";
        for (let i = 0; i < cartItems.length; i++) {
            sumPrice = cartItems[i].price*cartItems[i].quantity;
            
            tamTinh += sumPrice;
            html += `
            <tr>
                <td class="product-remove" >
                <div style="cursor: pointer;" onclick="removeProd(${cartItems[i].id})">X</div>
                </td>
                <td>
                    <img src="${cartItems[i].img}" alt="">
                </td>
                <td class="product-name">
                    <a href="">${cartItems[i].title}</a>
                </td>
                <td class="price-product">
                ${cartItems[i].price} đ
                </td>
                <td>
                    <div class="quantity buttons_added">
                        <!-- <input type="button" value="-" class="minus button is-form"> -->
                        <input type="number" class="input-text qty text" step="1"
                         min="0" max=""
                         value="${cartItems[i].quantity}" title="SL" 
                         size="4"
                         id="cartItems${cartItems[i].id}"
                         onchange="handleOnChangeQuantity(${cartItems[i].id})"
                         >
                        <!-- <input type="button" value="+" class="plus button is-form"> -->
                    </div>
                </td>
                <td class="sum-price-product">${sumPrice}d</td>
            </tr>`;
           
        }
    }
    $('.sum-price1').html(tamTinh +'đ')
    $('tbody').html(html);
    localStorage.setItem("sumCart",JSON.stringify(tamTinh));
}
renderUI();

function handleOnChangeQuantity(id) {
    let inputId = "#cartItems"+id;
    let quantity = $(inputId).val(); 
    if(quantity<0){
       quantity=1;
    }
        for (let index = 0; index < cartItems.length; index++) {
        
            if (cartItems[index].id === id.toString()) {
                cartItems[index].quantity = quantity;
                localStorage.setItem('cartItems', JSON.stringify(cartItems));
                break;
            }
        }
    
    
    renderUI();
    

}


//xóa sản phẩm   
function removeProd(id) {
    let index = cartItems.findIndex(item => item.id.toString() === id.toString());
    if (index != -1) {
    cartItems.splice(index, 1);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    renderUI();
        }
}

