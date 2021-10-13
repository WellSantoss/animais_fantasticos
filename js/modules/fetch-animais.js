import AnimaNumeros from "./numeros.js";

export default function fetchAnimais(url, target) {
  function createAnimal(animal) {
    const div = document.createElement("div");

    div.classList.add("numero-animal");
    div.innerHTML = `<h3>${animal.especie}</h3> <span data-numero>${animal.total}</span>`;

    return div;
  }

  const numerosGrid = document.querySelector(target);

  function preencheAnimais(animal) {
    const divAnimal = createAnimal(animal);
    numerosGrid.appendChild(divAnimal);
  }

  function animaAnimaisNumeros() {
    const animaNumeros = new AnimaNumeros(
      "[data-numero]",
      "section.numeros",
      "ativo"
    );
    animaNumeros.init();
  }

  async function getAnimais() {
    try {
      const animaisReponse = await fetch(url);
      const animaisJSON = await animaisReponse.json();

      animaisJSON.forEach((animal) => preencheAnimais(animal));
      animaAnimaisNumeros();
    } catch (error) {
      console.log(Error(error));
    }
  }

  return getAnimais();
}
