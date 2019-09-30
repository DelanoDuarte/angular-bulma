import { Component, OnInit } from '@angular/core';
import { DocumentType } from '../document-type';
import { DocumentTypeService } from '../document-type.service';
import { Router } from '@angular/router';
import { MessageService } from 'src/app/common/message/message.service';

@Component({
  selector: 'app-document-type-new',
  templateUrl: './document-type-new.component.html',
  styleUrls: ['./document-type-new.component.css']
})
export class DocumentTypeNewComponent implements OnInit {

  constructor(
    private documentTypeService: DocumentTypeService,
    private router: Router,
    private messageService: MessageService
  ) { }

  ngOnInit() {
  }

  addNewDocumentType(documentType: DocumentType) {
    try {
      this.documentTypeService.add(documentType).subscribe(data => {
        this.router.navigate(["/document-type"]),
          this.messageService.alert("success", "New Document Type saved sucessfully", 4000)
      });
    } catch (error) {
      console.log(error);
    }
  }
}
