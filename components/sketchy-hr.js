class SketchyHR extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        // Create the wrapper div
        const wrapper = document.createElement('div');
        wrapper.classList.add('sketchy-hr');

        // Create the SVG element
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        wrapper.appendChild(svg);

        shadow.appendChild(wrapper);

        // Link to the stylesheet
        const pathPrefix = this.getAttribute('path-prefix') || './';
        const link = document.createElement('link');
        link.setAttribute('rel', 'stylesheet');
        link.setAttribute('href', `${pathPrefix}style.css`);
        shadow.appendChild(link);
    }

    connectedCallback() {
        this.drawLine();
    }

    drawLine() {
        const wrapper = this.shadowRoot.querySelector('.sketchy-hr');
        const svg = this.shadowRoot.querySelector('svg');
        const rc = rough.svg(svg);
        svg.innerHTML = '';

        const width = wrapper.scrollWidth || 300; // Default width if not defined
        const height = 10; // Height of the line

        // Set the SVG size to match the line
        svg.setAttribute('width', width);
        svg.setAttribute('height', height);

        // Draw the line inside the SVG element
        svg.appendChild(rc.line(0, height / 2, width, height / 2, {
            roughness: 1.5,
            strokeWidth: 3,
            stroke: 'black'
        }));
    }
}

customElements.define('sketchy-hr', SketchyHR);
