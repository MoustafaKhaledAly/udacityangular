import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../models/Product';
import { MyCartService } from '../service/my-cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product:Product;
  selectedValue: any;
  @Output() selectedProduct:EventEmitter<Product>=new EventEmitter;
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

  getProduct():void{
    this.selectedProduct.emit(this.product)
  }

  navigateToProduct():void{
    
  }




  addToCart(){
    let newProduct:Product=new Product();
    newProduct.quantity=this.selectedValue;
    newProduct.id=this.product.id;  
    newProduct.description=this.product.description;  
    newProduct.price=this.product.price;
    newProduct.url=this.product.url;  



      this.cart.addToMyCart(newProduct);
    
   
    
  }

}
