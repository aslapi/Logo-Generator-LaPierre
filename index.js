const inquirer = require('inquirer');
const fs = require('fs');

inquirer.prompt([
    {
        type: 'input',
        name: 'logoText',
        message: 'Enter up to 3 characters'
    },
    {
        type: 'input',
        name: 'logoTextColor',
        message: 'Enter color keyword OR a hexadecimal number'
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Pick a shape you would like to use',
        choices: ['Circle', 'Triangle', 'Square']
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter color keyword OR a hexadecimal number'
    }
    ])
    .then(answers => {

    })
    
    //writeFile("logo.svg", svg)????
   