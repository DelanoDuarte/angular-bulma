import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../employee/employee.service';
import { DocumentService } from '../../document/document.service';
import { Document } from '../../document/document';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  numberOfEmployees: number = 0;
  numberOfDocuments: number = 0;

  last3DocumentsSubmited: Document[] = [];

  constructor(
    private employeeService: EmployeeService,
    private documentsService: DocumentService
  ) { }

  ngOnInit() {
    this.fetchInfoHome();
  }

  fetchInfoHome() {
    try {
      this.employeeService.all().subscribe(data => {
        this.numberOfEmployees = data.length;
      })

      this.documentsService.all().subscribe(data => {
        this.numberOfDocuments = data.length;
        this.last3DocumentsSubmited = data.slice(Math.max(data.length - 3, 0))
      })

    } catch (error) {
      console.log(error)
    }
  }

}
