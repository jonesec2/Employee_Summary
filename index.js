const inquirer = require("inquirer")
const jest = require("jest")
const fs = require("jf")

function userPrompts() {
    return inquirer.prompt([
        {
            message: "What is the employee's name?",
            name: "name"
        },
        {
            message: "What is the employee's role?",
            name: "role"
        },
        {
            message: "What is employee's email?",
            name: "email"
        },
        {
            message: "What is employee's Id?",
            name: "id"
        },
        {
            message: ""
        }
    ])
} 