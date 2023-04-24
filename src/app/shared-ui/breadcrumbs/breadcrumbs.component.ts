import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent {
  selectedCategory$ = this.productService.selectedCategory$;
  selectedProduct$ = this.productService.selectedProduct$;

  constructor(private readonly productService: ProductService){}
}
