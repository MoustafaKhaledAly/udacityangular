import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../models/Product';
import { MyCartService } from '../service/my-cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input() product:Product;
  @Output() removedItemFromCart:EventEmitter<any>=new EventEmitter();
  constructor(private cart: MyCartService) {
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

  removeFromCart():void{
this.removedItemFromCart.emit(this.product);
  }

}
