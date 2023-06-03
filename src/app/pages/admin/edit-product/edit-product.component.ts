import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/interfaces/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent {

  productDetail: IProduct = {
    id: "",
    name: "",
    category : "" , 
    description: "",
    image: "",
    price: 0
  }
  constructor(private route: ActivatedRoute,
      private product: ProductsService,
      private router:Router
    ){
      this.route.paramMap.subscribe((param)=>{
        const id = String(param.get('id'))
        this.product.getOneProduct(id).subscribe(data=>{
          this.productDetail = data
          // console.log(this.productDetail)
        })
      })
    }
  handleUpdateProduct(){
    
    console.log(this.productDetail.id)
    const id = Number(this.productDetail.id)
    this.product.updateProduct(this.productDetail , id).subscribe(data=>{
      console.log(data)
      this.router.navigate(["/admin/products"])

    })
  }


}
