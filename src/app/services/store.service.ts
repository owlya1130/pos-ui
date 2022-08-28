import { Injectable } from '@angular/core';

const stores: store[] = [
  { uid: 0, id: 'AA', name: '北門店', sales_figures: 999999 },
  { uid: 1, id: 'BB', name: '復國店', sales_figures: 999999 },
  { uid: 2, id: 'CC', name: '高雄左營店', sales_figures: 999999 },
  { uid: 3, id: 'DD', name: '工學店', sales_figures: 999999 },
  { uid: 4, id: 'WW', name: '倉庫', sales_figures: 999999 }
];

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor() { }

  findAll() {
    return stores;
  }

  findByUid(uid: number) {
    return stores[uid];
  }

  save(s: store) {
    stores.push(s);
  }
}

export interface store {
  uid: number;
  id: string;
  name: string;
  sales_figures: number;
}
