import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  imports: [],
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
})
export class HeroSectionComponent {
  @Input() imageUrl = '../../assets/images/heros/hero-1.jpg';
}
