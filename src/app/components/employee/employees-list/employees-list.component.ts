import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {

  employees: Employee[] = []

  @Output()
  numberOfEmployees: EventEmitter<number> = new EventEmitter();

  constructor(
    private employeeService: EmployeeService
  ) { }

  ngOnInit() {
    this.getEmployees()
  }

  getEmployees() {
    try {
      this.employeeService.all()
        .subscribe(data => {
          this.employees = data,
            this.numberOfEmployees.emit(this.employees.length)
        })
    } catch (error) {
      console.log(error)
    }
  }

}
