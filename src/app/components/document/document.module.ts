import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentRoutingModule } from './document-routing.module';
import { DocumentHomeComponent } from './document-home/document-home.component';
import { DocumentListComponent } from './document-list/document-list.component';
import { DocumentFormComponent } from './document-form/document-form.component';
import { DocumentNewComponent } from './document-new/document-new.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    DocumentHomeComponent,
    DocumentListComponent,
    DocumentFormComponent,
    DocumentNewComponent
  ],
  imports: [
    CommonModule,
    DocumentRoutingModule,
    SharedModule
  ]
})
export class DocumentModule { }
