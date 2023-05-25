import { Component, inject } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent {
  private readonly productService = inject(ProductService);

  products$ = this.productService.filteredProducts$;

  selectProduct(id: string){
    this.productService.setSelectedProduct(id);
  }
}
