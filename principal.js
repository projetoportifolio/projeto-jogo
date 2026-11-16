
import { aleatorio, nome } from './sorteio.js';
import { perguntas } from './questionario.js';

// ELEMENTOS DO HTML

const telaInicial = document.querySelector(".tela-inicial");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");

const textoResultado = document.querySelector(".texto-resultado");
const tituloResultado = document.querySelector(".titulo-resultado");

const botaoIniciar = document.querySelector(".iniciar-btn");
const botaoJogarNovamente = document.querySelector(".novamente-btn");

const botaoCreditos = document.querySelector(".creditos-btn");
const telaCreditos = document.querySelector(".tela-creditos");
const botaoVoltarInicio = document.querySelector(".voltar-inicio-btn");

// VERIFICAÇÃO DOS ELEMENTOS

const elementos = [
    telaInicial,
    caixaPerguntas,
    caixaAlternativas,
    caixaResultado,
    textoResultado,
    tituloResultado,
    botaoIniciar,
    botaoJogarNovamente,
    botaoCreditos,
    telaCreditos,
    botaoVoltarInicio
];

if (elementos.some(elemento => elemento === null)) {
    throw new Error(
        "Erro: algum elemento do HTML não foi encontrado. Confira as classes."
    );
}

// ESTADO DA PARTIDA

let atual = 0;
let historiaFinal = "";
let faseDaPartida = "inicio";

// EVENTOS REGISTRADOS UMA ÚNICA VEZ

botaoIniciar.addEventListener("click", iniciaJogo);

botaoJogarNovamente.addEventListener(
    "click",
    reiniciaJogo
);

botaoCreditos.addEventListener(
    "click",
    mostraCreditos
);

botaoVoltarInicio.addEventListener(
    "click",
    reiniciaJogo
);

// INICIAR JOGO

function iniciaJogo() {

    if (faseDaPartida !== "inicio") {
        return;
    }

    atual = 0;
    historiaFinal = "";

    faseDaPartida = "jogando";

    telaInicial.style.display = "none";

    caixaPerguntas.style.display = "block";
    caixaAlternativas.style.display = "flex";

    caixaResultado.style.display = "none";
    telaCreditos.style.display = "none";

    mostraPergunta();
}

// REINICIAR JOGO

function reiniciaJogo() {

    atual = 0;
    historiaFinal = "";

    faseDaPartida = "inicio";

    caixaPerguntas.textContent = "";

    caixaAlternativas.replaceChildren();

    tituloResultado.textContent = "";
    textoResultado.textContent = "";

    telaInicial.style.display = "block";

    caixaPerguntas.style.display = "none";
    caixaAlternativas.style.display = "none";

    caixaResultado.style.display = "none";
    telaCreditos.style.display = "none";

    botaoJogarNovamente.textContent = "Recomeçar do início";

    botaoJogarNovamente.style.display = "inline-block";
    botaoCreditos.style.display = "none";
}

// MOSTRAR PERGUNTA

function mostraPergunta() {

    const perguntaAtual = perguntas[atual];

    if (!perguntaAtual) {
        console.error("Pergunta não encontrada:", atual);
        return;
    }

    // VERIFICAR VITÓRIA

    if (perguntaAtual.final === "vitoria") {

        mostraVitoria(perguntaAtual.enunciado);

        return;
    }

    caixaPerguntas.textContent =
        perguntaAtual.enunciado.replace(/você/gi, nome);

    caixaAlternativas.replaceChildren();

    for (const alternativa of perguntaAtual.alternativas) {

        const botao = document.createElement("button");

        botao.type = "button";

        botao.textContent = alternativa.texto;

        botao.disabled = alternativa.disponivel === false;

        botao.addEventListener("click", function () {

            respostaSelecionada(alternativa);

        });

        caixaAlternativas.appendChild(botao);
    }
}

// PROCESSAR RESPOSTA

function respostaSelecionada(opcaoSelecionada) {

    if (faseDaPartida !== "jogando") {
        return;
    }

    if (opcaoSelecionada.disponivel === false) {
        return;
    }

    // GAME OVER

    if (opcaoSelecionada.tipo === "gameover") {

        const afirmacao = aleatorio(opcaoSelecionada.afirmacao);

        historiaFinal += afirmacao + " ";

        mostraGameOver(opcaoSelecionada.mensagem);

        return;
    }

    // VERIFICAR DESTINO

    const destino = opcaoSelecionada.proxima;

    if (
        !Number.isInteger(destino) ||
        perguntas[destino] === undefined
    ) {

        console.error("Destino inválido:", destino);

        return;
    }

    const origem = perguntas[atual];

    const chegada = perguntas[destino];

    const mudouDeCaminho =
        origem.caminho !== chegada.caminho;

    // VERIFICAR TROCA DE NARRATIVA

    if (
        atual !== 0 &&
        mudouDeCaminho &&
        opcaoSelecionada.tipo !== "trocar"
    ) {

        console.error("Mudança de caminho sem o tipo trocar.");

        return;
    }

    if (
        opcaoSelecionada.tipo === "trocar" &&
        !mudouDeCaminho
    ) {

        console.error("A troca deve levar a outro caminho.");

        return;
    }

    // REGISTRAR ESCOLHA

    const afirmacao = aleatorio(opcaoSelecionada.afirmacao);

    historiaFinal += afirmacao + " ";

    // ATUALIZAR POSIÇÃO

    atual = destino;

    mostraPergunta();
}

// TELA GAME OVER

function mostraGameOver(mensagem) {

    faseDaPartida = "gameover";

    caixaPerguntas.style.display = "none";

    caixaAlternativas.replaceChildren();

    caixaAlternativas.style.display = "none";

    caixaResultado.style.display = "block";

    tituloResultado.textContent = "GAME OVER";

    textoResultado.textContent =
        mensagem +
        "\n\nSuas escolhas nesta tentativa:\n" +
        historiaFinal;

    botaoJogarNovamente.textContent = "Recomeçar do início";

    botaoJogarNovamente.style.display = "inline-block";

    botaoCreditos.style.display = "none";

    telaCreditos.style.display = "none";
}

// TELA DE VITÓRIA

function mostraVitoria(mensagem) {

    if (
        faseDaPartida !== "jogando" ||
        perguntas[atual].final !== "vitoria"
    ) {

        return;
    }

    faseDaPartida = "vitoria";

    caixaPerguntas.style.display = "none";

    caixaAlternativas.replaceChildren();

    caixaAlternativas.style.display = "none";

    caixaResultado.style.display = "block";

    tituloResultado.textContent = "THE END";

    textoResultado.textContent =
        mensagem +
        "\n\nSeu percurso nesta partida:\n" +
        historiaFinal;

    botaoJogarNovamente.style.display = "none";

    botaoCreditos.style.display = "inline-block";

    telaCreditos.style.display = "none";
}

// MOSTRAR CRÉDITOS

function mostraCreditos() {

    if (faseDaPartida !== "vitoria") {
        return;
    }

    faseDaPartida = "creditos";

    telaInicial.style.display = "none";

    caixaPerguntas.style.display = "none";

    caixaAlternativas.style.display = "none";

    caixaResultado.style.display = "none";

    telaCreditos.style.display = "block";
}

// ESTADO INICIAL

reiniciaJogo();
