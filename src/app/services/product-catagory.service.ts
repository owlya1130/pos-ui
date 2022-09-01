import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductCatagoryService {

  constructor(private http: HttpClient) { }

  findAll() {
    return this.http.get<ProductCatagory[]>(`${environment.api_url}/product-catagory/list`);
  }

  find(catagoryUid: number) {
    return this.http.get<ProductCatagory>(`${environment.api_url}/product-catagory/${catagoryUid}`);
  }

  save(pc: ProductCatagory) {
    if (pc.catagoryUid == null) {
      return this.http.post<ProductCatagory>(`${environment.api_url}/product-catagory`, pc);
    } else {
      return this.http.put<ProductCatagory>(`${environment.api_url}/product-catagory`, pc);
    }
  }
}

export interface ProductCatagory {
  catagoryUid: number;
  catagoryId: string;
  name: string;
}
