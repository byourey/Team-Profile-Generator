const inquirer = require("inquirer");

const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const generateTemp = require("./src/template");

const fs = require('fs');
const path = require("path");
const generateTeam = require("./src/template");

const employees =[];

// Questions to ask for a adding a Manager

function addManager() {
    inquirer.prompt([
        {
        type: "input",
        name: "name",
        message: "Enter your name please?"
        },
        {
        type: "input",
        name: "id",
        message: "Enter your id number"
        },
        {
        type: "input",
        name: "email",
        message: "Enter your email address"
        },
        {
        type: "input",
        name: officeNumber,
        message: "Enter your office number"
        }
    ])

.then((answers) => {
    const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);

    employees.push(manager);

    addNew();

})
.catch(err => (console.log(err)));

}

// Questions to ask to add an Engineer
function addEngineer() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter your name"
        },
        {
            type: "input",
            name: "id",
            message: "Enter your id number"
        },
        {
            type: "input",
            name: "email",
            message: "Enter your email address"
        },
        {
            type: "input",
            name: github,
            message: "Enter your github"
        }
    ])
    .then((answers) => {
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
    
        employees.push(engineer);
    
        addNew();
    
    })
    .catch(err => (console.log(err)));
}

// Questions to ask to add an Intern
function addIntern() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter your name"
        },
        {
            type: "input",
            name: "id",
            message: "Enter your id number"
        },
        {
            type: "input",
            name: "email",
            message: "Enter your email address"
        },
        {
            type: "input",
            name: school,
            message: "Enter your school name"
        }
    ])
    .then((answers) => {
        const intern = new Intern(answers.name, answers.id, answers.email, answers.github);
    
        employees.push(intern);
    
        addNew();
    
    })
    .catch(err => (console.log(err)));
}

// Questions to ask Engineer or Intern
 function addNew() {
     inquirer.prompt([
         {
             type:'list',
             name: 'name',
             message: 'Which type of member you would like to add?',
             choices: [
                 "Engineer",
                 "Intern",
                 "I do not want to add anymore members"
             ],
            }
        ])
        .then((newAnswers) => {
            if (newAnswers.name ==="Engineer") {
                addEngineer();
            } else if (newAnswers.name === "Intern") {
                addIntern();
            } else {
                getTeam();
            }
        });

        }

        function getTeam() {
            fs.writeFileSync(path.join(__dirname, '/dist', 'sample.html'),generateTeam(employees), "utf-8");
        }

            const indexHTML = './dist/index.html';
            const html = `
< !DOCTYPE html >
<html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
      <title>Team Profile Generator</title>

    </head>
    <body>
        <header class="bg-danger">
            <h1 class="text-light text-center py-5">My Team</h1>
        </header>

    <div class="card employee-card">
        <div class="card-header">
        <h2 class="text-light"> getName() </h2>
        <h3 class="text-light"><i class="fas fa-mug-hot pr-2"></i> getRole() </h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
            <li class="list-group-item">ID: getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:getEmail()?" target="_blank" rel="noopener"> getEmail() </a></li>
            <li class="list-group-item">Officer number: officeNumber </li>
            </ul>
        </div>
    </div>
    <div class="card employee-card">
        <div class="card-header">
            <h2 class="text-light"> {{ name }} </h2>
            <h3 class="text-light"><i class="fas fa-glasses pr-2"></i> {{ role }} </h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: getId() </li>
                <li class="list-group-item">Email: <a href="mailto: getEmail()" target="_blank" rel="noopener"> getEmail() </a></li>
                <li class="list-group-item">GitHub: <a href="https://github.com/ getGithub() " target="_blank" rel="noopener"> getGithub() </a></li>
            </ul>
        </div>
    </div>
    <div class="card employee-card">
        <div class="card-header">
            <h2 class="text-light"> getName() </h2>
            <h3 class="text-light"><i class="fas fa-user-graduate pr-2"></i> getRole() </h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: getId() </li>
                <li class="list-group-item">Email: <a href="mailto: getEmail() " target="_blank" rel="noopener"> getEmail() </a></li>
                <li class="list-group-item">School: getSchool() </li>
            </ul>
        </div>
    </div>
    </body>
    </html>
`

