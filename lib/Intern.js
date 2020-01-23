class Intern extends Employee {
    
    constructor(school) {
        this.school = school;
        super(name, id, title)      
    }
    
    getSchool() {
        return this.school;
    }

    getRole() {
        return "Intern"
    }
}

module.exports = Intern;