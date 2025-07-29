
const dramas = [
{
    id: 1,
    titulo: "Crash Landing on You",
    anio: 2019,
    genero: "Romance",
    img: "./media/crashlanding.jpg"
},
{
    id: 2,
    titulo: "Goblin",
    anio: 2016,
    genero: "Fantasia",
    img: "./media/goblin.jpg"
},
{
    id: 3,
    titulo: "Itaewon Class",
    anio: 2020,
    genero: "Drama",
    img: "./media/itaewonclass.jpg"
},
{
    id: 4,
    titulo: "Weightlifting Fairy Kim Bok-joo",
    anio: 2016,
    genero: "Comedia",
    img: "./media/kimbokjoo.jpg"
}
];

let favoritos = JSON.parse(localStorage.getItem("favoritosDramas")) || [];
const contenedor = document.getElementById("dramas-container");

function mostrarDramas() {
  contenedor.innerHTML = ""; // Limpiar contenedor

dramas.forEach(drama => {
    const card = document.createElement("div");
    card.classList.add("drama-card");

    const esFavorito = favoritos.includes(drama.id);

    card.innerHTML = `
    <img src="${drama.img}" alt="${drama.titulo}" />
    <h3>${drama.titulo}</h3>
    <p>${drama.genero} - ${drama.anio}</p>
    <button class="favorite-btn ${esFavorito ? "favorito" : ""}" id="fav-${drama.id}">
        ${esFavorito ? "Quitar favorito" : "Marcar favorito"}
    </button>
    `;

    contenedor.appendChild(card);

    const btnFavorito = document.getElementById(`fav-${drama.id}`);
    btnFavorito.addEventListener("click", () => toggleFavorito(drama.id));
});
}
function toggleFavorito(id) {
if (favoritos.includes(id)) {
    favoritos = favoritos.filter(favId => favId !== id);
} else {
    favoritos.push(id);
}
localStorage.setItem("favoritosDramas", JSON.stringify(favoritos));
mostrarDramas(); 
}
mostrarDramas();
