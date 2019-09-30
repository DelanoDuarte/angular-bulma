import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: "", loadChildren: () => import("../app/components/home/home.module").then(m => m.HomeModule), pathMatch: "full" },
  { path: "employee", loadChildren: () => import("../app/components/employee/employee.module").then(m => m.EmployeeModule) },
  { path: "document", loadChildren: () => import("../app/components/document/document.module").then(m => m.DocumentModule) },
  { path: "document-type", loadChildren: () => import("../app/components/document-type/document-type.module").then(m => m.DocumentTypeModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
