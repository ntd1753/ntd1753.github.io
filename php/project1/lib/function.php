<?php
$error=[];
$is_validate=true;
function is_email($email){
    global $error;
    global $is_validate;
    if (strlen($email) > 255) {
        array_push($error,"Độ dài email không vượt quá 255 kí tự");
        $is_validate=false;
    }
    // Sử dụng hàm filter_var để kiểm tra định dạng email hợp lệ
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        array_push($error,"tên đăng nhập phải là email");
        $is_validate=false;

    }

}
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
function is_password_valid($password) {
    global $error;
    global  $is_validate;
    // Kiểm tra độ dài tối thiểu
    $minLength = 8;
    if (strlen($password) < $minLength) {
        array_push($error,"Mật khẩu phải có ít nhất $minLength kí tự");
        $is_validate=false;
    }

    // Kiểm tra xem mật khẩu chứa ít nhất một chữ cái viết hoa
    if (!preg_match('/[A-Z]/', $password)) {
        array_push($error,"Mật khẩu phải chứa ít nhất một chữ cái viết hoa.");
        $is_validate=false;


    }
    // Kiểm tra xem mật khẩu chứa ít nhất một chữ cái viết thường
    if (!preg_match('/[a-z]/', $password)) {
        array_push($error,"Mật khẩu phải chứa ít nhất một chữ cái viết thường.");
        $is_validate=false;

    }
    // Kiểm tra xem mật khẩu chứa ít nhất một số
    if (!preg_match('/[0-9]/', $password)) {
        array_push($error,"Mật khẩu phải chứa ít nhất một số.");
        $is_validate=false;

    }
    // Kiểm tra xem mật khẩu chứa ít nhất một ký tự đặc biệt
    if (!preg_match('/[^A-Za-z0-9]/', $password)) {
        array_push($error,"Mật khẩu phải chứa ít nhất một kí tự đặc biệt.");
        $is_validate=false;
    }
}

function is_phone_number_valid($phone_number) {
    // Kiểm tra xem số điện thoại có trống không
    global $error;
    global  $is_validate;
    if (!empty($phone_number)) {
        return true;
    }else{
        // Sử dụng regex để kiểm tra định dạng số điện thoại (10 chữ số)
        if (!preg_match('/^\d{10}$/', $phone_number)) {
            array_push($error,"Số điện thoại không đúng định dạng.");
            $is_validate=false;
        }
    }
}

function is_address_valid($address) {
    // Kiểm tra xem địa chỉ có trống không (nếu là bắt buộc)
    if (empty($address)) {
        return true;
    }else{
        global $error;
        global $is_validate;
        // Kiểm tra độ dài tối đa
        $maxLength = 255;
        if (strlen($address) > $maxLength) {
            array_push($error,"Địa chỉ không được dài hơn $maxLength ký tự.") ;
            $is_validate=false;
        }
    }
}

function check_pass( $password,$checkPass){
    global $error;
    global $is_validate;
    if($password != $checkPass){
        array_push($error,"Mật khẩu nhập lại phải giống mật khẩu") ;
        $is_validate=false;
    }
}



