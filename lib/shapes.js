class Shape {
    constructor() {
        this.fill = ""
    }
    setColor(shapeColor) {
        this.fill = shapeColor
    }
}

class Circle extends Shape {
    constructor(fill)
    render() {
        return `<circle cx='150' cy='112' r='80' fill='${fill}'></circle>`
    }; 
}

// function Triangle(fill) {
//     Shape.call(this, fill, render);
//     svgText = `<polygon points="150,18 244,182 56,182" fill='${this.fill}'></polygon>`;
// }

// function Square(fill) {
//     Shape.call(this, fill, render);
//     svgText = `<rect x='75' y='37' width='150' height='150' fill='${this.fill}'></rect>`;
// }

module.exports = {Circle, Triangle, Square}
