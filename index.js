const { prompt } = require('inquirer');
const fs = require('fs');
const { table } = require('console');

const classes = require('./db/classes.js');

function mainPrompt() {
    prompt([{
        type: 'list',
        name: 'menu',
        message: 'What would you like to do?',
        choices: ["View All Departments", "Add Departments", "View All Roles", "Add Roles", "View All Employees", "Add Employee", "Update Employee"]
    }])
        .then((answer) => {
            switch (answer.menu) {
                case "View All Departments":
                    viewDepartments();
                    break;
                case 'Add Departments':
                    departmentsPrompt();
                    break;
                case "View All Roles":
                    viewRoles();
                    break;
                case "Add Roles":
                    rolesPrompt();
                    break;
                case "View All Employees":
                    viewEmployees();
                    break;
                case "Add Employee":
                    addEmployee();
                    break;
                case "Update Employee":
                    console.log("adding feature soon!")
                    mainPrompt()
                    break;
            }
        });
}

function newDepartment() {
    prompt([{
        name: 'department',
        message: 'Please name the new department.'
    }]).then(res => {
        let answer = res
        console.log(res)
        classes.createDepartment()
            .then(() => console.log(`Successfully added ${answer.name}!`))
            .then(() => mainPrompt())
    })
}

function departmentsPrompt() {
    prompt([{
        type: 'list',
        name: 'department',
        message: 'would you like to add a department',
        choices: ['Yes', 'No']
    }]).then((answer) => {
        switch (answer.department) {
            case 'Yes':
                newDepartment();
                break;
            case 'No':
                mainPrompt();
                break;
        }
    })
}

function createRole() {
    prompt([{
        name: 'name',
        message: 'What role are you adding?'
    }]).then(res => {
        let answer = res
        classes.createRole()
            .then(() => console.log(`successfully added ${answer.name}!`))
            .then(() => mainPrompt())
    })
}

function rolesPrompt() {
    prompt([{
        type: 'list',
        name: 'add role',
        message: 'Choose the role youre adding.',
        choices: ['Sales Lead', 'Salesperson', 'Lead Engineer', 'Software Engineer']
    },
    {
        type: 'number',
        name: 'salary',
        message: 'Please enter the gross yearly for this role.'
    },
    {
        type: 'list',
        name: 'department_id',
        message: 'Please choose the department that this role is located.',
        choices: ['Sales Department', 'Software Engineer']
    }
    ]).then((answer) => {
        createRole()
    })
}

function addEmployee() {
    prompt([{
        type: 'input',
        name: 'first_name',
        message: 'What is the employees (first) name?'

    },
    {
        type: 'input',
        name: 'last_name',
        message: 'What is the employees (last) name?'
    },
    {
        type: 'list',
        name: 'role_id',
        message: 'What is the roles id number?',
        choices: ['1-Sales Associate', '2-Development Engineer']
    },
    {
        type: 'list',
        name: 'manager_id',
        Message: 'What is the managers id of the employee?',
        choices: ['Sales Manager', 'Development Manager']
    }
    ]).then(() => mainPrompt())
}

function viewEmployees() {
    classes.viewAllEmployees()
        .then(([rows]) => {
            let employees = rows
            console.log("\n")
            console.table(employees)
        })
        .then(() => mainPrompt())
}

function viewRoles() {
    classes.viewRoles()
        .then(([rows]) => {
            let roles = rows
            console.log('\n')
            console.table(roles)
        })
        .then(() => mainPrompt())
};

function viewDepartments() {
    classes.viewDepartments()
        .then(([rows]) => {
            let departments = rows
            console.log('\n')
            console.table(departments)
        })
        .then(() => mainPrompt())
};

mainPrompt()