import { NgModule } from '@angular/core';
import { ProductViewComponent } from './product-view.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { DetailViewComponent } from './detail-view/detail-view.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { Route, RouterModule } from '@angular/router';
import { BreadcrumbsModule } from '../shared-ui/breadcrumbs/breadcrumbs.module';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';

const ROUTES: Route[] = [
  {
    path: ':categoryId',
    component: ProductViewComponent,
    children: [
      {
        path: 'detail/:productId',
        component: DetailViewComponent,
      }
    ]
  }
]

@NgModule({
  declarations: [
    ProductViewComponent,
    DetailViewComponent,
    SideMenuComponent,
  ],
  imports: [
    AsyncPipe,
    NgIf,
    NgFor,
    MatButtonModule,
    MatIconModule,
    BreadcrumbsModule,
    RouterModule.forChild(ROUTES),
  ],
})
export class ProductViewModule {}

