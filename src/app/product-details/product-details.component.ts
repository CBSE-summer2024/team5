import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  originalPrice: number;
  productNumber: string;
  brand: string;
  modelNumber: string;
  sizes: string[];
  image: string;
  deliveryInfo: string;
  returnPolicyUrl: string;
  exchangePolicyUrl: string;
}

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  selectedSize: string | null = null;
  stars: number[] = [1, 2, 3, 4, 5]; // Star ratings
  @Input() product: Product = {
    id: 0,
    name: '',
    description: '',
    price: 0,
    originalPrice: 0,
    productNumber: '',
    brand: '',
    modelNumber: '',
    sizes: [],
    image: '',
    deliveryInfo: '',
    returnPolicyUrl: '',
    exchangePolicyUrl: ''
  }; // Example input product data

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.http.get<Product>(`https://fakestoreapi.com/products/${id}`).subscribe(
        data => {
          this.product = data;
          console.log('Fetched product:', this.product);
        },
        error => {
          console.error('Error fetching product data', error);
        }
      );
    }
  }

  selectSize(size: string): void {
    this.selectedSize = size;
  }

  buyNow(): void {
    if (this.product) {
      // Logic for buying the product
      console.log('Buying product', this.product.id, 'Size:', this.selectedSize);
      alert('Buying produc successfully!');

    }
  }

  addToCart(): void {
    if (this.product) {
      // Logic for adding the product to the cart
      console.log('Adding product to cart', this.product.id, 'Size:', this.selectedSize);
      alert('Product added to cart successfully!');
    } else {
      alert('Please select a size before adding to cart.');
    }
  }
}
