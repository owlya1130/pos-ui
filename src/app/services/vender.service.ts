import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VenderService {

  constructor(private http: HttpClient) { }

  findAll() {
    return this.http.get<Vender[]>(`${environment.api_url}/vender/list`);
  }

  find(venderUid: number) {
    return this.http.get<Vender>(`${environment.api_url}/vender/${venderUid}`);
  }

  save(v: Vender) {
    if (v.venderUid == null) {
      return this.http.post<Vender>(`${environment.api_url}/vender`, v);
    } else {
      return this.http.put<Vender>(`${environment.api_url}/vender`, v);
    }
  }
}

export interface Vender {
  venderUid: number;
  venderId: string;
  name: string;
}
