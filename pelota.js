var images = ["papá-removebg-preview.png", "mama-removebg-preview.png", "niña-removebg-preview.png", "niño-removebg-preview.png", "niño2-removebg-preview.png", "abuelo-removebg-preview.png", "abuela-removebg-preview.png"];
var names = ["Juan Manuel Leon Montoya","Maria del Carmen Trinidad Guadarrama Ortiz", "Lucía Leon", "Juan Manuel Leon", "Jorge Emilio Leon", "Manuel Leon", "Mima"];
var i = 0
function update(){
i ++;
var numero_miembros = 7
if(i > numero_miembros){
i = 0;
}

var updatedImage = [images];
var updatedName = [names];
document.getElementById("miembro_de_la_familia_imagen").scr=updatedImage;
document.getElementById("miembro_de_la_familia").innerHTML=updatedName;
}