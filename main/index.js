const inquirer = require('inquirer')
const { listenerCount } = require('mysql2/typings/mysql/lib/Connection')

inquirer
    .createPromptModule([
        {
            type: "list",
            message: "What would you like to do?",
            choices:
                [
                    "View All Employees",
                    "View All Employees By Department",
                    "View All Employees By Manager",
                    "Add Employee",
                    "Remove Employee",
                    "Update Employee Rode",
                    "Update Employee Manager",
                    "View All Roles",
                    "Add Role",
                    "Remove Role",
                    "Quit"
                ],
            name: "userAction"
        },
    ])