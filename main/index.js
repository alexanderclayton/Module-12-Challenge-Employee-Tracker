const inquirer = require('inquirer')
const db = require("./db")
require("console.table")

init();

function init() {
    prompts()
}

function prompts() {
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

            switch (action) {
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
}

function viewAllEmployees() {
    db.showAllEmployees()
        .then(([rows]) => {
            let employees = rows;
            console.log("\n");
            console.table(employees);
        })
        .then(() => prompts());
}

function viewAllEmployeesByDepartment() {
    console.log("view all employees by dept")
}

function viewAllEmployeesByManager() {
    console.log("view all employees by manager")
}

function addEmployee() {
    inquirer
        .prompt([
            {
                name: "first_names",
                message: "What is the employee's first name"
            },
            {
                name: "last_names",
                message: "What's the employee's last name"
            }
        ])
            .then(res => {
                let firstName = res.first_names;
                let lastName = res.last_names;

                db.showAllRoles()
                    .then(([rows]) => {
                        let roles = rows;
                        const roleOptions = roles.map(({ ids, titles}) => ({
                            name: titles,
                            value: ids
                        }));

                        inquirer.prompt({
                            type: "list",
                            name: "roleId",
                            message: "What is the employee's role?",
                            choices: roleOptions
                        })
                            .then(res => {
                                let roleId = res.roleId;

                                db.showAllEmployees()
                                    .then(([rows]) => {
                                        let employees = rows;
                                        const managerChoices = employees.map(({ ids, first_names, last_names}) => ({
                                            name: `${first_names} ${last_names}`,
                                            value: ids
                                        }));

                                        managerChoices.unshift({ name: "None", value: null });

                                        inquirer.prompt({
                                            type: "list",
                                            name: "managerIds",
                                            message: "Who is the employee's manager?",
                                            choices: managerChoices
                                        })
                                            .then(res => {
                                                let employee = {
                                                    manager_ids: res.managerId,
                                                    role_ids: roleId,
                                                    first_names: firstName,
                                                    last_names: lastName
                                                }

                                                db.addEmployees(employee);
                                            })
                                            .then(() => console.log(
                                                `Successfully added ${firstName} ${lastName}!`
                                            ))
                                            .then(() => prompts())
                                    })
                            })
                    })
            })
}

function removeEmployee() {
    console.log("remove employee")
}

function updateEmployeeRole() {
    db.showAllEmployees()
        .then(([rows]) => {
            let employees = rows;
            const employeeChoices = employees.map(({ ids, first_names, last_names }) => ({
                name: `${first_names} ${last_names}`,
                value: ids
            }));

            inquirer
            .prompt([
                {
                    type: "list",
                    name: "employeeId",
                    message: "Which employee would you like to update?",
                    choices: employeeChoices
                }
            ])
                .then(res => {
                    let employeeId = res.employeeId;
                    db.showAllRoles()
                        .then(([rows]) => {
                            let roles = rows;
                            const roleChoices = roles.map(({ ids, titles }) => ({
                                name: titles,
                                value: ids
                            }));

                            inquirer
                            .prompt([
                                {
                                    type: "list",
                                    name: "roleId",
                                    message: "What is the employees new role?",
                                    choices: roleChoices
                                }
                            ])
                                .then(res => db.updateRoles(employeeId, res.roleId))
                                .then(() => console.log("Successfully updated employee's role!"))
                                .then(() => prompts())
                        });
                });
        })
}


function updateEmployeeManager() {
    console.log("update employee manager")
}

function viewAllDepartments() {
    db.showAllDepartments()
        .then(([rows]) => {
            let departments = rows;
            console.log("\n");
            console.table(departments);
        })
        .then(() => prompts());
}

function addDepartment() {
    inquirer
    .prompt([
        {
            name: "names",
            message: "What is the name of the department?"
        }
    ])
        .then(res => {
            let name = res;
            db.addDepartments(name)
                .then(() => console.log(`Successfully added ${name.names} to the database`))
                .then(() => prompts())
        })
}

function removeDepartment() {
    console.log("remove department")
}

function viewAllRoles() {
    db.showAllRoles()
        .then(([rows]) => {
            let roles = rows;
            console.log("\n");
            console.table(roles);
        })
        .then(() => prompts());
}

function addRole() {
    db.showAllDepartments()
        .then(([rows]) => {
            let departments = rows;
            const departmentChoices = departments.map(({ ids, names }) => ({
                name: names,
                value: ids
            }));
            inquirer
            .prompt([
                {
                    name: "titles",
                    message: "What is the name of the role?"
                },
                {
                    name: "salaries",
                    message: "What is the salary rate?"
                },
                {
                    type: "list",
                    name: "department_ids",
                    message: "Which department is the role under",
                    choices: departmentChoices
                }
            ])
                .then(role => {
                    db.addRoles(role)
                        .then(() => console.log(`Added ${role.titles} to the database`))
                        .then(() => prompts())
                })
        })
}

function removeRole() {
    console.log("remove role")
}

function quit() {
    process.exit();
}