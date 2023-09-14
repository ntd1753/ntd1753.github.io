<!DOCTYPE html>
<html>
<head>
    <title>User Authentication</title>
</head>
<body>
<h1>Login Form</h1>
<?php
// TODO: Tạo form đăng nhập với username và password .
// Viết code PHP để kiểm tra xem họ đã đăng nhập đúng chưa với $username và $password giả định trước
// Hiển thị thông báo lỗi khi đăng nhập
$correct_username ="abc@gmail.com";
$correct_password ="123456789";

?>
<form action="#" method="post">
    <label for="username">Username:</label>
    <input type="text" name="username" id="username" required><br>

    <label for="password">Password:</label>
    <input type="password" name="password" id="password" required><br>

    <input type="submit" value="Login">
</form>

<?php
// TODO: Hiển thị lỗi khi đăng nhập ở đây.
$error = "";
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST["username"];
    $password = $_POST["password"];
    if ($username == $correct_username && $password == $correct_password) {
        echo "Đăng nhập thành công!";

    } else {
        $error = "Lỗi: Tên người dùng hoặc mật khẩu không đúng!";
    }
    if (!empty($error)) {
        echo "<p>$error</p>";
    }
}
?>
</body>
</html>