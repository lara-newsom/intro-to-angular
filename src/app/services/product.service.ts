import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { PRODUCTS } from '../models/product-data.mock';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  homeProducts$ = of(PRODUCTS.slice(0, 3));
}


