import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentTypeRoutingModule } from './document-type-routing.module';
import { DocumentTypeHomeComponent } from './document-type-home/document-type-home.component';
import { DocumentTypeListComponent } from './document-type-list/document-type-list.component';
import { DocumentTypeFormComponent } from './document-type-form/document-type-form.component';
import { DocumentTypeNewComponent } from './document-type-new/document-type-new.component';
import { DocumentTypeService } from './document-type.service';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [DocumentTypeHomeComponent, DocumentTypeListComponent, DocumentTypeFormComponent, DocumentTypeNewComponent],
  imports: [
    CommonModule,
    DocumentTypeRoutingModule,
    SharedModule
  ],
  providers: [
    DocumentTypeService
  ]
})
export class DocumentTypeModule { }
