import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  findAll() {
    return this.http.get<Product[]>(`${environment.api_url}/product/list`);
  }

  find(productUid: number) {
    return this.http.get<ProductDetailBO>(`${environment.api_url}/product/${productUid}`);
  }

  save(bo: ProductDetailBO) {
    if (bo.product.productUid == null) {
      return this.http.post<ProductDetailBO>(`${environment.api_url}/product`, bo);
    } else {
      return this.http.put<ProductDetailBO>(`${environment.api_url}/product`, bo);
    }
  }
}

export interface Product {
  productUid: number;
  productId: string;
  name: string;
  catagoryUid: number;
  service: boolean;
  allowSellInsufficient: boolean;
  conbination: boolean;
  invalid: boolean;
  deleted: boolean;
  note: string;
}

export interface ProductPrice {
  priceUid: number;
  productUid: number;
  levelUid: number;
  price: number;
}

export interface ProductBarcode {
  barcodeUid: number;
  productUid: number;
  barcode: string;
}

export interface ProductVender {
  prodVenderUid: number;
  productUid: number;
  venderUid: number;
}

export interface ProductCombination {
  combinationUid: number;
  productUid: number;
  contentProductUid: number;
  quantity: string;
}

export interface ProductDetailBO {
  product: Product;
  prices: ProductPrice[];
  barcodes: ProductBarcode[];
  venders: ProductVender[];
  combinations: ProductCombination[];
}

