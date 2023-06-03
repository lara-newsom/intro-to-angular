import { Injectable } from '@angular/core';
import { BehaviorSubject, map, of, switchMap } from 'rxjs';
import { Product } from '../models/product';
import { Category } from '../models/category';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { PRODUCTS } from '../models/product-data.mock';
import { ProductApiService } from './product-api.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // create a private readonly property called products that is a BehaviorSubject
  // We will initialize the subject with the hardcoded PRODUCTS array

  // expose a public property called products$ equal to the observable value of the products subject

  // Let's change this property to return the first, middle, and last product
  // We will use the products response from productApiService.getProducts$
  readonly homeProducts$ = of(PRODUCTS.slice(0, 3));

  // add a dependency for productApiService in the constructor
  // in the constructor method, subscribe to getProducts$
  // using the tap operator, call next on the products subject
  // use the takeUntilDestroyed operator to handle cleaning up the subscription
  constructor() {
  }
}
