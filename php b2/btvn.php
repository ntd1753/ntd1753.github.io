<?php
//B1

function reverseString($str)
{
    $length = strlen($str);
    $reversed = '';

    // Duyệt chuỗi theo chiều ngược lại và thêm từng ký tự vào chuỗi đảo ngược
    for ($i = $length - 1; $i >= 0; $i--) {
        $reversed .= $str[$i];
    }

    return $reversed;
}

// Sử dụng
$input = "Hello World";
$result = reverseString($input);
echo $result ."<br>"; // Kết quả: "dlroW olleH"

//B2
function countWords($str) {

    $str = trim($str);

    if (empty($str)) {
        return 0;
    }
    $words = explode(" ", $str);
    $words = array_filter($words, function($word) {
        return !empty($word);
    });
    $wordCount = count($words);

    return $wordCount;
}

// Sử dụng
$input = "This is a sample string";
$result = countWords($input);
echo $result . "<br>"; // Kết quả: 5


//b3


function removeDuplicates($arr)
{
    $result = [];
    $count = count($arr);

    for ($i = 0; $i < $count; $i++) {
        // kiểm tra ptu thứ i có nằm rong mảng result không
        if (!in_array($arr[$i], $result)) {
            $result[] = $arr[$i];
        }
    }

    return $result;
}

// Sử dụng
$input = [1, 2, 2, 3, 4, 4, 5];
$result = removeDuplicates($input);
print_r($result); // Kết quả: [1, 2, 3, 4, 5]
echo  "<br>";
//b4


function isAscendingArray($arr)
{
    $count = count($arr);
    if ($count <= 1) {
        return true;
    }

    for ($i = 1; $i < $count; $i++) {
        if ($arr[$i] <= $arr[$i - 1]) {
            return false;
        }
    }
    return true;
}

// Sử dụng
$input = [1, 3, 5, 7, 9];
$result = isAscendingArray($input);
var_dump($result); // Kết quả: true
//b5

function reverseWordsInString($str)
{

    $words = explode(" ", $str);

    foreach ($words as &$word) {
        $word = strrev($word);
    }

    $result = implode(" ", $words);

    return $result;
}

// Sử dụng
$input = "Hello World";
$result = reverseWordsInString($input);
echo "<br>".$result; // Kết quả: "olleH dlroW"
echo "<br>";

//b6


function findSecondLargest($arr)
{
    $firstLargest = PHP_INT_MIN;
    $secondLargest = PHP_INT_MIN;

    foreach ($arr as $element) {
        if ($element > $firstLargest) {
            $secondLargest = $firstLargest;
            $firstLargest = $element;
        } elseif ($element > $secondLargest && $element !== $firstLargest) {
            $secondLargest = $element;
        }
    }

    // Kiểm tra nếu không tìm thấy phần tử lớn thứ hai
    if ($secondLargest === PHP_INT_MIN) {
        return -1;
    }

    return $secondLargest;
}

// Sử dụng
$input = [5, 2, 9, 1, 7, 3];
$result = findSecondLargest($input);
echo $result . "<br>"; // Kết quả: 7


//b7
function findPairsWithSum($arr, $sum)
{
    $pairs = [];
    $numCount = count($arr);

    for ($i = 0; $i < $numCount; $i++) {
        for ($j = $i + 1; $j < $numCount; $j++) {
            if ($arr[$i] + $arr[$j] === $sum) {
                // Nếu tổng của cặp số này bằng $sum, thêm cặp số vào mảng kết quả
                $pairs[] = [$arr[$i], $arr[$j]];
            }
        }
    }

    return $pairs;
}

// Sử dụng
$input = [2, 4, 3, 5, 6, 1, 7];
$targetSum = 7;
$result = findPairsWithSum($input, $targetSum);
print_r($result);

//b8

function findMostFrequentElement($arr)
{
    //mảng số lần xuất hiện
    $elementCount = array_count_values($arr);
    // Tìm giá trị lớn nhất trong mảng đếm số lần xuất hiện
    $maxCount = max($elementCount);
    // Tìm các phần tử có số lần xuất hiện bằng $maxCount
    $mostFrequentElements = [];
    foreach ($elementCount as $element => $count) {
        if ($count === $maxCount) {
            $mostFrequentElements[] = $element;
        }
    }

    return $mostFrequentElements[0];
}
// Sử dụng
$input = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
$result = findMostFrequentElement($input);
echo "<br>".$result; // Kết quả: 4






