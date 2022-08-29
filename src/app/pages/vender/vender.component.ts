import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { vender, VenderService } from 'src/app/services/vender.service';

@Component({
  selector: 'app-vender',
  templateUrl: './vender.component.html',
  styleUrls: ['./vender.component.css']
})
export class VenderComponent implements OnInit {

  vender = new FormGroup({
    venderUid: new FormControl(),
    venderId: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required)
  });

  _editable = false;
  set editable(val: boolean) {
    this._editable = val;
    if (this._editable) {
      this.vender.enable();
    } else {
      this.vender.disable();
    }
  }
  get editable() {
    return this._editable;
  }

  constructor(
    private venderService: VenderService,
    private route: ActivatedRoute
  ) {
    const venderUid = this.route.snapshot.params['venderUid'];
    if (venderUid != undefined) {
      this.find(venderUid);
      this.editable = false;
    } else {
      this.editable = true;
    }
  }

  ngOnInit(): void {
  }

  find(venderUid: number) {
    this.venderService
      .find(venderUid)
      .subscribe(vender => {
        this.vender.setValue(vender);
      });
  }

  save() {
    this.venderService
      .save(this.vender.value as vender)
      .subscribe(vender => {
        this.vender.setValue(vender);
        this.editable = false;
      });
  }

}
