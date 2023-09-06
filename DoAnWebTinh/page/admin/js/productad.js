let product = JSON.parse(localStorage.getItem('product'));

function renderUI(){
    html="";
    product.forEach(items => {
        html+=`<tr>
                    <th>${items.id}</th>
                    <th>${items.title}</th>
                    <th>${items.author}</th>
                    <th>${items.nxb}</th>
                    <th>${items.price}</th>
                    <th>${items.category}</th>
                    <th>${items.genre.join(', ')}</th>
                    <th><img src="${items.img}" alt=""></th>
                    <th><div class="btn-group d-flex"  style="justify-content: center;">
                        <button class="btn btn-warning"  onclick="fixProd(${items.id})"><i class="fa-solid fa-wrench fa-xs" style="color: #ffffff;"></i></button>
                        <button class="btn btn-danger" onclick="removeProd(${items.id})"><i class="fa-solid fa-trash fa-xs" style="color: #ffffff;"></i></button>
                    </div></th>
                </tr>`
    });
    $('tbody').html(html);
}
renderUI();

function removeProd(id){
    
    let index = product.findIndex(item => item.id.toString() === id.toString());
    if (index != -1) {
    product.splice(index, 1);
    localStorage.setItem('product', JSON.stringify(product));
    product = JSON.parse(localStorage.getItem('product'));
    renderUI();
        }
}
// 
function fixProd(id){
    window.location.href=`productfix.html?id=${id}`;
}
