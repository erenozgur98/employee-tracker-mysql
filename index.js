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
                    "View All Employee By Departments?",
                    "Update Employee",
                    "Add Employee?",
                    "Add Role?",
                    "Add Department?",
                    "Exit"
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
                case "View All Employee By Departments?":
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
                case "Exit":
                    connection.end();

            }
        })
};

const viewAllEmployees = () => {
    connection.query('SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name, role.salary, CONCAT (manager.first_name, " ", manager.last_name) AS manager FROM employee LEFT JOIN employee manager ON manager.id = employee.manager_id LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id', (err, res) => {
        if (err) throw err;
        console.table(res);
        prompt();
    });
};

const viewRoles = () => {
    connection.query('SELECT employee.first_name, employee.last_name, role.title AS title FROM employee LEFT JOIN role ON employee.role_id = role.id', (err, res) => {
        if (err) throw err;
        console.table(res);
        prompt();
    });
};

const viewDepartments = () => {
    connection.query('SELECT employee.first_name, employee.last_name, department.name AS department FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id', (err, res) => {
        if (err) throw err;
        console.table(res);
        prompt();
    });
};

const updateEmployee = () => {
    connection.query('', (err, res) => {
        if (err) throw err;
        console.table(res);
        inquirer
            .prompt([
                {
                    
                }
            ])
    });
    inquirer
        .prompt([

        ])
};

const addEmployee = () => {
    connection.query('SELECT * FROM employee', (err, res) => {
        if (err) throw err;
        let choices = res.map(res => `${res.first_name} ${res.last_name}`)
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'firstName',
                    message: 'Enter the new employee\'s first name'
                },
                {
                    type: 'input',
                    name: 'lastName',
                    message: 'Enter the new employee\s last name'
                },
                {
                    type: 'list',
                    name: 'role',
                    message: 'What is the new employee\'s role?',
                    choices: [
                        'Software Engineer',
                        'Lead Engineer',
                        'Accountant',
                        'Accountant Manager',
                        'Salesperson',
                        'Legal Team Lead',
                        'Sales Lead'
                    ]
                },
                {
                    type: 'list',
                    name: 'manager',
                    message: 'Who is the new employee\'s manager?',
                    choices: choices
                }
            ])
            .then((answer) => {
                console.log('answer', answer);
                let manager = answer.manager;
                connection.query(
                    'SELECT * FROM employee', (err, res) => {
                        if (err) throw err;
                        let roleId;
                        for (let row of res) {
                            roleId = row.id;
                        }
                        let managerId;
                        let managerName;
                        for (let data of res) {
                            data.name = `${data.first_name} ${data.last_name}`;
                            if (data.name === manager) {
                                managerId = data.id;
                                managerName = data.name;
                            }
                        }
                    },
                    'INSERT INTO employee SET ?',
                    [
                        {
                            first_name: answer.firstName,
                            last_name: answer.lastName,
                            role_id: roleId,
                            manager_id: managerId
                        }
                    ],
                    (err) => {
                        if (err) throw err;
                        console.log('New Employee has been added!');
                        prompt();
                    }
                );
            })
    })
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
