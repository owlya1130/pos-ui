import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http: HttpClient) { }

  findAll() {
    return this.http.get<Payment[]>(`${environment.api_url}/payment/list`);
  }

  find(paymentUid: number) {
    return this.http.get<Payment>(`${environment.api_url}/payment/${paymentUid}`);
  }

  save(p: Payment) {
    if (p.paymentUid == null) {
      return this.http.post<Payment>(`${environment.api_url}/payment`, p);
    } else {
      return this.http.put<Payment>(`${environment.api_url}/payment`, p);
    }
  }
}

export interface Payment {
  paymentUid: number;
  paymentId: string;
  name: string;
  default: boolean;
}