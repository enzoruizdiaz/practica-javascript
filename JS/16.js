//funciones
//declaracion de funcion, se puiede llamar antes
sumar();
function sumar(){
    console.log(10 + 10);
}


//expresion de la funcion, no se puedew llamar antes

const sumar2 = function(){
    console.log(3+3);
}
sumar2();






//iife

(function() {
 console.log('Esto es una función');
})();