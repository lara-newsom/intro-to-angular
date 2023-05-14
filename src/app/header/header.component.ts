import { Component } from '@angular/core';
import { LINKS, CategoryLink } from '../models/category';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  readonly LINKS: CategoryLink[] = LINKS;
}
