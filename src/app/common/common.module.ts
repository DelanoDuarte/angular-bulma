import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageComponent } from './message/message.component';
import { MessageService } from './message/message.service';



@NgModule({
  declarations: [MessageComponent],
  imports: [
    CommonModule
  ],
  providers: [
    MessageService
  ],
  exports: [
    MessageComponent
  ]
})
export class CommonAppModule { }
