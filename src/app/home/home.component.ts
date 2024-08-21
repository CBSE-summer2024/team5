import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products = [
    {
      id: 1,
      name: "Stylish Shirt",
      description: "A stylish shirt for every occasion.",
      price: 50,
      image: "https://via.placeholder.com/150"
    },
    {
      id: 2,
      name: "Casual Jacket",
      description: "A comfortable and casual jacket.",
      price: 120,
      image: "https://via.placeholder.com/150"
    },
    {
      id: 3,
      name: "Summer Dress",
      description: "A light and breezy summer dress.",
      price: 80,
      image: "https://via.placeholder.com/150"
    },
    {
      id: 4,
      name: "Winter Sweater",
      description: "A warm and cozy winter sweater.",
      price: 90,
      image: "https://via.placeholder.com/150"
    },
    {
      id: 5,
      name: "Formal Suit",
      description: "A sharp and elegant formal suit.",
      price: 250,
      image: "https://via.placeholder.com/150"
    },
    {
      id: 6,
      name: "Casual Shorts",
      description: "Comfortable shorts for casual wear.",
      price: 40,
      image: "https://via.placeholder.com/150"
    }
  ];


  constructor() {}

  ngOnInit(): void {}
}
