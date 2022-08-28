import { Injectable } from '@angular/core';

const stores: store[] = [
  { storeUid: 0, storeId: 'AA', name: '北門店', cashbox: 999999 },
  { storeUid: 1, storeId: 'BB', name: '復國店', cashbox: 999999 },
  { storeUid: 2, storeId: 'CC', name: '高雄左營店', cashbox: 999999 },
  { storeUid: 3, storeId: 'DD', name: '工學店', cashbox: 999999 },
  { storeUid: 4, storeId: 'WW', name: '倉庫', cashbox: 999999 }
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
  storeUid: number;
  storeId: string;
  name: string;
  cashbox: number;
}
