import { Component, inject } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent {
  // declare a dependency on the ProductService

  // create a property called products$ and set it equal to productService.filteredProducts$

  // create a class method that sets the selected product on the product service
}
