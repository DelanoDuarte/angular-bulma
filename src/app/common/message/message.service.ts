import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private subject = new Subject<any>();

  constructor() {

  }

  alert(messageType, message, time) {
    this.subject.next({ type: messageType, message: message, time: time })
  }

  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }
}
