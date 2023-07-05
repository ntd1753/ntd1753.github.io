//bài 1
//kiểm tra nếu mảng numbers có ít hơn 2 phần tử trả về thông báo "ko có số lớn thứ 2"
//hai biến max1 và max2 với giá trị ban đầu -Infinity. max1 là số lớn nhất và max2 là số lớn thứ nhì
//duyệt mảng numbers, kiểm tra nếu số hiện tại num > max1 thì gán max2 = max1, max1 = num, tức cập nhật lại số lớn thứ nhì
// Nếu Num <= max1 kiểm tra xem có > max2 không nếu lớn hơn thì cập nhật max2=num
//hết vòng lặp trả về max2

function max2Numbers(numbers) {
    if (numbers.length < 2) {
        return "Mảng không đủ số để tìm số lớn thứ nhì.";
    }

    let max1 = -Infinity;  // Số lớn nhất
    let max2 = -Infinity;  // Số lớn thứ nhì

    for (const num of numbers) {
        if (num > max1) {
            max2 = max1;
            max1 = num;
        } else if (num > max2 && num !== max1) {
            max2 = num;
        }
    }

    return max2;
}


console.log(max2Numbers([2, 1, 3, 4]));    
console.log(max2Numbers([2, 1, 4, 3, 4]));  
//bài 2
//kiểm tra nếu mảng strings là rỗng (strings.length === 0) trả về một mảng rỗng []
//khởi tạo hai biến maxLength và longestStrings. maxLength để lưu trữ độ dài lớn nhất của các chuỗi và longestStrings là một mảng lưu trữ các chuỗi có độ dài lớn nhất
//duyệt qua từng chuỗi trong mảng strings  sử dụng str.length để lấy độ dài của chuỗi hiện tại và lưu vào biến length
//kiểm tra nếu length lớn hơn maxLength cập nhật maxLength thành length mới nhất và đặt longestStrings.length = 0 để xóa các chuỗi trước đó trong mảng longestStrings để lưu trữ chuỗi mới
// nếu length bằng maxLength thêm chuỗi hiện tại vào mảng longestStrings
function getStringHasMaxLength(strings) {
    if (strings.length === 0) {
        return [];
    }

    let maxLength = 0;
    const longestStrings = [];

    for (const str of strings) {
        const length = str.length;
        if (length > maxLength) {
            maxLength = length;
            longestStrings.length = 0; 
        }
        if (length === maxLength) {
            longestStrings.push(str);
        }
    }

    return longestStrings;
}


console.log(getStringHasMaxLength(['aba', 'aa', 'ad', 'c', 'vcd']));  // Kết quả: ['aba', 'vcd']


//bài 3
// kiểm tra nếu mảng rỗng trả về ko có ptu de lấy
// sử dụng Math.floor(Math.random() * arr.length) để lấy số bất kì từ 0 => vị trí cuối của mảng
// randomIndex để lưu lại kết quả vừa lấy được
//randomElement là phần tử thứ randomIndex vừa lấy của mảng
// trả về randomElement là phần tử vừa lấy
function getRandomElement(arr) {
    if (arr.length === 0) {
      return "mảng không có phần tử để lấy";
    }
    const randomIndex = Math.floor(Math.random() * arr.length);
    const randomElement = arr[randomIndex];
    return randomElement;
  }

  console.log(getRandomElement([3, 7, 9, 11])); 

//bài 4
// tạo một mảng commonElements để lưu trữ các phần tử chung
// duyệt qua từng phần tử trong mảng arr1 bằng vòng lặp for...of
// Trong mỗi vòng lặp, sử dụng phương thức includes() của mảng arr2 để kiểm tra xem phần tử hiện tại có tồn tại trong arr2 hay không
// Phương thức includes() trả về true nếu phần tử được tìm thấy trong mảng, và false nếu không tìm thấy
// Nếu phần tử hiện tại tồn tại trong cả arr1 và arr2 (điều kiện arr2.includes(element) trả về true), thì thêm phần tử đó vào mảng commonElements bằng cách sử dụng phương thức push()
// trả về mảng commonElements chứa các phần tử xuất hiện trong cả hai mảng arr1 và arr2
function similarity(arr1, arr2) {
    const commonElements = [];

    for (const element of arr1) {
        if (arr2.includes(element)) {
            commonElements.push(element);
        }
    }

    return commonElements;
}

console.log(similarity([1, 2, 3], [1, 2, 4]));  
console.log(similarity([1, 2, 3], [3, 4, 5]));  

//bài 5
//Phân tích chuỗi thời gian đầu vào thành giờ, phút giây riêng
//Dùng split(':') để trả về mảng 3 phần tử giờ, phút giây
//Chuyển đổi về thành giây bằng cách nhân các phần tử rồi cộng vào
// Giờ*3600 + phút*60 + giây
//Cộng thêm số giây cần thêm
//Chia lấy nguyên để quy đổi lại bằng cách
//Chia lấy nguyên newTotalSeconds cho 3600 lấy giờ
//lấy dư của newTotalSeconds chia 3600 luu vào biến newMinutes
//Chia lấy nguyên newTotalSeconds cho 60 lấy phút
//lấy dư newTotalSeconds chia 60 để lấy phút
//trả về thời gian mới

function getTime(time, seconds) {
    let [hours, minutes, originalSeconds] = time.split(':').map(Number);
    let totalSeconds = hours * 3600 + minutes * 60 + originalSeconds;
    let newTotalSeconds = totalSeconds + seconds;
  
    let newHours = Math.floor(newTotalSeconds / 3600);
    let remainingSeconds = newTotalSeconds % 3600;
    let newMinutes = Math.floor(remainingSeconds / 60);
    let newSeconds = remainingSeconds % 60;
  
    let newTime = `${newHours.toString().padStart(2, '0')}:${newMinutes.toString().padStart(2, '0')}:${newSeconds.toString().padStart(2, '0')}`;
    return newTime;
  }
  
  console.log(getTime("09:20:56", 900)); 
//bài 6
//tạo mảng newUser để lưu các obj thỏa mãn
//duyệt mảng user kiểm tra điều kiện age > 25 và isStatus = true nếu đúng thì thêm vào mảng newUser
//kết thúc vòng lặp sắp xếp mảng newUser theo tuổi tăng dần
//trả về mảng newUser
users = [
    {
        name:"Nguyễn A",
        age: 40,
        isStatus: true
        
    },
    {
        name:"Nguyễn c",
        age: 45,
        isStatus: true
    },
    {
        name: "Bùi Công Sơn",
        age: 30,
        isStatus: true
    },
    {
        name: "Nguyễn Thu Hằng",
        age: 27,
        isStatus: false
    },
    {
        name: "Phạm Văn Dũng",
        age: 20,
        isStatus: false
    }
]


function checkUser(users){
    let newUser=[];
    users.forEach(x => {
        if(x.age>25&&x.isStatus == true){
            newUser.push(x);
        }
    });
    newUser.sort((p1,p2)=>p1.age-p2.age);
    return newUser;
}
console.log(checkUser(users));
//bài 7

function getCountElement(arr) {
    const countObj = {};
    // Đếm số lần xuất hiện của mỗi phần tử trong mảng
    for (const element of arr) {
        if (countObj[element]) {
            countObj[element]++;
        } else {
            countObj[element] = 1;
        }
    }

    return countObj;
}


function getCountElement(arr) {
    const countObj = {};

    // Đếm số lần xuất hiện của mỗi phần tử trong mảng
    for (const element of arr) {
        if (countObj[element]) {
            countObj[element]++;
        } else {
            countObj[element] = 1;
        }
    }

    return countObj;
}

// Kiểm tra với ví dụ
console.log(getCountElement(["one", "two", "three", "one", "one", "three"]));

console.log(getCountElement(["one", "two", "three", "one", "one", "three"]));
console.log(getCountElement(["one", "two", "three", "one", "one", "three","five","six","six"]));



