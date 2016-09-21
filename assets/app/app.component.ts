import { Component } from '@angular/core';
import { MessageListComponent } from './messages/message-list.component'

@Component({
    moduleId: module.id,
    selector: 'my-app',
    template: `<div class="row">
                  <my-message-list></my-message-list>
              </div>`,
    directives:[MessageListComponent]
})
export class AppComponent {

}
