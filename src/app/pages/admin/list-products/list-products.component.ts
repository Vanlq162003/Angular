import { Component } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent {
  public products: IProduct[] = [] 

  constructor (public productService: ProductsService){
    this.productService.getProducts().subscribe(products =>{
      
      this.products = products
      console.log(this.products)
  })
  }

  handleRemove(id: string | undefined){
    if(confirm("m co chac muon xoa")){
      this.productService.removeProducts(id).subscribe(()=>{
        this.products = this.products.filter(product => product.id != id)
      })
    }
    
    
  }

}
