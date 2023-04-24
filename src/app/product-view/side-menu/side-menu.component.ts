import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent {
  products$ = this.productService.filteredProducts$;
  selectedProduct$ = this.productService.selectedProduct$;

  constructor(
    private readonly productService: ProductService,
  ) {}

  selectProduct(id: string){
    this.productService.setSelectedProduct(id);
  }
}
