const { Shapes, Circle, Triangle, Square } = require("./lib/shapes");

// Test suite for parent shapes object
describe('Shapes', () =>{
    // Test for circle class
    describe('Circle', () => {
        it('Render() should return an SVG string with the correct color', () => {
            const circle = new Circle();
            circle.shapeColor("red");
            expect(circle.render()).toEqual(
                '<circle cx="150" cy="100" r="80" fill="red" />'
            )
        })
    })
    // Test for triangle class
    describe('Triangle', () => {
        it('Render() should return an SVG string with the correct color', () => {
            const triangle = new Triangle();
            triangle.shapeColor("blue");
            expect(triangle.render()).toEqual(
                '<polygon points="100,20 180,180 20,180" fill="blue" />'
            )
        })
    })
    // Test for square class
    describe('Square', () => {
        it('Should', () => {
            const square = new Square();
            square.shapeColor("black");
            expect(square.render()).toEqual(
                '<rect x="10" y="10" width="160" height="160" fill="black"/>'
            )
        })
    })
})
