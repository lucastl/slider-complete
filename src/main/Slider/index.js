class Slider extends HTMLElement {
    constructor() {
        super();
        this.dom = undefined;
    }

    connectedCallback() {
        const width = this.getAttribute('width');
        const height = this.getAttribute('height');
        const slidesCount = this.childElementCount;

        this.dom = this.attachShadow({ mode: 'open' });

        var style = document.createElement('style');
        style.textContent = `
            #slider {
                height: ${height}px;
                box-sizing: border-box;
                overflow: hidden;
                width: ${width}%;
            }

            #slides-wrap {
                display: flex;
                height: 100%;
                width: ${slidesCount}00%;
            }
        `;

        this.dom.innerHTML = `
                <section id="slider">
                    <div id="slides-wrap">
                        <slot></slot>
                    </div>
                </section>
            `;

        this.dom.appendChild(style);
    }




}

export { Slider as default };