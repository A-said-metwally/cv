let vid = document.querySelectorAll("video");
let btn = document.querySelectorAll(".btn");
let close = document.querySelector("#close");
let overLay = document.querySelector(".overLay");
let fullVideo = document.querySelector("#fullVideo");


btn.forEach((b)=>{
    b.addEventListener("click" , function(){
        let vidSrc = b.previousElementSibling.getAttribute("src")
        overLay.classList.add("overLayview")
        fullVideo.setAttribute("src",vidSrc)
    })
})

close.addEventListener("click" , function(){
    overLay.classList.remove("overLayview")
})

overLay.addEventListener("click" , function(e){
    let myclass = e.target.classList[0]
    if(myclass === "overLay"){
         overLay.classList.remove("overLayview")
    }
})