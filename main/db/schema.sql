DROP DATABASE IF EXISTS employee_tracker;
CREATE DATABASE employee_tracker;

USE employee_tracker;

CREATE TABLE departments (
    ids INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    names VARCHAR(30)
);

CREATE TABLE roles (
    ids INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    titles VARCHAR(30),
    salaries DECIMAL,
    department_ids INT NOT NULL
);

CREATE TABLE employees (
    ids INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_names VARCHAR(30),
    last_names VARCHAR(30),
    role_ids INT NOT NULL,
    manager_ids INT
);