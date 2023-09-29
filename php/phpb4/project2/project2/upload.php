<?php
session_start();
require_once __DIR__ . '/lib/flash.php';
require_once __DIR__ . '/lib/functions.php';

// 1. Cấu hình các định dạng file cho upload
const ALLOWED_FILES = [
    'image/png' => 'png',
    'image/jpeg' => 'jpg'
    // viết thêm code
];
// 2.Cấu hình dung lượng file lớn nhất được upload
const MAX_SIZE = 5 * 1024 * 1024; //  5MB
// 3. Cấu hình thư mục upload ảnh
const UPLOAD_DIR = __DIR__ . '/uploads/';

// 4. Nhạn dữ liệu từ  form
$is_post_request = strtolower($_SERVER['REQUEST_METHOD']) === 'post';
$has_file = isset($_FILES['file']);


// 5. Kiểm tra file có tồn tại không, loại method
// Viết code
if(!$has_file || !$is_post_request){
    redirect_with_message("file không tồn tại",FLASH_ERROR);
}
// 6. Kiểm tra file
$status = $_FILES['file']['error'];
$filename = $_FILES['file']['name'];
$tmp = $_FILES['file']['tmp_name'];


// 6.1 Kiểm tra file upload có thành công không
// Viết code
if ($status !== UPLOAD_ERR_OK){
    redirect_with_message(get_message($status));
}
// 6.2 Kiểm tra dung lượng file
// Viết code

$file_size=filesize($tmp);
if ($file_size>MAX_SIZE){
    redirect_with_message("file quá dung lượng", FLASH_ERROR);
}
// 6.3 Kiểm tra loại file upload
// Viết code
$mime_type = get_mime_type($tmp);
if(!in_array($mime_type,array_keys((ALLOWED_FILES)))){
    redirect_with_message("không đúng định dạng",FLASH_ERROR);
}
// 7. Chuyển file từ folder tạm sang folder lưu chính
// Viết code
$upload_file = pathinfo($filename,PATHINFO_FILENAME).".".ALLOWED_FILES[$mime_type];
$file_path= UPLOAD_DIR.$upload_file;
$suscess= move_uploaded_file($tmp, $file_path);

// 8. Hoàn thành điều hướng về index.php
echo $suscess;
header("Location: index.php");