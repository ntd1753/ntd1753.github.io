let isLoggedIn = localStorage.getItem('isLoggedIn');
var accLoggedIn = localStorage.getItem('accLoggedIn');
$('#header-left').on('click',function(){
    window.location.href = 'home.html';
});
function RenderHeader(){
    if(isLoggedIn === 'true'){
        $('#account-sub').text(accLoggedIn);
        let html=`<ul>
                    <li id="history">Lịch sử mua hàng</li>
                    <li id="log-out">Đăng xuất</li>
                </ul>`;
        $('#account-option').html(html);

        $('#account').on('click',function(){
            $('#account-option').toggle();
            $('#log-out').on('click', function(){
                localStorage.setItem('isLoggedIn','false');
                localStorage.setItem('accLoggedIn','');
                window.location.href='home.html';
            });
            $('#history').on('click',function(){
                window.location.href='home.html';
            })
        })
    } else {
        $('#account').on('click', function(){
            window.location.href='../auth/login.html';
        })
    }
    
}
RenderHeader();
$('#header_left').on('click',function(){
    window.location.href='home.html';
})
$('#cart').on('click',function(){
    window.location.href='cart.html';
})
$('.submit-search').on('click', function(event){
    event.preventDefault();
    let searchField = $('.search-field').val();

    window.location.href= `search.html?name=${searchField}`;
})

$(document).ready(function() {
    // Hàm kiểm tra kích thước màn hình để quyết định ẩn hiện "head-bar"
    function toggleHeadBar() {
        if ($(window).width() <= 1024) { // Điều kiện có thể điều chỉnh theo cỡ màn hình mong muốn
            $('#head-bar').hide(); // Ẩn "head-bar"
        } else {
            $('#head-bar').show(); // Hiện "head-bar"
        }
    }

    // Gọi hàm kiểm tra khi trang web được tải lần đầu
    toggleHeadBar();

    // Gọi hàm kiểm tra khi kích thước màn hình thay đổi
    $(window).resize(toggleHeadBar);
});
