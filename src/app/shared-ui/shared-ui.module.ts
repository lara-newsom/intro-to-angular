import { NgModule } from '@angular/core';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { SubHeroLogoComponent } from './sub-hero-logo/sub-hero-logo.component';
import { SubSectionComponent } from './sub-section/sub-section.component';

@NgModule({
  imports: [
    HeroSectionComponent,
    SubHeroLogoComponent,
    SubSectionComponent,
    BreadcrumbsComponent,
  ],
  exports: [
    HeroSectionComponent,
    SubHeroLogoComponent,
    SubSectionComponent,
    BreadcrumbsComponent,
  ]
})
export class SharedUiModule {}
