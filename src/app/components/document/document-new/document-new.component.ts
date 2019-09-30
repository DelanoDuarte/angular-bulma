import { Component, OnInit } from '@angular/core';
import { DocumentService } from '../document.service';
import { MessageService } from 'src/app/common/message/message.service';
import { Document } from '../document';
import { Router } from '@angular/router';

@Component({
  selector: 'app-document-new',
  templateUrl: './document-new.component.html',
  styleUrls: ['./document-new.component.css']
})
export class DocumentNewComponent implements OnInit {

  constructor(
    private documentService: DocumentService,
    private messageService: MessageService,
    private router: Router
  ) { }

  ngOnInit() {

  }

  addNewDocument(document: Document) {
    try {
      this.documentService.save(document).subscribe(data => {
        this.router.navigate(["/document"]),
          this.messageService.alert("success", "New Document Sucessfully saved", 5000);
      })
    } catch (error) {
      console.log(error)
    }
  }


}
