
const toggleBtn = document.querySelector('.toggle-button');
const toggleBtnIcon = document.querySelector('.toggle-button i');
const dropDown =document.querySelector('.drop-down-menu');


toggleBtn.addEventListener("click",()=>{
    dropDown.classList.toggle("open");
    const isopen = dropDown.classList.contains("open"); 
    toggleBtnIcon.classList = isopen ? 'fa-solid fa-xmark': 'fa-solid fa-bars';   

});

// toggleBtn.onclick = function (){
//     dropDown.classList.toogle("open");
//     const isopen = dropDown.classList.contains("open");

//     toggleBtnIcon.classList = isopen ? 'fa-solid fa-xmark': 'fa-solid fa-bars';
// }