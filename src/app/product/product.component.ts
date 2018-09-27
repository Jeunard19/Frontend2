import { Component, OnInit } from '@angular/core';
import { ProductDto } from '../../model/product-dto';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../service/product.service';
import { Product } from '../../model/product';
import { User } from '../../model/user';





@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  productName:string
  productCategory:string
  pricePaid:number
  winstMargin:number
  userId:number 
  userName:String 
 


  dto = new Product(); 

  constructor(private service: ProductService ) { }

  ngOnInit() {
  }

  click(){



    alert(this.productName)
    alert(this.productCategory)
    alert(this.pricePaid)
    alert(this.winstMargin)
   // alert(this.user)
  
  //this.user.id =1; 
  var user = new User(); 
  user.id = this.userId; 
  user.username = this.userName; 

   this.service.create(this.productName,this.productCategory, this.pricePaid,this.winstMargin, user).subscribe(data=>{
     
   })


  }


}
