import { Component, EventEmitter, Output } from '@angular/core';
import { LINKS } from '../models/category';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  // readonly because we do not intend to alter this prop.
  readonly LINKS = LINKS;

  readonly menuItemOne = 'Menu Item One';
  readonly logoUrl = '../../assets/images/justlikepeople.png';

  clickMenuItem(name: string){
    console.log(name, ' was clicked!');
  }
}
