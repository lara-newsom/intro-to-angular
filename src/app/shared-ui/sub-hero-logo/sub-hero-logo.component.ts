import { Component } from '@angular/core';
import { ROUTE_TOKENS } from '../../models/route-tokens';

@Component({
  selector: 'app-sub-hero-logo',
  templateUrl: './sub-hero-logo.component.html',
  styleUrls: ['./sub-hero-logo.component.css']
})
export class SubHeroLogoComponent {
  readonly ROUTE_TOKENS = ROUTE_TOKENS;
}
