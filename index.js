const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "examples", "logo.svg");

const { Circle, Triangle, Square } = require("./lib/shapes");

const questions = [
  {
    type: "input",
    name: "logoText",
    message: "Enter up to 3 characters for your logo text:",
  },
  {
    type: "input",
    name: "logoTextColor",
    message: "Enter color keyword OR a hexadecimal number for the text color:",
  },
  {
    type: "list",
    name: "shape",
    message: "Pick a shape you would like to use.",
    choices: ["Circle", "Triangle", "Square"],
  },
  {
    type: "input",
    name: "shapeColor",
    message: "Enter color keyword OR a hexadecimal number for the shape color:",
  },
];

inquirer.prompt(questions).then((answers) => {
  switch (answers.shape) {
    case "Circle":
      const circle = new Circle(
        answers.shapeColor,
        answers.logoText,
        answers.logoTextColor
      );
      fs.writeFile(filePath, circle.render(), (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log("SVG file written successfully!");
        }
      });
      break;

    case "Triangle":
      const triangle = new Triangle(
        answers.shapeColor,
        answers.logoText,
        answers.logoTextColor
      );
      fs.writeFile(filePath, triangle.render(), (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log("SVG file written successfully!");
        }
      });
      break;

    case "Square":
      const square = new Square(
        answers.shapeColor,
        answers.logoText,
        answers.logoTextColor
      );
      fs.writeFile(filePath, square.render(), (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log("SVG file written successfully!");
        }
      });
      break;
  }
});