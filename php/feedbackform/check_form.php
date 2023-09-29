<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $cate = $_POST["cate"];
    $Comments = $_POST["Comments"];
}
$is_validate=true;
$error=[];
function is_fullname($name) {
    // Kiểm tra độ dài tối thiểu và tối đa
    global $error;
    global $is_validate;

    $minLength = 3;
    $maxLength = 50;
    $nameLength = strlen($name);
    if ($nameLength < $minLength || $nameLength > $maxLength) {
        array_push($error,"Họ và tên phải có độ dài từ $minLength đến $maxLength ký tự.");
        $is_validate=false;
    }

    // Kiểm tra xem họ và tên có chứa ký tự đặc biệt hoặc số không
    if (!preg_match('/[a-zA-z]$/', $name)) {
        array_push($error,"Họ và tên không được chứa kí tự đặc biệt hoặc số");
        $is_validate=false;
    }
}

function is_email($email){
    global $error;
    global $is_validate;
    if (strlen($email) > 255) {
        array_push($error,"Độ dài email không vượt quá 255 kí tự");
        $is_validate=false;
    }
    // Sử dụng hàm filter_var để kiểm tra định dạng email hợp lệ
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        array_push($error,"định dạng email không đúng");
        $is_validate=false;
    }

}
function checkCate($cate){
    global $error;
    global $is_validate;
    if ($cate ===""){
        array_push($error,"cần chọn loại feedback");
        $is_validate=false;
    }
}

is_fullname($name);
is_email($email);
checkCate($cate);
if($is_validate){
    echo "gửi feedback thành công";
}else{
    session_start();
    $_SESSION['error']=$error;
    header("location: index.php");
}