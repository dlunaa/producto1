// Bloques

/*var contador=1;
for (var i = 0; i < 9; i++){
    contador=contador+2;
    alert("cont = "+contador);
}
console.log("contador = "+contador);*/

//Fechas

var hoy=new Date();
var futuro= new Date(2022, 10, 21);
//
alert("Fecha actual "+hoy);
alert("Fecha futura: "+futuro);

//tiempo restante

var tiempoRest = futuro-hoy;
alert("Tiempo restante "+tiempoRest);
