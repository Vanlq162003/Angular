import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/interfaces/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  productDetail: IProduct = {
    id: "",
    name: "",
    category : "" , 
    description: "",
    image: "",
    price: 0
  }
    
  constructor (private route: ActivatedRoute , private product: ProductsService){
    this.route.paramMap.subscribe((param)=>{
      const id = Number(param.get('id'))
      console.log(id)
      this.product.getOneProduct(id).subscribe(data=>{
        this.productDetail = data
      })


    })
  }
}
