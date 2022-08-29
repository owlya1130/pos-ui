import { Component, OnInit } from '@angular/core';

interface menu {
  id: string;
  name: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  menus: menu[] = [{
    id: 'saleorder',
    name: '銷售列表'
  }, {
    id: 'pos',
    name: 'POS'
  }, {
    id: 'member',
    name: '會員'
  }, {
    id: 'product',
    name: '產品'
  }, {
    id: 'store',
    name: '門市'
  }, {
    id: 'properties',
    name: '屬性'
  }, {
    id: 'syscfg',
    name: '系統設定'
  }, {
    id: 'report',
    name: '報表'
  }];

  constructor() { }

  ngOnInit(): void {
  }

}
