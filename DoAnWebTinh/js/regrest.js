$('.btn-lg').on('click', function(){
    let username= $('#account').val();
    let password= $('#password').val();
    let checkPass = $("#check-password").val();


    console.log(typeof(password));
    var regex = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    const users = JSON.parse(localStorage.getItem('users')) || [];
    if(username.length === 0 || password.length === 0){
        swal("Thất bại!", "Vui lòng nhập thử email và password", "error");
    } else if(password.length < 8){
        swal("Mật khẩu phải có độ dài ít nhất 8 kí tự", "Vui lòng nhập thử email và password", "error");
    }else if(! regex.test(username.trim())) {
        swal("Tài khoản phải là địa chỉ email", "Vui lòng nhập thử email và password", "error");
    } else {
        if(password != checkPass){
            swal("Mật khẩu nhập lại không đúng", "Vui lòng nhập thử email và password", "error");
        } else
        if (users.some(user => user.username === username)) {
            swal('Tên đăng nhập đã tồn tại. Vui lòng chọn tên đăng nhập khác.', "Vui lòng nhập thử email và password", "error");
            return;
        } else {
            users.push({
                username: username,
                password: password
            });
    
            // Save the updated list back to LocalStorage
            localStorage.setItem('users', JSON.stringify(users));
            swal("Đăng kí thành công!","", "success");
            setTimeout (function(){
                window.location.href='login.html';
            },2000);
        }
    }
})