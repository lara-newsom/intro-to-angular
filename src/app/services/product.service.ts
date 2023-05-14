import { Injectable } from '@angular/core';
import { BehaviorSubject, map, of, switchMap, tap } from 'rxjs';
import { Product } from '../models/product';
import { PRODUCTS } from '../models/product-data.mock';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private readonly selectedCategory = new BehaviorSubject<string>(Category.ALL);
  private readonly selectedProduct = new BehaviorSubject<string | undefined>(undefined);

  readonly products$ = of(PRODUCTS);
  readonly selectedCategory$ = this.selectedCategory.asObservable();
  readonly homeProducts$ = this.products$.pipe(
    map((products) => {
      const middle = Math.floor(products.length / 2);
      return [products[0], products[middle], products[products.length -1]];
    })
  );

  readonly filteredProducts$ = this.selectedCategory.pipe(
    switchMap((category) => this.products$.pipe(
      map((products) => {
        if(category === Category.ALL) {
          return products;
        }

        return products.filter((product: Product) => product.category === category);
      }),
    ))
  );

  readonly selectedProduct$ = this.selectedProduct.pipe(switchMap((id) =>
    this.products$.pipe(
      map((products) => {
        if(id){
          return products.find((product) => product.id === id);
        }

        return undefined;
      })
    )));

  setSelectedProduct(id: string) {
    this.selectedProduct.next(id);
  }

  setSelectedCategory(category: string) {
    this.selectedCategory.next(category);
  }
}
