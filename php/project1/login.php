<?php
session_start();
if(!empty($_SESSION['error'])){
    $error=$_SESSION['error'];}


?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>ĐĂNG KÍ</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
    <div class="title text-center text-3xl font-bold text-[#3f3a64] mb-[30px]"> Đăng kí tài khoản</div>
    <div id="main" class="w-full h-full flex justify-center">
        
        <div class="content w-4/5   flex justify-center ">
            <div class="grid grid-cols-2 gap-[4rem]  w-5/6 ">
                <div id="image-content" class="flex items-center"><img src="https://p.w3layouts.com/demos_new/template_demo/22-05-2020/exploring-liberty-demo_Free/1920818813/web/images/travel.png" alt=""></div>
                <div id="regrest-box" class="bg-[#1364cf] p-10 rounded-[10px]">
                    <div id="regrest-form" class="">
                        <h2 class="text-[white] text-2xl font-bold mb-[15px]">Tạo tài khoản</h2>
                        <form action="check_regrest.php" method="post">
                            <input type="text" name="full-name" id="full-name"
                                   class="w-full h-[55px] rounded-lg mb-[15px]"
                                   placeholder="Họ và Tên" required>
                            <input type="email" name="email" id="email"
                            class="w-full h-[55px] rounded-lg mb-[15px]"
                            placeholder="Địa chỉ email" required>
                            <input type="password" name="password"
                            placeholder="Mật khẩu"
                            class="w-full h-[55px] rounded-lg mb-[15px]" required
                            >
                            <input type="password" name="check-password" 
                            placeholder="Nhập lại mật khẩu"
                            class="w-full h-[55px] rounded-lg mb-[15px]" required
                            >
                            <input type="number" name="phone-num"
                                   placeholder="Số điện thoại"
                                   class="w-full h-[55px] rounded-lg mb-[15px]"
                            >
                            <input type="date" name="birthday" id="birth"
                                   placeholder="ngày sinh"
                                   class="w-full h-[55px] rounded-lg mb-[15px]"
                            >
                            <input type="text" name="address"
                                   placeholder="Địa chỉ"
                                   class="w-full h-[55px] rounded-lg mb-[15px]"
                            >
                            <br>
                            <input type="submit" value="Đăng kí"
                                   class="w-full h-[55px] rounded-lg bg-[#fdd387]" placeholder="Đăng kí"
                                   required
                            >
                        </form>
                        <div id="error" class="text-[white]">
                            <?php
                            if(!empty($_SESSION['error'])){
                            foreach ($error as $item){
                                echo $item."<br>";
                            }}
                            session_destroy();
                            ?>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script>
    $("input").on('keyup', function (){
        if(this.id != "birth"){
            let inputValue = $(this).val();
            // Loại bỏ các kí tự "/", "\", và "`" khỏi giá trị
            let sanitizedValue = inputValue.replace(/[\/\\`]/g, '');
            // Cập nhật giá trị của trường input
            $(this).val(sanitizedValue);
        }

    })
    </script>

</body>
</html>