import { Component } from "@angular/core";
import { MessageComponent } from './message.component'
import { Message } from './message'

@Component({
  selector: 'my-message-list',
  template: `
    <section class="col-md-8 col-md-offset-2">
      <my-message *ngFor="let message of messages" [msg]="message"></my-message>
    </section>
  `,
  directives:[MessageComponent]
})
export class MessageListComponent{
  messages: Message[] = [
    new Message('Message 1',null,'Alejandro'),
    new Message('Message 2',null,'Alejandro')
  ];
}
