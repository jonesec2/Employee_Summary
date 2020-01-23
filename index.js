const inquirer = require("inquirer")
const jest = require("jest")
const fs = require("fs")
const Employee = require("./lib/Employee")
const Intern = require('./lib/Intern')
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')

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
        {
            message: "What is the Manager's Office Number?",
            type: "string",
            name: "officeNumber",
            validate: function validateFirstName(officeNumber) {
                return officeNumber !== '';
            },
            when: function (answer) {
                return answer.role === "Manager";
            }
        },
        {
            message: "What is the Engineer's gitHub Username?",
            type: "string",
            name: "gitHub",
            validate: function validateFirstName(gitHub) {
                return gitHub !== '';
            },
            when: function (answer) {
                return answer.role === "Engineer";
            }
        },
        {
            message: "What is the Intern's School?",
            type: "string",
            name: "school",
            validate: function validateFirstName(school) {
                return school !== '';
            },
            when: function (answers) {
                return answers.role === "Intern";
            }
        },
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



let teamMembies = []

const employeeResolver = (userInput) => {
    if (userInput.role === "Manager") {
        return new Manager(
            userInput.name,
            userInput.id,
            userInput.email,
            userInput.officeNumber
        )
    }
    
    if (userInput.role === "Engineer") {
        return new Engineer(
            userInput.name,
            userInput.id,
            userInput.email,
            userInput.github
        )
    }
    
    if (userInput.role === "Intern") {
        return new Intern(
            userInput.name,
            userInput.id,
            userInput.email,
            userInput.school

        )
    }

    throw new Error("Please enter a valid employee role (Manager, Engineer, Intern)");
}


async function employeeTeam() {
    try {
        const userInput = await userPrompts();
        console.log(userInput.name);
        console.log(userInput.role);
        console.log(userInput.email);
        console.log(userInput.id);
        console.log(userInput.suh);

        teamMembies.push(employeeResolver(userInput))

        if (userInput.restart === "Yes") {
            await employeeTeam();    
            return;
        } 

        teamMembies
            .filter(e => e.role === "Manager")
            .map(e => console.log(e.name))
    }
    catch (err) {
        console.log(err);
    }
}
employeeTeam();


