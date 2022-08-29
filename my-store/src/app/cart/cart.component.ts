import { Component, OnInit } from '@angular/core';
import { Product } from '../models/Product';
import { MyCartService } from '../service/my-cart.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  products:Product[]=[];
  total=0;
  name:string="";
  address:string="";
  credit:string='';

  constructor(private cart: MyCartService) { }

  ngOnInit(): void {
    this.products=this.cart.getProducts();
    this.total=this.cart.getTotoal();
  
  }

  setNameAndTotal(){
    this.cart.setTotal(this.total);
    this.cart.setName(this.name);
  }

}
