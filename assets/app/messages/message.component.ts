import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Message } from "./message";

@Component( {
    moduleId: module.id,
    selector: 'my-message',
    templateUrl: 'message.component.html'
  }
)

export class MessageComponent{
  @Input('msg') message: Message;
  @Output editClicked = new EventEmitter();
  color='yellow';

  edit(){
    this.editClicked.emit('Changed');
  }
}
