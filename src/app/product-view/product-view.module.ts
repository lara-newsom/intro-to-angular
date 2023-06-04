import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailViewComponent } from './detail-view/detail-view.component';
import { ProductViewComponent } from './product-view.component';



@NgModule({
  declarations: [
    ProductViewComponent,
    DetailViewComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProductViewModule { }
