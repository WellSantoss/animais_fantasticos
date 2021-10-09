export default function initTabNav() {
  const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
  const tabContent = document.querySelectorAll('[data-tab="content"] section');

  function activeTab(index) {
    // Percorre as sections e remove a classe ativo se estiver adicionada
    tabContent.forEach((section) => {
      section.classList.remove("ativo");
    });
    // Adiciona a classe ativo
    const animDirection = tabContent[index].dataset.anime;
    tabContent[index].classList.add("ativo", animDirection);
  }

  // Se tabMenu e tabContent forem true (0 retorna falso, portanto vai ser true se o length for 1 ou mais) executa o código
  if (tabMenu.length && tabContent.length) {
    // Adiciona a classe ativo ao primeiro item
    tabContent[0].classList.add("ativo");

    // Adiciona a classe ativo ao item referente ao indice passado como argumento

    // Percorre os item do menu
    tabMenu.forEach((itemMenu, index) => {
      // Para cada item adiciona o evento de click chamando a função activeTab com o indice de cada item
      itemMenu.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
}
