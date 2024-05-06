import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Product } from '../interfaces/product.interface';
import { PayloadProduct } from '../interfaces/payload-product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  httpClient = inject(HttpClient);

  getAll () {
    return this.httpClient.get<Product[]>('/api/products')
  }

  post(payload: PayloadProduct) {
    return this.httpClient.post('/api/products', payload)
  }
}
