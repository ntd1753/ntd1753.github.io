let orderDetail = JSON.parse(localStorage.getItem('orderdetail'));
let orderItem = JSON.parse(localStorage.getItem('orderItem'));
function renderUI(){
    html="";
    orderDetail.forEach(items => {
        html+=`<tr>
        <th>${items.id}</th>
        <th>${items.customName}</th>
        <th>${items.phoneNum}</th>
        <th>${items.email}</th>
        <th>${items.address}</th>
        <th>${items.users}</th>
        <th>${items.sumPrice}</th>
        <th>${items.shipMethod}</th>
        <th><div class="btn-group d-flex" style="justify-content: center;">
                <button class="btn btn-warning" onclick="renderItem(${items.id})"><i class="fa-solid fa-info fa-xs" style="color: #f5f5f5;"></i></button>
                <button class="btn btn-danger" onclick="removeProd(${items.id})"><i class="fa-solid fa-trash fa-xs" style="color: #ffffff;"></i></button>
        </div></th>
    </tr>`
    });
    $('.orderdetail tbody').html(html);
}
renderUI();
function removeProd(id){
    
    let index = orderDetail.findIndex(item => item.id.toString() === id.toString());
    if (index != -1) {
    orderDetail.splice(index, 1);
    localStorage.setItem('orderdetail', JSON.stringify(orderDetail));
    orderDetail = JSON.parse(localStorage.getItem('orderdetail'));
    renderUI();
        }
}
function renderItem(id){
    let html=`<h2> thành phần đơn hàng id ${id} </h2>
                <table class="book-table ">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>quantity</th>
                        </tr>
                    </thead>
                    <tbody>`
    let orderItemProd = orderItem.filter(x => x.orderid === id);
    console.log(orderItemProd)
    orderItemProd.forEach(item => {
                    html+=`<tr>
                            <th>${item.id}</th>
                            <th>${item.title}</th>
                            <th>${item.price}</th>
                            <th>${item.quantity}</th>
                        </tr>`
    })
    html +=`</tbody>
    </table>`;
    console.log(html)
    $('#orderItem').html(html);
    $('#orderItem').css('display','block')
}
