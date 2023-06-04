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

  // Inject the productService into the class

  // create a class property called selectedProduct$ and set it equal to productService.selectedProduct$
}
