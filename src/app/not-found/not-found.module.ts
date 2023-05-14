import { NgModule } from '@angular/core';
import { NotFoundComponent } from './not-found.component';
import { Route, RouterModule } from '@angular/router';
import { SubHeroLogoModule } from '../shared-ui/sub-hero-logo/sub-hero-logo.module';

const ROUTES: Route[] = [
  {
    path: '',
    component: NotFoundComponent,
  }
]

@NgModule({
  declarations: [
    NotFoundComponent
  ],
  exports: [
    NotFoundComponent
  ],
  imports: [
    SubHeroLogoModule,
    RouterModule.forChild(ROUTES),
  ],
})
export class NotFoundModule {}
