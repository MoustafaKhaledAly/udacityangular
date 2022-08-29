import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
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
  nameError:boolean=false;
addressError:boolean=false;
cardError:boolean=false;
  address:string="";
  credit:string='';

  constructor(private cart: MyCartService,private render: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.products=this.cart.getProducts();
    this.total=this.cart.getTotoal();
  
  }

  setNameAndTotal(){
    this.cart.setTotal(this.total);
    this.cart.setName(this.name);
  }

  validateName():void{
if(this.name.length<3){
  this.nameError=true;
}else{
  this.nameError=false;
}
  }

  validateAddress():void{
    if(this.address.length<6){
      this.addressError=true;
    }else{
      this.addressError=false;
    }
      }

      validateCard():void{
        if(this.credit.length<15){
          this.cardError=true;
        }else{
          this.cardError=false;
        }
          }


          
          removedItemFromCart(product: Product){
            this.cart.removeFromMyCart(product);
            this.products=this.cart.getProducts();
            this.total=this.cart.getTotoal();
            this.render.detectChanges();
          }

}
