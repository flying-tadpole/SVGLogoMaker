function Shapes(fill) {
    this.fill = fill;
};

function Circle(fill) {
    Shapes.call(this, fill);
    return (`<circle cx='150' cy='100' r='80' fill='${this.fill}'></circle>`)
}

function Triangle(fill) {
    Shapes.call(this, fill);
    return (`<polygon points="50,15 100,100 0,100" fill='${this.fill}'></polygon>`) 
}

function Square(fill) {
    Shapes.call(this, fill);
    return (`<rect x='0' y='100' width='30' height='30' fill='${this.fill}'></rect>`) 
}