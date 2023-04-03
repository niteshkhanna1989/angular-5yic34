import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.css']
})
export class ProductSearchComponent implements OnInit {

  searchText: string = '';
  selectedCategory: string = '';
  selectedDiscount: string = '';
  maxPrice: number;
  selectedColor: string = '';
  categories: string[] = ['Category 1', 'Category 2', 'Category 3'];
  discounts: string[] = ['10% off', '20% off', '30% off'];
  colors: string[] = ['Red', 'Green', 'Blue'];

  constructor() { }

  ngOnInit(): void {
  }

  search() {
    // Logic to search the productList based on the selected filters
  }

}