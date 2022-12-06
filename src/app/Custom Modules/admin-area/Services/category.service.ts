
import { Category } from 'src/app/Models/category.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable, Observable, of } from 'rxjs';
import { CustomApiResponse } from 'src/app/Models/custom-api-responseo.model';
import { calcPossibleSecurityContexts } from '@angular/compiler/src/template_parser/binding_parser';
import { map } from 'rxjs/operators';
import { HttpHelperService } from 'src/app/Common/Services/http-helper.service';
import { CellType, Column } from '../Components/Common/kidu-table/columns';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  url:string="/api_category";
 
  constructor( private httphelper :HttpHelperService) {  }

    getCategories() {
      return this.httphelper.GetData(this.url);
     // return this.httphelper.GetData(this.url).pipe(map((val) => val.isSucess ? val.value : []));
       }
      postCategories(obj :any) {
         return this.httphelper.POST(this.url,obj);
       }
       putCategories(id:number,obj :any) {
        return this.httphelper.PUT(this.url+"/"+id,obj);
      }
      deleteItem(id:number) {
        return this.httphelper.Delete(this.url+"/"+id);
      }
      getCategoriesById(Id :number) {
        return this.httphelper.GetData(this.url+"/"+Id);
       // return this.httphelper.GetData(this.url).pipe(map((val) => val.isSucess ? val.value : []));
         }
}
