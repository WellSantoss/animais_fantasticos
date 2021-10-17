import outsideClick from "./outside-click.js";

export default class DropdownMenu {
  constructor(dropdown, activeClass, events) {
    this.dropdownMenus = document.querySelectorAll(dropdown);
    this.activeClass = document.querySelector(activeClass);

    if (events === undefined) {
      this.events = ["touchstart", "click"];
    } else {
      this.events = events;
    }

    this.activeDropdown = this.activeDropdown.bind(this);
  }

  activeDropdown(event) {
    event.preventDefault();
    const element = event.currentTarget;
    element.classList.add(this.activeClass);

    outsideClick(element, this.events, () => {
      element.classList.remove("active");
    });
  }

  addDropdownEvent() {
    this.dropdownMenus.forEach((menu) => {
      this.events.forEach((userEvent) => {
        menu.addEventListener(userEvent, this.activeDropdown);
      });
    });
  }

  init() {
    if (this.dropdownMenus.length) {
      this.addDropdownEvent();
    }
    return this;
  }
}
