import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MemberLevel, MemberLevelService } from 'src/app/services/member-level.service';
import { Payment, PaymentService } from 'src/app/services/payment.service';
import { ProductCatagory, ProductCatagoryService } from 'src/app/services/product-catagory.service';
import { Vender, VenderService } from 'src/app/services/vender.service';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css']
})
export class PropertiesComponent implements OnInit {

  vender_displayedColumns: string[] = ['#', 'venderId', 'name'];
  vender_dataSource: Vender[] = [];

  productCatagory_displayedColumns: string[] = ['#', 'catagoryId', 'name'];
  productCatagory_dataSource: ProductCatagory[] = [];
  
  memberLevel_displayedColumns: string[] = ['#', 'levelId', 'name', 'default'];
  memberLevel_dataSource: MemberLevel[] = [];
  
  payment_displayedColumns: string[] = ['#', 'paymentId', 'name', 'default'];
  payment_dataSource: Payment[] = [];

  constructor(
    private venderService: VenderService,
    private productCatagoryService: ProductCatagoryService,
    private memberLevelService: MemberLevelService,
    private paymentService: PaymentService,
    private router: Router
  ) {
    this.venderService.findAll().subscribe(venders => {
      this.vender_dataSource = venders;
    })
    this.productCatagoryService.findAll().subscribe(catagorys => {
      this.productCatagory_dataSource = catagorys;
    })
    this.memberLevelService.findAll().subscribe(levels => {
      this.memberLevel_dataSource = levels;
    })
    this.paymentService.findAll().subscribe(payments => {
      this.payment_dataSource = payments;
    })
  }

  ngOnInit(): void {
  }

  toVender(v?: Vender) {
    if (v == undefined) {
      this.router.navigate(["vender"]);
    } else {
      this.router.navigate(["vender", v?.venderUid]);
    }
  }

  toProductCatagory(pc?: ProductCatagory) {
    if (pc == undefined) {
      this.router.navigate(["product-catagory"]);
    } else {
      this.router.navigate(["product-catagory", pc?.catagoryUid]);
    }
  } 

  toMemberLevel(ml?: MemberLevel) {
    if (ml == undefined) {
      this.router.navigate(["member-level"]);
    } else {
      this.router.navigate(["member-level", ml?.levelUid]);
    }
  } 

  toPayment(p?: Payment) {
    if (p == undefined) {
      this.router.navigate(["payment"]);
    } else {
      this.router.navigate(["payment", p?.paymentUid]);
    }
  } 

}
