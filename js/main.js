
const productos = [{ nombre: "jabón", stock: 3}, {nombre: "perfumador", stock: 2}, {nombre: "suavizante", stock: 4}]

function comprarProducto(producto) {
    let stock = producto.stock;
while (stock > 0) {
    let comprar = prompt("¿Quieres comprar 1 " + producto.nombre + "?");
    console.log("Respuesta usuario:", comprar);

    if (comprar === "si") {
        stock = stock - 1;
        console.log("Compraste 1 " + producto.nombre + ". Quedan " + stock + " unidades");
    } else if (comprar === "no") {
        console.log("Podrías probar nuestros otros productos.");
        break;
    } else {
        console.log("Para continuar debes escribir 'si' o 'no'");
    }
    if (stock === 0) {
        console.log("Nos quedamos sin stock! Puedes volver a consultar más tarde.")
    }
}
}
for (let i = 0; i < productos.length; i++) {
    comprarProducto(productos[i]);
}