<?php
// cấu hình thông tin connect vào CSDL
$host = "127.0.0.1"; // Địa chỉ máy chủ
$database = "test1"; // Tên CSDL
$username = "root";  // Tên đăng nhập vào CSDL
$password = "";    // Password đăng nhập vào CSDL

// Tạo kết nối đến CSDL với Mysqli
$connection = new mysqli($host, $username, $password, $database);

// Kiểm tra kết nối
if ($connection->connect_error) {
    die("Kết nối thất bại: " . $connection->connect_error);
}
echo "Đã kết nối thành công đến CSDL <br>";

// Câu lệnh query để tạo mới table
$query = "SELECT * FROM MyGuests";
$result = $connection -> query($query);
$row = $result -> fetch_array(MYSQLI_ASSOC);
print_r($row);
// Thực thi câu lệnh query
if ($connection->query($query) === TRUE) {
    echo "Đã tạo table thành công";
} else {

}

// Đóng kết nối
$connection->close();


