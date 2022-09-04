import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { forkJoin, Observable } from 'rxjs';
import { MemberLevel, MemberLevelService } from 'src/app/services/member-level.service';
import { ProductCatagory, ProductCatagoryService } from 'src/app/services/product-catagory.service';
import { Product, ProductDetailBO, ProductService } from 'src/app/services/product.service';
import { Vender, VenderService } from 'src/app/services/vender.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  form: FormGroup;
  productCatagorys: ProductCatagory[] = [];
  memberLevels: MemberLevel[] = [];
  venders: Vender[] = [];
  products: Product[] = [];

  _editable = false;
  set editable(val: boolean) {
    this._editable = val;
    if (this._editable) {
      this.form.enable();
    } else {
      this.form.disable();
    }
  }
  get editable() {
    return this._editable;
  }

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private productCatagoryService: ProductCatagoryService,
    private memberLevelService: MemberLevelService,
    private venderService: VenderService,
    private route: ActivatedRoute
  ) {
    this.form = this.fb.group({
      product: this.fb.group({
        productUid: this.fb.control(null),
        productId: this.fb.control('', Validators.required),
        name: this.fb.control('', Validators.required),
        catagoryUid: this.fb.control(0, Validators.required),
        service: this.fb.control(false, Validators.required),
        allowSellInsufficient: this.fb.control(false, Validators.required),
        conbination: this.fb.control(false, Validators.required),
        invalid: this.fb.control(false, Validators.required),
        deleted: this.fb.control(false, Validators.required),
        note: this.fb.control(null),
      }),
      prices: this.fb.array([]),
      barcodes: this.fb.array([]),
      venders: this.fb.array([]),
      combinations: this.fb.array([])
    })
    const productUid = this.route.snapshot.params['productUid'];
    this.find(productUid);
  }
  ngOnInit(): void {
  }

  find(productUid?: number) {
    const req: { [key: string]: Observable<unknown> } = {};
    req['productCatagory'] = this.productCatagoryService.findAll();
    req['memberLevel'] = this.memberLevelService.findAll();
    req['vender'] = this.venderService.findAll();
    req['product'] = this.productService.findAll();
    if (productUid !== undefined) {
      req['productDetail'] = this.productService.find(productUid as number);
    }

    forkJoin(req).subscribe(resp => {
      this.productCatagorys = resp['productCatagory'] as ProductCatagory[];
      this.memberLevels = resp['memberLevel'] as MemberLevel[];
      this.venders = resp['vender'] as Vender[];
      this.products = resp['product'] as Product[];
      if (resp['productDetail'] == undefined) {
        this.addPrice();
        this.addVender();
        this.addBarcode();
        this.editable = true;
      } else {
        const bo = resp['productDetail'] as ProductDetailBO;
        for (let price of bo.prices) {
          this.addPrice();
        }
        for (let barcode of bo.barcodes) {
          this.addBarcode();
        }
        for (let vender of bo.venders) {
          this.addVender();
        }
        for (let combination of bo.combinations) {
          this.addCombination();
        }
        this.form.get("product")?.setValue(bo.product);
        this.form.get("prices")?.setValue(bo.prices);
        this.form.get("barcodes")?.setValue(bo.barcodes);
        this.form.get("venders")?.setValue(bo.venders);
        this.form.get("combinations")?.setValue(bo.combinations);
        this.editable = false;
      }
    })
  }

  get priceArray(): FormArray {
    return this.form.get('prices') as FormArray;
  }

  addPrice() {
    this.priceArray.push(this.fb.group({
      priceUid: this.fb.control(null),
      productUid: this.fb.control(null),
      levelUid: this.fb.control(null, Validators.required),
      price: this.fb.control(null, Validators.required)
    }))
  }

  get barcodeArray(): FormArray {
    return this.form.get('barcodes') as FormArray;
  }

  addBarcode() {
    this.barcodeArray.push(this.fb.group({
      barcodeUid: this.fb.control(null),
      productUid: this.fb.control(null),
      barcode: this.fb.control(null, Validators.required)
    }))
  }

  get venderArray(): FormArray {
    return this.form.get('venders') as FormArray;
  }

  addVender() {
    this.venderArray.push(this.fb.group({
      prodVenderUid: this.fb.control(null),
      productUid: this.fb.control(null),
      venderUid: this.fb.control(null, Validators.required)
    }))
  }

  get combinationArray(): FormArray {
    return this.form.get('combinations') as FormArray;
  }

  addCombination() {
    this.combinationArray.push(this.fb.group({
      combinationUid: this.fb.control(null),
      productUid: this.fb.control(null),
      contentProductUid: this.fb.control(null, Validators.required),
      quantity: this.fb.control(null, Validators.required)
    }))
  }

  save() {
    if (this.form.invalid) {
      alert("data is invalid!!!");
    } else {
      this.productService
        .save(this.form.value as ProductDetailBO)
        .subscribe(productDetailBO => {
          this.form.setValue(productDetailBO);
          this.editable = false;
        });
    }
  }
}
