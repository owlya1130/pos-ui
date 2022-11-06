import { Component, OnInit } from '@angular/core';

interface menu {
  id: string;
  icon: string;
  name: string;
}

@Component({
  selector: 'pos-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

  menus: menu[] = [
    {
      id: "checkout",
      icon: "shopping_cart_checkout",
      name: "結帳"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}