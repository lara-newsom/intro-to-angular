import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() myEvent = new EventEmitter<string>();

  menuItemOne = 'Menu Item One';
  logoUrl = '../../assets/images/justlikepeople.png';

  clickMenuItem(name: string){
    console.log(name, ' was clicked!');
    this.myEvent.emit(name);
  }
}
