const posts = [
    {
        url: "blog/lazy-by-default/index.html",
        image: "blog/lazy-by-default/sloth.webp",
        title: "I am lazy by default",
        time: "Jan 03 2024",
        description: "...and I picked up a useful skill because of it"
    },
    {
        url: "blog/learning-go-advent-of-code/index.html",
        image: "blog/learning-go-advent-of-code/advent.webp",
        title: "Learning Go by solving the AoC 2022",
        time: "Aug 31 2023",
        description: "Writing about my experience learning Go, accidental findings that helped me with my job and how I attempted to solve the Advent of Code 2022"
    },
    {
        url: "blog/lit-web-components/index.html",
        image: "blog/lit-web-components/logo.webp",
        title: "Building reusable web-components with Lit",
        time: "Jul 04 2023",
        description: "Web components are a great way to build reusable components. Unlike most frontend frameworks, Lit is a lightweight framework for web components."
    },
    {
        url: "blog/create-astro-blog-part-3/index.html",
        image: "blog/create-astro-blog-part-3/hero.webp",
        title: "Create Astro blog like this one.<br> Part 3: GitHub Actions CI/CD",
        time: "Apr 09 2023",
        description: "Complete guide on how to set up automated deployment of Astro blog with GitHub Actions"
    },
    {
        url: "blog/create-astro-blog-part-2/index.html",
        image: "blog/create-astro-blog-part-2/hero.webp",
        title: "Create Astro blog like this one.<br> Part 2: Linode server",
        time: "Apr 08 2023",
        description: "How to self-host a blog created with Astro by deploying it on Linode server"
    },
    {
        url: "blog/create-astro-blog-part-1/index.html",
        image: "blog/create-astro-blog-part-1/hero.webp",
        title: "Create Astro blog like this one.<br> Part 1: Astro and Git",
        time: "Apr 07 2023",
        description: "First of the series on how to create Astro blog like this one. In this part we will initiate Astro project and push it to GitHub."
    }
];

class PostList extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        this.render();
    }

    render() {
        const list = posts.map(blog => `
                    <sketchy-border>
                        <li class="blog-item">
                            <a href="${blog.url}">
                                <div class="cardImage">
                                    <img src="${blog.image}" alt="${blog.title}">
                                </div>
                                <div class="cardText">
                                    <h3>${blog.title}</h3>
                                    <time>${blog.time}</time>
                                    <br>
                                    <p>${blog.description}</p>
                                </div>
                            </a>
                        </li>
                    </sketchy-border>
                `).join('');

        this.shadowRoot.innerHTML = `
        <style>
            ul {
                list-style-type: none;
                padding: unset;
                display: grid;
                gap: 10px;
            }
        
            ul li:hover {
                box-shadow: -2px 5px 0 -1px #000;
                transition: 0.2s;
            }
        
            ul li a {
                color: black;
                text-decoration: none;
                display: flex;
                flex-direction: column;
            }
        
            ul li a:hover::after {
                transform: scaleX(0);
            }
        
            .cardText {
                padding: 10px;
                text-align: left;
                min-height: 100%;
                display: flex;
                flex-direction: column;
        
                h3 {
                    margin-bottom: 0;
                }
        
                p {
                    margin: 15px auto;
                    font-size: smaller;
                }
            }
        
            .cardImage {
                height: 100px;
                border-bottom: 2px solid var(--color-black);
            }
        
            ul li:nth-child(5n+1) a .cardText {
                background: var(--color-blue)
            }
        
            ul li:nth-child(5n+2) a .cardText {
                background: var(--color-dark-green)
            }
        
            ul li:nth-child(5n+3) a .cardText {
                background: var(--color-pink)
            }
        
            ul li:nth-child(5n+4) a .cardText {
                background: var(--color-light-green)
            }
        
            ul li:nth-child(5n+5) a .cardText {
                background: var(--color-orange)
            }
        
            ul li:nth-child(5n+6) a .cardText {
                background: var(--color-red)
            }
        
            ul li :global(time) {
                font-style: italic;
                color: #595959;
            }
        
            img {
                width: 100%;
                object-fit: cover;
                height: 100px;
            }
        
            @media (min-width: 680px) {
                ul {
                    grid-template-columns: 1fr 1fr 1fr;
                }
            }
        </style>
        <ul>
            ${list}
        </ul>
    `;
    }
}

customElements.define('post-list', PostList);
