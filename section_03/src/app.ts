class Department {    
    private employees: string[] = [];

    constructor(private id: string, public name: string) {        
    }

    describe(this: Department) {
        console.log(`Department (${this.id}): ${this.name}`);
    }

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

class ITDepartment extends Department {  
    admins: string[];  
    constructor(id: string, admins: string []) {
        super(id, 'IT');
        this.admins = admins;
    }
}

class AccountingDepartment extends Department {      
    constructor(id: string, private reports: string []) {
        super(id, 'Accounting');       
    }

    addReport(text: string) {
        this.reports.push(text);
    }

    printReports() {
        console.log(this.reports);
    }
}

const IT = new ITDepartment('d1', ['Max']);

IT.addEmployee('Max');
IT.addEmployee('Manu');
IT.describe();

IT.name = 'NEW Name';
IT.printEmployeeInformation();

console.log(IT);

const accounting = new AccountingDepartment('d2', []);
accounting.addReport('Something went wrong...');
accounting.printReports();