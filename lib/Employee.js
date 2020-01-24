
class Employee {
    constructor(name, id , email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    // get name function
    getName() {
        return this.name;
    }

    // get employee by ID
    getId() {
        return this.id;
    }

    // get employees email
    getEmail() {
        return this.email;
    }

    // returns "Employee"
    getRole() {
        return "Employee"
    }
}

module.exports = Employee;