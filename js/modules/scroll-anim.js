export default function initScrollAnimation() {
  const sections = document.querySelectorAll('[data-anime="scroll"]');
  // Atribui 75% da altura do browser
  const windowMetade = window.innerHeight * 0.75;

  function animaScroll() {
    // Percorre as seções
    sections.forEach((section) => {
      // Atribui a distancia que a seção está do topo
      const sectionTop = section.getBoundingClientRect().top;
      // Atribui distancia que a seção está do topo menos 75%
      const isSectionVisible = sectionTop - windowMetade;

      // Se a distancia for menor que 0 (seção está visivel)
      if (isSectionVisible < 0) {
        // Adiciona a classe ativo a seção
        section.classList.add("ativo");
      } else if (section.classList.contains("ativo")) {
        section.classList.remove("ativo");
      }
    });
  }

  if (sections.length) {
    // Ativa a função quando entrar no site
    animaScroll();

    // Adiciona o evento de scroll ao janela do browser
    window.addEventListener("scroll", animaScroll);
  }
}
