const grades = [
    {name: 'John', grade: 8, sex: 'M'},
    {name: 'Sarah', grade: 12, sex: 'F'},
    {name: 'Bob', grade: 16, sex: 'M'},
    {name: 'Johnny', grade: 2, sex: 'M'},
    {name: 'Ethan', grade: 4, sex: 'M'},
    {name: 'Paula', grade: 18, sex: 'F'},
    {name: 'Donald', grade: 5, sex: 'M'},
    {name: 'Jennifer', grade: 13, sex: 'F'},
    {name: 'Courtney', grade: 15, sex: 'F'},
    {name: 'Jane', grade: 9, sex: 'F'}
   ]

// Viết function tính thứ hạng trung bình của cả lớp
function calculateAverageGrade(grades) {
    let totalGrade = 0;
    for (let i = 0; i < grades.length; i++) {
      totalGrade += grades[i].grade;
    }
    return "Thứ hạng trung bình của cả lớp: " + totalGrade / grades.length;
  }
  
  console.log(calculateAverageGrade(grades));
  
// Viết function tính thứ hạng trung bình của nam trong lớp
function calculateAverageMaleGrade(grades) {
    let totalGrade = 0;
    let maleCount = 0;
    for (let i = 0; i < grades.length; i++) {
      if (grades[i].sex === "M") {
        totalGrade += grades[i].grade;
        maleCount++;
      }
    }
    return "Thứ hạng trung bình của nam trong lớp: " + totalGrade / maleCount;
  }
  
  console.log(calculateAverageMaleGrade(grades));
  
// Viết function tính thứ hạng trung bình của Nữ trong lớp
function calculateAverageFemaleGrade(grades) {
    let totalGrade = 0;
    let femaleCount = 0;
    for (let i = 0; i < grades.length; i++) {
      if (grades[i].sex === "F") {
        totalGrade += grades[i].grade;
        femaleCount++;
      }
    }
    return "Thứ hạng trung bình của nữ trong lớp: " + totalGrade / femaleCount;
  }
  
  console.log( calculateAverageFemaleGrade(grades));
  
// Viết function tìm học viên Nam có thứ hạng cao nhất trong lớp
function findHighestMaleStudent(grades) {
    let highestGrade = -Infinity;
    let highestMaleStudent = null;
    for (let i = 0; i < grades.length; i++) {
      if (grades[i].sex === "M" && grades[i].grade > highestGrade) {
        highestGrade = grades[i].grade;
        highestMaleStudent = grades[i];
      }
    }
    return  highestMaleStudent;
  }
  console.log("Học viên nam có thứ hạng cao nhất trong lớp:");
  console.log(findHighestMaleStudent(grades));
  
// Viết function tìm học viên Nữ có thứ hạng cao nhất trong lớp
function findHighestFemaleStudent(grades) {
    let highestGrade = -Infinity;
    let highestFemaleStudent = null;
    for (let i = 0; i < grades.length; i++) {
      if (grades[i].sex === "F" && grades[i].grade > highestGrade) {
        highestGrade = grades[i].grade;
        highestFemaleStudent = grades[i];
      }
    }
    return highestFemaleStudent;
  }
  
  console.log("Học viên nữ có thứ hạng cao nhất trong lớp:");
  console.log(findHighestFemaleStudent(grades));
  
// Viết function tìm học viên Nam có thứ hạng thấp nhất trong lớp
function findLowestMaleStudent(grades) {
    let lowestGrade = Infinity;
    let lowestMaleStudent = null;
    for (let i = 0; i < grades.length; i++) {
      if (grades[i].sex === "M" && grades[i].grade < lowestGrade) {
        lowestGrade = grades[i].grade;
        lowestMaleStudent = grades[i];
      }
    }
    return lowestMaleStudent;
  }
  
  console.log("Học viên nam có thứ hạng thấp nhất trong lớp:");
  console.log(findLowestMaleStudent(grades));
  
// Viết function tìm học viên Nữ có thứ hạng thấp nhất trong lớp
function findLowestFemaleStudent(grades) {
    let lowestGrade = Infinity;
    let lowestFemaleStudent = null;
    for (let i = 0; i < grades.length; i++) {
      if (grades[i].sex === "F" && grades[i].grade < lowestGrade) {
        lowestGrade = grades[i].grade;
        lowestFemaleStudent = grades[i];
      }
    }
    return lowestFemaleStudent;
  }
  
  console.log("Học viên nữ có thứ hạng thấp nhất trong lớp:");
  console.log(findLowestFemaleStudent(grades));
  
// Viết function thứ hạng cao nhất của cả lớp
function findHighestGrade(grades) {
    let highestGrade = -Infinity;
    for (let i = 0; i < grades.length; i++) {
      if (grades[i].grade > highestGrade) {
        highestGrade = grades[i].grade;
      }
    }
    return highestGrade;
  }
  
  console.log("Thứ hạng cao nhất của cả lớp: " + findHighestGrade(grades));
  
// Viết function thứ hạng thấp nhất của cả lớp
function findLowestGrade(grades) {
    let lowestGrade = Infinity;
    for (let i = 0; i < grades.length; i++) {
      if (grades[i].grade < lowestGrade) {
        lowestGrade = grades[i].grade;
      }
    }
    return lowestGrade;
  }
  
  console.log("Thứ hạng thấp nhất của cả lớp: " + findLowestGrade(grades));
  
// Viết function lấy ra danh sách tất cả học viên Nữ trong lớp
function getFemaleStudents(grades) {
    let femaleStudents = [];
    for (let i = 0; i < grades.length; i++) {
      if (grades[i].sex === "F") {
        femaleStudents.push(grades[i]);
      }
    }
    return femaleStudents;
  }
  
  console.log("Danh sách học viên nữ trong lớp:");
  console.log(getFemaleStudents(grades));
  
// Viết function sắp xếp tên học viên theo chiều tăng dần của bảng chữ cái
function sortStudentsByName(grades) {
    grades.sort((a, b) => a.name.localeCompare(b.name));
  }
  
  sortStudentsByName(grades);
  console.log("Danh sách học viên sau khi sắp xếp tên theo chiều tăng dần:");
  console.log(grades);
  
// Viết function sắp xếp thứ hạng học viên theo chiều giảm dần
function sortStudentsByGradeDescending(grades) {
    grades.sort((a, b) => b.grade - a.grade);
  }
  
  sortStudentsByGradeDescending(grades);
  console.log("Danh sách học viên sau khi sắp xếp thứ hạng giảm dần:");
  console.log(grades);
  
// Viết function lấy ra học viên Nữ có tên bắt đầu bằng “J”
function getFemaleStudentsWithJ(grades) {
    let femaleStudentsWithJ = [];
    for (let i = 0; i < grades.length; i++) {
      if (grades[i].sex === "F" && grades[i].name.charAt(0).toLowerCase() === "j") {
        femaleStudentsWithJ.push(grades[i]);
      }
    }
    return femaleStudentsWithJ;
  }
  
  console.log("Danh sách học viên nữ có tên bắt đầu bằng 'J':");
  console.log(getFemaleStudentsWithJ(grades));
  
// Viết function lấy ra top 5 người có thứ hạng cao nhất trong lớp
function getTop5Students(grades) {
    grades.sort((a, b) => b.grade - a.grade);
    return grades.slice(0, 5);
  }
  
  console.log("Top 5 người có thứ hạng cao nhất trong lớp:");
  console.log(getTop5Students(grades));
  