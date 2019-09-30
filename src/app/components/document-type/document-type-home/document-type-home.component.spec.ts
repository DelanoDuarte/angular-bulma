import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentTypeHomeComponent } from './document-type-home.component';

describe('DocumentTypeHomeComponent', () => {
  let component: DocumentTypeHomeComponent;
  let fixture: ComponentFixture<DocumentTypeHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentTypeHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentTypeHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
