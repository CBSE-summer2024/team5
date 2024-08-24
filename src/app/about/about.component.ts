import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})


export class AboutComponent implements OnInit {
  productsData: any[] = [];
  filteredProducts: any[] = [];

  priceFilter: string = 'all';
  titleFilter: string = '';
  descriptionFilter: string = '';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    /*this.fetchProducts();*/
  }

  /*fetchProducts() {
    this.http.get('https://fakestoreapi.com/products/category/jewelery')
      .subscribe(data => {
        this.productsData = data as any[];
        this.filteredProducts = [...this.productsData]; // Display all products initially
      }, error => {
        console.error('Error fetching data:', error);
      });
  }*/

  filterProducts() {
    this.filteredProducts = this.productsData;

    if (this.priceFilter !== 'all') {
      const [minPrice, maxPrice] = this.priceFilter.split('-').map(Number);
      this.filteredProducts = this.filteredProducts.filter(product => product.price >= minPrice && product.price <= maxPrice);
    }

    if (this.titleFilter) {
      this.filteredProducts = this.filteredProducts.filter(product => product.title.toLowerCase().includes(this.titleFilter.toLowerCase()));
    }

    if (this.descriptionFilter) {
      this.filteredProducts = this.filteredProducts.filter(product => product.description.toLowerCase().includes(this.descriptionFilter.toLowerCase()));
    }
  }
}
