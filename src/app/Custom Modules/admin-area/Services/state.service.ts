
import { State } from 'src/app/Models/state.model';
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
export class StateService {
  url:String="/api_State";
  constructor( private httphelper :HttpHelperService) {  }

  
   getStates(url:string) : Observable<State[]>{
    return this.httphelper.GetData(url).pipe(map((val) => val.isSucess ? val.value : []));
     }

}
