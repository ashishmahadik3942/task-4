const togglebtn = document.getElementById("togglebtn");
const collapse_block = document.getElementById("collapse-block")
const nav_bar = document.getElementById("head_nav")

togglebtn.addEventListener("mousedown", ()=>{
    collapse_block.classList.toggle("collapse-block-down");
    nav_bar.classList.toggle("nav_bar_toggle");
})