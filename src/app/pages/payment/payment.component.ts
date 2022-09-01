import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Payment, PaymentService } from 'src/app/services/payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  payment = new FormGroup({
    paymentUid: new FormControl(),
    paymentId: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    default: new FormControl(false)
  });

  _editable = false;
  set editable(val: boolean) {
    this._editable = val;
    if (this._editable) {
      this.payment.enable();
    } else {
      this.payment.disable();
    }
  }
  get editable() {
    return this._editable;
  }

  constructor(
    private paymentService:PaymentService,
    private route: ActivatedRoute
  ) {
    const paymentUid = this.route.snapshot.params['paymentUid'];
    if (paymentUid != undefined) {
      this.find(paymentUid);
      this.editable = false;
    } else {
      this.editable = true;
    }
  }

  ngOnInit(): void {
  }

  find(paymentUid: number) {
    this.paymentService
      .find(paymentUid)
      .subscribe(payment => {
        console.log(payment)
        this.payment.setValue(payment);
      });
  }

  save() {
    this.paymentService
      .save(this.payment.value as Payment)
      .subscribe(payment => {
        this.payment.setValue(payment);
        this.editable = false;
      });
  }

}
