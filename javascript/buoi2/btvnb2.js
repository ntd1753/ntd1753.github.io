//Bài 1 

function checkChiaHet(num1){
    if(num1%3===0){
        if(mun1%5===0) return "FizzBuzz";
        else  return "Fizz";
    }else {
        if(num1%5===0) return "Buzz"
        else return "none"; // không chia hết cho cả 3 và 5
    }
}



//Bài 2
function equation1(a,b) {
    if(a===0) {
        if(b1===0) return "phương trình có vô số nghiệm";
        else return "phương trình vô nghiệm";
    } else return "phương trình có nghiệm là x= " + (-b/a);
}

//Bài 3
function equal2(a,b,c){
    let delta=b*b-4*a*c;
    if(a===0){
        return equation1(b, c); //gọi lại hàm bài 2

    }
    else {
        if(delta>0) {
      
          return "phương trình có hai nghiệm phân biệt"
          + '\n' + "x1= " +(Math.sqrt(delta)-b)/(2*a)
          + '\n' + "x2= " +(-Math.sqrt(delta)-b)/(2*a);
        } else if(delta===0){
            return 'phương trình có nghiệm kép '
            +"x= " + (-b/(2*a));
        } else return "phương trình vô nghiệm";
    }
}
console.log(equal2(0,1,1));
console.log(equal2(4,1,1));
console.log(equal2(1,-2,1));
console.log(equal2(1,-5,4));
//bài 4
function BMI(canNang,Chieucao){
return "chi số BMI của bạn là " + (canNang/Chieucao);
}
console.log(BMI(50,60));
//Bài 5
function convertDoC(f){
return f*1.8+32;
}
console.log(convertDoC(0));
