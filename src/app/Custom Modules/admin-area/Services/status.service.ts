
import { Status } from 'src/app/Models/status.model';
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
export class StatusService {
  url:string="/api_Status";
  constructor( private httphelper :HttpHelperService) {  }

  
  getStatus() {
    return this.httphelper.GetData(this.url);
   // return this.httphelper.GetData(this.url).pipe(map((val) => val.isSucess ? val.value : []));
     }
     getStatusById(Id :number) {
      return this.httphelper.GetData(this.url+"/"+Id);
     // return this.httphelper.GetData(this.url).pipe(map((val) => val.isSucess ? val.value : []));
       }
    postStatus(obj :any) {
       return this.httphelper.POST(this.url,obj);
     }
     putStatus(id:number,obj :any) {
      return this.httphelper.PUT(this.url+"/"+id,obj);
    }
    deleteStatus(id:number) {
      return this.httphelper.Delete(this.url+"/"+id);
    }

}
