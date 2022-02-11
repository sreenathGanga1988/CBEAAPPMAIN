import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort,Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { State } from 'src/app/Models/state.model';
import { CellType, Column } from '../../../Components/Common/kidu-table/columns';
import { KiduTableComponent } from '../../../Components/Common/kidu-table/kidu-table.component';
import { StateService } from '../../../Services/state.service';

@Component({
  selector: 'app-state-list',
  templateUrl: './state-list.component.html',
  styleUrls: ['./state-list.component.css']
})
export class StateListComponent implements OnInit {


  Items: State[]| undefined;
  url:string="/Api_State";
  Tittle:string="States";
  @ViewChild(KiduTableComponent) child!: KiduTableComponent;

  constructor( private catservice :StateService) {
    
  }

  tableColumns: Array<Column> = [
    {columnDef:'id',header:'ID',colType:CellType.Text}
    ,{columnDef:'abbreviation',header:'Code',colType:CellType.Text},
    {columnDef:'name',header:'Name',colType:CellType.Text} 
    ,{columnDef:'isActive',header:'Status',colType:CellType.Status} 
    ,{columnDef:'btnString',header:'Actions',colType:CellType.Button} ];


    ngOnInit(): void {
    this.catservice.getStates(this.url).subscribe( val=>{
      this.Items=val;
      for (var _item of  this.Items) {
       
        let btnstring= "<div class='btn-toolbar' role='toolbar' >"       

        if(_item.isActive==true){
          btnstring= btnstring +"<div class='btn-group' role='group'><i class='bi-alarm' style='font-size: 2rem; color: cornflowerblue;'></i></div>"
        }else{
          btnstring= btnstring +"<div class='btn-group' role='group'><i class='bi-alarm' style='font-size: 2rem; color: cornflowerblue;'></i></div>"
        }

        btnstring=btnstring+"</div>";

        _item.btnString=btnstring;
      }
      this.child.Datafity(10);
    });  
    
    
    
    
  
  }
 
}
