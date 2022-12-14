import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pos-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  inputs: string[] = ['abc'];
  addInput() {
    this.inputs.push("");
  }


  selectOptionsGroup = [['a1', 'a2', 'a3'], ['b1', 'b2', 'b3'], ['c1', 'c2', 'c3']];
  selectOptions = ['a1', 'a2', 'a3'];
  onChange(event:any) {
    this.selectOptions = this.selectOptionsGroup[event.target.value];
  }

}
