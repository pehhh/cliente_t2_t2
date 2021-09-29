/* variables */
var valorIntroducido = document.querySelector("#valorIntroducido");
var boton = document.querySelector("#boton");
var respuestaSolucion = document.querySelector("#respuestaSolucion");
/* MATH RANDOM
function getRandom(min, max) {
    return Math.random() * (max - min) + min;
} */

var numeroSecreto = parseInt(Math.random()*(49-1)+1);
console.log(numeroSecreto);
var numeroIntroducido;
var cuenta=0;
boton.addEventListener('click',function(){
    numeroIntroducido=parseInt(valorIntroducido.value);
    console.log(typeof numeroIntroducido);
    cuenta++;
    if(isNaN(numeroIntroducido )){
        alert("no es un numero, prueba otra vez");
    }else{
        if(numeroIntroducido==numeroSecreto){
            respuestaSolucion.style.color="green";
            respuestaSolucion.style.backgroundColor="yellow";
            respuestaSolucion.textContent=cuenta+" INTENTO, ENHORABUENA, HAS ACERTADO!!"
            numeroSecreto = parseInt(Math.random()*(49-1)+1);
            console.log(numeroSecreto);
            cuenta=0;
            alert("vuelve a empezar!!")
        }else if(numeroIntroducido>numeroSecreto){
            respuestaSolucion.style.color="black";
            respuestaSolucion.style.backgroundColor="red";
            respuestaSolucion.textContent=cuenta+" INTENTO, ES MAYOR, PRUEBA OTRA VEZ!!"
        }else{
            respuestaSolucion.style.color="black";
            respuestaSolucion.style.backgroundColor="red";
            respuestaSolucion.textContent=cuenta+" INTENTO, ES MENOR, PRUEBA OTRA VEZ!!"
        }
    }
})






