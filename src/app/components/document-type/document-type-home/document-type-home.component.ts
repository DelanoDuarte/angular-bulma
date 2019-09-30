import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-document-type-home',
  templateUrl: './document-type-home.component.html',
  styleUrls: ['./document-type-home.component.css']
})
export class DocumentTypeHomeComponent implements OnInit {

  numberOfDocumentTypes: 0;

  constructor() { }

  ngOnInit() {
  }

  numberDocumentTypes(numberDocumentTypes) {
    this.numberOfDocumentTypes = numberDocumentTypes;
  }

}
