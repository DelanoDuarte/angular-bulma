import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DocumentTypeService } from '../../document-type/document-type.service';
import { EmployeeService } from '../../employee/employee.service';
import { Employee } from '../../employee/employee';
import { DocumentType } from '../../document-type/document-type';
import { Document } from '../document';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-document-form',
  templateUrl: './document-form.component.html',
  styleUrls: ['./document-form.component.css']
})
export class DocumentFormComponent implements OnInit {

  employees: Employee[] = []
  documentTypes: DocumentType[] = []

  document: Document = new Document();

  documentFg: FormGroup;

  documentFileName: string;

  documentFile: any;

  @Output()
  documentSubmited: EventEmitter<Document> = new EventEmitter();

  constructor(
    private documentTypeService: DocumentTypeService,
    private employeeService: EmployeeService
  ) { }

  ngOnInit() {
    this.initContext();
  }

  fetchDocumentsType() {
    try {
      this.documentTypeService.all().subscribe(data => {
        this.documentTypes = data;
      })
    } catch (error) {
      console.log(error);
    }
  }

  fetchEmployees() {
    try {
      this.employeeService.all().subscribe(data => {
        this.employees = data;
      })
    } catch (error) {
      console.log(error)
    }
  }

  initContext() {
    try {
      this.fetchDocumentsType();
      this.fetchEmployees();
      this.document.employee = new Employee("", "");
      this.document.documentType = new DocumentType("");

      this.createForm();
    } catch (error) {
      console.log(error)
    }
  }

  onAttachDocument(event) {
    this.documentFileName = event.target.files[0].name
    this.documentFile = event.target.files[0];
  }

  private createForm() {
    this.documentFg = new FormGroup({
      employee: new FormControl("", [Validators.required]),
      documentType: new FormControl("", [Validators.required]),
      file: new FormControl(null, [Validators.required])
    })
  }

  submit(): void {
    try {

      if (!this.documentFg.valid) {
        return;
      }

      this.document.employee = this.documentFg.value.employee;
      this.document.documentType = this.documentFg.value.documentType;
      this.document.file = this.documentFg.value.file

      this.documentSubmited.emit(this.document);
    } catch (error) {
      console.log(error)
    }
  }

}
