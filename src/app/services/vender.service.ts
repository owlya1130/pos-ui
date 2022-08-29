import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VenderService {

  constructor(private http: HttpClient) { }

  findAll() {
    return this.http.get<vender[]>(`${environment.api_url}/vender/list`);
  }

  find(venderUid: number) {
    return this.http.get<vender>(`${environment.api_url}/vender/${venderUid}`);
  }

  save(v: vender) {
    if (v.venderUid == null) {
      return this.http.post<vender>(`${environment.api_url}/vender`, v);
    } else {
      return this.http.put<vender>(`${environment.api_url}/vender`, v);
    }
  }
}

export interface vender {
  venderUid: number;
  venderId: string;
  name: string;
}
