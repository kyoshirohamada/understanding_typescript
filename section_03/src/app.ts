class Department {    
    private employees: string[] = [];

    constructor(private id: string, private name: string) {        
    }

    describe(this: Department) {
        console.log(`Department (${this.id}): ${this.name}`);
    }

    addEmployee(employee: string) {
        this.employees.push(employee);
    }
}

const accounting = new Department('d1', 'Accounting');

console.log(accounting);

accounting.describe();