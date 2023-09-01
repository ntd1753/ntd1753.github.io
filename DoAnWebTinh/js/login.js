$('.btn-lg').on('click', function(){
    let username= $('#account').val();
    let password= $('#password').val();
    var regex = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    localStorage.setItem('isLoggedIn', 'false');

    const users = JSON.parse(localStorage.getItem('users')) || [];
    if(username.length === 0 || password.length === 0){
        swal("Thất bại!", "Vui lòng nhập thử email và password", "error");
    } else if(password.length < 8){
        swal("Mật khẩu phải có độ dài ít nhất 8 kí tự", "Vui lòng nhập lại email và password", "error");
    }else if(! regex.test(username.trim())) {
        swal("Tài khoản phải là địa chỉ email", "Vui lòng nhập lại email và password", "error");
    } else {
        if (users.some(user => user.username === username)&&
            users.some(user => user.password === password)) {
            let atIndex = username.indexOf('@');
            accName = username.substring(0, atIndex);
            localStorage.setItem('isLoggedIn', 'true'); 
            localStorage.setItem('accLoggedIn', accName);
            swal('Đăng nhập thành công', "", "success");
            setTimeout (function(){
                window.location.href='../client/home.html';
            },2000);
        } else {
            swal("Thất bại!", "Vui lòng nhập thử email và password", "error");
        }
    }
})
