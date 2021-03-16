const mysql = require('mysql');
const inquirer = require('inquirer');
require('console.table');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'employee'
});

connection.connect(err => {
    if (err) throw err;
    prompt();
});

const prompt = () => {
    inquirer
        .prompt([
        {
            name: 'choice',
            type: 'list',
            message: 'What would you like to do?',
            choices: [
                "View All Employees?",
                "View All Employee's By Roles?",
                "View All Emplyee's By Departments",
                "Update Employee",
                "Add Employee?",
                "Add Role?",
                "Add Department?"
            ]
        }])
        .then((value) => {
            switch (value.choice) {
                case "View All Employees?":
                    viewAllEmployees();
                    break;
                case "View All Employee's By Roles?":
                    viewRoles();
                    break;
                case "View All Employee's By Departments":
                    viewDepartments();
                    break;
                case "Update Employee":
                    updateEmployee();
                    break;
                case "Add Employee?":
                    addEmployee();
                    break;
                case "Add Role?":
                    addRole();
                    break;
                case "Add Department?":
                    addDepartment();
                    break;
                    
            }
        })
};

const viewAllEmployees = () => {
    connection.query();
    prompt();
};

const viewRoles = () => {
    connection.query();
    prompt();
};

const viewDepartments = () => {
    connection.query();
    prompt();
};

const updateEmployee = () => {
    connection.query();
    inquirer
        .prompt([

        ])
};

const addEmployee = () => {
    inquirer
        .prompt([

        ])
};

const addRole = () => {
    connection.query();
    inquirer
        .prompt([

        ])
};

const addDepartment = () => {
    inquirer
        .prompt([

        ])
};
