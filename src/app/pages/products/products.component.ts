import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product, ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  displayedColumns: string[] = ['#', 'productId', 'name', 'catagoryUid', 'allowSellInsufficient', 'service', 'conbination', 'invalid', 'note'];
  dataSource: Product[] = [];

  constructor(
    private productService: ProductService,
    private router: Router
  ) {
    this.productService.findAll().subscribe(products => {
      this.dataSource = products;
    })
  }

  ngOnInit(): void {
  }

  toProduct(p?: Product) {
    if (p == undefined) {
      this.router.navigate(["product"]);
    } else {
      this.router.navigate(["product", p.productUid]);
    }
  }

}
