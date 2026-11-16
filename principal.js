
import { aleatorio, nome } from './sorteio.js';
import { perguntas } from './questionario.js';

// ELEMENTOS DO HTML

const telaInicial = document.querySelector(".tela-inicial");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const caixaPausa = document.querySelector(".caixa-pausa");

const textoResultado = document.querySelector(".texto-resultado");
const tituloResultado = document.querySelector(".titulo-resultado");

const tituloPausa = document.querySelector(".titulo-pausa");
const textoPausa = document.querySelector(".texto-pausa");

const botaoIniciar = document.querySelector(".iniciar-btn");
const botaoJogarNovamente = document.querySelector(".novamente-btn");
const botaoContinuar = document.querySelector(".continuar-btn");

// VERIFICAÇÃO DOS ELEMENTOS

const elementos = [
    telaInicial,
    caixaPerguntas,
    caixaAlternativas,
    caixaResultado,
    caixaPausa,
    textoResultado,
    tituloResultado,
    tituloPausa,
    textoPausa,
    botaoIniciar,
    botaoJogarNovamente,
    botaoContinuar
];

if (elementos.some(elemento => elemento === null)) {
    throw new Error("Erro: algum elemento do HTML não foi encontrado.");
}

// ESTADO DA PARTIDA

let atual = 0;
let historiaFinal = "";
let faseDaPartida = "inicio";

// EVENTOS

botaoIniciar.addEventListener("click", iniciaJogo);
botaoJogarNovamente.addEventListener("click", reiniciaJogo);
botaoContinuar.addEventListener("click", continuarPausa);

// INICIAR JOGO

function iniciaJogo() {

    reiniciaJogo();

    faseDaPartida = "jogando";

    telaInicial.style.display = "none";

    caixaPerguntas.style.display = "block";
    caixaAlternativas.style.display = "flex";

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

    tituloPausa.textContent = "PAUSA DE ESTUDO";
    textoPausa.textContent = "";

    botaoContinuar.textContent = "Continuar";
    botaoContinuar.style.display = "inline-block";

    telaInicial.style.display = "block";

    caixaPerguntas.style.display = "none";
    caixaAlternativas.style.display = "none";
    caixaResultado.style.display = "none";
    caixaPausa.style.display = "none";
}

// MOSTRAR PERGUNTA

function mostraPergunta() {

    const perguntaAtual = perguntas[atual];

    if (!perguntaAtual) {
        console.error("Pergunta não encontrada:", atual);
        return;
    }

    caixaPerguntas.textContent =
        perguntaAtual.enunciado.replace(/você/gi, nome);

    caixaAlternativas.replaceChildren();

    // POSIÇÕES 11 E 12 — PAUSA DE ESTUDO

    if (perguntaAtual.pausa === true) {

        caixaPerguntas.style.display = "none";
        caixaAlternativas.style.display = "none";

        caixaPausa.style.display = "block";

        tituloPausa.textContent = "PAUSA DE ESTUDO";
        textoPausa.textContent = perguntaAtual.enunciado;

        botaoContinuar.textContent = "Continuar";
        botaoContinuar.style.display = "inline-block";

        return;
    }

    caixaPausa.style.display = "none";

    caixaPerguntas.style.display = "block";
    caixaAlternativas.style.display = "flex";

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

    // CONFERIR DESTINO

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

    const mudouDeCaminho = origem.caminho !== chegada.caminho;

    // CONFERIR TROCAS DE NARRATIVA

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

    atual = destino;

    mostraPergunta();
}

// MOSTRAR GAME OVER

function mostraGameOver(mensagem) {

    faseDaPartida = "gameover";

    caixaPerguntas.style.display = "none";

    caixaAlternativas.replaceChildren();
    caixaAlternativas.style.display = "none";

    caixaPausa.style.display = "none";

    caixaResultado.style.display = "block";

    tituloResultado.textContent = "GAME OVER";

    textoResultado.textContent =
        mensagem +
        "\n\nSuas escolhas nesta tentativa:\n" +
        historiaFinal;

    botaoJogarNovamente.textContent = "Recomeçar do início";
}

// CONTINUAR PAUSA

function continuarPausa() {

    if (faseDaPartida !== "jogando") {
        return;
    }

    if (!perguntas[atual] || perguntas[atual].pausa !== true) {
        return;
    }

    tituloPausa.textContent = "ETAPA CONCLUÍDA";

    textoPausa.textContent =
        "Você concluiu esta etapa da narrativa!\n\n" +
        "A conclusão definitiva da sua missão será " +
        "disponibilizada na Parte 6 do projeto.";

    botaoContinuar.style.display = "none";
}

// ESTADO INICIAL

reiniciaJogo();
