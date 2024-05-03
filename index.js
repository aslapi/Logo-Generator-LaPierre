const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");

inquirer
  .prompt([
    {
      type: "input",
      name: "logoText",
      message: "Enter up to 3 characters for your logo text:",
    },
    {
      type: "input",
      name: "logoTextColor",
      message:
        "Enter color keyword OR a hexadecimal number for the text color:",
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
      message:
        "Enter color keyword OR a hexadecimal number for the shape color:",
    },
  ])
  .then((answers) => {
    const { logoText, logoTextColor, shape, shapeColor } = answers;
    // COULD INCLUDE A FONT SIZE OPTION IN INQUIRER
    let svgLogo = `
        <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
        `;

    if (shape === "Circle") {
      svgLogo += `
            <circle cx="100" cy="100" r="80" fill="${shapeColor}" />
            `;
    } else if (shape === "Triangle") {
      svgLogo += `
            <polygon points="50,10 90,90 10,90" fill="${shapeColor}" />
            `;
    } else if (shape === "Square") {
      svgLogo += `
        <rect x="10" y="10" width="80" height="80" fill="${shapeColor}"/>

            `;
    }

    svgLogo += `
    <text x="100" y="110" font-size="40" text-anchor="middle" fill="${logoTextColor}">${logoText}</text>
    </svg>
    `;
    const filePath = path.join("examples", "logo.svg");

    fs.writeFile(filePath, svgLogo, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("SVG file written successfully!");
      }
    });
  });

//     <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
//     <circle cx="100" cy="100" r="80" fill="red" />
//     </svg>

//     const svgContent =
//     `
//     <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
//     <style>
//       text { fill: ${answers.textColor}; }
//       .shape { fill: ${answers.shapeColor}; }
//     </style>
//     `;

//     if (shape === 'Circle') {
//         svgContent + `<circle class="shape" cx="100" cy="100" r="80"/>`;
//       } else if (shape === 'Triangle') {
//         svgContent + `<polygon points="50,10 90,90 10,90"/>`;
//       } else if (shape === 'Square')
//         svgContent + `<rect x="10" y="10" width="80" height="80"/>`;

//       svgContent + `<text x="100" y="100" text-anchor="middle">${answers.text}</text>
//       </svg>`;

//     const filePath = path.join('examples', 'logo.svg');

//     fs.writeFile(filePath, svgContent, (err) => {
//         if (err) {
//             console.log(err);
//         }
//         else {
//             console.log("SVG file written successfully!")
//         }
//     })
// })
