import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  public employees: Array<Employee> = [
    new Employee("James", "Sullivan"), new Employee("Jamal", "Jones"), new Employee("Chris", "Johassen"), new Employee("Don", "Juan")
  ]

  constructor() { }

  all(): Observable<Employee[]> {
    return of(this.employees);
  }

  save(employee: Employee) {
    this.employees.push(employee);
    return of(employee);
  }
}
