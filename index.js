const inquirer = require('inquirer');
const fs = require('fs');
const jest = require('jest')
const {Circle, Triangle, Square} = require("./lib/shapes")

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

const createShape = (response) => {
    const iconShape = response.iconShape
    const iconColor = response.shapeColor
    let newShape = ""

    if (iconShape === "Circle") {
        newShape = new Circle(iconColor)
    } else if (iconShape === "Triangle") {
        newShape = new Triangle(iconColor)
    } else if (iconShape === "Square") {
        newShape = new Square(iconColor)
    }

    return(newShape.svgText)
}

const createText = (response) => {
    const iconText = response.iconText
    const textColor = response.textColor

    const newText = `<text x="150" y="125" font-size="50" text-anchor="middle" fill=${textColor}>${iconText}</text>`
    return(newText)
}

const writeToSvg = (generatedShape, generatedText) =>
`<svg 
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">
${generatedShape}
${generatedText}
</svg>`

function init() {
    inquirer
    .prompt(userOptions)
    .then ((response) => {
        console.log('response:',response)
        const generatedShape = createShape(response)
        console.log("gen shape:", generatedShape)
        const generatedText = createText(response)
        console.log('gen text', generatedText)
        const svgFileContent = writeToSvg(generatedShape, generatedText)

        fs.writeFile("logo.svg", svgFileContent,
            (err) =>
            err ? console.log(err) : console.log("Generated logo.svg"))
    })
}

init()