const inquirer = require("inquirer")
const jest = require("jest")
const fs = require("fs")
const Employee = require("./lib/Employee")
const Intern = require('./lib/Intern')
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const roleResolver = require('./lib/RoleResolver')

function isEmpty(name) {
    return name !== '';
}
function is6Chars(name) {
    return name.length === 6;
}
function isValid(value) {
    return isEmpty(value) || is6Chars(value)
}
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
            validate: isValid
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


// responding to userPrompts
// will call userPrompts if user wants to make another member
// every time a user is created that user info is passed to roleResolver and then pushed to the array with the correct role and info
async function employeeTeam() {
    try {
        const userInput = await userPrompts();

        teamMembies.push(roleResolver(userInput))

        if (userInput.restart === "Yes") {
            console.log(teamMembies)
            await employeeTeam();
            return;
        }
        console.log("Gathering your team!")
        
        const membyHtmlArray = teamMembies.map(membie => {
            let roleText = '';
            let roleImage = '';

            if (membie.getRole() === "Manager") {
                roleText =`Office Number: ${membie.getOfficeNumber()}`;
                roleImage =`<i class="fas fa-tasks"></i>`;
            }
            if (membie.getRole() === "Intern") {
                roleText = `School: ${membie.getSchool()}`;
                roleImage =`<i class="fas fa-laptop-code"></i>`;
            }
            if (membie.getRole() === "Engineer") {
                roleText =`gitHub Account: ${membie.getGithub()}`;
                roleImage =`<i class="far fa-clipboard"></i>`;
            }
            return `  
                <div class="card mx-auto my-3" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">${membie.getRole()} ${roleImage}</h5>
                        <hr>
                        <p class="card-text">Name: ${membie.name} ID: ${membie.id}</p>
                        <p class="card-text">Email: ${membie.email}</p>
                        <p class="card-text">${roleText}</p>
                    </div>
                </div>`
        });

        
        const htmlText = fs.readFileSync('./templates/index.html', "utf8");
        

        const htmlFinal = htmlText.replace(
            "{{{this-is-where-generated-html-goes}}}", 
            membyHtmlArray.join(""));

        fs.writeFileSync("./output/team.html", htmlFinal);
        console.log("All done! Open ./output/team.html in your browser to see your Team Profile")

    }
    
    catch (err) {
        console.log(err);
    }
}
employeeTeam();


