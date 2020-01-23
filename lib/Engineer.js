class Engineer extends Employee {
    
    constructor(gitHub) {
        this.gitHub = gitHub;
        super(name, id, title)      
    }
    
    getGitHub() {
        return this.gitHub;
    }

    getRole() {
        return "Engineer"
    }
}

module.exports = Engineer;