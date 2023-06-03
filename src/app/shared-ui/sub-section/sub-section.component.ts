import { NgFor, AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { CardComponent } from '../card/card.component';

@Component({
  standalone: true,
  imports: [
    // add imports for NgFor, AsyncPipe, and CardComponent
    NgFor,
    AsyncPipe,
    CardComponent,
  ],
  selector: 'app-sub-section',
  templateUrl: './sub-section.component.html',
  styleUrls: ['./sub-section.component.css']
})
export class SubSectionComponent {
  // inject the Product service into the class
  private readonly productService = inject(ProductService);

  // create an observable property called featured$ and set it equal to productService.homeProducts$
  readonly featured$ = this.productService.homeProducts$;
}
