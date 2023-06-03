import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Product } from '../models/product';

// this is the return type of the endpoint
interface ProductsResponse {
  products: Product[];
}

@Injectable({
  providedIn: 'root'
})
export class ProductApiService {
  // inject the HttpClient using the inject function

  // declare a constant for the URL endpoint
  // private readonly endpointUrl = 'http://localhost:3000/products';

  // create a public readonly property to hold the Observable returned by httpClient.get
  // we will use the map operator to unwrap the response in this service
}
