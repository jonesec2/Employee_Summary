
const validator = {
  isEmpty     = (val) => val === "",
  isNotEmpty  = (val) => val !== "",
  isManager   = ({ role }) => role === "Manager",
  isEngineer  = ({ role }) => role === "Engineer",
  isIntern    = ({ role }) => role === "Intern",
}

const prompts = { 
  employee: [{
    message: "What is the employee's role?",
    type: "list",
    choices: ["Manager", "Engineer", "Intern"],
    name: "role"
  },
  {
    message: "What is the employee's name?",
    type: "input",
    name: "name",
    validate: validator.isNotEmpty
  },
  {
    message: "What is employee's Id?",
    type: "input",
    name: "id",
    validate: validator.isNotEmpty
  },
  {
    message: "What is employee's email?",
    type: "string",
    name: "email",
    validate: validator.isNotEmpty
  }],
  manager: [{
    message: "What is the Manager's Office Number?",
    type: "string",
    name: "officeNumber",
    validate: validator.isNotEmpty,
    when: validator.isManager
  }],
  engineer: [{
    message: "What is the Engineer's gitHub Username?",
    type: "string",
    name: "gitHub",
    validate: validator.isNotEmpty,
    when: validator.isEngineer
  }],
  intern: [{
    message: "What is the Intern's School?",
    type: "string",
    name: "school",
    validate: validator.isNotEmpty,
    when: validator.isIntern
  }]  
}

module.exports = {
  validator,
  prompts
}