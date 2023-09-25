<?php
const MESSAGES = [
    UPLOAD_ERR_OK => 'File uploaded successfully',
    UPLOAD_ERR_INI_SIZE => 'File is too big to upload',
    UPLOAD_ERR_FORM_SIZE => 'File is too big to upload',
    UPLOAD_ERR_PARTIAL => 'File was only partially uploaded',
    UPLOAD_ERR_NO_FILE => 'No file was uploaded',
    UPLOAD_ERR_NO_TMP_DIR => 'Missing a temporary folder on the server',
    UPLOAD_ERR_CANT_WRITE => 'File is failed to save to disk.',
    UPLOAD_ERR_EXTENSION => 'File is not allowed to upload to this server',
];

function get_message($key){
    return MESSAGES[$key];
}

function get_mime_type($filename)
{
    // Trả về định dạng file
    $info = finfo_open(FILEINFO_MIME_TYPE);
    if (!$info) {
        return false;
    }
    $mime_type = finfo_file($info, $filename);
    finfo_close($info);
    return $mime_type;
}

function format_filesize($bytes, $decimals = 2)
{
    // Chuyển đổi format dữ liệu từ byte sang đơn vị lớn hơn
    $units = 'BKMGTP';
    $factor = floor((strlen($bytes) - 1) / 3);
    return sprintf("%.{$decimals}f", $bytes / pow(1024, $factor)) . $units[(int)$factor];
}


function redirect_with_message($message, $type=FLASH_ERROR, $name='upload', $location='index.php')
{
    flash($name, $message, $type);
    header("Location: $location", true, 303);
    exit;
}