
function insereNumeroNoVisor(botao,visor) {
    visor.value += botao.value;
}

const resultadoDasOperacoes = (visor) =>{
    //Utilizando a função eva(expressão)
    visor. value = eval(visor.value);
}