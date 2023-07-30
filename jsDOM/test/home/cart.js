const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

function renderUI(){
    let html="";
    if(cartItems.length===0) {
        html="<li>chưa có sản phẩm nào trong giỏ hàng</li>";

    }
    else {
        html="";
        for (let i = 0; i <cartItems.length; i++) {
            html+=`  <li class="row">
            <div class="col left">
                <div class="thumbnail">
                    <a href="#">
                        <img src="${cartItems[i].img}" alt="" />
                    </a>
                </div>
                <div class="detail">
                    <div class="name"><a href="#">${cartItems[i].name}</a></div>

                    <div class="price" >$${cartItems[i].price}</div>
                    <div id="price${cartItems[i].id}"></div>
                </div>
            </div>

            <div class="col right">
                <div class="quantity">
                    <input type="number" onkeyup="handleOnChangeQuantity(${cartItems[i].id},${cartItems[i].price})" class="cartItems-quantity" id="cartItems${cartItems[i].id}" min="0" step="1" value="${cartItems[i].quantity}" />
                </div>

                <div class="remove" onclick=" removeProductFromCart(${cartItems[i].id})">
                    <span class="close"><i class="fa fa-times" aria-hidden="true"></i></span>
                </div>
            </div>
        </li>`
        }
    }





document.getElementById("products").innerHTML=html;
}
renderUI();

function handleOnChangeQuantity(id,price){
    
    let input_id= "cartItems"+ id;
    let quantity = document.getElementById(input_id).value;
    for (let index = 0; index < cartItems.length; index++)  {
        if (cartItems[index].id === id) {
            cartItems[index].quantity = quantity;
            localStorage.setItem('cartItems', JSON.stringify(cartItems));
            break;
        }
    }
    let newPrice= quantity*price;
    if(quantity<0)  {document.getElementById(input_id).value="1";
    document.getElementById("price" + id).innerText="$"+ price;
        }
        else
    document.getElementById("price" + id).innerText="$"+ newPrice;
        updateTotalPrice();
}
const input = document.querySelectorAll("input");
const price_id = document.querySelectorAll(".price");


//xóa sản phẩm   
function removeProductFromCart(id) {
    let index = cartItems.findIndex(item => item.id === id);
    if (index !== -1) {
    cartItems.splice(index, 1);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    renderUI();
    updateTotalPrice();
        }
}
//tính tổng tiền và vat
function calculateTotalPrice() {
    let count=0;
    let total = 0;
    for (let i = 0; i < cartItems.length; i++) {
        let input_id = "cartItems" + cartItems[i].id;
        let quantity = document.getElementById(input_id).value;
        quantity1=1*quantity;
        count += quantity1;
        let price = cartItems[i].price;
        let newPrice = quantity * price;
        total += newPrice;

    }
    return total;
}

function updateTotalPrice() {
    let totalPrice = calculateTotalPrice();
    let vat = totalPrice*0.1;
    let totalWithVAT = totalPrice + vat;
    document.querySelector(".subtotal span").innerText = "$" + totalPrice.toFixed(2);
    document.querySelector(".vat span").innerText = "$" + vat.toFixed(2);
    document.querySelector(".total span").innerText = "$" + totalWithVAT.toFixed(2);

}
updateTotalPrice();
let promotionCode = {
    A: 10,
    B: 20,
    C: 30,
    D: 40,
};

function applyPromotionCode() {
    const promoCodeInput = document.getElementById("promo-code");
    const promoCode = promoCodeInput.value.trim().toUpperCase(); 
    if (promotionCode.hasOwnProperty(promoCode)) {
        const discountPercentage = promotionCode[promoCode];
        const totalPrice = calculateTotalPrice();
        const discountAmount = (totalPrice * discountPercentage) / 100;
        const totalWithDiscount = totalPrice - discountAmount;
        document.querySelector(".discount span").innerText = "$" + discountAmount.toFixed(2);
        document.querySelector(".total span").innerText = "$" + totalWithDiscount.toFixed(2);
        // alert(`Mã giảm giá ${promoCode} đã được áp dụng!`);
    } else {
        alert("Mã giảm giá không hợp lệ. Vui lòng kiểm tra lại!");
    }
}
$('.breadcrumb').children('li:first').on('click', function (){
    window.location.href='index.html';
})
$('#order').on('click', function () {
    window.location.href='thanhtoan.html';
})
