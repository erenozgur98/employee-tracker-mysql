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
    connection.query('SELECT * FROM employee', (err, employees) => {
        if (err) throw err;
        let employeeChoices = employees.map(employee => { return { name : `${employee.first_name} ${employee.last_name}`}})
        connection.query('SELECT * FROM role', (err, roles) => {
            if (err) throw err;
            let roleChoices = roles.map(role => { return { name: role.title, value: role.id }});
        inquirer
            .prompt([
                {
                    type: 'list',
                    name: 'employee',
                    message: 'Choose the employee you like to update',
                    choices: employeeChoices
                }
            ])
            .then((answer) => {

            })
    });
    });
};

const addEmployee = () => {
    connection.query('SELECT * FROM employee', (err, employees) => {
        if (err) throw err;
        let employeeChoices = employees.map(employee => { return { name: `${employee.first_name} ${employee.last_name}`, value: employee.id }})
        connection.query('SELECT * FROM role', (err, roles) => {
            if (err) throw err;
            let roleChoices = roles.map(role => { return { name: role.title, value: role.id }})            
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'first_name',
                    message: 'Enter the new employee\'s first name'
                },
                {
                    type: 'input',
                    name: 'last_name',
                    message: 'Enter the new employee\s last name'
                },
                {
                    type: 'list',
                    name: 'role_id',
                    message: 'What is the new employee\'s role?',
                    choices: roleChoices
                },
                {
                    type: 'list',
                    name: 'manager_id',
                    message: 'Who is the new employee\'s manager?',
                    choices: employeeChoices
                }
            ])
            .then((answer) => {
                connection.query(
                    'INSERT INTO employee SET ?', answer,
                    (err) => {
                        if (err) throw err;
                        console.log('New Employee has been added!');
                        prompt();
                    }
                );
            })
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
