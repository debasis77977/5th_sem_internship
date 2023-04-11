burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.nav-list')
rightNav = document.querySelector('.rightNav')

burger.addEventListener('click', ()=>{
     rightNav.classList.toggle('v-class-resp');
     navList.classList.toggle('v-class-resp');
     navbar.classList.toggle('h-nav-resp');

})



var butn = document.getElementsByClassName("butn");
     var slide = document.getElementById("slide");

     butn[0].onclick = function(){
     slide.style.transform = "translate(0px)";
     }
     butn[1].onclick = function(){
     slide.style.transform = "translate(-800px)";
     }