import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';  
import { Product } from '../models/Product';
@Injectable({
  providedIn: 'root'
})
export class AllProductsService {
  productsList:Product[]=[];
  constructor(private http:HttpClient) { }

     getProducts():Product[]{  

      this.http.get<Product[]>('./assets/data.json').subscribe(res =>{
        for(let index=0;index<res.length;index++){
          this.productsList.push(res[index]);
        }
            });

      return this.productsList;
    }

    getProductById(id:number):Product{
      let pro:Product|undefined=  this.productsList.find(product => product.id == id)
      if(pro){
        return pro; 
      }else {
        return new Product();
      }
    }
}
