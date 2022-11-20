import { Component, OnInit } from '@angular/core';
import { ColumnDef } from 'src/app/components/table/table.component';

export interface ProductElement {
  ID: string;
  describe: string;
  qty: number;
  price: number;
  discount: number;
}

@Component({
  selector: 'pos-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  displayedColumns: ColumnDef[] = [
    {
      colName: 'ID',
      displayName: '項目',
      width: '100px',
      valueType: 'string'
    },
    {
      colName: 'describe',
      displayName: '描述',
      valueType: 'string'
    },
    {
      colName: 'qty',
      displayName: '數量',
      width: '100px',
      valueType: 'number',
      ediable: true
    },
    {
      colName: 'price',
      displayName: '售價',
      width: '100px',
      valueType: 'number'
    },
    {
      colName: 'discount',
      displayName: '折扣-％',
      width: '100px',
      valueType: 'number',
      ediable: true
    },
    {
      colName: 'total',
      displayName: '小計',
      width: '100px',
      valueType: 'number',
      func: (data: ProductElement) => {
        if(data.discount < 0) {
          data.discount = 0;
        } else if (data.discount > 100) {
          data.discount = 100;
        }
        return data.price * data.qty * ((100-data.discount)/100);
      }
    },
  ];
  dataSource: ProductElement[] = [
    { ID: '260031', describe: '苜蓿草(1KG)', qty: 2, price: 80, discount: 0 },
    { ID: '260032', describe: '提摩西一割(1KG)', qty: 1, price: 80, discount: 0 },
    { ID: '260033', describe: '提摩西二割(1KG)', qty: 5, price: 80, discount: 0 },
    { ID: '260033', describe: '提摩西二割(1KG)提摩西二割(1KG)提摩西二割(1KG)提摩西二割(1KG)提摩西二割(1KG)提摩西二割(1KG)', qty: 5, price: 80, discount: 0 },
    { ID: '260033', describe: '提摩西二割(1KG)', qty: 5, price: 80, discount: 0 },
    { ID: '260033', describe: '提摩西二割(1KG)', qty: 5, price: 80, discount: 0 },
    { ID: '260033', describe: '提摩西二割(1KG)', qty: 5, price: 80, discount: 0 },
    { ID: '260033', describe: '提摩西二割(1KG)', qty: 5, price: 80, discount: 0 },
    { ID: '260033', describe: '提摩西二割(1KG)', qty: 5, price: 80, discount: 0 },
  ];
  disableDelete: boolean = true;

  constructor() { }

  ngOnInit(): void { }

  getSelections(event: number[]) {
    this.disableDelete = event.length? false : true;
    console.log(event);
    console.log(this.dataSource)
  }

}
