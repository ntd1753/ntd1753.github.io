const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');
let product = JSON.parse(localStorage.getItem('product'));
function renderUI() {
    let fixProduct = product.find(x => x.id.toString() === productId);
    let genre = fixProduct.genre.join(',');
    $('#title').val(fixProduct.title);
    $('#author').val(fixProduct.author);
    $('#nxb').val(fixProduct.nxb);
    $('#price').val(fixProduct.price);
    $('#category').val(fixProduct.category);
    $('#genre').val(genre);
    $('#image').val(fixProduct.img);
    $('#des').val(fixProduct.describe);
}
renderUI();
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
            product.forEach(x => {
                if(x.id.toString() === productId){
                    x.title = title;
                    x.author = author;
                    x.nxb = nxb;
                    x.price = price;
                    x.category = category;
                    x.genre = genre;
                    x.img =img;
                    x.describe= des;
                }
            });
            localStorage.setItem('product',JSON.stringify(product));
            swal("Sửa thông tin thành công","", "success");
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
$('#price').on('keyup', function(){
    if($(this).val()<0){
        $(this).val(0)
    }
})

