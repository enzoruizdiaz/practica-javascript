//POO

// *** object literal ***
const producto = {
    nombre: 'Tablet',
    precio: 500
}

// ** object constructor **

function Cliente(nombre,apellido){
    this.nombre = nombre;
    this.apellido = apellido;
  }

function Producto(nombre,precio){
  this.nombre = nombre;
  this.precio = precio;
}


//crear funciones que solo se utilizan en un objeto en especifico



const producto2 = new Producto('Monitor Curvo de 49 pulgadas',800);
const producto3 = new Producto('Laptop',300);

Producto.prototype.formatearProducto = function(){
    return`El producto${this.nombre} tiene un precio de ${this.precio}`};


console.log(producto2.formatearProducto());


