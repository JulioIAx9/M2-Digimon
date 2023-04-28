const container = document.querySelector('.card-container');
const filterButtons = document.querySelectorAll('.filter-btn');
const searchInput = document.querySelector('.search-input');
const searchButton = document.querySelector('.search-button');

// Función para mostrar todos los digimon en la página
async function showAllDigimon() {
  try {
    const response = await fetch('https://digimon-api.vercel.app/api/digimon');
    const data = await response.json();
    container.innerHTML = '';
    data.forEach((digimon) => {
      const card = `
        <div class="card">
          <div class="card-img">
            <img src="${digimon.img}" alt="${digimon.name}" />
          </div>
          <div class="card-info">
            <h2>${digimon.name}</h2>
            <p>Level: ${digimon.level}</p>
          </div>
        </div>
      `;
      container.insertAdjacentHTML('beforeend', card);
    });
  } catch (error) {
    console.log(error);
  }
}

// Función para filtrar los digimon por nivel
async function filterByLevel(level) {
  try {
    const response = await fetch(`https://digimon-api.vercel.app/api/digimon/level/${level}`);
    const data = await response.json();
    container.innerHTML = '';
    data.forEach((digimon) => {
      const card = `
        <div class="card">
          <div class="card-img">
            <img src="${digimon.img}" alt="${digimon.name}" />
          </div>
          <div class="card-info">
            <h2>${digimon.name}</h2>
            <p>Level: ${digimon.level}</p>
          </div>
        </div>
      `;
      container.insertAdjacentHTML('beforeend', card);
    });
  } catch (error) {
    console.log(error);
  }
}
// Función para resaltar y cambiar de color el nombre del Digimon al acercar el cursor
function highlightDigimonName() {
  const digimonNames = document.querySelectorAll('.digimon-name');
  digimonNames.forEach((name) => {
    name.addEventListener('mouseover', () => {
      name.style.color = "blue";
      name.style.cursor = 'pointer';
    });
    name.addEventListener('mouseout', () => {
      name.style.color = '';
    });
  });
}
// Función para buscar un digimon por nombre
async function searchDigimon(name) {
  try {
    const response = await fetch(`https://digimon-api.vercel.app/api/digimon/name/${name}`);
    const data = await response.json();
    container.innerHTML = '';
    data.forEach((digimon) => {
      const card = `
          <div class="card">
            <div class="card-img">
              <img src="${digimon.img}" alt="${digimon.name}" />
            </div>
            <div class="card-info">
              <h2>${digimon.name}</h2>
              <p>Level: ${digimon.level}</p>
            </div>
          </div>
        `;
      container.insertAdjacentHTML('beforeend', card);
    });
  } catch (error) {
    console.log(error);
  }
}
// Agregar eventos de click a los botones de filtro
filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const level = button.dataset.level;
    filterByLevel(level);
  });
});

// Agregar evento de click al botón de búsqueda
searchButton.addEventListener('click', () => {
  const name = searchInput.value;
  searchDigimon(name);
});