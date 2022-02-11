import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Branch } from 'src/app/Models/branch.model';
import { CellType, Column } from '../../Components/Common/kidu-table/columns';
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



  tableColumns: Array<Column> = [
    {columnDef:'id',header:'ID',colType:CellType.Text}
    ,{columnDef:'dpCode',header:'DpCode',colType:CellType.Text},
    {columnDef:'name',header:'Name',colType:CellType.Text} 
    ,{columnDef:'isActive',header:'Status',colType:CellType.Status} 
    ,{columnDef:'btnString',header:'Actions',colType:CellType.Button} ];
  
  ngOnInit(): void {

  //  this.Items= this.brnchservice.getCategories(this.url);
    this.brnchservice.getBranches(this.url).subscribe( val=>{
      this.Items=val;
      this.child.Datafity(600);
    });
    //this.catservice.getCategories(this.url).subscribe( val=>this.Items=val);
  }


 





  ngAfterViewInit (){
    this.child.Datafity(600);
  }
}
