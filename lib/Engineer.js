const Employee = require("./Employee.js");

class Engineer extends Employee {
    constructor(name, Id, email, gitHub){
        super(name, Id, email)
        this.gitHub = gitHub
    }
    getGitHub(){
        return this.gitHub
    }
    getRole(){
        return "Engineer";
    }
}

module.exports = Engineer;