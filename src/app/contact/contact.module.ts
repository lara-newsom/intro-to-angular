import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { ContactComponent } from './contact.component';
import { BreadcrumbsModule } from '../shared-ui/breadcrumbs/breadcrumbs.module';
import { Route, RouterModule } from '@angular/router';

const ROUTES: Route[] = [
  {
    path: '',
    component: ContactComponent,
  }
];

@NgModule({
  declarations: [
    ContactComponent
  ],
  exports: [
    ContactComponent,
  ],
  imports: [
    MatButtonModule,
    BreadcrumbsModule,
    RouterModule.forChild(ROUTES),
  ]
})
export class ContactModule { }
