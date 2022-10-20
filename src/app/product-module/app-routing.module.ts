import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProductComponent } from './create-product/create-product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { UpdateProductComponent } from './update-product/update-product.component';

const routes: Routes = [
  {path:'products', component:ProductDetailsComponent},
  {path:'create-product', component:CreateProductComponent},
  {path:'', redirectTo:'products', pathMatch:'full'},
  {path:'update-product/:id', component:UpdateProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
