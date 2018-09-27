import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ProductDto } from '../../model/product-dto';
import { Observable } from 'rxjs';
import { Product } from '../../model/product';
import { User } from '../../model/user';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient ) { }



  create( productName:string, productCategory:string , pricePaid:number , winstMargin:number, user:User  ): Observable <Product> {

    let dto = new ProductDto();

    dto.pricePaid=pricePaid
    dto.productCategory=productCategory
    dto.productName=productName
    dto.winstMargin=winstMargin
    dto.user = user
    
  
  
    
    
    
    return this.http.post<ProductDto>('http://localhost:9090/api/product', dto); 
}

}


