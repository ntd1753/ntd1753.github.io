//Bài 1
//for loop
function repeatString(string, numRepeat, join_character){
    let ans = "";
    for(i=0;i<numRepeat;i++)
    {
        ans += string;
        if(i<numRepeat-1) ans +=  join_character;
    }
    return ans;
}

//while loop
function repeatString_While(string, numRepeat, join_character){
    let ans = "";
    let i=0;
    while(i<numRepeat)
    {
        ans += string;
        if(i<numRepeat-1) ans +=  join_character;
        i++;
    }
    return ans;
}

//bài 2
function calculateSum_For(startNum, endNum, divideNum){
    let sum = 0;  
    for(i=startNum;i<=endNum;i++){
        if(i%divideNum===0) sum+=i;
    }
    return sum;
}

  //while loop

function calculateSum_While(startNum, endNum, divideNum){
    let sum = 0; 
    let i=startNum; 
    while(i<=endNum){
        if(i%divideNum===0) sum+=i;
        i++;
    }
    return sum;
}

//bài 3
function calculateSphericalVolume(r){
    let volume = r*r*r*0.75*3.14;  // The tich
    return volume;
  }


//bài 4
function calculateSum_For(Num1, Num2){
    let sum = 0;  
    if (Num1>Num2)  [Num1, Num2] = [Num2, Num1];
    for(i=Num1+1;i<Num2;i++){
        sum+=i;
    }

    return sum;
  }
  console.log(calculateSum_For(8,3));

  //while loop
function calculateSum_While(Num1, Num2){
    let sum = 0;  
    if (Num1>Num2)  [Num1, Num2] = [Num2, Num1];
    let i=Num1+1;
    while(i<Num2){
        sum += i;
        i++;
    }
    return sum;
  }
  console.log(calculateSum_While(8,3));

//bài 5
function isPrime(num) {
    if (num <= 1) {
      return false; // Số nhỏ hơn hoặc bằng 1 không phải là số nguyên tố
    }
    // Kiểm tra từ 2 đến căn bậc hai của số, nếu số chia hết cho một số trong khoảng đó thì không phải là số nguyên tố
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true; // Nếu không chia hết cho số nào trong khoảng từ 2 đến căn bậc hai của số, thì là số nguyên tố
  }

//bài 6
function calculateSumPrimeNumber_For(startNum, endNum){
    let sum = 0;
    for(i=startNum;i<=endNum;i++){
        if(isPrime(i)) sum+=i;
    }
    return sum;
  }
  console.log(calculateSumPrimeNumber_For(0,8));
  //while loop
  function calculateSumPrimeNumber_While(startNum, endNum){
    let sum = 0;
    let i= startNum;
    while(i<=endNum){
        if(isPrime(i)) sum+=i;
        i++;
    }
    return sum;
  }
  console.log(calculateSumPrimeNumber_While(0,8));
//baì 7
  function sumDivide_For(num){
    let sum = 0;
    for(i=1;i<=num;i++){
        if(num%i===0) sum+=i;
    }
    return sum;
  }
  c
  //while loop
  function sumDivide_While(num){
    let sum = 0;
    let i=1;
    while(i<=num){
        if(num%i===0) sum+=i;
        i++;
    }
    return sum;
  }

