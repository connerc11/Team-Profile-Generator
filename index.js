const inquirer = require('inquirer');
const fs = require('fs');
const 


const questions = [
    {
        type: "input",
        name: "employeeName",
        message: "What is the name of the employee?"
    },
    {
        type: "input",
        name: "employeeId",
        message: "What is the ID of this employee?"
    },
    {
        type: "input",
        name: "employeeEmail",
        message: "What is the employees email address?"
    },
    {
        type: "list",
        name: "employeeRole",
        message: "What is the role of the employee?",
        choices: ["Intern", "Manager", "Engineer"]
    }
]

managerQuestion = [
    {
    type: "input",
    name: "officeNumber",
    message: "What is the office number of the Manager?",
    }
]

engineerQuestion = [
    {
        type: "input",
        name: "githubUsername",
        message: "What is the Github username for the engineer?",
    }
]

internQuestion = [
    {
        type: "input",
        name = "internSchool",
        message = "WHat school did the intern attend?",
    }
]