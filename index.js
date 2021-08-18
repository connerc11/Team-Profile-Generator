const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./src/generateHTML');
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const { default: generate } = require('@babel/generator');

// const path = require('path');
// const fileDirectory = path.resolve(__dirname, "dist");
// const filePath = path.join(fileDirectory, "index.html");

const team = []

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

const internData = () => {
     inquirer.prompt([
        
        {
            type: "input",
            name: "internName",
            message: "What is the name of the intern?"
        },
        {
            type: "input",
            name: "internId",
            message: "What is the ID of the intern?"
        },
        {
            type: "input",
            name: "internEmail",
            message: "What is the intern's email address?"
        },
        
        {
            type: "input",
            name: "internSchool",
            message: "What school did the intern attend?",
        },
    ]).then(answer => {
        const intern = new Intern (answer.internName, answer.internId, answer.internEmail, answer.internSchool);
        team.push(intern);
        menu();
    })
}

const engineerData = () => {
     inquirer.prompt([
     
        {
            type: "input",
            name: "engineerName",
            message: "What is the name of the engineer?"
        },
        {
            type: "input",
            name: "engineerId",
            message: "What is the ID of the engineer?"
        },
        {
            type: "input",
            name: "engineerEmail",
            message: "What is the engineer's email address?"
        },
        {
            type: "input",
            name: "gitHubUsername",
            message: "What is the Github username for the engineer?",
        },
    ]).then(answer => {
        const engineer = new Engineer (answer.engineerName, answer.engineerId, answer.engineerEmail, answer.gitHubUsername);
        team.push(engineer)
        menu();
    })
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

const init = function(){
    managerData().then(answer => {
        const manager = new Manager(answer.managerName, answer.managerId, answer.managerEmail, answer.officeNumber);
        team.push(manager);
        menu();
    })
}
const menu = () => {
    inquirer.prompt({
        type: "list",
        message: "Would you like to add an employee?",
        choices: ['Engineer', 'Intern', 'Done'],
        name: 'menuChoices'
      
    }).then(answer => {
        if(answer.menuChoices === "Engineer"){
            engineerData()
        }else if(answer.menuChoices === "Intern"){
            internData()
        }else {
            console.log(team)
            writeFile(generateHTML(team))
        }
    })
}

init();