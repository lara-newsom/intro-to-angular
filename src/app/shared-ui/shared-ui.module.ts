import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { SubHeroLogoModule } from './sub-hero-logo/sub-hero-logo.module';
import { BreadcrumbsModule } from './breadcrumbs/breadcrumbs.module';

@NgModule({
  declarations: [
  ],
  exports: [
  ],
  imports: [
    RouterModule,
    MatButtonModule,
    MatMenuModule,
    SubHeroLogoModule,
    BreadcrumbsModule,
  ]
})
export class SharedUiModule {}
