import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { store, StoreService } from 'src/app/services/store.service';


@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  store = new FormGroup({
    storeUid: new FormControl(),
    storeId: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    cashbox: new FormControl(0)
  });

  _editable = false;
  set editable(val: boolean) {
    this._editable = val;
    if (this._editable) {
      this.store.enable();
    } else {
      this.store.disable();
    }
    this.store.controls['cashbox'].disable();
  }
  get editable() {
    return this._editable;
  }

  constructor(
    private storeService: StoreService,
    private route: ActivatedRoute
  ) {
    const storeUid = this.route.snapshot.params['storeUid'];
    if (storeUid != undefined) {
      this.find(storeUid);
      this.editable = false;
    } else {
      this.editable = true;
    }
  }

  ngOnInit(): void {
  }

  find(storeUid: number) {
    this.storeService
      .find(storeUid)
      .subscribe(store => {
        this.store.setValue(store);
      });
  }

  save() {
    this.storeService
      .save(this.store.value as store)
      .subscribe(store => {
        this.store.setValue(store);
        this.editable = false;
      });
  }
}
