import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DocumentService } from '../document.service';
import { Document } from '../document';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit {

  documents: Document[] = [];

  @Output()
  numberOfDocuments: EventEmitter<number> = new EventEmitter();

  constructor(private documentService: DocumentService, private domSan: DomSanitizer) { }

  ngOnInit() {
    this.fetchDocuments()
  }

  fetchDocuments() {
    try {
      this.documentService.all().subscribe(data => {
        this.documents = data;
        this.numberOfDocuments.emit(data.length)
      })
    } catch (error) {
      console.log(error);
    }
  }

  download(file) {
    try {
      const fileBlob = new Blob([file], { type: 'application/pdf' })
      const url = window.URL.createObjectURL(fileBlob)
      window.open(url);
    } catch (error) {
      console.log(error)
    }
  }

  sanitizeUrl(url) {
    return this.domSan.bypassSecurityTrustHtml(url);
  }

}
