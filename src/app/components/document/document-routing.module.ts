import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocumentHomeComponent } from './document-home/document-home.component';
import { DocumentNewComponent } from './document-new/document-new.component';


const routes: Routes = [
  { path: "", component: DocumentHomeComponent },
  { path: "new", component: DocumentNewComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentRoutingModule { }
