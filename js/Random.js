class Random {
    constructor(selector) {

        this.selector = selector;
        this.DOM = null;
        this.buttonDOM = null;
        this.colorArray = ['#1000FF', '#1CFF23', '#FF497A', '#E7FF11', '#FF1C2E', '#BB47FF'];

        this.init();
    }
    init() {
        this.DOM = document.querySelector(this.selector);

        this.render();
        this.addEvents();
    }
    generateContent(color = '#ccc') {
        return `<div class="background" style="background-color:${color};">
                    <h1> Push the button to change Background</h1>
                    <button id="random" type="button">Click Here</button>
                </div>`
    };
    render(color = '#ccc') {
        let HTML = `<div class="background" style="background-color:${color};">
        <h1>Push the button to change Background</h1>
        <button id="random" type="button">Click Here</button>
        </div>`;

        this.DOM.innerHTML = HTML;
        console.log(color);
        this.buttonDOM = document.getElementById('random');
    }
    addEvents() {
        this.buttonDOM.addEventListener('click', () => {
            console.log('keiciam');
            this.randomColor();
        });
    }
    randomColor() {
        let pickedColor = '';
        const colorID = Math.floor(Math.random() * this.colorArray.length);
        pickedColor = this.colorArray[colorID];
        console.log(pickedColor);
        this.render(pickedColor);
    }
}
export { Random };