import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../models/Product';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input() product:Product;
  constructor() {
    this.product={
      id:0,
      name:"",
      price:0,
      url:"",
      description:"",
      quantity:0
    }
   }

  ngOnInit(): void {
  }

}
