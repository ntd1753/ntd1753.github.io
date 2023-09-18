

<!DOCTYPE html>
<html lang="vi">
<head>

    <title>Form Submission Result</title>
</head>
<body>
<h2>Form Submission Result</h2>
<?php
// Lấy dữ liệu từ form
$name = $_POST['name'];
$email = $_POST['email'];

// Hàm validate email
function validateEmail($email) {
    // Kiểm tra xem trường email có bỏ trống không
    if (empty($email)) {
        return "Email không được để trống.";
    }

    // Kiểm tra xem email có chứa ít nhất một ký tự '@'
    if (strpos($email, '@') === false) {
        return "Email phải chứa ít nhất một ký tự '@'.";
    }

    // Tách email thành tên và tên miền bằng cách sử dụng biểu thức chính quy
    if (!preg_match("/^([a-zA-Z0-9.-]+)@([a-zA-Z0-9.-]+)$/", $email, $matches)) {
        return "Email không hợp lệ.";
    }

    // Lấy tên và tên miền từ kết quả của biểu thức chính quy
    $name = $matches[1];
    $domain = $matches[2];

    // Kiểm tra xem tên miền có chứa ký tự đặc biệt không
    if (preg_match("/[^a-zA-Z0-9.-]/", $domain)) {
        return "Tên miền không được chứa ký tự đặc biệt, chỉ bao gồm chữ cái, chữ số, '-', hoặc '.'.";
    }

    return ""; // Hợp lệ
}
// Viết code ở đây
// Hàm validate name
function validateName($name) {
    if (empty($name)) {
        return "Tên không được để trống.";
    }
    if (!preg_match("/^[a-zA-Z0-9]{3,255}$/", $name)) {
        return "Tên chỉ được chứa chữ cái và chữ số, tối thiểu 3 kí tự tối đa 255 kí tự";
    }
    return ""; // Hợp lệ
}

// Viết code ở đây
// Validate name và email
$nameError = validateName($name);
//$emailError = validateEmail($email);

// Hiển thị kết quả
if (!empty($nameError)) {
    echo "Lỗi tên: " . $nameError;
} elseif (!empty($emailError)) {
    echo "Lỗi email: " . $emailError;
} else {
    // Dữ liệu hợp lệ, tiếp tục xử lý
    echo "Dữ liệu hợp lệ. Tên: $name, Email: $email";
}
?>
</body>
</html>
