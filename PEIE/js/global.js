$(function() {   
	$("#wrapper a").button();
	$("input").addClass('textoInput');
	$("input:submit").removeClass('textoInput');
	$(".mayuscula").keyup(function(){ this.value = this.value.toUpperCase(); }); 
	
});

/*
	FUNCIONES PARA MANDAR LLAMAR LOS CUADROS DE DIALOGO
	PARAMETROS:: titulo y contenido.
*/
function Alert(contenido,titulo){
	jAlert(contenido, titulo);
	}
function Confirm(titulo,contenido,callback){
	jConfirm(contenido,titulo,callback);
	}
function Prompt(txtDefault,Question,titulo,callback){
	jPrompt(Question,txtDefault,titulo,callback);
	}
	/*function imprimir(){
factory.printing.header = "";
factory.printing.footer = "";
factory.printing.Print(true); //manda a imprimir

}*/