import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { vender, VenderService } from 'src/app/services/vender.service';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css']
})
export class PropertiesComponent implements OnInit {

  vender_displayedColumns: string[] = ['#', 'venderId', 'name'];
  vender_dataSource: vender[] = [];

  constructor(
    private venderService: VenderService,
    private router: Router
  ) {
    this.venderService.findAll().subscribe(venders => {
      this.vender_dataSource = venders;
    })
  }

  ngOnInit(): void {
  }

  toVender(v?: vender) {
    if (v == undefined) {
      this.router.navigate(["vender"]);
    } else {
      this.router.navigate(["vender", v?.venderUid]);
    }
  }

}
