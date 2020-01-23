const inquirer = require("inquirer")
const jest = require("jest")
const fs = require("fs")

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
        .then(answer => {
            if (answer === "Manager") {
                return teamManager();
            }
            else if (answer === "Engineer") {
                return teamEngineer();
            }
            else if (answer === "Intern") {
                return teamIntern();
            }
        })
}

async function teamManager() {
    return inquirer.prompt([
        {
            message: "What is the Manager's Office Number?",
            type: "string",
            name: "officeNumber",
            validate: function validateFirstName(officeNumber) {
                return officeNumber !== '';
            }
        },
    ])
}

async function teamEngineer() {
    return inquirer.prompt([
        {
            message: "What is the Engineer's gitHub Username?",
            type: "string",
            name: "gitHub",
            validate: function validateFirstName(gitHub) {
                return gitHub !== '';
            }
        },
    ])
}

async function teamEngineer() {
    return inquirer.prompt([
        {
            message: "What is the Intern's School?",
            type: "string",
            name: "school",
            validate: function validateFirstName(school) {
                return school !== '';
            },
            when: function (answers) {
                return answers.role === "Intern"
            }
        }
    ])
}

async function restart() {
            return inquirer.prompt([
                {
                    message: "If you need to add more members, select Yes. Otherwise select No and we'll generate your team profile.",
                    type: "list",
                    choices: ["Yes", "No"],
                    name: "restart",
                    validate: function validateFirstName(name) {
                        return name !== '';
                    },
                },
            ])
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
