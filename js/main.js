const lula = document.querySelector('.lula');
const bolsonaro = document.querySelector('.bolsonaro');
const video = document.querySelector('.video');

document.onclick = () => {
    video.play();
    lula.classList.add('pulo');
        setTimeout(() => {
            lula.classList.remove('pulo');
        }, 1000);
};

document.addEventListener('keydown', (e) => {
    if (e.code === "Space") {
        video.play();
        lula.classList.add('pulo');
        setTimeout(() => {
            lula.classList.remove('pulo');
        }, 1000);
    }
});

const capturaPosicao = setInterval(() => {

    let posicaoBolsonaro = bolsonaro.offsetLeft; //220
    let posicaoLula = window.getComputedStyle(lula).bottom.replace('px', '');

    if (posicaoBolsonaro <= 220 && posicaoLula < 20 && posicaoLula < 110) {
        bolsonaro.style.animation = 'none';
        bolsonaro.style.left = `${posicaoBolsonaro}px`

        lula.style.animation = 'none';
        lula.style.bottom = `${posicaoLula}px`;
        lula.style.width = '155px';
        lula.src = './img/lula-game-over.jpeg';
    }

}, 10);
