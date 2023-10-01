const inquirer = require('inquirer');
const fs = require('fs');
const jest = require('jest')

const userOptions = [
    {
        type: "input",
        message: "Please enter desired text (up to 3 characters).",
        name: "iconText"
    },
    {
        type: "input",
        message: "Enter color for text.",
        name: "textColor"
    },
    {
        type: "list",
        message: "Select shape.",
        name: "iconShape",
        choices: [
            "Circle",
            "Triangle",
            "Square"
        ],
        default: 0
    },
    {
        type: "input",
        message: "Enter color for shape.",
        name: "shapeColor"
    },
]

function init() {
    inquirer
    .prompt(userOptions)
    .then ((response) => {
        const svgFileContent = writeToSvg(response)

        fs.writeFile("logo.svg", svgFileContent,
            (err) =>
            err ? console.log(err) : console.log("Generated logo.svg"))
    })
}


init()