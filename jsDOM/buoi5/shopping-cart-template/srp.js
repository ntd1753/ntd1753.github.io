var product =[
    {
        id: 1,
        name: "Laptop Asus",
        description: "lorem ipsum",
        price: 20,
        img: "https://www.anphatpc.com.vn/media/news/1411_Asus2mn7.jpg"
    },
    {
        id: 2,
        name: "Laptop Acer",
        description: "lorem ipsum",
        price: 19,
        img: "https://www.anphatpc.com.vn/media/news/1411_Asus2mn7.jpg"
    },
    {
        id: 3,
        name: "Macbook",
        description: "lorem ipsum",
        price: 21,
        img: "https://www.anphatpc.com.vn/media/news/1411_Asus2mn7.jpg"
    },
    {
        id: 4,
        name: "Laptop Dell",
        description: "lorem ipsum",
        price: 18,
        img: "https://www.anphatpc.com.vn/media/news/1411_Asus2mn7.jpg"
    }
];


function renderUI(){
    let html="";
    if(product.length===0) {
        html="<li>chưa có sản phẩm nào trong giỏ hàng</li>";
      
   
    }
    else {
        html="";
        for (let i = 0; i <product.length; i++) {
            html+=`  <li class="row">
            <div class="col left">
                <div class="thumbnail">
                    <a href="#">
                        <img src="${product[i].img}" alt="" />
                    </a>
                </div>
                <div class="detail">
                    <div class="name"><a href="#">${product[i].name}</a></div>
                    <div class="description">
                       ${product[i].description}
                    </div>
                    <div class="price" >$${product[i].price}</div>
                    <div id="price${product[i].id}"></div>
                </div>
            </div>

            <div class="col right">
                <div class="quantity">
                    <input type="number" onkeyup="handleOnChangeQuantity(${product[i].id},${product[i].price})" class="product-quantity" id="product${product[i].id}" min="0" step="1" value="1" />
                </div>

                <div class="remove" onclick=" removeProductFromCart(${product[i].id})">
                    <span class="close"><i class="fa fa-times" aria-hidden="true"></i></span>
                </div>
            </div>
        </li>`
        }
    }





document.getElementById("products").innerHTML=html;
    document.querySelector(".count").innerText=`${product.length} items in the bag`;
}
renderUI();
function handleOnChangeQuantity(id,price){
    
    let input_id= "product"+ id;
    let quantity = document.getElementById(input_id).value;
    
    // let new_price = quantity * product.find(x => x.id==id).price;
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
    let index = product.findIndex(item => item.id === id);
    if (index !== -1) {
    product.splice(index, 1);
    renderUI();
    updateTotalPrice();
        }
 }
//tính tổng tiền và vat
function calculateTotalPrice() {
    let total = 0;
    for (let i = 0; i < product.length; i++) {
        let input_id = "product" + product[i].id;
        let quantity = document.getElementById(input_id).value;
        let price = product[i].price;
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

            