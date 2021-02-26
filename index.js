const inquirer = require('inquirer');

const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const fs = require('fs');
const { listenerCount } = require('events');

const employees =[];

// Questions to ask for a adding a Manager

function managerAdd() {
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


