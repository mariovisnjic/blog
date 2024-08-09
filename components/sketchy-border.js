class CustomSketchyBorder extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        // Create the wrapper div
        const wrapper = document.createElement('div');
        wrapper.classList.add('sketchy-border');

        // Create the slot element
        const slot = document.createElement('slot');
        slot.classList.add('slot');
        wrapper.appendChild(slot);

        shadow.appendChild(wrapper);

        // Create the SVG element
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        wrapper.appendChild(svg);

        // Link to the stylesheet
        const pathPrefix = this.getAttribute('path-prefix') || './';
        const link = document.createElement('link');
        link.setAttribute('rel', 'stylesheet');
        link.setAttribute('href', `${pathPrefix}style.css`);
        shadow.appendChild(link);
    }

    connectedCallback() {
        // Draw the border initially and whenever the slot changes
        const slot = this.shadowRoot.querySelector('slot');
        slot.addEventListener('slotchange', () => {
            this.drawBorder();
        });
        this.drawBorder();
    }

    drawBorder() {
        const wrapper = this.shadowRoot.querySelector('.sketchy-border');
        const svg = this.shadowRoot.querySelector('svg');
        const rc = rough.svg(svg);
        svg.innerHTML = '';

        // Draw the border around the slot element
        requestAnimationFrame(() => {
            const roughness = wrapper.scrollHeight > 2000 ? 1.1 : 1.5;
            svg.appendChild(rc.rectangle(0, 0, wrapper.scrollWidth, wrapper.scrollHeight, {
                roughness,
                strokeWidth: 3,
                stroke: 'black'
            }));
        });
    }
}

customElements.define('sketchy-border', CustomSketchyBorder);
