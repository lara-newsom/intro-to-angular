import { Component, inject } from '@angular/core';
import { tap } from 'rxjs';
import { ROUTE_TOKENS } from 'src/app/models/route-tokens';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-sub-section',
  templateUrl: './sub-section.component.html',
  styleUrls: ['./sub-section.component.css']
})
export class SubSectionComponent {
  private readonly productService = inject(ProductService);

  featured$ = this.productService.homeProducts$;
}
