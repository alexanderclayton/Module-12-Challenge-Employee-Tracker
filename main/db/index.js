const connection = require("./connection");

class Database {
    constructor(connection) {
        this.connection = connection;
    }

    showAllEmployees() {
        return this.connection.promise().query(
            "SELECT employees.ids, employees.first_names, employees.last_names, employees.role_ids, employees.manager_ids FROM employees"
        )
    }

    addEmployees(employee) {
        return this.connection.promise().query("INSERT INTO employees SET ?", employee)
    }

    updateRoles(employeeId, roleId) {
        return this.connection.promise().query(
            "UPDATE employees SET role_ids = ? WHERE ids =?", [roleId, employeeId]
        );
    }

    showAllManagers(employeeId) {
        return this.connection.promise().query(
            "SELECT ids, first_names, last_names FROM employees WHERE ids != ?", employeeId
        );
    }

    showAllRoles() {
        return this.connection.promise().query(
            "SELECT roles.ids, roles.titles, roles.salaries FROM roles"
        );
    }

    addRoles(role) {
        return this.connection.promise().query(
            "INSERT INTO roles SET ?", role
        );
    }

    showAllDepartments() {
        return this.connection.promise().query(
            "SELECT ids, names FROM departments"
        )
    }

    addDepartments(department) {
        return this.connection.promise().query(
            "INSERT INTO departments SET ?", department
        );
    }
}

module.exports = new Database(connection);