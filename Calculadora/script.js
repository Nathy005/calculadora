let expressao = '';
const visor = document.getElementById('visor');

function adicionarNumero(numero) {
    expressao += numero;
    visor.value = expressao;
}

function adicionarOperador(operador) {
    // Evita que o operador seja o primeiro caractere ou que dois operadores seguidos sejam adicionados
    if (expressao === '' || ['+', '-', '*', '/'].includes(expressao.slice(-1))) {
        return;
    }
    expressao += operador;
    visor.value = expressao;
}

function limparVisor() {
    expressao = '';
    visor.value = '';
}

function calcular() {
    try {
        // Usa a função eval() para calcular o resultado da expressão
        // IMPORTANTE: eval() pode ser perigoso se usado com dados de origem externa,
        // mas para este projeto simples de calculadora, é aceitável.
        const resultado = eval(expressao);
        visor.value = resultado;
        expressao = resultado.toString();
    } catch (error) {
        visor.value = 'Erro';
        expressao = '';
    }
}