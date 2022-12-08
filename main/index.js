const inquirer = require('inquirer')
const db = require("./db")
const cTable = require("console.table")

inquirer
    .prompt([
        {
            type: "list",
            message: "What would you like to do?",
            choices:
                [
                    {
                        name: "View All Employees",
                        value: "view_all_employees"

                    },
                    {
                        name: "View All Employees By Department",
                        value: "view_all_employees_by_department"
                    },
                    {
                        name: "View All Employees By Manager",
                        value: "view_all_employees_by_manager"
                    },
                    {
                        name: "Add Employee",
                        value: "add_employee"
                    },
                    {
                        name: "Remove Employee",
                        value: "remove_employee"
                    },
                    {
                        name: "Update Employee Role",
                        value: "update_employee_role"
                    },
                    {
                        name: "Update Employee Manager",
                        value: "update_employee_manager"
                    },
                    {
                        name: "View All Departments",
                        value: "view_all_departments"
                    },
                    {
                        name: "Add Department",
                        value: "add_department"
                    },
                    {
                        name: "Remove Department",
                        value: "remove_department"
                    },
                    {
                        name: "View All Roles",
                        value: "view_all_roles"
                    },
                    {
                        name: "Add Role",
                        value: "add_role"
                    },
                    {
                        name: "Remove Role",
                        value: "remove_role"
                    },
                    {
                        name: "Quit",
                        value: "quit"
                    },
                ],
            name: "userAction"
        }
    ])
    .then(response => {
        let action = response.userAction;

        switch(action) {
            case "view_all_employees":
                viewAllEmployees();
                break;
            case "view_all_employees_by_department":
                viewAllEmployeesByDepartment();
                break;
            case "view_all_employees_by_manager":
                viewAllEmployeesByManager();
                break;
            case "add_employee":
                addEmployee();
                break;
            case "remove_employee":
                removeEmployee();
                break;
            case "update_employee_role":
                updateEmployeeRole();
                break;
            case "update_employee_manager":
                updateEmployeeManager();
                break;
            case "view_all_departments":
                viewAllDepartments();
                break;
            case "add_department":
                addDepartment();
                break;
            case "remove_department":
                removeDepartment();
                break;
            case "view_all_roles":
                viewAllRoles();
                break;
            case "add_role":
                addRole();
                break;
            case "remove_role":
                removeRole();
                break;
            case "quit":
                quit();
                break;
            default:
                quit();
        }
    })

function viewAllEmployees() {
    console.log("view all employees")
}

function viewAllEmployeesByDepartment() {
    console.log("view all employees by dept")
}

function viewAllEmployeesByManager() {
    console.log("view all employees by manager")
}

function addEmployee() {
    console.log("add employee")
}

function removeEmployee() {
    console.log("remove employee")
}

function updateEmployeeRole() {
    console.log("update employee role")
}

function updateEmployeeManager() {
    console.log("update employee manager")
}

function viewAllDepartments() {
    console.log("view all departments")
}

function addDepartment() {
    console.log("add department")
}

function removeDepartment() {
console.log("remove department")
}

function viewAllRoles() {
console.log("view all roles")
}

function addRole() {
console.log("add role")
}

function removeRole() {
console.log("remove role")
}

function quit() {
console.log("quit")
}