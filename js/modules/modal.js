export default class Modal {
  constructor(btnAbrir, btnFechar, modal) {
    this.btnAbrir = document.querySelector(btnAbrir);
    this.btnFechar = document.querySelector(btnFechar);
    this.modal = document.querySelector(modal);

    // bind para o callback fazer referencia ao objeto da classe
    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.clicaForaModal = this.clicaForaModal.bind(this);
  }

  toggleModal() {
    this.modal.classList.toggle("ativo");
  }

  eventToggleModal(e) {
    e.preventDefault();
    this.toggleModal();
  }

  clicaForaModal(e) {
    if (e.target === this.modal) {
      this.toggleModal();
    }
  }

  addModalEvents() {
    this.btnAbrir.addEventListener("click", this.eventToggleModal);
    this.btnFechar.addEventListener("click", this.eventToggleModal);
    this.modal.addEventListener("click", this.clicaForaModal);
  }

  init() {
    if (this.btnFechar && this.btnAbrir && this.modal) {
      this.addModalEvents();
    }
    return this;
  }
}
