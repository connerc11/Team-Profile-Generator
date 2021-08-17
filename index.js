const inquirer = require('inquirer');
const fs = require('fs');
const { inheritInnerComments } = require('@babel/types');
const { array } = require('yargs');
// const path = require('path');
// const fileDirectory = path.resolve(__dirname, "dist");
// const filePath = path.join(fileDirectory, "index.html");

const managerData = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "managerName",
            message: "What is the Manager in charge of the team?"
        },
        {
            type: "input",
            name: "managerId",
            message: "What is the ID of the manager?"
        },
        {
            type: "input",
            name: "managerEmail",
            message: "What is the managers email address?"
        },
        {
            type: "input",
            name: "officeNumber",
            message: "What is the office number of the Manager?",
        }

    ])
}

const employeeData = () => {
    return inquirer.prompt([
        {
            type: "list",
            name: "employeeRole",
            message: "What is the role of the employee?",
            choices: ["Intern", "Engineer"]
        },
        {
            type: "input",
            name: "employeeName",
            message: "What is the name of the employee?"
        },
        {
            type: "input",
            name: "employeeId",
            message: "What is the ID of the employee?"
        },
        {
            type: "input",
            name: "employeeEmail",
            message: "What is the employee's email address?"
        },
        {
            type: "input",
            name: "githubUsername",
            message: "What is the Github username for the engineer?",
            when: (input) => input.employeeRole === "Engineer",
            validate: answer => {
                if (answer) {
                    return true;
                }else{
                    console.log("enter the correct github username") 
                }
            }

        },
        {
            type: "input",
            name: "internSchool",
            message: "What school did the intern attend?",
            when: (input) => input.employeeRole === "Intern",
            validate: answer => {
                if (answer) {
                    return true;
                }else{
                    console.log("enter the correct school for the intern") 
                }
            }
        },



    ])
}


const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        if (err) {
            console.log(err);
            return;
        }
    })
}


// fs.writeFile('index.html', generatePage(name, inquirer), err => {
//     if (err) throw err;

//     console.log('Portfolio complete! Check out index.html to see the output!');
// });

init();