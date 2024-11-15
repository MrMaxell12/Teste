let numero = parseFloat(prompt("Descobrir Fatorial de..."));
let resultado = fatorial(numero);
console.log(`O fatorial de ${numero} é ${resultado}`);


function fatorial(numero) {
    let resultado = 1;
    for (let i = 1; i <= numero; i++) {
        resultado *= i;
    }
    return resultado;
}

