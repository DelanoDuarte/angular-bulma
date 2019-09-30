export class Employee {

    id: number;
    name: string;
    surname: string;
    employeeId: number;

    constructor(name: string, surname: string) {
        this.name = name;
        this.surname = surname;
        this.id = Math.floor(Math.random() * 10000000000);
        this.employeeId = Math.floor(Math.random() * 100000);
    }
}