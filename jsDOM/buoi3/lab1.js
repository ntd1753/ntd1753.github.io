let arr2 = [];
    const p=document.querySelector("p");
    let str1=p.textContent;
    let arr=str1.split(" ");
let count=0;
    arr.forEach(x =>{
        let a= "<span>"
        let b= "</span>"
        if(x.length>4){
            x = a + x + b;
            // console.log(x);
        }
        if(x !=' '||x!=','||x!='.'){
            count++;
        }
        if(x ==' '||x==','){
            x="🤔";
        }
        if(x=='.'||x=='-'){
            x="😲";
        }
        arr2.push(x);
    });
    let str2=arr2.join(' ');

p.innerHTML=  str2;
let choice=document.querySelectorAll("span");
choice.forEach(x =>{
    x.style.backgroundColor="yellow";
})

let fb= document.createElement("a");
fb.setAttribute("href","https://facebook.com")
fb.innerHTML="facebook"
document.body.appendChild(fb);
let countdiv =document.createElement("div");
countdiv.innerText=count;
document.body.appendChild(countdiv);