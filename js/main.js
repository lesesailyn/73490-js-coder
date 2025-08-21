const productos = [
  {
    id: 1,
    nombre: "Queen of Tears OST",
    precio: 30,
    img: "../media/queenoftears.png",
    categoria: "Producto"
  },
  {
    id: 2,
    nombre: "When the Phone Rings OST",
    precio: 25,
    img: "../media/phonerings.png",
    categoria: "Producto"
  },
  {
    id: 3,
    nombre: "Goblin OST",
    precio: 35,
    img: "../media/goblin.png",
    categoria: "Producto"
  },
  {
    id: 4,
    nombre: "The Atypical Family OST",
    precio: 25,
    img: "../media/atypicalfamily.png",
    categoria: "Producto"
  }
];

function guardarCarrito(carrito) {
  localStorage.setItem("carrito", JSON.stringify(carrito));
}
function obtenerCarrito() {
  return JSON.parse(localStorage.getItem("carrito")) || [];
}

function mostrarMensaje(texto) {
  const contenedor = document.getElementById("mensaje");
  if (!contenedor) return;
  contenedor.textContent = texto;
  setTimeout(() => contenedor.textContent = "", 2000);
}

function mostrarProductos() {
  const contenedor = document.getElementById("productos-container");
  if (!contenedor) return;
  contenedor.innerHTML = "";

  productos.forEach(prod => {
    const div = document.createElement("div");
    div.classList.add("producto");

    const img = document.createElement("img");
    img.src = prod.img;
    img.alt = prod.nombre;
    img.classList.add("producto-img");

    const nombre = document.createElement("h3");
    nombre.textContent = prod.nombre;
    nombre.classList.add("producto-nombre");

    const precio = document.createElement("p");
    precio.textContent = `Precio: $${prod.precio}`;
    precio.classList.add("producto-precio");

    const boton = document.createElement("button");
    boton.textContent = "Agregar al carrito";
    boton.classList.add("btn-agregar");
    boton.addEventListener("click", () => agregarAlCarrito(prod.id));

    div.append(img, nombre, precio, boton);
    contenedor.appendChild(div);
  });
}

function agregarAlCarrito(id) {
  const carrito = obtenerCarrito();
  const producto = productos.find(p => p.id === id);

  const existe = carrito.find(item => item.id === id);
  if (existe) {
    existe.cantidad += 1;
  } else {
    carrito.push({ ...producto, cantidad: 1 });
  }

  guardarCarrito(carrito);
  mostrarCarrito();
  mostrarMensaje(`${producto.nombre} agregado al carrito`);
}
function mostrarCarrito() {
  const contenedor = document.getElementById("carrito-container");
  const totalElemento = document.getElementById("total-carrito");
  if (!contenedor || !totalElemento) return;

  const carrito = obtenerCarrito();
  contenedor.innerHTML = "";
  if (carrito.length === 0) {
    contenedor.innerHTML = "<p class='carrito-vacio'>Tu carrito está vacío</p>";
    totalElemento.textContent = "Total: $0";
    return;
  }

  let total = 0;

  carrito.forEach((prod, index) => {
    const div = document.createElement("div");
div.classList.add("carrito-item");
const contenedorProducto = document.createElement("div");
contenedorProducto.classList.add("productos-contenedor");
const img = document.createElement("img");
img.src = prod.img;
img.alt = prod.nombre;
img.classList.add("carrito-img");
const info = document.createElement("div");
info.classList.add("carrito-info");
const nombre = document.createElement("h3");
nombre.textContent = prod.nombre;
nombre.classList.add("prod-nombre");
const precio = document.createElement("p");
precio.textContent = `Precio: $${prod.precio} x ${prod.cantidad} = $${prod.precio * prod.cantidad}`;
precio.classList.add("prod-precio");
const btnEliminar = document.createElement("button");
btnEliminar.textContent = "Eliminar";
btnEliminar.classList.add("btn-eliminar");
btnEliminar.addEventListener("click", () => eliminarDelCarrito(index));

info.append(nombre, precio, btnEliminar);
contenedorProducto.append(img, info);
div.appendChild(contenedorProducto);
contenedor.appendChild(div);

total += prod.precio * prod.cantidad;
});

totalElemento.textContent = `Total: $${total}`;
}
function eliminarDelCarrito(index) {
  const carrito = obtenerCarrito();
  carrito.splice(index, 1);
  guardarCarrito(carrito);
  mostrarCarrito();
}
document.addEventListener("DOMContentLoaded", () => {
  mostrarProductos();
  mostrarCarrito();
});














// const productos = [
// {
//     id: 1,
//     nombre: "Queen of Tears OST",
//     precio: 30,
//     img: "../media/queenoftears.png",
//     categoria: "Producto"

// },
// {
//     id: 2,
//     nombre: "When the Phone Rings OST",
//     precio: 25,
//     img: "../media/phonerings.png",
//     categoria: "Producto"
// },
// {
//     id: 3,
//     nombre: "Goblin OST",
//     precio: 35,
//     img: "../media/goblin.png",
//     categoria: "Producto"
// },
// {
//     id: 4,
//     nombre: "The Atypical Family OST",
//     precio: 25,
//     img: "../media/atypicalfamily.png",
//     categoria: "Producto"
// }
// ];

// function guardarCarrito(carrito) {
//   localStorage.setItem("carrito", JSON.stringify(carrito));
// }
// function obtenerCarrito() {
//   return JSON.parse(localStorage.getItem("carrito")) || [];
// }
// function mostrarMensaje(texto){
//   const contenedor = document.getElementById("mensaje");
//   if (!contenedor) return;
//   contenedor.textContent = texto;
//   setTimeout(() => contenedor.textContent = "", 2000);
// }

// function mostrarProductos() {
//   const contenedor = document.getElementById("productos-container");
//   if (!contenedor) return;
//   contenedor.innerHTML = "";

// productos.forEach(prod => {
//     const div = document.createElement("div");
//     div.innerHTML = `
//       <img src="${prod.img}" alt="${prod.nombre}" class="producto-img" />
//       <h3 class="producto-nombre">${prod.nombre}</h3>
//       <p class="producto-precio">Precio: $${prod.precio}</p>
//       <button onclick="agregarAlCarrito(${prod.id})">Agregar al carrito</button>
//     `;
//     contenedor.appendChild(div);
//   });
// }

// function agregarAlCarrito(id) {
//   const carrito = obtenerCarrito();
//   const producto = productos.find(p => p.id === id);

//   const existe = carrito.find(item => item.id === id);
//   if (existe) {
//     existe.cantidad += 1;
//   } else {
//     carrito.push({ ...producto, cantidad: 1 });
//   }

//   guardarCarrito(carrito);
//   mostrarCarrito();
//   mostrarMensaje(`${producto.nombre} agregado al carrito`);
// }

// function mostrarCarrito() {
//   const contenedor = document.getElementById("carrito-container");
//   const totalElemento = document.getElementById("total-carrito");
//   if (!contenedor || !totalElemento) return;

//   const carrito = obtenerCarrito();
//   contenedor.innerHTML = "";

//   if (carrito.length === 0) {
//     contenedor.innerHTML = "<p>Tu carrito está vacío</p>";
//     totalElemento.textContent = "Total: $0";
//     return;
//   }

// let total = 0;

// carrito.forEach((prod, index) => {
//     const div = document.createElement("div");
//     div.classList.add("carrito-item");

//     div.innerHTML = `
//     <div class="productos-contenedor">
//     <img src="${prod.img}" alt="${prod.nombre}" class="carrito-img">
//     <div class="carrito-info">
//     <h3 class="prod-nombre" >${prod.nombre}</h3>
//     <p class="prod-precio">Precio: $${prod.precio} x ${prod.cantidad} = $${prod.precio * prod.cantidad}</p>
//     <button onclick="eliminarDelCarrito(${index})" id="btn-eliminar">Eliminar</button>
//     </div>
//   </div>
//   `;
//   contenedor.appendChild(div);
//     total += prod.precio * prod.cantidad;
//   });

//   totalElemento.textContent = `Total: $${total}`;
// }
// function eliminarDelCarrito(index) {
//   const carrito = obtenerCarrito();
//   carrito.splice(index, 1);
//   guardarCarrito(carrito);
//   mostrarCarrito();
// }

// document.addEventListener("DOMContentLoaded", () => {
//   mostrarProductos();
//   mostrarCarrito();
// });
