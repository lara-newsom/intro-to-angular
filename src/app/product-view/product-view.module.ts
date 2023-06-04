import { NgModule } from '@angular/core';
import { ProductViewComponent } from './product-view.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { DetailViewComponent } from './detail-view/detail-view.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { Route, RouterModule } from '@angular/router';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { ROUTE_TOKENS } from '../models/route-tokens';

const ROUTES: Route[] = [
  // declare a route that matches the categoryId url param that routes to the ProductViewComponent
  // To route content into the nested router outlet, create a children array
  // declare a route in the children array that matches ROUTE_TOKENS.productDetail and routes to DetailViewComponent
  {
    path: ':categoryId',
    component: ProductViewComponent
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
    RouterModule.forChild(ROUTES),
  ],
})
export class ProductViewModule {}



