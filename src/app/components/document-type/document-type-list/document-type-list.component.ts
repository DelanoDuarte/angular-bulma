import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DocumentTypeService } from '../document-type.service';
import { DocumentType } from '../document-type';

@Component({
  selector: 'app-document-type-list',
  templateUrl: './document-type-list.component.html',
  styleUrls: ['./document-type-list.component.css']
})
export class DocumentTypeListComponent implements OnInit {

  documentTypes: DocumentType[] = []

  @Output()
  numberOfDocumentTypes: EventEmitter<number> = new EventEmitter();

  constructor(
    private documentTypeService: DocumentTypeService) {
  }

  ngOnInit() {
    this.fetchDocumentTypes();
  }

  fetchDocumentTypes() {
    try {
      this.documentTypeService.all().subscribe(data => {
        this.documentTypes = data,
          this.numberOfDocumentTypes.emit(data.length)
      })
    } catch (error) {
      console.log(error);
    }
  }

}
