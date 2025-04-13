
function adicionarNoVisor(valor) {
    const visor = document.querySelector("#visor");
    visor.value += valor
}

function calcular(){
    document.getElementById('visor').value = eval(document.getElementById('visor').value)
}


function limparVisor(){
    document.getElementById('visor').value = ""

}
