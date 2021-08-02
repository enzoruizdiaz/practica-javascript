
// metodos arreglos

const meses = ['enero', 'febrero','marzo','abril','mayo'];

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

//forEach

meses.forEach(function(mes){
      if( mes == 'Marzo'){
          console.log('Marzo si existe');
      }
});

//includes
let resultado = meses.includes('marzo');

// some ideal para arreglo de objetos
resultado = carrito.some(function(producto){
    return producto.nombre === 'Celular'
})

//reduce
resultado = carrito.reduce(function(total,producto){
    return total + producto.precio
}, 0);



//filter

resultado = carrito.filter(function(producto){
    return producto.precio > 400
})

console.log(resultado);