import { Component, Input, inject } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent{
  // create an input property called categoryId
  // use a setter to invoke the setSelectedCategory method on the productService
  @Input() set categoryId(val: string) {
    this.productService.setSelectedCategory(val);
  };

  // inject the productService
  private readonly productService = inject(ProductService);
}


