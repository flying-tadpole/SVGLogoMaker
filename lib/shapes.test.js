const {Circle, Triangle, Square} = require("./lib/shapes")


describe('Shapes', () => {
    // tests triangle shape
    describe('Triangle', () => {
        it('should display a blue triangle', () => {
            const iconColor = "blue"
            const shape = new Triangle(iconColor);
            expect(shape.svgText.toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />'));
        });
    });
    describe('Circle', () => {
        it('should display a blue circle', () => {
            const iconColor = "blue"
            const shape = new Circle(iconColor);
            expect(shape.svgText.toEqual(`<circle cx='150' cy='112' r='80' fill="blue"></circle>`));
        });
    });
    describe('triangle', () => {
        it('should display a blue square', () => {
            const iconColor = "blue"
            const shape = new Square(iconColor);
            expect(shape.svgText.toEqual(`<rect x='75' y='37' width='150' height='150' fill="blue"></rect>`));
        });
    });
})
