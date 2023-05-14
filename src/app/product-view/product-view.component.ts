import { Component, Input, OnInit, inject } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Breadcrumb } from '../models/breadcrumb';
import { ROUTE_TOKENS } from '../models/route-tokens';
import { Category } from '../models/category';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit{
  @Input() set categoryId(val: string) {
    this.productsService.setSelectedCategory(val.toLowerCase());
    this.breadcrumbs = this.breadcrumbs.slice(0,1);
    this.breadcrumbs.push(
      {
        display: val,
        routerLink: `/${ROUTE_TOKENS.products}/${val.toLowerCase()}`,
      }
    )
  }

  private readonly productsService = inject(ProductService);
  private readonly activatedRoute = inject(ActivatedRoute);
  breadcrumbs: Breadcrumb[] = [
    {
      display: 'Products',
      routerLink: `/${ROUTE_TOKENS.products}/${Category.ALL}`,
    },
  ];

  ngOnInit() {
    this.activatedRoute.queryParamMap.subscribe((paramMap) => {
      this.breadcrumbs = this.breadcrumbs.slice(0, 2);
      if(paramMap.get('productId')){
        this.breadcrumbs.push(
          {
            display: paramMap.get('productId') || '',
            routerLink: ``,
          }
        )
      }})}
}
