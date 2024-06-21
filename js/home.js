document.getElementById ("mais").style.display = "none";
document.getElementById ("mais2").style.display = "none";

function TrocaEstado(el){

	var display = document.getElementById(el).style.display;
	if(display == "none"){
		document.getElementById(el).style.display = 'inline-block';	
		document.getElementById("bntMais").innerHTML = "Mostrar menos";
	} else {
		document.getElementById(el).style.display = 'none';
		document.getElementById("bntMais").innerHTML = "Mostrar mais";
	}
}

function TrocarEstado2(el){
	var display = document.getElementById(el).style.display;
	
	if(display == "none"){
		document.getElementById(el).style.display = 'inline-block';	
		document.getElementById("bntMais2").innerHTML = "Mostrar menos";
	} else {
		document.getElementById(el).style.display = 'none';
		document.getElementById("bntMais2").innerHTML = "Mostrar mais";
	}
}