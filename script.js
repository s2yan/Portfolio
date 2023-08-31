const openMenuBtn = document.getElementsByClassName('fa-bars')[0];
const closeMenuBtn = document.getElementsByClassName('fa-xmark')[0];
const mobileNavItem = document.getElementById('nav-items');

openMenuBtn.addEventListener("click", () =>{
    mobileNavItem.style.display = "flex";
})
closeMenuBtn.addEventListener("click", () =>{
    mobileNavItem.style.display = "none";
})
