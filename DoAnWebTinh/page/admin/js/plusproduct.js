let product = JSON.parse(localStorage.getItem('product'));
$('#submit-fix').on('click', function(){
    let title= $('#title').val();
    let author= $('#author').val();
    let nxb = $('#nxb').val();
    let price = Number($('#price').val());
    let category = $('#category').val();
    let genre = $('#genre').val();
    let img= $('#image').val();
    let des = $('#des').val();
    if(title.length===0 || author.length === 0 || nxb.length===0
        ||category.length === 0 || genre.length ===0
        || img.length ===0 || des.length === 0){
            swal("Vui lòng nhập đủ thông tin","", "error");
        }else{
            genre = strToArray(genre);
            let prodId= 0;
            if(product.length != 0){
                prodId = Number(product[product.length -1].id)  +1;
            }
            product.push({
                id: prodId,
                title: title,
                author:  author,
                nxb:  nxb,
                price: price,
                category: category,
                genre: genre,
                img: img,
                describe: des
            })
            localStorage.setItem('product',JSON.stringify(product));
            swal("Thêm sản phẩm thành công","", "success");
            setTimeout (function(){
                window.location.href='index.html';
            },2000);
        }

})
function strToArray(str) {
    // Sử dụng phương thức split() để tách chuỗi thành mảng dựa vào dấu phẩy và khoảng trắng
    var mangChuoi = str.split(',');
    // Loại bỏ khoảng trắng không cần thiết ở đầu và cuối mỗi phần tử
    for (let i = 0; i < mangChuoi.length; i++) {
            mangChuoi[i] = mangChuoi[i].trim();
        }
    return mangChuoi;
}