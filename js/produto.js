
var tamanhoEntrada = document.querySelector('[name = tamanho]')
var tamanhoSaida = document.querySelector('[name = valortamanho]')

function mostrarTamanho(){
	tamanhoSaida.value = tamanhoEntrada.value
}

tamanhoEntrada.oninput = mostrarTamanho;
