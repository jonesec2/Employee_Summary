class Manager extends Employee {
    
    constructor(officeNumber) {
        this.officeNumber = officeNumber;
        super(name, id, title)      
    }
    
    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return "Manager"
    }
}

module.exports = Manager;