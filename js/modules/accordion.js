export default function initAccordion() {
  const accordionList = document.querySelectorAll(
    '[data-anime="accordion"] dt'
  );
  const activeClass = "ativo";

  function activeAccordion() {
    // Adiciona a classe ativo ao elemento selecionado
    this.classList.toggle(activeClass);
    // Adiciona a classe ativo ao elemento abaixo do elemento selecionado
    this.nextElementSibling.classList.toggle(activeClass);
  }

  // Se accordinList for true (diferente de vazio)
  if (accordionList.length) {
    // Adiciona a classe ativo ao primeiro dt e dd
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);

    // Percorre os dt
    accordionList.forEach((item) => {
      // Para cada item adicona o evento de click chamando a função activeAccordion
      item.addEventListener("click", activeAccordion);
    });
  }
}
