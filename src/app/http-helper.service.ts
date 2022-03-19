import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomApiResponse } from './Models/custom-api-responseo.model';

@Injectable({
  providedIn: 'root'
})
export class HttpHelperService {
  BaseUrl: String = "https://www.cbeugjfws.co.in/api";
  header: HttpHeaders;
  constructor(private httpclient: HttpClient) {
    this.header = new HttpHeaders("sdfkjsdhfkj");
    this.header.append('Content-Type', 'applications/json');
  }

  GetData(url: string): Observable<CustomApiResponse> {
    return this.httpclient.get<CustomApiResponse>(this.BaseUrl + url, { headers: this.header });
    // return  this.httpclient.get<CustomApiResponse>(this.BaseUrl+url);
  }

  POST(url: string, params: any): Observable<CustomApiResponse> {
    return this.httpclient.post<CustomApiResponse>(this.BaseUrl + url, params, { headers: this.header });
  }
  PUT(url: string, params: any): Observable<CustomApiResponse> {
    return this.httpclient.put<CustomApiResponse>(this.BaseUrl + url, params, { headers: this.header });
  }

  Delete(url: string): Observable<CustomApiResponse> {
    return this.httpclient.delete<CustomApiResponse> (this.BaseUrl + url,{ headers: this.header })     
        
  }
}
