import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomApiResponse } from './Models/custom-api-responseo.model';

@Injectable({
  providedIn: 'root'
})
export class HttpHelperService {
  BaseUrl:String="https://localhost:44396/api";
  constructor( private httpclient :HttpClient) {
   }

   GetData(url:string) : Observable<CustomApiResponse>{
    return  this.httpclient.get<CustomApiResponse>(this.BaseUrl+url);
   }
  }
