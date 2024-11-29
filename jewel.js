//hero
let newslide = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(){

    for(let i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }

    slides[newslide].style.display = 'block';

    newslide = (newslide + 1) % slides.length;
}

showSlide();
setInterval(showSlide,3000);




//hamberg menu

document.querySelector(".menu-icon").addEventListener("click", ()=>{
    const menuList = document.querySelector(".menu-list");

    if(menuList.style.display === "block"){
        menuList.style.display = "none";
    }
    else{
        menuList.style.display = "block";
    }
});




