import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { StoresComponent } from './pages/stores/stores.component';
import { StoreComponent } from './pages/store/store.component';
import { PropertiesComponent } from './pages/properties/properties.component';
import { VenderComponent } from './pages/vender/vender.component';
import { ProductCatagoryComponent } from './pages/product-catagory/product-catagory.component';
import { MemberLevelComponent } from './pages/member-level/member-level.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductComponent } from './pages/product/product.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent,
    children: [
      { path: 'store', component: StoresComponent },
      { path: 'product', component: ProductsComponent },
      { path: 'properties', component: PropertiesComponent },
      { path: '', redirectTo: 'properties', pathMatch: 'full' }
    ],
  },
  { path: 'store', component: StoreComponent },
  { path: 'store/:storeUid', component: StoreComponent },
  { path: 'vender', component: VenderComponent },
  { path: 'vender/:venderUid', component: VenderComponent },
  { path: 'product-catagory', component: ProductCatagoryComponent },
  { path: 'product-catagory/:catagoryUid', component: ProductCatagoryComponent },
  { path: 'product', component: ProductComponent },
  { path: 'product/:productUid', component: ProductComponent },
  { path: 'member-level', component: MemberLevelComponent },
  { path: 'member-level/:levelUid', component: MemberLevelComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'payment/:paymentUid', component: PaymentComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
