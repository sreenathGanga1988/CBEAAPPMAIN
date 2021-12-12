import { Category } from 'src/app/Models/category.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable, Observable, of } from 'rxjs';
import { CustomApiResponse } from 'src/app/Models/custom-api-responseo.model';
import { calcPossibleSecurityContexts } from '@angular/compiler/src/template_parser/binding_parser';
import { map } from 'rxjs/operators';
import { Branch } from 'src/app/Models/branch.model';
import { HttpHelperService } from 'src/app/http-helper.service';

@Injectable({
  providedIn: 'root'
})
export class BranchService {
  url:String="/api_category";
  constructor( private httphelper :HttpHelperService) {  }

   getCategories(url:string) : Observable<Branch[]>{


    return this.httphelper.GetData(url).pipe(map((val) => val.isSucess ? val.value : []));

     }

}
