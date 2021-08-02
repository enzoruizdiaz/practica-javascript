// arreglos o arrays

const numeros = [10, 20 ,30 ,40, 50];



//acceder a losvalores de un arreglo
//console.log(numeros[0]);
//console.log(numeros[1]);
//console.log(numeros[2]);
//console.log(numeros[3]);
//console.log(numeros[4]);

// conocer la extension de un arreglos

//console.log(meses.length);


/*numeros.forEach( function(numero){
    console.log(numero);
}) */

//numeros[5] = 60;
//numeros[6] = 70;
numeros.push(60,70,80); //agrega al final
numeros.unshift(-10,-20,-30);// agrega al principio


console.table(numeros);


const meses = ['enero', 'febrero','marzo','abril','mayo'];
//meses.pop();// elimina el ultimo elemento
//meses.shift();// elimina el priemr elemento

//meses.splice(2,1);
console.table(meses);

// rest operator o spread operator


const nuevoArreglo = [...meses, 'Junio'];
console.log(nuevoArreglo);


