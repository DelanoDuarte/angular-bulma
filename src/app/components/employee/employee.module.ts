import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeHomeComponent } from './employee-home/employee-home.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { EmployeeService } from './employee.service';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { EmployeeNewComponent } from './employee-new/employee-new.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [EmployeeHomeComponent, EmployeesListComponent, EmployeeFormComponent, EmployeeNewComponent],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    SharedModule
  ],
  providers: [
    EmployeeService
  ]
})
export class EmployeeModule { }
