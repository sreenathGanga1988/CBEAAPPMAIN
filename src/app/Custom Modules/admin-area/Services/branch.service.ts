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
  url: string = "/api_branch";
  constructor(private httphelper: HttpHelperService) { }

  getBranches(url: string): Observable<Branch[]> {


    return this.httphelper.GetData(url).pipe(map((val) => val.isSucess ? val.value : []));

  }

  getBranch() {
    return this.httphelper.GetData(this.url);
    // return this.httphelper.GetData(this.url).pipe(map((val) => val.isSucess ? val.value : []));
  }
  getBranchById(Id: number) {
    return this.httphelper.GetData(this.url + "/" + Id);
    // return this.httphelper.GetData(this.url).pipe(map((val) => val.isSucess ? val.value : []));
  }
  postBranch(obj: any) {
    return this.httphelper.POST(this.url, obj);
  }
  putBranch(id: number, obj: any) {
    return this.httphelper.PUT(this.url + "/" + id, obj);
  }
  deleteBranch(id: number) {
    return this.httphelper.Delete(this.url + "/" + id);
  }

}
