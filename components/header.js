class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'open' });

        const headerWrapper = document.createElement('div');
        headerWrapper.classList.add('sketchy-border');

        const header = document.createElement('header');
        const nav = document.createElement('nav');

        const pathPrefix = this.getAttribute('path-prefix') || './';

        const links = [
            { href: `${pathPrefix}index.html`, text: 'Home' },
            { href: `${pathPrefix}blog.html`, text: 'Blog' },
            { href: `${pathPrefix}projects.html`, text: 'Projects' },
            { href: 'https://github.com/mariovisnjic', text: '<small>🔗</small>GitHub', target: '_blank' },
            { href: 'https://www.linkedin.com/in/mario-visnjic', text: '<small>🔗</small>LinkedIn', target: '_blank' }
        ];

        const normalizePath = (path) => path.replace(/\/$/, '').replace(/\/index\.html$/, '');

        links.forEach(linkInfo => {
            const link = document.createElement('a');
            link.href = linkInfo.href;
            link.innerHTML = linkInfo.text;
            if (linkInfo.target) {
                link.target = linkInfo.target;
            }
            if (normalizePath(window.location.pathname) === normalizePath(new URL(link.href, window.location.origin).pathname)) {
                link.classList.add('active');
            }
            if (window.location.pathname.includes('/blog') && linkInfo.href.includes('/blog.html')) {
                link.classList.add('active');
            }
            if (window.location.pathname.includes('/projects') && linkInfo.href.includes('/projects.html')) {
                link.classList.add('active');
            }
            nav.appendChild(link);
        });

        const link = document.createElement('link');
        link.setAttribute('rel', 'stylesheet');
        link.setAttribute('href', `${pathPrefix}style.css`);

        header.appendChild(nav);
        header.appendChild(link);

        const style = document.createElement('style');
        style.textContent = `
            header {
                margin: 0 0 2em;
                background: var(--color-white);
                padding: 8px 16px;
            }
            h2 {
                margin: 0.5em 0;
            }
        `;

        shadowRoot.appendChild(header);
        shadowRoot.appendChild(style);
    }
}

// Define the custom element
customElements.define('header-component', Header);
