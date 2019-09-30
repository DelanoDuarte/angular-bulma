import { Injectable } from '@angular/core';
import { Document } from './document';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  documents: Document[] = []

  constructor() {
  }

  save(document: Document): Observable<Document> {
    this.documents.push(document);
    return of(document);
  }

  all(): Observable<Document[]> {
    return of(this.documents);
  }

}
