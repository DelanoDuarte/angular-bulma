import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DocumentType } from '../document-type';
import { MessageService } from 'src/app/common/message/message.service';

@Component({
  selector: 'app-document-type-form',
  templateUrl: './document-type-form.component.html',
  styleUrls: ['./document-type-form.component.css']
})
export class DocumentTypeFormComponent implements OnInit {

  documentTypeForm: FormGroup;
  documentType: DocumentType = new DocumentType("");

  @Output()
  documentTypeSubmited: EventEmitter<DocumentType> = new EventEmitter();

  constructor(
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.createForm();
  }

  private createForm() {
    this.documentTypeForm = new FormGroup({
      name: new FormControl("", [Validators.required])
    })
  }

  saveAction() {
    if (!this.documentTypeForm.valid) {
      Object.keys(this.documentTypeForm.controls).forEach(d => {
        const controls = this.documentTypeForm.get(d).errors;
        Object.keys(controls).forEach(f => {
          this.messageService.alert("warning", `${d.toUpperCase()} is ${f} Field`, 5000)
        })
      })
      return;
    }

    this.documentType.name = this.documentTypeForm.value.name

    this.documentTypeSubmited.emit(this.documentType);
  }

}
