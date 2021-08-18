const Employee = require("./Employee.js");

class Manager extends Employee {
    constructor(name, Id, email, officeNumber){
        super(name, Id, email)
        this.officeNumber = officeNumber
    }
    getOfficeNumber(){
        return this.officeNumber
    }
    getRole(){
        return "Manager";
    }
}

module.exports = Manager;