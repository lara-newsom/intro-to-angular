import { Component, Input } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ROUTE_TOKENS } from 'src/app/models/route-tokens';
import { Breadcrumb } from 'src/app/models/breadcrumb';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent{
  @Input({required: true}) breadcrumbs: Breadcrumb[] = [];
  selectedCategory$ = this.productService.selectedCategory$;
  selectedProduct$ = this.productService.selectedProduct$;
  readonly ROUTE_TOKENS = ROUTE_TOKENS;

  constructor(
    private readonly productService: ProductService,
  ){}
}
