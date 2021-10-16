/*document.write("Navegador: "+navigator.appName);
document.write("Version : "+navigator.appVersion);*/

//altura

console.log(location);

document.write("ALtura disponible :"+screen.availHeight + " ");
document.write("Altura : "+screen.height);

document.write("<br><h3>Este es un ejemplo de write</h3>");

var header= document.getElementsByTagName("h3").item(0);

header.firstChild.data = "A DvD document";

// Vuelve a la pagina anterior: history.back();