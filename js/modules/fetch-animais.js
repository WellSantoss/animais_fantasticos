import initAnimaNumeros from "./numeros.js";

export default function initFetchAnimais() {
  function createAnimal(animal) {
    const div = document.createElement("div");

    div.classList.add("numero-animal");
    div.innerHTML = `<h3>${animal.especie}</h3> <span data-numero>${animal.total}</span>`;

    return div;
  }

  async function fetchAnimais(url) {
    try {
      const animaisReponse = await fetch(url);
      const animaisJSON = await animaisReponse.json();
      const numerosGrid = document.querySelector(".numeros-grid");

      animaisJSON.forEach((animal) => {
        const divAnimal = createAnimal(animal);

        numerosGrid.appendChild(divAnimal);
      });

      initAnimaNumeros();
    } catch (error) {
      console.log(Error(error));
    }
  }

  fetchAnimais("./animaisapi.json");
}
