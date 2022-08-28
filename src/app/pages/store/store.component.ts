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
    uid: new FormControl(),
    id: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    sales_figures: new FormControl(0)
  });

  _editable = false;
  set editable(val: boolean) {
    this._editable = val;
    if (this._editable) {
      this.store.enable();
    } else {
      this.store.disable();
    }
  }
  get editable() {
    return this._editable;
  }

  constructor(
    private storeService: StoreService,
    private route: ActivatedRoute
  ) {
    const uid = this.route.snapshot.params['uid'];
    if (uid != undefined) {
      this.store.setValue(this.findByUid(uid));
      this.editable = false;
    } else {
      this.editable = true;
    }
  }

  ngOnInit(): void {
  }

  findByUid(uid: number) {
    return this.storeService.findByUid(uid);
  }

  save() {
    this.storeService.save(this.store.value as store);
    this.editable = false;
  }
}
