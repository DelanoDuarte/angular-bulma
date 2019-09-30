import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { MessageService } from './message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit, OnDestroy {

  messageSubscription: Subscription;

  renderMsg: boolean;

  messageType: string;
  messageText: string;

  constructor(private messageService: MessageService) {
    this.messageSubscription = this.messageService.getMessage().subscribe(data => {
      this.messageText = data.message,
        this.messageType = data.type,
        this.renderMsg = true
      this.mountTimer(data.time)
    })
  }

  ngOnInit() {

  }

  mountTimer(time) {
    setTimeout(() => {
      this.renderMsg = false;
    }, time);
  }

  ngOnDestroy(): void {
    this.messageSubscription.unsubscribe()
  }

}
