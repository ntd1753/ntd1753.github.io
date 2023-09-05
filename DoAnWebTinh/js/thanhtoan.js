const sumPrice = JSON.parse(localStorage.getItem('sumCart'));
const cartItems = JSON.parse(localStorage.getItem('cartItems'));
var regex = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
var accLoggedIn = localStorage.getItem('accLoggedIn');
const orderdetail = JSON.parse(localStorage.getItem('orderdetail')) || [];
const regex2 = /^\d+$/;
function renderUI(){
    $('.sum-price-product').html(sumPrice+ "đ");
    let html="";
    cartItems.forEach(items => {
       html +=`<tr class="product-inf">
       <td class="product-name">
           <a href="">${items.title}</a>
       </td>
       <td class="price-product">
       ${items.price*items.quantity} đ
       </td>
   </tr>` ;
    });
    $("tbody").prepend(html);}
renderUI();

$('.shipping_method').on('change', function(){
    let value = Number($(this).val());
    value += sumPrice;
    $('#sum-after-ship').html(value+ "đ");
})
$('.order').on('click', function(){
    let email = $('#mail').val();
    let customName = $('#full-name').val();
    let phoneNum = $('#phone-num').val();
    let address = $('#diachi').val();
    console.log(email)
    console.log(customName)
    console.log(phoneNum)
    console.log(address)
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
    orderdetail.push({
        customName: customName,
        phoneNum: phoneNum,
        email: email,
        address: address,
        users: accLoggedIn,
        
    });
    // Save the updated list back to LocalStorage
    localStorage.setItem('orderdetail', JSON.stringify(orderdetail));
    setTimeout (function(){
        window.location.href='home.html';
    },2000);
  }

})
