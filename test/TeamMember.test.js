const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
const RoleResolver = require("../lib/RoleResolver");


test("Can set office number via constructor argument", () => {
  const testTeam = [{
    name:
    role:
    email:
    id:
    officeNumber:
  },
];
  const e = new Manager("Foo", 1, "test@test.com", testValue);
  expect(e.officeNumber).toBe(testValue);
});
