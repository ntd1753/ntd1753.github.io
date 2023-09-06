$('#list-table').html();
var fullAccLoggedIn = localStorage.getItem('fullAccLoggedIn');
let orderdetail = JSON.parse(localStorage.getItem('orderdetail'));
let orderItem =  JSON.parse(localStorage.getItem('orderItem'))
function renderUI(){
    let myOrderId=[];
    let html="";
    let myOrder = orderdetail.filter(items => items.users === fullAccLoggedIn);
    myOrder.forEach(items => {
        myOrderId.push(items.id);
    });
    if(myOrder.length === 0){
        html="<div>Bạn chưa có đơn hàng nào</div>";
        $('#list-table').html(html)
    }
    console.log(myOrderId)
    myOrderId.forEach(items =>{
        console.log(items)
        html +=`<table class="list-cart" cellspacing="0">
        <thead>
            <tr style="border-bottom: 3px solid #cecece;">
                <th class="product-name" colspan="2">Sản phẩm</th>
                <th class="product-quantity">Số lượng</th>
            </tr>
        </thead>
        <tbody>
            
        `;
        orderItem.forEach(Element =>{
            console.log(Element.orderid)
            if(items === Element.orderid){
                html+=`<tr>
                <td>
                    <img src="${Element.img}" alt="">
                </td>
                <td class="product-name">
                ${Element.title}
                </td>
                <td>
                    <div class="quantity buttons_added">
                    ${Element.quantity}
                    </div>
                </td>
            </tr>`
            }
        });
        html +=`
            <tr>
                <th colspan="3"> Mã Đơn hàng=${items}</th>
            </tr>
        </tbody>
        </table>`;
        
    });
    $('#list-table').html(html)
}
renderUI();