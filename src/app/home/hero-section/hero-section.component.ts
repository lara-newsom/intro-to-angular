import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.css']
})
export class HeroSectionComponent {
  images = [
    '../../assets/images/heros/hero-1.jpg',
    '../../assets/images/heros/hero-2.jpg',
    '../../assets/images/heros/hero-3.jpg',
    '../../assets/images/heros/hero-4.jpg',
    '../../assets/images/heros/hero-5.jpg',
    '../../assets/images/heros/hero-6.jpg',
    '../../assets/images/heros/hero-7.jpg',
    '../../assets/images/heros/hero-8.jpg',
    '../../assets/images/heros/hero-9.jpg',
    '../../assets/images/heros/hero-10.jpg',
    '../../assets/images/heros/hero-11.jpg',
    '../../assets/images/heros/hero-12.jpg',
  ];

  imageIndex = 0;

  changeImage(index: number) {
    this.imageIndex = index;
  }

}
