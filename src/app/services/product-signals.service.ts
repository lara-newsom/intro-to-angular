import { Injectable, computed, signal } from '@angular/core';
import { delay, of } from 'rxjs';
import { Product } from '../models/product';
import { PRODUCTS } from '../models/product-data.mock';
import { Category } from '../models/category';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root'
})
export class ProductSignalsService {
  readonly selectedCategory = signal<string>(Category.ALL);
  readonly selectedProductId = signal<string | undefined>(undefined);

  // Http requests are async and return an observable
  // this code is simulating an http request
  readonly products$ = of(PRODUCTS).pipe(delay(300));

  readonly products = signal<Product[]>([]);

  readonly filteredProducts = computed(() => {
    if(this.selectedCategory() === Category.ALL) {
      return PRODUCTS;
    }

    return PRODUCTS.filter((product: Product) => product.category === this.selectedCategory());
  });

  readonly selectedProduct = computed(() => {
    return PRODUCTS.find((product) => product.id === this.selectedProductId())
  });

  constructor(){
    this.products$
      .pipe(takeUntilDestroyed())
      .subscribe((products) => this.products.set(products));
  }
}
