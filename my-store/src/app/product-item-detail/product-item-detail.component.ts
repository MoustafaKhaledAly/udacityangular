import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/Product';
import { AllProductsService } from '../service/all-products.service';
import { MyCartService } from '../service/my-cart.service';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent implements OnInit {
selectedProduct:Product=new Product();
selectedValue: any;
  constructor(private activatedRoute: ActivatedRoute,private allProductsService:AllProductsService,private cart: MyCartService) { 
    this.selectedProduct={
      id:0,
      name:"",
      price:0,
      url:"",
      description:"",
      quantity:0
    }
  }

  ngOnInit(): void {

   this.activatedRoute.params.subscribe(params => {
        this.selectedProduct = this.allProductsService.getProductById(params['id']);
      });
  }

  updateQuantity(event:Event){
    this.selectedProduct.quantity = parseInt( (event.target as HTMLSelectElement).value );

  }


  addToCart(){
    if(this.selectedValue){
    let newProduct:Product=new Product();
    newProduct.quantity=this.selectedValue;
    newProduct.id=this.selectedProduct.id;  
    newProduct.description=this.selectedProduct.description;  
    newProduct.price=this.selectedProduct.price;
    newProduct.url=this.selectedProduct.url;  
    newProduct.name=this.selectedProduct.name;  


      this.cart.addToMyCart(newProduct);
  }

}
  }

  

