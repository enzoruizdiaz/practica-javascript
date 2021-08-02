//"use strict"; // correr  js en modo estricto
//objeto

const producto = {
    nombreProducto : "Monitor 20 Pulgadas",
    precio : 300,
    disponible : true,
}

Object.freeze(producto);// no te perimte new elements, agregar borrar, etc

Object.seal(producto);// permite modificar las propiedades existentes


producto.imagen = 'imagen.jpg';
console.log(Object.isFrozen(producto))

console.log(producto);
