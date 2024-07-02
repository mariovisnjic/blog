class FooterComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'closed' });
        const footer = document.createElement('footer');
        const year = new Date().getFullYear();

        footer.innerHTML = `&copy; ${year} byte-sized.fun. All rights reserved.`;

        const style = document.createElement('style');
        style.textContent = `
         :host{margin-top: auto;}
      footer {
        padding: 25px;
        text-align: center;
       
      }
    `;

        shadowRoot.appendChild(footer);
        shadowRoot.appendChild(style);
    }
}

customElements.define('footer-component', FooterComponent);
