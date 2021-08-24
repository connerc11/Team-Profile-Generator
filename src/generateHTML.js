function buildManagerCard(manager){
    return `
    <div class="col-4">
    <div class="card h-100">
    <div class="card-header">
    <h3> ${manager.name}</h3>
    <h4> Profile Information! </h4>
    </div>
    <div class="card-body">
    <p class="id">ID- ${manager.Id}</p>
    <p class="email">Email- ${manager.email}</p>
    <p class="officeID">Office Number- ${manager.officeNumber}</p>
    </div>
  </div>
</div>`
}
function buildEngineerCard(engineer){
    return `<div class="col-4">
    <div class="card h-100">
    <div class="card-header">
    <h3> ${engineer.name}</h3>
    <h4> Profile Information </h4>
    </div>
    <div class="card-body">
    <p class="id">ID- ${engineer.Id}</p>
    <p class="email">Email- ${engineer.email}</p>
    <p class="gitHub">Office Github- ${engineer.gitHub} </p>
    </div>
  </div>
</div>`
}
function buildInternCard(intern){
    return `<div class="col-4">
    <div class="card h-100">
    <div class="card-header">
    <h3> ${intern.name}</h3>
    <h4> Profile Information </h4>
    </div>
    <div class="card-body">
    <p class="id">ID- ${intern.Id}</p>
    <p class="email">Email- ${intern.email}</p>
    <p class="school">School- ${intern.school} </p>
    </div>
  </div>
</div>`
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
        <title>Team Portfolio Generator</title>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

    </head>
    <body>
    <header> 
    <nav class="navbar" id="navbar"> 
    <span class="navbar-brand mb-0 h1 w-100 text-center" id="nav"> Team Profile Generator</span>
    </nav>
    </header>
    <main>
    <div class="container">
    <div class="row justify-content-center"
  
     ${buildTeam(team)}   
     </div>
     </div>
     </main>

    </body>
 
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">
    
    </html>`
}




module.exports = generateHTML;