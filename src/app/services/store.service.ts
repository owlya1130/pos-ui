import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private http: HttpClient) { }

  findAll() {
    return this.http.get<Store[]>(`${environment.api_url}/store/list`);
  }

  find(storeUid: number) {
    return this.http.get<Store>(`${environment.api_url}/store/${storeUid}`);
  }

  save(s: Store) {
    if (s.storeUid == null) {
      return this.http.post<Store>(`${environment.api_url}/store`, s);
    } else {
      return this.http.put<Store>(`${environment.api_url}/store`, s);
    }
  }
}

export interface Store {
  storeUid: number;
  storeId: string;
  name: string;
  cashbox: number;
}
