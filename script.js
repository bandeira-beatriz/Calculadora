function adicionarVisor(valor){
    let visor = document.getElementById('visor')

    visor.value += valor
}

function calcular (){
    document.getElementById('visor').value = eval(document.getElementById('visor').value)
}

function apagarParcial(){
    document.getElementById('visor').value = ""
}

function apagarTotal(){
    document.getElementById('visor').value = ""

}