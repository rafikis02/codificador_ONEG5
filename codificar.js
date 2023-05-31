	var resultado = document.getElementById('traducir_msj'); //limpieza textarea
	var validar = false; // booleano de vacio
	
	
	//-- ENCRIPTAR MENSAJE--
  function btn_encriptar() {
	  
  		var encritar = document.getElementById('encriptar_msj').value; // texto a encriptar
		var palabras = encritar.split(/\n/g);
		var html = "";
		var x = 0;
		var a = "a";
		var e = "e";
		var i = "i";
		var o = "o";
		var u = "u"; 
		
		  if (encritar == validar){
		   alert("No hay mensaje")
		  }
		  else
		  {
		  
				while (x < palabras.length)
				{

					if( a == palabras[x]){
					palabras[x] = "ai";
					}
					else if( e == palabras[x]){
					palabras[x] = "enter";
					}
					else if( i == palabras[x]){
					palabras[x] = "imse";
					}
					else if( o == palabras[x]){
					palabras[x] = "ober";
					}
					else if( u == palabras[x]){
					palabras[x] = "ufat";
					}
				x++;
				}
				html = palabras[x];

				resultado.value = html;
				resultado.style.display = "block";
				
			}

		//document.getElementById('encriptar_msj').value ="";	
		//alert ("Se a encriptador tu mensaje");
		
	
	}
	//-- Fin de encriptacion --

	//-- DESENCRIPTAR MENSAJE--
	function btn_desencriptar(){
  		var encritar = document.getElementById('traducir_msj').value; // texto a encriptar
	  if (encritar == validar){

			alert ("No hay mensaje para encriptar");
		}
		else{
		
		
		
		}
	}
	
	//-- COPIAR MENSAJE--
	function btn_copiar(){
  		var encritar = document.getElementById('traducir_msj').value; // texto a encriptar
		 if (encritar == validar){	
				alert ("No hay mensaje que copiar");
			}	
		else{
			var copiar = document.getElementById('traducir_msj').value;
			document.getElementById('encriptar_msj').value = copiar;
			resultado.style.display = "none";
			alert ("Se a copiado con exito tu mensaje");
			}
	}
	
	//-- LIMPIAR MENSAJE--
	function limpiar() {
	document.getElementById('encriptar_msj').value ="";
	document.getElementById('traducir_msj').value ="";
	resultado.value = "";
	resultado.style.display = "none";
	alert ("Se la limpiado correctamente el mensaje")
	}	






