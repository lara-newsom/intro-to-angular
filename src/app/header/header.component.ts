import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  menuItemOne = 'Menu Item One';
  logoUrl = '../../assets/images/justlikepeople.png';
}
