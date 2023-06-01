import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ContactComponent } from './contact.component';
import { Route, RouterModule } from '@angular/router';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BreadcrumbsComponent } from '../shared-ui/breadcrumbs/breadcrumbs.component';

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
    MatProgressSpinnerModule,
    MatButtonModule,
    BreadcrumbsComponent,
    NgIf,
    FormsModule,
    RouterModule.forChild(ROUTES),
  ]
})
export class ContactModule { }
