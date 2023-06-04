import { Component, inject } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ROUTE_TOKENS } from 'src/app/models/route-tokens';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent {
  // declare a dependency on the ProductService
  private readonly productService = inject(ProductService);

  // create a property called products$ and set it equal to productService.filteredProducts$
  readonly products$ = this.productService.filteredProducts$;
  readonly ROUTE_TOKENS = ROUTE_TOKENS;

  // create a class method that sets the selected product on the product service
  selectProduct(id: string) {
    this.productService.setSelectedProduct(id);
  }
}
