import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-document-home',
  templateUrl: './document-home.component.html',
  styleUrls: ['./document-home.component.css']
})
export class DocumentHomeComponent implements OnInit {

  numberOfDocuments: number = 0;

  constructor() { }

  ngOnInit() {
  }

  getNumberOfDocuments(numberDocuments) {
    this.numberOfDocuments = numberDocuments;
  }

}
