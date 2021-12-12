import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { PublicHttpHelperService } from 'src/app/public-http-helper.service';
import { Mainpage } from '../Models/mainpage.model';
import { Publicmanagingcomitee, PublicManagingComiteeDTOList } from '../Models/publicmanagingcomitee';

@Injectable({
  providedIn: 'root'
})
export class PublicAreaService {
  BaseUrl:String="https://localhost:44396/api";
  constructor( private httphelper :PublicHttpHelperService) {
   }
   getMainPage(url:string) : Observable<Mainpage>{
    return this.httphelper.GetData(url);
     }

    getManagingComitee(url:string) : Observable<PublicManagingComiteeDTOList>{
      return this.httphelper.GetData(url);
    }
}
