//imports functions for testing
const {Circle, Triangle, Square} = require("./shapes")

//test suite for shapes
describe('Shapes', () => {
    //test triangle
    describe('Triangle', () => {
        it('should display a blue triangle', () => {
            const iconColor = "blue"
            const shape = new Triangle(iconColor);
            expect(shape.render()).toEqual(`<polygon points="150,18 244,182 56,182" fill='blue'></polygon>`);
        });
    });
    //tests circle
    describe('Circle', () => {
        it('should display a blue circle', () => {
            const iconColor = "blue"
            const shape = new Circle(iconColor);
            expect(shape.render()).toEqual(`<circle cx='150' cy='112' r='80' fill='blue'></circle>`);
        });
    });
    //tests square
    describe('Square', () => {
        it('should display a blue square', () => {
            const iconColor = "blue"
            const shape = new Square(iconColor);
            expect(shape.render()).toEqual(`<rect x='75' y='37' width='150' height='150' fill='blue'></rect>`);
        });
    });
})
