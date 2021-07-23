export default function initModal() {
  const btnAbrir = document.querySelector('[data-modal="abrir"]');
  const btnFechar = document.querySelector('[data-modal="fechar"]');
  const modal = document.querySelector('[data-modal="container"]');

  if (btnFechar && btnAbrir && modal) {
    function toggleModal(e) {
      e.preventDefault();
      modal.classList.toggle("ativo");
    }

    function clicaForaModal(e) {
      // e.target é o elemento clicado
      // this é o container modal
      if (e.target === this) {
        toggleModal(e);
      }
    }

    btnAbrir.addEventListener("click", toggleModal);

    btnFechar.addEventListener("click", toggleModal);

    modal.addEventListener("click", clicaForaModal);
  }
}
