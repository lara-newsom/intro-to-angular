import { Component, Input, inject } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.css']
})
export class DetailViewComponent {
  // create an input property called productId
  // use a setter to invoke the setSelectedProduct method on the productService
  @Input() set productId(val: string) {
    this.productService.setSelectedProduct(val);
  }
componentProperty = 'name'
  // Inject the productService into the class
  private readonly productService = inject(ProductService);

  // create a class property called selectedProduct$ and set it equal to productService.selectedProduct$
  readonly selectedProduct$ = this.productService.selectedProduct$;
}

