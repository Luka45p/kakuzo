const cansel = document.getElementById("cansel");
const aside = document.getElementById("aside");
const menu = document.getElementById("menu");
            // მენიუს დასაკეცი
cansel.addEventListener("click", () =>{
    aside.style.display = 'none'
});
            // მენიუს გასახსნელი
menu.addEventListener("click", ()=>{
    aside.style.display = "flex"
});