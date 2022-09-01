import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductDetailBO, ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  productDetailBO = new FormGroup({
    product: new FormGroup({
      productUid: new FormControl(),
      productId: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      catagoryUid: new FormControl(0, Validators.required),
      service: new FormControl(false, Validators.required),
      allowSellInsufficient: new FormControl(false, Validators.required),
      conbination: new FormControl(false, Validators.required),
      invalid: new FormControl(false, Validators.required),
      deleted: new FormControl(false, Validators.required),
      note: new FormControl('', Validators.required)
    }),
    prices: new FormArray([]),    
    barcodes: new FormArray([]), 
    venders: new FormArray([]), 
    combinations: new FormArray([])
  })
  
  // export interface ProductPrice {
  //   priceUid: number;
  //   productUid: number;
  //   levelUid: number;
  //   price: number;
  // }
  
  // export interface ProductBarcode {
  //   barcodeUid: number;
  //   productUid: number;
  //   barcode: string;
  // }
  
  // export interface ProductVender {
  //   prodVenderUid: number;
  //   productUid: number;
  //   venderUid: number;
  // }
  
  // export interface ProductCombination {
  //   combinationUid: number;
  //   productUid: number;
  //   contentProductUid: number;
  //   quantity: string;
  // }

  _editable = false;
  set editable(val: boolean) {
    this._editable = val;
    if (this._editable) {
      this.product.enable();
    } else {
      this.product.disable();
    }
  }
  get editable() {
    return this._editable;
  }

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {
    const productUid = this.route.snapshot.params['productUid'];
    if (productUid != undefined) {
      this.find(productUid);
      this.editable = false;
    } else {
      this.editable = true;
    }
  }

  ngOnInit(): void {
  }

  find(productUid: number) {
    this.productService
      .find(productUid)
      .subscribe(productDetailBO => {
        this.productDetailBO.setValue(productDetailBO);
      });
  }

  save() {
    console.log(this.productDetailBO.value);
    // this.productService
    //   .save(this.productDetailBO.value as ProductDetailBO)
    //   .subscribe(productDetailBO => {
    //     this.product.setValue(productDetailBO);
    //     this.editable = false;
    //   });
  }
}
