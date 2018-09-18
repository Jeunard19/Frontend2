import { Component, OnInit } from '@angular/core';
import { ProductDto } from '../../model/product-dto';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../service/product.service';
import { Product } from '../../model/product';





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

  dto = new Product(); 

  constructor(private service: ProductService ) { }

  ngOnInit() {
  }

  click(){

    alert(this.productName)
    alert(this.productCategory)
    alert(this.pricePaid)
    alert(this.winstMargin)
  
    
   this.service.create(this.productName,this.productCategory, this.pricePaid,this.winstMargin).subscribe(data=>{
     
   })


  }

}
