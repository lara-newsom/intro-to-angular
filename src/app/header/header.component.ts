import { Component } from '@angular/core';
import { Category } from '../models/category';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  readonly Category = Category;
  constructor(
    private readonly productService: ProductService
  ){}

  changeCategory(category: Category){
    this.productService.setSelectedCategory(category);
  }

}
