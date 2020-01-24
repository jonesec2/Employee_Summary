const inquirer = require("inquirer")
const jest = require("jest")
const fs = require("fs")
const Employee = require("./lib/Employee")
const Intern = require('./lib/Intern')
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')


// create function for the prompts
// set up so if the user can add as many team members as they want
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
            name: "github",
            validate: function validateFirstName(github) {
                return github !== '';
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


// declaring our teamMember array
let teamMembies = []

//filtering our members by role, and returning into employeeTeam
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

////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
// async function roleHTML() {
//     try {
//         const html = await userPrompts();
//         const managerHTML = []
//         const internHTML = []
//         const engineerHTML = []

//         ////////////////////////////////////////////////////////////////////////////////////////////////

//         // move to new function?
//         ////////////////////////////////////////////////////////////////////////////////////////////////
//         ////////////////////////////////////////////////////////////////////////////////////////////////
//         fs.writeFile("manager.html", managerHTML, function (err) {
//             if (err) {
//                 throw err;
//             }

//             console.log("Successfully wrote to manager.html file");
//         });
//         fs.writeFile("intern.html", internHTML, function (err) {
//             if (err) {
//                 throw err;
//             }

//             console.log("Successfully wrote to manager.html file");
//         });
//         fs.writeFile("engineer.html", engineerHTML, function (err) {
//             if (err) {
//                 throw err;
//             }

//             console.log("Successfully wrote to manager.html file");
//         });
//         ////////////////////////////////////////////////////////////////////////////////////////////////
//         ////////////////////////////////////////////////////////////////////////////////////////////////
//     }
//     catch (err) {
//         console.log(err);
//     }
// }


// trying this out
// testing later
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
async function createMain() {
    try {
        const something = await roleHTML();
        fs.readFile("manager.html", "utf8", (err, data) => {
            if (err) {
                throw err;
            }
            fs.appendFile("index.html", data, function (err) {
                if (err) {
                    throw err;
                }
            })
        });
        fs.readFile("engineer.html", "utf8", (err, data) => {
            if (err) {
                throw err;
            }
            fs.appendFile("index.html", data, function (err) {
                if (err) {
                    throw err;
                }
            })
        });
        fs.readFile("intern.html", "utf8", (err, data) => {
            if (err) {
                throw err;
            }
            fs.appendFile("index.html", data, function (err) {
                if (err) {
                    throw err;
                }
            })
        });

    }
    catch (err) {
        console.log(err)
    }
}
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////

// responding to userPrompts
// will call userPrompts if user wants to make another member
// every time a user is created that user info is passed to employeeResolver and then pushed to the array with the correct role and info
async function employeeTeam() {
    try {
        const userInput = await userPrompts();

        teamMembies.push(employeeResolver(userInput))

        if (userInput.restart === "Yes") {
            console.log(teamMembies)
            await employeeTeam();
            return;
        }
        console.log(teamMembies)
        const fullHtml = teamMembies.map(membie => {
            let specialText = '';
            if (membie.getRole() === "Manager") {
                specialText =`Office Number: ${membie.getOfficeNumber()}`;
            }
            if (membie.getRole() === "Intern") {
                specialText = `School: ${membie.getSchool()}`;
            }
            if (membie.getRole() === "Engineer") {
                specialText =`gitHub Account: ${membie.getGithub()}`;
            }
            return `<div class="card mx-auto my-3" style="width: 18rem;">
                        <div class="card-body">
                            <h5 class="card-title">Manager <i class="fas fa-tasks"></i></h5>
                            <hr>
                            <p class="card-text">Name: ${membie.name} ID: ${membie.id}</p>
                            <p class="card-text">Email: ${membie.email}</p>
                            <p class="card-text">${specialText}</p>
                        </div>
                    </div>`
        });
        console.log("full html", fullHtml)
    }

    catch (err) {
        console.log(err);
    }
}
employeeTeam();


