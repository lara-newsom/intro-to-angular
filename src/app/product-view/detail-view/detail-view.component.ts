import { Component, Input, inject } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.css']
})
export class DetailViewComponent {
  @Input() set productId(val: string) {
      this.productService.setSelectedProduct(val);
    }

  private readonly productService = inject(ProductService);
  readonly selectedProduct$ = this.productService.selectedProduct$;
}
