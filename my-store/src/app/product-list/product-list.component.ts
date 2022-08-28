import { Component, OnInit } from '@angular/core';
import { Product } from '../models/Product';
import { AllProductsService } from '../service/all-products.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products:Product[]=[];
  constructor(private allProductsService:AllProductsService) { }

  ngOnInit(): void {
    this.products=this.allProductsService.getProducts();
  }

}
