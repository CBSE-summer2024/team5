import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: Product[] = [];
  paginatedProducts: Product[] = [];
  currentPage: number = 1;
  pageSize: number = 6; // Show 6 products per page
  totalProducts: number = 0;
  totalPages: number = 0;
  pagesArray: number[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts(): void {
    this.http.get<Product[]>('https://fakestoreapi.com/products').subscribe(data => {
      this.products = data;
      this.totalProducts = this.products.length;
      this.totalPages = Math.ceil(this.totalProducts / this.pageSize);
      this.createPagesArray();
      this.updatePaginatedProducts();
    });
  }

  updatePaginatedProducts(): void {
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;
    this.paginatedProducts = this.products.slice(start, end);
  }

  onPageChange(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.updatePaginatedProducts();
    }
  }

  createPagesArray(): void {
    this.pagesArray = Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }
}
