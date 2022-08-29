import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { StoresComponent } from './pages/stores/stores.component';
import { StoreComponent } from './pages/store/store.component';
import { PropertiesComponent } from './pages/properties/properties.component';
import { VenderComponent } from './pages/vender/vender.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent,
    children: [
      { path: 'store', component: StoresComponent },
      { path: 'properties', component: PropertiesComponent },
      { path: '', redirectTo: 'properties', pathMatch: 'full' }
    ],
  },
  { path: 'store', component: StoreComponent },
  { path: 'store/:storeUid', component: StoreComponent },
  { path: 'vender', component: VenderComponent },
  { path: 'vender/:venderUid', component: VenderComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
