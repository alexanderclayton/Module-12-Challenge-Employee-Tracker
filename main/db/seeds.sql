USE employee_tracker;

INSERT INTO departments
    (names)
VALUES
    ('Engineering'),
    ('Finance'),
    ('Legal'),
    ('Sales');

INSERT INTO roles
    (titles, salaries, department_ids)
VALUES
    ('Sales Lead', 100000, 4),
    ('Salesperson', 80000, 4),
    ('Lead Engineer', 150000, 1),
    ('Software Engineer', 120000, 1),
    ('Account Manager', 160000, 2),
    ('Accountant', 125000, 2),
    ('Legal Team Lead', 250000, 3),
    ('Lawyer', 190000, 3);

INSERT INTO employees
    (first_names, last_names, role_ids, manager_ids)
VALUES
    ('Alex', 'Clayton', 1, 1),
    ('Jenn', 'Oslaswki', 1, 1),
    ('Chris', 'Thompson', 1, 1),
    ('Taylan', 'Oslawski', 1, 1),
    ('Hannah', 'Windholz', 1, 1),
    ('Anna', 'Clayton', 1, 1),
    ('Cleopatra', 'Clayton', 1, 1),
    ('Achilles', 'Clayton', 1, 1);