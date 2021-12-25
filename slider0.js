let images = document.querySelectorAll(".slider-container img");
let imagesCount = images.length;
let slideNum = document.getElementById("slid-num");
let controls = document.getElementById("slider-controls");
let prev = document.getElementById("prev");
let next = document.getElementById("next");
let nums = document.querySelector(".nums");
let currentSlide = 2;

prev.addEventListener("click" , ()=>{
    if(currentSlide > 1){
        currentSlide--;
        theChecker();
    }
})

next.addEventListener("click" , ()=>{
    if(currentSlide < imagesCount){
        currentSlide++;
        theChecker();
    }
})

let ul = document.createElement("ul");
ul.setAttribute("id" , "arr");
for(let i=1; i<=imagesCount; i++){
    let li = document.createElement("li");
    li.setAttribute("data-index" , i);
    li.textContent = i;
    ul.appendChild(li);
}
nums.appendChild(ul);
let lis = document.querySelectorAll("#arr li");

function theChecker(){
    removeActive();

    slideNum.textContent= `Slide #${currentSlide} of ${imagesCount}`;
    images[currentSlide-1].classList.add("active");
    lis.forEach((li)=>{
        if(li.textContent == currentSlide){
            li.classList.add("active");
        }
    })
    if(currentSlide == 1){
        prev.classList.add("disabled");
    }else{
        prev.classList.remove("disabled");
    }
    if(currentSlide == imagesCount){
        next.classList.add("disabled");
    }else{
        next.classList.remove("disabled");
    }
}
theChecker();

function removeActive(){
    images.forEach((image)=>{
        image.classList.remove("active");
    })
    lis.forEach((li)=>{
        li.classList.remove("active");
    })
}

lis.forEach((li)=>{
    li.addEventListener("click" , ()=>{
        currentSlide = li.getAttribute("data-index")
        theChecker();
    })
})