const {Circle, Triangle, Square} = require("./lib/shapes")


describe('Shapes', () => {
    // tests triangle shape
    describe('Triangle', () => {
        it('should display a blue triangle', () => {
            const shape = new Triangle();
            shape.setColor("blue");
            expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
        });
    });
    describe('Circle', () => {
        it('should display a blue circle', () => {
            const shape = new Circle();
            shape.setColor("blue");
            expect(shape.render()).toEqual(`<circle cx='150' cy='112' r='80' fill="blue"></circle>`);
        });
    });
    describe('triangle', () => {
        it('should display a blue triangle', () => {
            const shape = new Triangle();
            shape.setColor("blue");
            expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
        });
    });
})
