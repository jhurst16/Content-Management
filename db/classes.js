const connection = require('./server');

class MainData {
    constructor(data) {
        this.data = data
    }
    viewAllEmployees() {
        return this.data.promise().query(`SELECT 
        employees.id, employees.first_name, employees.last_name, employees.role_id  AS job_title, department_name AS department, roles.salary
        
        FROM employees
        
        JOIN roles ON employees.role_id = roles.id
        
        JOIN departments ON roles.department_id = departments.id;`
        )
    };

    viewRoles() {
        return this.data.promise().query(`SELECT * FROM roles`)
    }


    viewDepartments() {
        return this.data.promise().query(`SELECT * FROM departments`)
    }


    createDepartment(departments) {
        return this.data.promise().query(`INSERT INTO departments(name) VALUES (?)`, departments)
    }


    createRole(roles) {
        return this.data.promise().query(`INSERT INTO roles SET ?`, roles)
    }
    createEmployee(employees) {
        return this.data.promise().query(`INSERT INTO employees SET ?`, employees)
    }
}

module.exports = new MainData(connection)