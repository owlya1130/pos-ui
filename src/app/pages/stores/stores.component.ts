import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store, StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.css']
})
export class StoresComponent implements OnInit {

  displayedColumns: string[] = ['#', 'storeId', 'name', 'cashbox'];
  dataSource: Store[] = [];

  constructor(
    private storeService: StoreService,
    private router: Router
  ) {
    this.storeService.findAll().subscribe(stores => {
      this.dataSource = stores;
    })
  }

  ngOnInit(): void {
  }

  toStore(s?: Store) {
    if (s == undefined) {
      this.router.navigate(["store"]);
    } else {
      this.router.navigate(["store", s.storeUid]);
    }
  }

}
