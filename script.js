
let contador = 0;

// Função para aumentar o valor
function atualizarValor() {
    contador++;
    atualizarTela();
}

// Função para diminuir o valor
function diminuirValor() {
    contador--;
    atualizarTela();
}

function showSlide(contador) {
    const carouselInner = document.querySelector('.carousel-inner');
    if (contador >= totalSlides) {
        currentcontador = 0;
    } else if (contador < 0) {
        currentcontador = totalSlides - 1;
    } else {
        currentcontador = contador;
    }
    const offset = -currentcontador * 100;
    carouselInner.style.transform = `translateX(${offset}%)`;
}


function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}
