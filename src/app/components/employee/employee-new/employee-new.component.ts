import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import { MessageService } from 'src/app/common/message/message.service';

@Component({
  selector: 'app-employee-new',
  templateUrl: './employee-new.component.html',
  styleUrls: ['./employee-new.component.css']
})
export class EmployeeNewComponent implements OnInit {

  constructor(
    private employeeService: EmployeeService,
    private messageService: MessageService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  addNewEmployee(employee: Employee) {
    try {
      this.employeeService.save(employee).subscribe(res => {
        this.router.navigate(['employee']),
          this.messageService.alert("success", "Saved Sucessfully", 4000)
      });
    } catch (error) {
      console.log(error)
    }
  }

}
