import { NgModule } from '@angular/core';
import { BreadcrumbsComponent } from './breadcrumbs.component';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterLink } from '@angular/router';

@NgModule({
  declarations: [
    BreadcrumbsComponent,
  ],
  exports: [
    BreadcrumbsComponent,
  ],
  imports: [
    AsyncPipe,
    NgFor,
    NgIf,
    RouterLink,
    MatButtonModule,
  ]
})
export class BreadcrumbsModule {}
