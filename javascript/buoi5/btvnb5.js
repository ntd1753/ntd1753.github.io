//lab 1
function arrMax(arr){
    let a=arr[0];
    for(i=1;i<arr.length;i++){
        if(arr[i]>=a){
            a=arr[i];
        }
    }
    return a;
}
console.log(arrMax([0,2,6,8,1,6]));

//lab 2
function arrMin(arr){
    let a=arr[0];
    for(i=1;i<arr.length;i++){
        if(arr[i]<=a){
            a=arr[i];
        }
    }
    return a;
}
console.log(arrMin([0,2,6,8,1,6]));
//lab 3
function arrDivideRemain(arr){
    for(i=1;i<arr.length;i++){
        arr[i]=arr[i]%2;
    }
    return arr
}
console.log(arrDivideRemain([0,2,6,8,1,6]));
//lab 4 , lab 5
// tổng quát cho cả lab 4, 5 
// lab 4 numRepeat=10,joinChar=''
// lab 5 numRepeat=10,joinChar='-'
function repeatString(string,numRepeat,joinChar) {
    const newArray = Array(numRepeat).fill(string);
    const copiedString = newArray.join(joinChar);
    return copiedString;
  }
  console.log(repeatString('a',10,''));
  console.log(repeatString('a',10,'-'));
  
