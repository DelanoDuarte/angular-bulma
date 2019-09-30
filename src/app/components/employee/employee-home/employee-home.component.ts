import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-home',
  templateUrl: './employee-home.component.html',
  styleUrls: ['./employee-home.component.css']
})
export class EmployeeHomeComponent implements OnInit {

  numberOfEmployees: number;

  constructor() { }

  ngOnInit() {
  }

  getNumberOfEmployes(employeeSize) {
    this.numberOfEmployees = employeeSize;
  }

}
