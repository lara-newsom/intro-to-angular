import { NgModule } from '@angular/core';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { SubHeroLogoComponent } from './sub-hero-logo/sub-hero-logo.component';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [
    BreadcrumbsComponent,
    SubHeroLogoComponent,
  ],
  exports: [
    BreadcrumbsComponent,
    SubHeroLogoComponent,
  ],
  imports: [
    MatButtonModule,
    MatMenuModule,
  ]
})
export class SharedUiModule {}
