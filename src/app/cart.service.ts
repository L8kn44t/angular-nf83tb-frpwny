import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];

  // Appends a product to array of items
  addToCart(product) {
    this.items.push(product);
  }

  // Collects the items and returns each item with its associated quantity
  getItems() {
    return this.items;
  }

  // Returns an empty array of items
  clearCart() {
    this.items = [];
    return this.items;
  }

  // Retrieves the shipping data
  getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }

  constructor(
    private http: HttpClient
  ) {}
}