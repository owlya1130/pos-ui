import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductCatagory, ProductCatagoryService } from 'src/app/services/product-catagory.service';

@Component({
  selector: 'app-product-catagory',
  templateUrl: './product-catagory.component.html',
  styleUrls: ['./product-catagory.component.css']
})
export class ProductCatagoryComponent implements OnInit {

  catagory = new FormGroup({
    catagoryUid: new FormControl(),
    catagoryId: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required)
  });

  _editable = false;
  set editable(val: boolean) {
    this._editable = val;
    if (this._editable) {
      this.catagory.enable();
    } else {
      this.catagory.disable();
    }
  }
  get editable() {
    return this._editable;
  }

  constructor(
    private productCatagoryService: ProductCatagoryService,
    private route: ActivatedRoute
  ) {
    const catagoryUid = this.route.snapshot.params['catagoryUid'];
    if (catagoryUid != undefined) {
      this.find(catagoryUid);
      this.editable = false;
    } else {
      this.editable = true;
    }
  }

  ngOnInit(): void {
  }

  find(catagoryUid: number) {
    this.productCatagoryService
      .find(catagoryUid)
      .subscribe(catagory => {
        this.catagory.setValue(catagory);
      });
  }

  save() {
    this.productCatagoryService
      .save(this.catagory.value as ProductCatagory)
      .subscribe(catagory => {
        this.catagory.setValue(catagory);
        this.editable = false;
      });
  }

}
