import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { store, StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.css']
})
export class StoresComponent implements OnInit {

  displayedColumns: string[] = ['#', 'id', 'name', 'sales_figures'];
  dataSource: store[];

  constructor(
    private storeService: StoreService,
    private router: Router
    ) { 
      this.dataSource = this.storeService.findAll();
    }

  ngOnInit(): void {
  }

  toStore(s?: store) {
    if(s == undefined) {
      this.router.navigate(["store"]);
    } else {
      this.router.navigate(["store", s.uid]);
    }    
  }

}
