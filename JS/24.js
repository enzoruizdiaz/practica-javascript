// for loop

/*for( let i = 0; i<10; i++){
    console.log(i);
}*/

/* for( let i = 1; i<100; i++){
    if( i%2===0){
        console.log(`El numero ${i} es par`);
    } else {
        console.log(`El numero ${i} es impar`);
    }
}; */

const carrito = [
    {nombre: 'monitor 20 Pulgadas',precio: 500},
    {nombre: 'Television 50 Pulgadas',precio: 700},
    {nombre: 'Tablet',precio: 300},
    {nombre: 'Audifonos',precio: 200},
    {nombre: 'Teclado',precio: 50},
    {nombre: 'Celular',precio: 500},
    {nombre: 'Bocinas',precio: 300},
    {nombre: 'Laptop',precio: 800},
];

for(let i=0; i<carrito.length; i++){
    console.log(carrito[i]);
}


// while loop

let i = 1;
while(i<=10){
    if( i%2===0){
        console.log(`El numero ${i} es par`);
    } else {
        console.log(`El numero ${i} es impar`);
    }

    i++;

}

// do while loop

i = 0;

do{
 console.log(i);

    i++
}while(i<10);
