import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.css']
})
export class DetailViewComponent {
  selectedProduct$ = this.productService.selectedProduct$;
  constructor(private readonly productService: ProductService,){}
}
