const sumPrice = JSON.parse(localStorage.getItem('sumCart'));
const cartItems = JSON.parse(localStorage.getItem('cartItems'));
let orderItem =JSON.parse(localStorage.getItem('orderItem')) || [];
var regex = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
var fullAccLoggedIn = localStorage.getItem('fullAccLoggedIn');
let orderDetail = JSON.parse(localStorage.getItem('orderdetail')) || [];
localStorage.setItem('shipMethod','miễn phí');

const regex2 = /^\d+$/;
function renderUI(){
    let sumPriceVnd= formatCurrency(sumPrice)
    $('.sum-price-product').html(sumPriceVnd);
    let html="";
    cartItems.forEach(items => {
        let price = formatCurrency(items.price*items.quantity);
        html +=`<tr class="product-inf">
        <td class="product-name">
            <a href="">${items.title}</a>
        </td>
        <td class="price-product">
        ${price}
        </td>
    </tr>` ;
    });
    $("tbody").prepend(html);}
renderUI();

$('.shipping_method').on('change', function(){
    let value = Number($(this).val());
    if(value === 0){
        localStorage.setItem('shipMethod','miễn phí');
    }else if(value === 30000){
        localStorage.setItem('shipMethod','nhanh');
    }else {
        localStorage.setItem('shipMethod','hỏa tốc');
    }
    value += sumPrice;
    let valueVnd = formatCurrency(value)
    $('#sum-after-ship').html(valueVnd);
    localStorage.setItem('sumCartt',JSON.stringify(value));
})
$('.order').on('click', function(){
    let methodShip= localStorage.getItem('shipMethod');
    let email = $('#mail').val();
    let customName = $('#full-name').val();
    let phoneNum = $('#phone-num').val();
    let address = $('#diachi').val();
    if(customName === "" || phoneNum === "" 
    ||email === "" || address=== ""){
            swal("Thất bại!", "Vui lòng nhập đầy đủ thông tin", "error");
    } else if(! regex.test(email.trim())){
        swal("Thất bại!", "Vui lòng nhập lại thông tin", "error");
    } else if(! regex2.test(phoneNum)){
        swal("Thất bại!", "Vui lòng nhập lại thông tin", "error");
    }
    else{
        
        swal("Bạn đã mua hàng thành công!", "Cảm ơn bạn đã sử dụng dịch vụ của chúng tôi", "success");
        let orderDetailId = 0;
        if(orderDetail.length === 0){
            orderDetailId = 1;
        } else{
            let id=orderDetail[orderDetail.length-1].id;
            orderDetailId = id +1;
        }
        cartItems.forEach((item) => {
            item.orderid = orderDetailId;
        });
        cartItems.forEach(items => {
            orderItem.push(items);
        })
        
        localStorage.setItem('orderItem', JSON.stringify(orderItem));
        let value = JSON.parse(localStorage.getItem('sumCartt'));
        orderDetail.push({
            id: orderDetailId,
            customName: customName,
            phoneNum: phoneNum,
            email: email,
            address: address,
            users: fullAccLoggedIn,
            sumPrice: value,
            shipMethod: methodShip
        });
        console.log(orderDetail)
        // Save the updated list back to LocalStorage
        localStorage.setItem('orderdetail', JSON.stringify(orderDetail));
        localStorage.removeItem('cartItems');
        setTimeout (function(){
            window.location.href='home.html';
        },2000);
    }
})


function formatCurrency(number) {
    let newNumber= number;
    // Sử dụng toLocaleString để định dạng số và thêm dấu phân cách hàng nghìn
    return newNumber.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
}