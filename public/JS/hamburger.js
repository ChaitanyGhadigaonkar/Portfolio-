const navigation = document.querySelector(".navigation-list");
const hamburger= document.querySelector(".hamburger");
const ham =document.querySelectorAll(".ham");
const navigation_items = document.querySelectorAll(".navigation")

hamburger.addEventListener("click",()=>{
    navigation.classList.toggle("active");
    hamburger.classList.toggle("active");

})
navigation_items.forEach(n =>{
    n.addEventListener("click",()=>{
        navigation.classList.toggle("active");
        hamburger.classList.toggle("active");
    })
})