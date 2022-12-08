const server = require("./server");

class Database {
    constructor(server) {
        this.server = server;
    }

    showAllEmployees() {
        return this.server.propmise().query(
            "SELECT employee.ids"
        )
    }
}