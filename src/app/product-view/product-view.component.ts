import { Component, Input, inject } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent {
  @Input() set categoryId(val: string) {
    this.productsService.setSelectedCategory(val.toLowerCase());
  }

  private readonly productsService = inject(ProductService);
}
