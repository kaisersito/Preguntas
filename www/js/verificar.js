/*function cosa(){
	var arreglo = [];
	var arreglo2 = [];
	for (var i = 0; i < document.formulario.cosa.length; i++) {
		if (document.formulario.cosa[i].checked) {
			arreglo.push(document.formulario.cosa[i].value);
		}
	}
	alert(arreglo);
	arreglo2 = cosadelacosa();
	
}
function cosadelacosa(){
	var arreglo = [];
	$.getJSON('http://localhost:80/respuesta.php', function(data){ 
		for (var i = 0; i < data.length; i++) {
			arreglo.push(data[i].respuesta);
			
		}
	});		
}*/
//$('input:radio[name=edad]:checked').val()
function cosa(){
	var arreglo = [];
	var arreglo2 =[];
	var x = 0, y = 0;
	$.getJSON('http://localhost:80/respuesta.php', function(data){ 
		/*for (var i = 0; i <= data.length ; i++) {
 			if ($("input:radio[name=a"+i+"]:checked").val() == data[i].respuesta) {
				y++;
				//alert($("input:radio[name=a"+i+"]:checked").val() + "   " + data[i].respuesta);
				$("p#"+data[x].id).css({"color":"black", "font-weight":"normal"});
			}else{
				//$("p#"+data[x].id).css({"color":"red", "font-weight":"bold"});
			}
		}*/
		for (var i = 0; i < data.length; i++) {
			arreglo.push(data[i].respuesta);
		}
		for (var p = 0; p < document.formulario.cosa.length; p++) {
			if (document.formulario.cosa[p].checked) {
				arreglo2.push(document.formulario.cosa[p].value);
			}
		}
		while(x < arreglo.length){
			if (arreglo[x] == arreglo2[x]) {
				y++;
				//$("p#"+data[x].id).css({"color":"black", "font-weight":"normal"});
			}else{
				$("p#"+data[x].id).css({"color":"red", "font-weight":"bold"});
			}
			x++;
		}

		alert("SU NUMERO DE ACIERTOS SON : " + y);

		/*while(x < document.formulario.cosa.length){
			if (document.formulario.cosa[x].checked){
				alert(document.formulario.cosa[x].value);
			}
			x++
		}
*/
	});		
}