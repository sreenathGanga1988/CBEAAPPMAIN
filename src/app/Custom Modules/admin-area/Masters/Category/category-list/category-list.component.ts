import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/app/Models/category.model';
import { Column } from '../../../Components/Common/kidu-table/columns';
import { CategoryService } from '../../../Services/category.service';
//import { CategoryService } from '../../../Services/state.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  Items: Observable<Category[]>| undefined;
  url:string="/Api_category";
  constructor( private catservice :CategoryService) {
  }


  tableColumns: Array<Column> = [{columnDef:'id',header:'ID'},{columnDef:'abbreviation',header:'Code'},{columnDef:'name',header:'Name'}  ];
  ngOnInit(): void {

    this.Items= this.catservice.getCategories(this.url);

    //this.catservice.getCategories(this.url).subscribe( val=>this.Items=val);
  }
}
