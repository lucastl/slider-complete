class Slide extends HTMLElement {
    constructor() {
        super();
        this.dom = undefined;
    }

    connectedCallback() {
        const title = this.getAttribute('title');
        const description = this.getAttribute('description');
        const bgColor = this.getAttribute('bgColor');

        this.dom = this.attachShadow({ mode: 'open' });

        var style = document.createElement('style');
        style.textContent = `
            .slide {
                height: 100%;
                box-sizing: border-box;
                margin: 0;
                width: 100vw;
                display: flex;
                justify-content: center;
                align-items: center;
                background: ${bgColor}
            }

            .content-wrap {
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: center;
            }
        `;

        var content = document.createElement('article');
        content.classList.add('slide');
        content.innerHTML = `
            <div class="content-wrap">
                <h2 class="slide-title">${title}</h2>
                <p class="slide-description">${description}</p>
            </div>
        `;

        this.dom.appendChild(style);
        this.dom.appendChild(content);
    }

}

export { Slide as default };