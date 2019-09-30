import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, Validators, FormControl } from "@angular/forms";
import { Employee } from '../employee';
import { MessageService } from 'src/app/common/message/message.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {

  employee: Employee = new Employee("", "");
  employeeForm: FormGroup;

  @Output()
  employeeSubmited: EventEmitter<Employee> = new EventEmitter();

  constructor(private messageService: MessageService) { }

  ngOnInit() {
    this.createForm()
  }

  private createForm() {
    this.employeeForm = new FormGroup({
      name: new FormControl(this.employee.name, [Validators.required, Validators.minLength(3)]),
      surname: new FormControl(this.employee.surname, [Validators.required]),
    })
  }

  saveAction() {
    if (!this.employeeForm.valid) {

      Object.keys(this.employeeForm.controls).forEach(e => {
        const formErros = this.employeeForm.get(e).errors;

        if (formErros) {
          Object.keys(formErros).forEach(m => {
            this.messageService.alert("warning", `${e.toUpperCase()} is ${m}`, 5000)
          })
        }
      })

      console.log(this.employeeForm)
      return;
    }

    this.employee.name = this.employeeForm.value.name
    this.employee.surname = this.employeeForm.value.surname

    this.employeeSubmited.emit(this.employee);
    console.log(this.employee)
  }

}
