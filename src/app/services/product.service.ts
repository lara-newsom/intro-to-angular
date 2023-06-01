import { Injectable } from '@angular/core';
import { BehaviorSubject, map, switchMap } from 'rxjs';
import { Product } from '../models/product';
import { Category } from '../models/category';
import { HttpClient } from '@angular/common/http';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { PRODUCTS } from '../models/product-data.mock';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private readonly selectedCategory = new BehaviorSubject<string>(Category.ALL);
  private readonly selectedProduct = new BehaviorSubject<string | undefined>(undefined);
  private readonly products = new BehaviorSubject<Product[]>(PRODUCTS);

  readonly products$ = this.products.asObservable();
  readonly selectedCategory$ = this.selectedCategory.asObservable();
  readonly homeProducts$ = this.products$.pipe(
    map((products) => {
      if(products.length){
        const middle = Math.floor(products.length / 2);
        return [products[0], products[middle], products[products.length -1]];
      }
      return [];
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

  readonly selectedProduct$ = this.selectedProduct.pipe(
    switchMap((id) =>
      this.products$.pipe(
        map((products) => {
          if(id){
            return products.find((product) => product.id === id);
          }

          return undefined;
        })
      )));

  constructor(
    private readonly http: HttpClient
  ) {
    this.http.get<{products: Product[]}>('http://localhost:3000/products')
      .pipe(takeUntilDestroyed())
      .subscribe((response) => {
        this.products.next(response.products);
      });
  }

  setSelectedProduct(id: string) {
    this.selectedProduct.next(id);
  }

  setSelectedCategory(category: string) {
    this.selectedCategory.next(category);
  }
}
