let carrinho = document.querySelector(".carrinho");
document.querySelector("#cart").onclick = () => {
    carrinho.classList.toggle("active");

    login.classList.remove("active");

}

let login = document.querySelector(".login-form");
document.querySelector("#login").onclick = () => {
    login.classList.toggle("active");

    carrinho.classList.remove("active");
}

window.onscroll = () => {
    carrinho.classList.remove("active");
    
    login.classList.remove("active");
}

const swiper = new Swiper(".home-slider", {

    autoplay:{
        delay:2500,
        disableOnInteraction: false,
    },
    gapCursor: true,
    loop: true,
    centeredSlides: true,
    navigation: {
        nextE1: '.swiper-button-next',
        prevE1: '.swiper-button-prev',
    },
})