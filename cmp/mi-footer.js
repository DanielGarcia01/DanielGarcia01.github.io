class MiFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `Copyright &copy; García Hurtado Daniel Giovanny`;
  }
}
customElements.define("mi-footer", MiFooter);
