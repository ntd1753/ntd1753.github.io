
<?php
   function sumArray($arr) {
       $sum=0;
       foreach ($arr as $value){
           $sum += $value;
       }
       return $sum;
   }

   // Gọi hàm để kiểm tra kết quả
   $array = [1, 2, 3, 4, 5];
   $result = sumArray($array);
   echo "Tổng các phần tử trong mảng là: " . $result . "<br>";

//b2

function isPrimeNumber($num)
{
    if($num <=3){
        return true;
    }else{
  for ($i=2; $i<= sqrt($num); $i++){
      if($num%$i==0){
          return false;
      }
  }
  return true;}
}
// Gọi hàm để kiểm tra kết quả
$number = 17;
if (isPrimeNumber($number)) {
    echo $number . " là số nguyên tố.";
} else {
    echo $number . " không là số nguyên tố.";
}

//b3

function findMaxValue($arr)
{
    $temp=0;
   for ($i=0;$i< count($arr);$i++){
       if($arr[$i]>=$temp){
           $temp = $arr[$i];
       }
   }
   return $temp;
}

// Gọi hàm để kiểm tra kết quả
$array = [10, 5, 8, 20, 3];
$result = findMaxValue($array);
echo "<br>". "Giá trị lớn nhất trong mảng là: " . $result;
//b4

function countOccurrences($arr, $value)
{
    $count=0;
    for ($i=0;$i< count($arr);$i++){
        if($arr[$i]===$value){
            $count++;
        }
    }
    return $count;
}

// Gọi hàm để kiểm tra kết quả
$array = [1, 2, 3, 4, 2, 5, 2];
$valueToFind = 2;
$result = countOccurrences($array, $valueToFind);
echo "<br>"."Số lần xuất hiện của " . $valueToFind . " trong mảng là: " . $result;

//b5
function reverseArray($arr)
{
    $arr1=[];
    for ($i=count($arr)-1;$i>=0 ;$i--){
        $arr1[ ]=$arr[$i];
    }
    return $arr1;
}

// Gọi hàm để kiểm tra kết quả
$array = [1, 2, 3, 4, 5];
$result = reverseArray($array);
echo "<br>". "Mảng sau khi đảo ngược là: ";
print_r($result);
//b6

function sumDivisibleBy3Or5($arr)
{
    $sum=0;
    foreach ($arr as $item){
        if($item %3===0 || $item % 5===0){
            $sum+= $item;
        }

    }
    return $sum;
}

// Gọi hàm để kiểm tra kết quả
$array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
$result = sumDivisibleBy3Or5($array);
echo "Tổng các số chia hết cho 3 hoặc 5 trong mảng là: " . $result;
//b7

function factorial($n)
{
    $factorial=1;
    if($n<=1){
        return 1;
    } else {
        for ($i=$n;$i>=1;$i--){
            $factorial *=$i;
        }
        return $factorial;
    }
}

// Gọi hàm để kiểm tra kết quả
$number = 5;
$result = factorial($number);
echo "<br>"."Giai thừa của " . $number . " là: " . $result;
//b8
function findKthLargest($arr, $k) {
    // Sắp xếp mảng theo thứ tự giảm dần
    rsort($arr);


    if ($k >= 1 && $k <= count($arr)) {
        return $arr[$k - 1];
    } else {
        return "Không tìm thấy";
    }
}

// Gọi hàm để kiểm tra kết quả
$array = [10, 5, 8, 20, 3];
$k = 2;
$result = findKthLargest($array, $k);
echo "<br>"."Phần tử lớn thứ " . $k . " trong mảng là: " . $result;


