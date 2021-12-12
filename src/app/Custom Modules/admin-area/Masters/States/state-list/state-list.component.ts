import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort,Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { State } from 'src/app/Models/state.model';
import { Column } from '../../../Components/Common/kidu-table/columns';
import { StateService } from '../../../Services/state.service';

@Component({
  selector: 'app-state-list',
  templateUrl: './state-list.component.html',
  styleUrls: ['./state-list.component.css']
})
export class StateListComponent implements OnInit {


  Items: Observable<State[]>| undefined;


  url:string="/Api_State";
  headingText:String="State";

  displayedColumns: string[] = ['id', 'abbreviation', 'name',];

  @ViewChild(MatSort)
  sort!: MatSort;

  ngAfterViewInit() {

  }

  constructor( private brnchservice :StateService) {
  }



  ngOnInit(): void {
 //   this.brnchservice.getStates(this.url).subscribe((els) => {this.dataSource3 = els;});
  }
}


