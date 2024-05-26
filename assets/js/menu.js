let carrinho = document.querySelector(".carrinho");
document.querySelector("#cart").onclick = () => {
    carrinho.classList.toggle("active");

    login.classList.remove("active");

    menuResposivo.classList.remove('active');

};

let login = document.querySelector(".login-form");
document.querySelector("#login").onclick = () => {
    login.classList.toggle("active");

    carrinho.classList.remove("active");

    menuResposivo.classList.remove('active');
}

const swiper = new Swiper('.menu-slider', {
    
    autoplay:{
        delay:2500,
        disableOnInteraction: false,
    },
    grapCursor: true,
    loop: true,
    centeredSlides: true,
    SpaceBetween: 20,
    pagination:{
        el: '.swiper-pagination',
        clickable:true,
    },
  
});

const verModalCorpo = document.querySelector(".menu-modal-container");
const verModalBox = verModalCorpo.querySelector(".menu-modal");

document.querySelectorAll(".menu .box").forEach(menu => {
    menu.onclick = () => {
        verModalCorpo.style.display = 'flex';
        let nome = menu.getAttribute('data-name');

        verModalBox.forEach(visualizar => {
            let chamada = visualizar.getAttribute('data-target');
            if(nome == chamada){
                visualizar.classList.add('active');
            };
        });
    };
});

verModalCorpo.querySelector("#fechar").onclick = () => {
    verModalCorpo.style.display = 'none';
    verModalBox.forEach(fechar => {
        fechar.classList.remove('active');
    });
};

let menuResposivo = document.querySelector('.menu-site');
document.querySelector('#menu').onclick = () => {
    menuResposivo.classList.toggle('active');

    login.classList.remove('active');

    carrinho.classList.remove('active');
};

window.onscroll = () => {
    carrinho.classList.remove("active");

    login.classList.remove("active");

    menuResposivo.classList.remove("active");
}