DROP DATABASE IF EXISTS employee;
CREATE DATABASE employee;
USE employee;

CREATE TABLE department (
id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL
);

CREATE TABLE role (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INT NOT NULL
);

CREATE TABLE employee (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT NOT NULL,
    FOREIGN KEY (role_id) REFERENCES role(id),
    FOREIGN KEY (manager_id) REFERENCES employee(id)
);

INSERT INTO department (name)
VALUE ('Sales');
INSERT INTO department (name)
VALUE ('Engineering');
INSERT INTO department (name)
VALUE ('Finance');
INSERT INTO department (name)
VALUE ('Legal');

INSERT INTO role (title, salary, department_id)
VALUE ('Lead Engineer', 150000, 2);
INSERT INTO role (title, salary, department_id)
VALUE ('Accountant', 125000, 3);
INSERT INTO role (title, salary, department_id)
VALUE ('Lawyer', 190000, 4);
INSERT INTO role (title, salary, department_id)
VALUE ('Legal Team Lead', 250000, 4);
INSERT INTO role (title, salary, department_id)
VALUE ('Software Engineer', 120000, 2);
INSERT INTO role (title, salary, department_id)
VALUE ('Sales Lead', 100000, 1);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUE ('Yigit Eren', 'Ozgur', 2, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUE ('Sommer', 'Moya-Mendez', 2 , 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUE ('Eric', 'Hurley', 2, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUE ('Haleigh', 'Spurlock', 2, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUE ('Sam', 'Finn', 4, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUE ('Natasha', 'Stark', 3, 1);