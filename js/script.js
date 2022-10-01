'use strict'

/*
la letra a sera = ai.
la letra e sera = enter.
la letra i sera = imes.
la letra o sera = ober.
la letra u sera = ufat.
*/

function encriptar() {
	var mensaje1 = document.getElementById('mensaje_1').value;
	console.log(mensaje1);

	if (isNaN(mensaje1)) {
		document.getElementById("mensaje").style.display = "block";

		var encriptando = mensaje1.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
		console.log(encriptando);

		document.getElementById("mensaje_2").value = encriptando;
    }
}

function desencriptar() {
	var mensaje2 = document.getElementById('mensaje_1').value;
	console.log(mensaje2);

	if (isNaN(mensaje2)) {
		document.getElementById("mensaje").style.display = "block";
		
		var desencriptando = mensaje2.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
		console.log(desencriptando);


		document.getElementById("mensaje_2").value = desencriptando;
	}	

}

function copiar() {
	var mensaje3 = document.getElementById('mensaje_2');
	console.log(mensaje3);
    
    mensaje3.select();

    document.execCommand("copy");

    alert("Copiado");
}




