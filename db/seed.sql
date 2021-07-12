INSERT INTO departments(department_name)
VALUES
('Sales Department'),
('Software Engineer');

INSERT INTO roles(title, salary, department_id)
VALUES
('Sales Manager', '60000', 1),
('Sales Associate', '35000', 1),
('Development Manager', '90000', 2),
('Development Engineer', '65000', 2);



INSERT INTO employees(first_name, last_name, role_id, manager_id)
VALUES
('Jessie', 'James', 1, NULL),
('Lil', 'Wayne', 1, NULL),
('s6x', 'n9ne', 2, NULL),
('Dwayne', 'Johnson', 2, NULL),
('Patrick', 'Star', 1, 1),
('Spongebob', 'Squarepants', 2, 1);