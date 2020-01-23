const inquirer = require("inquirer")
const jest = require("jest")
const fs = require("fs")
const employee = require("./lib/Employee")

function userPrompts() {
    return inquirer.prompt([
        {
            message: "What is the employee's role?",
            type: "list",
            choices: ["Manager", "Engineer", "Intern"],
            name: "role"
        },
        {
            message: "What is the employee's name?",
            type: "input",
            name: "name",
            validate: function validateFirstName(name) {
                return name !== '';
            }
        },
        {
            message: "What is employee's Id?",
            type: "input",
            name: "id",
            validate: function validateFirstName(id) {
                return id !== '';
            }
        },
        {
            message: "What is employee's email?",
            type: "string",
            name: "email",
            validate: function validateFirstName(email) {
                return email !== '';
            }
        },
    ])
    // .then(role => {
    //     if (role === "Manager") {
    //         return teamManager();
    //         }
    //     else if (this.role === "Engineer") {
    //             return teamEngineer();
    //     }
    //     else if (this.role === "Intern") {
    //         return teamIntern();
    //     }
    // })
}

async function employeeTeam() {
    try {
        const userInput = await userPrompts();
        console.log(userInput.name);
        console.log(userInput.role);
        console.log(userInput.email);
        console.log(userInput.id);
        console.log(userInput.suh);
    }
    catch (err) {
        console.log(err);
    }
}
employeeTeam();