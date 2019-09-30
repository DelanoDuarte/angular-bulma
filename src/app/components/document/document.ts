import { DocumentType } from '../document-type/document-type';
import { Employee } from '../employee/employee';

export class Document {

    id: number;
    documentType: DocumentType;
    employee: Employee;
    file: File;

    constructor() {
        this.id = Math.floor(Math.random() * 10000000000);
    }

}