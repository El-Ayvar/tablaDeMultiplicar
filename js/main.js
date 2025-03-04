function tablaDeMultiplicar(numero) {
    let resultado = '';
    for (let i = 1; i <= 10; i++) {
        resultado += `${numero} x ${i} = ${numero * i}\n`;
    }
    return resultado;
}

// Ejemplo de uso
console.log(tablaDeMultiplicar(6));


function tablaDeMultiplicar(numero) {
    let resultado = '';
    let i = 1;
    while (i <= 10) {
        resultado += `${numero} x ${i} = ${numero * i}\n`;
        i++;
    }
    return resultado;
}

// Ejemplo de uso
console.log(tablaDeMultiplicar(5));
