<?php
//b1
function multiplyByTwo($arr)
{
    $result = array_map(function($item) {
        return $item * 2;
    }, $arr);
    return $result;
}

// Sử dụng
$input = [1, 2, 3, 4, 5];
$result = multiplyByTwo($input);
print_r($result); // Kết quả: [2, 4, 6, 8, 10]
//b2

function sumArray($arr)
{
   $result=array_reduce($arr, function ($sum,$item){

       return $sum+$item;
   });
   return $result;
}

// Sử dụng
$input = [1, 2, 3, 4, 5];
$result = sumArray($input);
echo "<br>". $result; // Kết quả: 15
//b3

function filterEvenNumbers($arr)
{
    $even_numbers = array_filter($arr, function ($arr) {
        return $arr % 2 === 0;
    }
    );
    return $even_numbers;
}

// Sử dụng
$input = [1, 2, 3, 4, 5, 6];
$result = filterEvenNumbers($input);
echo  "<br>";
print_r($result); // Kết quả: [2, 4, 6]

//b4
function multiplyEvenNumbers($arr)
{
    // Viết code
    $even_numbers = array_filter($arr, function ($arr) {
        return $arr % 2 === 0;
    }
    );
    $result = array_map(function ($even_numbers){
        return $even_numbers*2;
    },$even_numbers);
    return $result;
}

// Sử dụng
$input = [1, 2, 3, 4, 5, 6];
$result = multiplyEvenNumbers($input);
echo  "<br>";
print_r($result); // Kết quả: [4, 8, 12]

//b5

function sumOddNumbers($arr)
{
    $odd_numbers = array_filter($arr, function ($arr) {
        return $arr % 2 != 0;
    }
    );
    $result = array_reduce($odd_numbers, function ($sum, $ood_numbers){
        return $sum + $ood_numbers;
    });
    return $result;
}

// Sử dụng
$input = [1, 2, 3, 4, 5, 6];
$result = sumOddNumbers($input);
echo  "<br>";
echo $result; // Kết quả: 9

//b6


function sumSquareOfEvenNumbers($arr) {

    $evenNumbers = array_filter($arr, function($item) {
        return $item % 2 == 0;
    });
    $result = array_sum(array_map(function($item) {
        return $item ** 2;
    }, $evenNumbers));

    return $result;
}

// Sử dụng
$input = [1, 2, 3, 4, 5, 6];
$result = sumSquareOfEvenNumbers($input);
echo  "<br>";
echo $result; // Kết quả: 56


