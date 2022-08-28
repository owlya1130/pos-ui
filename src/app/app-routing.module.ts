import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { StoresComponent } from './pages/stores/stores.component';
import { StoreComponent } from './pages/store/store.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent,
    children: [
      { path: 'store', component: StoresComponent },
      { path: '', redirectTo: 'store', pathMatch: 'full' }
    ],
  },
  { path: 'store', component: StoreComponent },
  { path: 'store/:uid', component: StoreComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
