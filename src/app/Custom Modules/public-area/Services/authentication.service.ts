import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PublicHttpHelperService } from 'src/app/public-http-helper.service';
@Injectable({
    providedIn: 'root'
  })
export class AuthenticationService {

    constructor(private httphelper :PublicHttpHelperService) {
        
    }


    login(username: string, password: string) {
        this.httphelper.Login(username,password).subscribe((val) => {
            this.setSession(val)
          });

       

    }
    private setSession(authResult:any) {
       
        localStorage.setItem('id_token', authResult);
        localStorage.setItem("expires_at", authResult );
    }          

    logout() {
        localStorage.removeItem("id_token");
        localStorage.removeItem("expires_at");
    }

    public isLoggedIn() {
       return true;
    }

    isLoggedOut() {
        return !this.isLoggedIn();
    }

   
}