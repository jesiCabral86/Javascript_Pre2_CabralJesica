//Creamos el CARRITO
//Variables global
const carrito = [];
//Creamos la clase molde para los productos
class Producto{
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }
}
//Elementos
function agregarAlCarrito() {
    let Producto = prompt("¿Que producto desea agregar al carrito?");
    if(Producto == this.nombre);
    carrito.push (Producto);
    console.log(Producto);
}

//Creamos la funcion para ver los productos en el carrito
function cuantosProductosTengo(){
    alert("Tenes " + carrito.length + " productos en el carrito.");
    (carrito.join (","));
}
//function listaDeProductos(){
//    alert (carrito.join(" , "));
//}

//Creamos la funcion para quitar los productos en el carrito
function quitarProducto(){
    let Producto = prompt ("¿Que producto desea quitar del carrito?");
    if (carrito.includes (this.nombre)){
        let indice = carrito.indexOf(Producto);
        carrito.splice (indice,1);
        alert("El producto " + this.nombre + "fue quitado del carrito");
    }else{
        alert("Ese producto no esta en el carrito.");
    }
}

//Productos
const silla1 = new Producto ("Silla Butterfly", 6000);
const silla2 = new Producto ("Silla Ant", 5000);
const silla3 = new Producto ("Silla Cesca", 6000);
const silla4 = new Producto ("Silla Eames", 5000);
const silla5 = new Producto ("Silla Plegable", 6000);
const silla6 = new Producto ("Silla Wiggle", 5000);
const silla7 = new Producto ("Silla Hill House", 6000);
const silla8 = new Producto ("Silla Aluminium", 5000);