export default function initScrollSuave() {
  const linksInternos = document.querySelectorAll(
    '[data-menu="suave"] a[href^="#"]'
  );

  function scrollToSection(event) {
    // Previne o comportamento padrão (ir para a seção)
    event.preventDefault();

    // Atribui o valor do href do link a variavel
    const href = event.currentTarget.getAttribute("href");
    // Seleciona a seção equivalente ao valor de href
    const section = document.querySelector(href);

    // Scroola a página até a seção estar a mostra
    section.scrollIntoView({
      behavior: "smooth", // scroola suavemente
      block: "start", // Para o scroll quando o inicio da seção estiver no topo do navegador
    });

    // ------ Forma alternativa -------
    // const topo = section.offsetTop;
    // window.scrollTo({
    //    top: topo,
    //    behavior: "smooth",
    // });
  }

  // Percorre os links
  linksInternos.forEach((item) => {
    // Adiciona o evento de click chamando a função scrollToSection
    item.addEventListener("click", scrollToSection);
  });
}
