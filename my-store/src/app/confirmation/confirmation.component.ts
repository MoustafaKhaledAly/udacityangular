import { Component, OnInit } from '@angular/core';
import { MyCartService } from '../service/my-cart.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
name:string="";
total:number=0;
  constructor(private cart: MyCartService) { }

  ngOnInit(): void {
    this.name=this.cart.getName();
    this.total=this.cart.getTotal();
  }

}
