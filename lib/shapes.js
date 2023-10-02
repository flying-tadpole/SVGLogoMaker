function Shapes(fill) {
    this.fill = fill;
}

function Circle(fill) {
    Shapes.call(this, fill);
    this.svgText = `<circle cx='150' cy='112' r='80' fill='${fill}'></circle>`;
    this.render = function () {
        return this.svgText
    }
}

function Triangle(fill) {
    Shapes.call(this, fill);
    this.svgText = `<polygon points="150,18 244,182 56,182" fill='${fill}'></polygon>`
    this.render = function () {
        return this.svgText
    }
}

function Square(fill) {
    Shapes.call(this, fill);
    this.svgText = `<rect x='75' y='37' width='150' height='150' fill='${fill}'></rect>`
    this.render = function () {
        return this.svgText
    }
}

module.exports = {Circle, Triangle, Square}
