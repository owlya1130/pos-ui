import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicComponent } from './templates/pages/basic/basic.component';
import { StoreComponent } from './pages/store/store.component';
import { HomeComponent } from './pages/home/home.component';
import { StoresComponent } from './pages/stores/stores.component';
import { PropertiesComponent } from './pages/properties/properties.component';
import { VenderComponent } from './pages/vender/vender.component';
import { ProductCatagoryComponent } from './pages/product-catagory/product-catagory.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { MemberLevelComponent } from './pages/member-level/member-level.component';
import { ProductComponent } from './pages/product/product.component';
import { ProductsComponent } from './pages/products/products.component';

const MaterialModules = [
  MatSidenavModule,
  MatListModule,
  MatButtonModule,
  MatTableModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatTabsModule,
  MatSlideToggleModule,
  MatSelectModule
];

@NgModule({
  declarations: [
    AppComponent,
    BasicComponent,
    StoreComponent,
    HomeComponent,
    StoresComponent,
    PropertiesComponent,
    VenderComponent,
    ProductCatagoryComponent,
    PaymentComponent,
    MemberLevelComponent,
    ProductComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    ...MaterialModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
