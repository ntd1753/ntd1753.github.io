//lab1
function timSoLonNhat(a,b){
    if(a>b) return a;
    else return b;
}
console.log(timSoLonNhat(5,6));
//lab2
function checkChanLe(y){
if(y%2==0){return "số chẵn";}
else {return "số lẻ";}
}
console.log(checkChanLe(5));
//lab3
function checkChiaHet(y){
    if(y%3===0&&y%5===0) return "số trên chia hết cho cả 3 và 5";
    else return  "số trên không chia hết cho cả 3 và 5";
}
console.log(checkChiaHet(15));
//lab4
function checkTongBangNhau(a,b,c) {
let sum = a+b;
if (c===sum) return ;
else return "c không bằng tổng hai số a và b";
}
console.log(checkTongBangNhau(5,6,7));
//lab5
function check(mark){
    if(mark>=85){
        return 'A';
    } 
    else{
        if(mark>=70) return 'B';
        else{
            if(mark>=40) return 'C';
            else return 'D';
        }
    }    
    }
    console.log(check(65));
//lab6 - viết theo cách if-else bằng nhau
function checkChiaHet2(a){
    if(a%3==0){
        if(a%5==0) return "số trên chia hết cho cả 3 và 5";
        else return "Số trên không chia hết cho cả 3 và 5";
    }
    else return "Số trên không chia hết cho cả 3 và 5";
}
console.log(checkChiaHet2(12));

