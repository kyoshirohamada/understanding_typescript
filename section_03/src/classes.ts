abstract class Department {    
    protected employees: string[] = [];

    constructor(protected id: string, public name: string) {        
    }

    static createEmployee(name: string) {
        return { name: name };
    }

    abstract describe(this: Department): void; 

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

    describe() {
        console.log('IT Department - ID: ' + this.id);
    }
}

class AccountingDepartment extends Department {    
    private lastReport: string;
    private static instance: AccountingDepartment;

    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;            
        }
        throw new Error('No report found.');
    }

    set mostRecentReport(value) {
        if (!value) {
            throw new Error('Pleas pass in a valid value!');
        }
        this.addReport(value);
    }

    private constructor(id: string, private reports: string []) {
        super(id, 'Accounting');  
        this.lastReport = reports[0];      
    }

    static getInstance() {
        if (AccountingDepartment.instance) {
            return this.instance;
        }

        this.instance = new AccountingDepartment('d2', []);
        return this.instance;
    }

    describe() {
        console.log('Accounting Department - ID: ' + this.id);
    }

    addEmployee(name: string) {
        if (name === 'Max') {
            return;
        }

        this.employees.push(name);
    }

    addReport(text: string) {
        this.reports.push(text);
        this.lastReport = text;
    }

    printReports() {
        console.log(this.reports);
    }
}

const IT = new ITDepartment('d1', ['Max']);
IT.describe();

const accounting = AccountingDepartment.getInstance();
accounting.describe();