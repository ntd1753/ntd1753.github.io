<?php
require_once __DIR__ . '/lib/function.php';
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = $_POST["full-name"];
    $email = $_POST["email"];
    $password = $_POST["password"];
    $checkPass=$_POST["password"];
    $phoneNum=$_POST["phone-num"];
    $birthday=$_POST["birthday"];
    $address=$_POST["address"];
}
$is_validate=true;
$error=[];
is_email($email);
is_fullname($name);
is_password_valid($password);
is_address_valid($address);
is_phone_number_valid($phoneNum);
check_pass($password,$checkPass);

if($is_validate){
    echo "Đăng kí thành công";
}else{
   session_start();
    $_SESSION['error']=$error;
    header("location: login.php");
}




