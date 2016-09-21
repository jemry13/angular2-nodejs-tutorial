import { Component } from '@angular/core';
import { MessageComponent } from './messages/message.component'
import { Message } from './messages/message'

@Component({
    moduleId: module.id,
    selector: 'my-app',
    template: `<div class="row">
                  <section class="col-md-8 col-md-offset-2">
                    <my-message *ngFor="let message of messages" [msg]="message"></my-message>
                  </section>
              </div>`,
    directives:[MessageComponent]
})
export class AppComponent {
  messages: Message[] = [
    new Message('Message 1',null,'Alejandro'),
    new Message('Message 2',null,'Alejandro')
  ];
}
