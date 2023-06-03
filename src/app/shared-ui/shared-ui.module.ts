import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { SubSectionComponent } from './sub-section/sub-section.component';
import { SubHeroLogoComponent } from './sub-hero-logo/sub-hero-logo.component';
import { CardComponent } from './card/card.component';



@NgModule({
  imports: [
    CommonModule,
    CardComponent,
    HeroSectionComponent,
    SubHeroLogoComponent,
    SubSectionComponent,
  ],
  exports: [
    CommonModule,
    CardComponent,
    HeroSectionComponent,
    SubHeroLogoComponent,
    SubSectionComponent,
  ]
})
export class SharedUiModule { }


