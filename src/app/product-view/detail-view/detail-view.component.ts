import { Component, Input, inject } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.css']
})
export class DetailViewComponent {
  // We are using a setter on the input which is bound to the router query params
  // This allows us to set the selected product in our shared service
  @Input() set productId(val: string) {
      this.productService.setSelectedProduct(val);
    }

  // The inject function is the same as declaring the service inside the constructor
  private readonly productService = inject(ProductService);

  // We are using declarative style programming to set this property equal to the selectedProduct observable
  readonly selectedProduct$ = this.productService.selectedProduct$;
}
