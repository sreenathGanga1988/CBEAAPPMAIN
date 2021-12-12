import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Column } from './columns';

@Component({
  selector: 'app-kidu-table',
  templateUrl: './kidu-table.component.html',
  styleUrls: ['./kidu-table.component.css']
})
export class KiduTableComponent implements OnInit {

  constructor() { }
  @Input()
  tableColumns: Array<Column> = [];

  @Input()
  rows: Observable<any[]>| undefined;
  displayedColumns: Array<string> = [];
  ngOnInit(): void {
    this.displayedColumns = this.tableColumns.map((c) => c.columnDef);    
  }

}
