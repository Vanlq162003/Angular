import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { LayoutClientComponent } from './layout/layout-client/layout-client.component';
import { LayoutAdminComponent } from './layout/layout-admin/layout-admin.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { CartsComponent } from './pages/carts/carts.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { AdminProductsComponent } from './pages/admin/admin-products/admin-products.component';
import { AddProductComponent } from './pages/admin/add-product/add-product.component';
import { EditProductComponent } from './pages/admin/edit-product/edit-product.component';
import { HeaderAdminComponent } from './components/admin/header-admin/header-admin.component';
import { SidebarComponent } from './components/admin/sidebar/sidebar.component';
import { ListProductsComponent } from './pages/admin/list-products/list-products.component';
import { HttpClientModule } from '@angular/common/http';






@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    LayoutClientComponent,
    LayoutAdminComponent,
    ProductDetailComponent,
    CartsComponent,
    CheckoutComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    AdminProductsComponent,
    AddProductComponent,
    EditProductComponent,
    HeaderAdminComponent,
    SidebarComponent,
    ListProductsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}

