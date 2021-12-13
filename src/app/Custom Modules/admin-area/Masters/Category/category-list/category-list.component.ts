import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/app/Models/category.model';
import { Column } from '../../../Components/Common/kidu-table/columns';
import { KiduTableComponent } from '../../../Components/Common/kidu-table/kidu-table.component';
import { CategoryService } from '../../../Services/category.service';
//import { CategoryService } from '../../../Services/state.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  Items: Category[]| undefined;
  url:string="/Api_category";

  @ViewChild(KiduTableComponent) child!: KiduTableComponent;

  constructor( private catservice :CategoryService) {
    
  }


  tableColumns!: Array<Column> 
  ngOnInit(): void {
    this.tableColumns= this.catservice.tableColumns;
    this.catservice.getCategories(this.url).subscribe( val=>{
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
  ngAfterViewInit (){
    
  }
}
