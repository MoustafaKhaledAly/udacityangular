import { Injectable } from '@angular/core';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class MyCartService {
  productsList:Product[]=[];
  name:string="";
  total:number=0;
  constructor() { }


  
  getProducts():Product[]{  
    return this.productsList;
  }

  getTotoal():number{  
    let sum=0;
  for(let i=0;i<this.productsList.length;i++){
    sum+=this.productsList[i].quantity* this.productsList[i].price;
    
  }
  return sum;
  }

  addToMyCart(product:Product):void{
    if(!this.isProductExistInCart(product)){
      this.productsList.push(product);
      alert("added!");
    }else{
      const i = this.productsList.findIndex((ele:Product) => ele.id==product.id);
      if(product.quantity){
        console.log("product.quantity:"+(typeof product.quantity));
        console.log("list.quantity:"+this.productsList[i].quantity);
        this.productsList[i].quantity=  parseInt(this.productsList[i].quantity+"") + parseInt(product.quantity+"");
        alert("added!");
      }
    
    }

  }

  isProductExistInCart(product:Product):boolean{
let productFound=this.productsList.find(ele => ele.id ===product.id);
if(productFound){
  return true;
}else{
  return false;
}
}




removeFromMyCart(product:Product):void{
  if(this.isProductExistInCart(product)){
    this.productsList=this.productsList.filter(ele =>  ele.id!=product.id);
    alert("removed");
  }

}







setName(newName:string){
  this.name=newName;
}

setTotal(newTotal:number){
  this.total=newTotal;
}
getName():string{
 return this.name;
}
getTotal():number{
 return this.total;
}

}