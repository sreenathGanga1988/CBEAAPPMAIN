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
  dtOptions: DataTables.Settings = {};
  @Input()
  rows: any[]| undefined;
  displayedColumns: Array<string> = [];
  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true
    };
    this.displayedColumns = this.tableColumns.map((c) => c.columnDef);    
  };

  


  Datafity(  pageLength:number=5 ) {
    setTimeout(()=>{   
    
      $('#dtTable').DataTable( {
        pagingType: 'full_numbers',
        pageLength: pageLength,
        processing: true,
        lengthMenu : [5, 10, 25]
    } );
    }, 250); 
  }

  Rendvervalue(item :any,disCol:Column)  {



  }
  
}
