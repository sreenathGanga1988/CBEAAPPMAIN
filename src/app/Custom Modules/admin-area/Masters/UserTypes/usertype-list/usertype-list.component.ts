import { Component, OnInit, ViewChild } from '@angular/core';
import { UserType } from 'src/app/Models/userType.model';
import { CellType, Column } from '../../../Components/Common/kidu-table/columns';
import { KiduTableComponent } from '../../../Components/Common/kidu-table/kidu-table.component';
import { UserTypeService } from '../../../Services/usertype.service';

@Component({
  selector: 'app-usertype-list',
  templateUrl: './usertype-list.component.html',
  styleUrls: ['./usertype-list.component.css']
})
export class UsertypeListComponent implements OnInit {

  Items: UserType[]| undefined;
  url:string="/Api_UserType";
  Tittle:string="UserTypes";
  @ViewChild(KiduTableComponent) child!: KiduTableComponent;

  constructor( private usertypeService :UserTypeService) {
    
  }

  tableColumns: Array<Column> = [
    {columnDef:'id',header:'ID',colType:CellType.Text}
    ,{columnDef:'abbreviation',header:'Code',colType:CellType.Text},
    {columnDef:'description',header:'Name',colType:CellType.Text}    
    ,{columnDef:'btnString',header:'Actions',colType:CellType.Button} ];


    ngOnInit(): void {
    this.usertypeService.getUserTypes(this.url).subscribe( val=>{
      this.Items=val;
      for (var _item of  this.Items) {
       
        let btnstring= "<div class='btn-toolbar' role='toolbar' >"      
        btnstring=btnstring+"</div>";

        _item.btnString=btnstring;
      }
      this.child.Datafity(10);
    });  
    
    
    
    
  
  }
 
}
