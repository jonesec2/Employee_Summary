const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");

const roleResolver = (userInput) => {
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

module.exports = roleResolver;