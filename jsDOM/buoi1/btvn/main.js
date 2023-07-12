//bai 1
const para = document.createElement("p");
 para.setAttribute("id", "text" );
 para.style.color="#777";
 para.style.fontSize="2em";
 para.innerHTML = "Tôi có thể làm <em> bất cứ điều gì </em> tôi muốn với JavaScript.";
 document.body.prepend(para);
 //bai 2
const ul1=document.querySelectorAll("p+ ul li");
ul1.forEach(x => {
    x.style.color="blue";
})
//bai 3
const list = document.getElementById("list");
const li=document.createElement("li");
list.innerHTML+="<li>Item 8</li><li>Item 9</li><li>Item 10</li>"

const li1=document.querySelector("#list li");
li1.style.color="red";
const li3=document.querySelectorAll("#list li");
li3[2].style.backgroundColor="blue"
list.removeChild(li3[3]);
li3[2].insertAdjacentHTML("afterend","<li> abcde </li.");