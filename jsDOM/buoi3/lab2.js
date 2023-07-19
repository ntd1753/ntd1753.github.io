const jobCard = document.querySelector(".job-card");
let jbCopy=jobCard.cloneNode(true);
let jbCopy2=jobCard.cloneNode(true);
let jbCopy3=jobCard.cloneNode(true);
const jobs= document.querySelector(".jobs");
jobs.insertAdjacentElement("beforeEnd",jbCopy);
jobs.insertAdjacentElement("beforeEnd",jbCopy2);
jobs.insertAdjacentElement("beforeEnd",jbCopy3);
const card=document.querySelectorAll(".job-card h3");
const card2=document.querySelectorAll(".job-card");
card[1].innerText="JavaScript Developer";
card[2].innerText="Java Developer";
card[3].innerText="Python Developer";
const cv=document.querySelector("#jobs-listed span");
cv.innerText=card.length;
let input = document.getElementById("search");
input.addEventListener(
    'keypress', function(event) {
        if(event.keyCode == 13){
                card.forEach(
                    x => {
                        let c=input.value.toLowerCase();
                     let a =   x.textContent.toLowerCase().includes(c);
                    if(a){
                        x.parentNode.style.display="block";
                    }else x.parentNode.style.display="none";
                    }
                )
        }
    }
)
const btn=document.querySelector("#show-all");
btn.addEventListener(
    'click', function(){
        input.value='';
        card.forEach(
            x =>{
                x.parentNode.style.display="block";
            }
        )
    }
)