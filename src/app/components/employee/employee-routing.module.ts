import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeHomeComponent } from './employee-home/employee-home.component';
import { EmployeeNewComponent } from './employee-new/employee-new.component';


const routes: Routes = [
  { path: "", component: EmployeeHomeComponent },
  { path: "new", component: EmployeeNewComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
