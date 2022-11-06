import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './pages/checkout/checkout.component';

const routes: Routes = [
  // { path: 'home', component: HomeComponent,
  //   // children: [
  //   //   // { path: 'store', component: StoresComponent },
  //   //   // { path: 'product', component: ProductsComponent },
  //   //   // { path: 'properties', component: PropertiesComponent },
  //   //   { path: '', redirectTo: 'properties', pathMatch: 'full' }
  //   // ],
  // },
  { path: 'checkout', component: CheckoutComponent},
  { path: '', redirectTo: 'checkout', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
