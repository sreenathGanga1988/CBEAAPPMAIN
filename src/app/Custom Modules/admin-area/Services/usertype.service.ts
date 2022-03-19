
import { UserType } from 'src/app/Models/userType.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable, Observable, of } from 'rxjs';
import { CustomApiResponse } from 'src/app/Models/custom-api-responseo.model';
import { calcPossibleSecurityContexts } from '@angular/compiler/src/template_parser/binding_parser';
import { map } from 'rxjs/operators';
import { HttpHelperService } from 'src/app/http-helper.service';
import { CellType, Column } from '../Components/Common/kidu-table/columns';

@Injectable({
  providedIn: 'root'
})
export class UserTypeService {
  url:string="/api_UserType";
 
  constructor( private httphelper :HttpHelperService) {  }

  tableColumns: Array<Column> = [
    {columnDef:'id',header:'ID',colType:CellType.Text}
    ,{columnDef:'abbreviation',header:'Code',colType:CellType.Text},
    {columnDef:'name',header:'Name',colType:CellType.Text} 
    ,{columnDef:'isActive',header:'Status',colType:CellType.Status} 
    ,{columnDef:'btnString',header:'Actions',colType:CellType.Button} ];
  
   getUserTypes() {
    return this.httphelper.GetData(this.url);
   // return this.httphelper.GetData(this.url).pipe(map((val) => val.isSucess ? val.value : []));
     }
    postUserTypes(obj :any) {
       return this.httphelper.POST(this.url,obj);
     }
     putUserTypes(id:number,obj :any) {
      return this.httphelper.PUT(this.url+"/"+id,obj);
    }
    deleteItem(id:number) {
      return this.httphelper.Delete(this.url+"/"+id);
    }
}
