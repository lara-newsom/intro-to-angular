import { NgModule } from '@angular/core';
import { SubHeroLogoComponent } from './sub-hero-logo.component';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [SubHeroLogoComponent],
  exports: [SubHeroLogoComponent],
  imports: [
    MatButtonModule,
    MatMenuModule,
  ],
})
export class SubHeroLogoModule {}
