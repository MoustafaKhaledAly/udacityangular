import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/Product';
import { AllProductsService } from '../service/all-products.service';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent implements OnInit {
selectedProduct:Product=new Product();
  constructor(private activatedRoute: ActivatedRoute,private allProductsService:AllProductsService) { 
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

  

}
