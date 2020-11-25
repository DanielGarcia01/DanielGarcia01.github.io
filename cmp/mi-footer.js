class MiFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* htmlm */ 
      Copyright &copy; García Hurtado Daniel Giovanny;
  }
}
custonElements.define("mi-footer", MiFooter);
