import { Component } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  productList : IProduct[] = []
  constructor(private products: ProductsService ,
      
    ){
      this.products.getProducts().subscribe(data=>{
        this.productList = data
      })
  }


}
