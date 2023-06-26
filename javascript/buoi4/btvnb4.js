//lab1
function checkStringExist(string, sub_string) {
    let stringLength = string.length;
    let subStringLength = sub_string.length;
    if (subStringLength === 0) {
      return true; // Nếu chuỗi con rỗng, luôn coi như nằm trong chuỗi ban đầu
    }
    if (subStringLength > stringLength) {
      return false; // Nếu chuỗi con dài hơn chuỗi ban đầu, không thể nằm trong
    }
    for (let i = 0; i <= stringLength - subStringLength; i++) {
      let j;
      for (j = 0; j < subStringLength; j++) {
        if (string[i + j] !== sub_string[j]) {
          break; // Nếu có ký tự khác nhau, thoát khỏi vòng lặp
        }
      }
      if (j === subStringLength) {
        return true; // Nếu đã duyệt qua hết chuỗi con mà không gặp ký tự khác nhau, trả về true
      }
    }
    return false; // Nếu không tìm thấy chuỗi con trong chuỗi ban đầu, trả về false
  }

  console.log(checkStringExist("i love you", "yoe"));

  //lab2
  function shortenString(string,num_character,appendStr) {
    if (string.length <= num_character) {
      return string;
    }
    
    let shortenedString = string.substring(0, num_character) + appendStr;
    return shortenedString;
  }
  console.log(shortenString("Xin chào các bạn", 8, "…"));
  console.log(shortenString("Xin chào", 8, "…"));
  //lab3
  function isSymmetricString(string) {
    let processStr="";
    let space= " ";
    for(let i=0;i<string.length;i++){
        if(string[i] === space) continue;
        processStr+=string[i];
    }
    processStr=processStr.toLowerCase();
    for (var i = 0; i < Math.floor(processStr.length / 2); i++) {
      if (processStr[i] !== processStr[processStr.length - 1 - i]) {
        return false;
      }
    }

    return true;
  }

console.log(isSymmetricString("Racecar"));
console.log(isSymmetricString("Hello World"));  

//lab 4
  function sortDigits(number) {
    // Chuyển đổi số thành chuỗi
     number = number.toString();
    let digits= [];
    let count = 0;
    for(i=0;i<number.length;i++){
        if(number[i]==0) {
            count++;
            continue;}
        digits[i]=number[i];
    }
    digits=digits.sort();
    let newNum="";
    let digitsLength;
    if(count>0){
        digitsLength=digits.length-count+1;
    } else digitsLength=digits.length;

    for(i=0;i<digitsLength;i++){
        if(i==1){
            for(j=0;j<count;j++){
                newNum+='0';
            }
            newNum+=digits[i];
        } else
       newNum+=digits[i];
    }

   return newNum;
  }
  
  console.log(sortDigits(53751)); 
  console.log(sortDigits(14350)); 
  console.log(sortDigits(203950)); 

  
//lab5
function convertToSnakeCase(string1) {
    // Chuyển đổi chuỗi thành viết thường
    string1 = string1.toLowerCase();
    let snakeCaseString="";
    for(let i=0;i<string1.length;i++){
        if(string1[i]==' ')
        snakeCaseString +='_';
        snakeCaseString += string1[i];
    }
  

    return snakeCaseString;
}

  let inputString = "HELLO world";
console.log(convertToSnakeCase(inputString)); 

inputString = "Xin Chào Các BẠN";
console.log(convertToSnakeCase(inputString)); 
  
