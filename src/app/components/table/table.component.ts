import { AfterContentChecked, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'pos-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit, AfterContentChecked {

  @Input() style: Object = {
    height: '400px',
    border: 'solid 1px'
  };
  @Input() dataSource: any[] = [];
  @Input() sticky: boolean = true;
  @Input() columnDefs: ColumnDef[] = [];
  displayedColumns: string[] = [];

  @Input() enableSelect: boolean = false;
  @Output('onSelect') selectionEmitter: EventEmitter<number[]> = new EventEmitter<number[]>();
  selections: boolean[] = [];
  selectAll: boolean = false;

  constructor(
    private changeDetector: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.displayedColumns = this.columnDefs.map(columnDef => columnDef.colName);
    if (this.enableSelect) {
      this.displayedColumns = ['selection', ...this.displayedColumns];
    }
    this.dataSource.forEach(() => { this.selections.push(false) });
  }

  ngAfterContentChecked(): void {
    this.changeDetector.detectChanges();
  }

  onSelect() {
    let selectAll = true;
    this.selections.forEach(selection => {
      selectAll = selectAll && selection;
    });
    this.selectAll = selectAll;
    this.emitSelectInedxes();
  }

  onSelectAll() {
    this.selections.forEach((selection, idx) => {
      this.selections[idx] = this.selectAll;      
    });
    this.emitSelectInedxes();
  }

  emitSelectInedxes() {
    if(!this.enableSelect) return;
    const selectedIdxes: number[] = [];
    this.selections.forEach((selection, idx) => {
      if (selection) selectedIdxes.push(idx);
    });
    this.selectionEmitter.emit(selectedIdxes);
  }

}

export interface ColumnDef {
  colName: string;
  displayName: string;
  width?: string;
  valueType: string;
  ediable?: boolean;
  func?: Function;
}
