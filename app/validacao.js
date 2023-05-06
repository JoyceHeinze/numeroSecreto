function verificaValidadeChute(chute) {

    const numero = parseInt(chute);

    if (chute.toLowerCase() == "game over" || chute.toLowerCase() == "fim de jogo") {
        document.body.innerHTML = '<h2>Fim de jogo!</h2>';
        document.body.style.backgroundColor = "#BB6464";
        botaoJogarNovamente();
        return;
    }

    if (numeroInvalido(numero)) {
        elementoChute.innerHTML += '<div>Valor inválido!</div>';
        return;
    }

    if (numeroMaiorOuMenor(numero)) {
        elementoChute.innerHTML += `
        <div>Valor inválido:Fale um número entre ${menorValor} e ${maiorValor}</div>
        `;
        return;
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
        <h2>Parabéns, você acertou!</h2>
        <h3>O número secreto era ${numeroSecreto}.</h3>
        `;
        botaoJogarNovamente();
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += '<div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>';
    } else {
        elementoChute.innerHTML += '<div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>';
    }
}

function numeroInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroMaiorOuMenor(numero) {
    return numero > maiorValor || numero < menorValor;
}

function botaoJogarNovamente() {
    return document.body.innerHTML += `<button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>`
}

document.body.addEventListener("click", e => {
    if (e.target.id == "jogar-novamente") {
        window.location.reload();
    }
})