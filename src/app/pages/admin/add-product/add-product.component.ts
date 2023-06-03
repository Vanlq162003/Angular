import { Component } from '@angular/core';
import { RouteReuseStrategy, Router } from '@angular/router';
import { IProduct } from 'src/app/interfaces/product';
import { ProductsService } from 'src/app/services/products.service';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  product: IProduct = {
    
    name: "",
    price: 0,
    description: "",
    image: "",
    category: "",
  }


  constructor ( private productService: ProductsService, 
      private router:Router
    ){

  }

  handleAddProduct(){
    this.productService.createProduct(this.product).subscribe(()=>{
      this.router.navigate(["admin/products"])
    })
  }


}
