<!DOCTYPE html>
<html lang="en">
<head>
    <title>Kiểm tra Tuổi</title>
</head>
<body>
<h1>Độ tuổi đăng ký</h1>

<?php
// TODO: Kiểm tra tuổi của người dùng và hiển thị thông báo phù hợp.
// thông báo "Bạn đủ tuổi để đăng ký"  với trường hợp tuổi >=18
// thông báo "Bạn chưa đủ tuổi để đăng ký" nêu tuổi < 18
$age = rand(10,30);
if($age >=18){
    echo "<div>Bạn $age tuổi. Bạn đủ tuổi để đăng ký </div>";
} else {
    echo "<div>Bạn $age tuổi. Bạn chưa đủ tuổi để đăng ký </div>";

}
?>
</body>
</html>

