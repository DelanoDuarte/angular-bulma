import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocumentTypeHomeComponent } from './document-type-home/document-type-home.component';
import { DocumentTypeNewComponent } from './document-type-new/document-type-new.component';


const routes: Routes = [
  { path: "", component: DocumentTypeHomeComponent },
  { path: "new", component: DocumentTypeNewComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentTypeRoutingModule { }
