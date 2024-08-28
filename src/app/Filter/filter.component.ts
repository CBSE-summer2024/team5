import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-about',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class AboutComponent implements OnInit {
  products: any[] = [];
  filteredProducts: any[] = [];
  titleOptions: string[] = [];
  selectedTitle: string = '';
  descriptionFilter: string = '';
  showFilter: boolean = false;
  loading: boolean = true;
  error: string = '';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.fetchProducts();
  }

  fetchProducts() {
    this.http.get<any[]>('https://fakestoreapi.com/products')
      .subscribe(
        data => {
          this.products = data;
          this.filteredProducts = data;
          this.titleOptions = [...new Set(data.map(product => product.title))]; // Get unique titles
          this.loading = false;
        },
        err => {
          this.error = 'Failed to load products';
          this.loading = false;
        }
      );
  }

  toggleFilter() {
    this.showFilter = !this.showFilter;
  }

  filterProducts() {
    this.filteredProducts = this.products.filter(product => 
      (this.selectedTitle ? product.title === this.selectedTitle : true) &&
      (this.descriptionFilter ? product.description.toLowerCase().includes(this.descriptionFilter.toLowerCase()) : true)
    );
  }

  resetFilters() {
    this.selectedTitle = '';
    this.descriptionFilter = '';
    this.filteredProducts = this.products;
  }
  truncateTitle(title: string): string {
    const words = title.split(' ');
    if (words.length > 6) {
      return words.slice(0, 4).join(' ') + '...';
    }
    return title;
  }
}
