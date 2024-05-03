const Shapes = require("./shapes.js");
const Circle = require('./shapes.js');
const Triangle = require('./shapes.js');
const Square = require('./shapes.js');

describe('Shapes', () =>{
    
    describe('Circle', () => {
        it('Should', () => {
            expect()
        })
    })
    describe('Triangle', () => {
        it('Should', () => {
            expect()
        })
    })
    describe('Square', () => {
        it('Should', () => {
            const shape = new Square();
            expect(shape.render()).toEqual('<polygon points=')
        })
    })
})

// const shape = new Triangle();
// shape.setColor("blue");
// expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');