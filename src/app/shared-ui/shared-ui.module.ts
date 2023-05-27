import { NgModule } from '@angular/core';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { SubHeroLogoModule } from './sub-hero-logo/sub-hero-logo.module';

@NgModule({
  declarations: [
    BreadcrumbsComponent,
  ],
  exports: [
    BreadcrumbsComponent,
  ],
  imports: [
    RouterModule,
    MatButtonModule,
    MatMenuModule,
    SubHeroLogoModule,
  ]
})
export class SharedUiModule {}
