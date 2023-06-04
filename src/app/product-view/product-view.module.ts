import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailViewComponent } from './detail-view/detail-view.component';
import { ProductViewComponent } from './product-view.component';
import { SideMenuComponent } from './side-menu/side-menu.component';



@NgModule({
  declarations: [
    ProductViewComponent,
    DetailViewComponent,
    SideMenuComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProductViewModule { }
