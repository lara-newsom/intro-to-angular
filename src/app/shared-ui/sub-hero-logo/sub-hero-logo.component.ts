import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  standalone: true,
  imports: [
    MatButtonModule,
    MatMenuModule,
  ],
  selector: 'app-sub-hero-logo',
  templateUrl: './sub-hero-logo.component.html',
  styleUrls: ['./sub-hero-logo.component.css']
})
export class SubHeroLogoComponent {
  readonly logoUrl = '../../assets/images/badge.png';
}
