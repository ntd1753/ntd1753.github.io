let sortStudent = (arr) => {
    return arr.sort().reverse();
}
console.log (sortStudent(["Hoa","Tuấn","Nam"]));

function randomArr(arr){
    for(i=arr.length-1;i>=0;i--){
        j=Math.floor(Math.random() * arr.length);
        [arr[i],arr[j]]=[arr[j],arr[i]];
    }
    return arr;
}
console.log(randomArr([1,2,3,4,5]));
//lab3
function symmetrick(arr1,arr2){
let arr3 =[];
let unique1= arr1.filter(x => arr2.indexOf(x)===-1);
let unique2= arr2.filter(x => arr1.indexOf(x)===-1);
arr3=arr3.concat(unique1,unique2);
 return arr3;
}
console.log(symmetrick([1,2,3],[2,3,4,5]));

//lab 4
function checkTrungNhau(arr1,arr2){
    let unique= arr1.filter(x => arr2.indexOf(x)!=-1);
    return [].concat(unique);
}

console.log(checkTrungNhau([1,2,3],[2,3,4,5]));