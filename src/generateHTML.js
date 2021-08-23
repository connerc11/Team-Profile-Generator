function buildManagerCard(manager){
    return `<li> ${manager.getName()}</li>`
}
function buildEngineerCard(engineer){
    return `<li> ${engineer.getName()}</li>`
}
function buildInternCard(intern){
    return `<li> ${intern.getName()}</li>`
}

function buildTeam(team){
    const HTML = [];
    HTML.push(team.filter(teamMember => teamMember.getRole() === "Manager").map(manager => buildManagerCard(manager)));
    HTML.push(team.filter(teamMember => teamMember.getRole() === "Intern").map(intern => buildInternCard(intern)));
    HTML.push(team.filter(teamMember => teamMember.getRole() === "Engineer").map(engineer => buildEngineerCard(engineer)));
    
    return HTML.join("")
}


function generateHTML(team){
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
     ${buildTeam(team)}   
     
    </body>
    </html>`
}




module.exports = generateHTML;