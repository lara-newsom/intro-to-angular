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
  // create a private readonly property called selectedCategory that is a BehaviorSubject
  // set the initial value to Category.ALL
  private readonly selectedCategory = new BehaviorSubject<Category>(Category.ALL);

  // create a private readonly property called selectedProduct that is a BehaviorSubject
  // set the initial value to undefined
  private readonly selectedProduct = new BehaviorSubject<string | undefined>(undefined);


  private readonly products = new BehaviorSubject<Product[]>(PRODUCTS);
  readonly products$ = this.products.asObservable();

  // expose a public property called selectedCategory$ equal to the observable value of the selectedCategory subject
  readonly selectedCategory$ = this.selectedCategory.asObservable();

  readonly homeProducts$ = this.products$.pipe(
    map((products) => {
      const middle = Math.floor(products.length / 2);

      return [products[0], products[middle], products[products.length - 1]];
    })
  );

  // create an observable property called filteredProducts$
  // start the stream with the selectedCategory$ subject
  // use switchMap to use the value from selectedCategory$ to filter products$
  // if Category.ALL is selected all products$ should be returned


  // create an observable property called selectedProduct$
  // start the stream with the selectedProduct subject
  // use switchMap to use the value from selectedProduct to filter products$
  // if no product is found return undefined


  constructor(
    private readonly productApiService: ProductApiService
  ) {
    this.productApiService.getProducts$
      .pipe(takeUntilDestroyed())
      .subscribe((products) => {
        this.products.next(products);
      });
  }

  // create a public class method called setSelectedProduct
  // when invoked it calls next on the private selectedProduct subject

  // create a public class method called setSelectedCategory
  // when invoked it calls next on the private selectedCategory subject
}
