
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
  }],
  manager: [],
  engineer: [],
  intern: []
}