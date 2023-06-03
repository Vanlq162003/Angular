import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { AdminProductsComponent } from './pages/admin/admin-products/admin-products.component';
import { LayoutAdminComponent } from './layout/layout-admin/layout-admin.component';
import { LayoutClientComponent } from './layout/layout-client/layout-client.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AddProductComponent } from './pages/admin/add-product/add-product.component';
import { ListProductsComponent } from './pages/admin/list-products/list-products.component';
import { EditProductComponent } from './pages/admin/edit-product/edit-product.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';

const routes: Routes = [
  {
    path: "", component: LayoutClientComponent, children: [
      { path: '', redirectTo: "home", pathMatch: "full" },
      { path: "home", component: HomeComponent },
      { path: "products/:id" , component: ProductDetailComponent},

    ]
  },

  {
    path: "admin", component: LayoutAdminComponent, children: [
      { path: 'admin', redirectTo: '', pathMatch: "full" },
      { path: "", component: DashboardComponent },
      { path: "products", component: ListProductsComponent },
      { path: "products/:id", component: EditProductComponent },
      { path: "addProducts", component: AddProductComponent }
    ]
  },

  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
