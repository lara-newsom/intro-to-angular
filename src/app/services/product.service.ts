import { Injectable } from '@angular/core';
import { BehaviorSubject, map, switchMap } from 'rxjs';
import { Product } from '../models/product';
import { Category } from '../models/category';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { PRODUCTS } from '../models/product-data.mock';
import { ProductApiService } from './product-api.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private readonly selectedCategory = new BehaviorSubject<string>(Category.ALL);
  private readonly selectedProduct = new BehaviorSubject<string | undefined>(undefined);

  // initialized with PRODUCTS mock data in case endpoint in not running
  private readonly products = new BehaviorSubject<Product[]>(PRODUCTS);

  readonly products$ = this.products.asObservable();
  readonly selectedCategory$ = this.selectedCategory.asObservable();

  // Products for the home view. We are grabbing three out of the array.
  readonly homeProducts$ = this.products$.pipe(
    map((products) => {
      if(products.length){
        const middle = Math.floor(products.length / 2);
        return [products[0], products[middle], products[products.length -1]];
      }
      return [];
    })
  );

  // Filtered products default to ALL when no category is selected
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

  // Filters products by the selected product id
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
    private readonly productApiService: ProductApiService
  ) {
    this.productApiService.getProducts$
      .pipe(takeUntilDestroyed())
      .subscribe((response) => {
        this.products.next(response.products);
      });
  }

  // public api that can set the selected product on the selectedProduct behavior subject
  setSelectedProduct(id: string) {
    this.selectedProduct.next(id);
  }

  // public api that can set the selected category on the selectedCategory behavior subject
  setSelectedCategory(category: string) {
    this.selectedCategory.next(category);
  }
}
