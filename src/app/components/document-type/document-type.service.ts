import { Injectable } from '@angular/core';
import { DocumentType } from './document-type';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DocumentTypeService {

  public documentTypes: Array<DocumentType> = [
    new DocumentType("Resume"), new DocumentType("Payment"), new DocumentType("Contract"), new DocumentType("Copy Of Id")
  ]

  constructor() { }

  add(documentType: DocumentType): Observable<DocumentType> {
    this.documentTypes.push(documentType);
    return of(documentType);
  }

  all(): Observable<DocumentType[]> {
    return of(this.documentTypes)
  }
}
