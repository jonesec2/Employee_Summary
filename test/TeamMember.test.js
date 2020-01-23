const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
const RoleResolver = require("../lib/RoleResolver");

test("Create HTML for each member", () => {
  const testTeam = [{
      name: "Melvin",
      role: "Manager",
      email: "melvy@mel.com",
      id: "1",
      officeNumber:"22"
    },
    {
      name: "Joe",
      role: "Engineer",
      email: "joejohn@gmail.com",
      id: "4324234",
      github: "hotdude50000" 
    },
    {
      name: "Big Mike",
      role: "Intern",
      email: "email@email.com",
      id: "3333",
      school: "Good School" 
    },
    {
      name: "Marvolo",
      role: "Intern",
      email: "riddle@voldemort.com",
      id: "2",
      school:"Bad School"
    },
  ];

  const teamMembies = testTeam.map(fakeInput => {
    return RoleResolver(fakeInput);
  })

  expect(teamMembies[0].name).toBe("Melvin");
  expect(teamMembies[0].getOfficeNumber()).toBe("22");
});
