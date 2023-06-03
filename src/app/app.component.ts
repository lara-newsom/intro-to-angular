import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  myEventHandler(name: string){
    console.log('Event was emitted with value: ', name);
  }
}
