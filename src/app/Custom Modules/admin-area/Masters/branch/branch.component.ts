import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Branch } from 'src/app/Models/branch.model';
import { Column } from '../../Components/Common/kidu-table/columns';
import { KiduTableComponent } from '../../Components/Common/kidu-table/kidu-table.component';
import { BranchService } from '../../Services/branch.service';

@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.css']
})
export class BranchComponent implements OnInit {

  Items: Branch[]| undefined;
  url:string="/Api_Branch";
  headingText:String="Bank Branch";
  @ViewChild(KiduTableComponent) child!: KiduTableComponent;

  constructor( private brnchservice :BranchService) {
  }


  tableColumns: Array<Column> = [{columnDef:'id',header:'ID'},{columnDef:'dpCode',header:'DpCode'},{columnDef:'name',header:'Name'}  ];
  ngOnInit(): void {

  //  this.Items= this.brnchservice.getCategories(this.url);
    this.brnchservice.getCategories(this.url).subscribe( val=>{
      this.Items=val;
      this.child.Datafity(600);
    });
    //this.catservice.getCategories(this.url).subscribe( val=>this.Items=val);
  }


 





  ngAfterViewInit (){
    this.child.Datafity(600);
  }
}
