function aplicarMarcaraParaReal(valor) {
    if(isNaN(valor)) {
        return 0;
    }
    return Number(valor).toLocaleString('pr-BR', { minimumFractionDigits: 2 })
}   

function aplicarMarcaraParaRealComPreFixo(valor) {
    if(isNaN(valor)) {
        return 0;
    }
    return Number(valor).toLocaleString('pr-BR', { style: 'currency', currency: 'BRL' });
}  

export default {
    aplicarMarcaraParaReal,
    aplicarMarcaraParaRealComPreFixo
}