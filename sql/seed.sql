USE employee;

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
VALUE ('Yigit Eren', 'Ozgur', 5, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUE ('Sommer', 'Moya-Mendez', 5 , 2);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUE ('Eric', 'Hurley', 5, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUE ('Haleigh', 'Spurlock', 5, 4);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUE ('Shawn', 'Fox', 4, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUE ('Sam', 'Finn', 3, 2);