const hamburger = document.querySelector(".navOpen");
const sidebar = document.querySelector('.header')
console.log(sidebar.classList)
hamburger.addEventListener('click', () =>{
    if(sidebar.classList.contains("open")){
        sidebar.classList.remove('open')
        console.log(sidebar.classList)
    }
    else{
        sidebar.classList.add('open')
        console.log('hello')
        console.log(sidebar.classList)
    }
})
sidebar.addEventListener('click', () => {
    sidebar.classList.remove('open')
})

function load(){
    alert('Page Currently Unavailable')
}