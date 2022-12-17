import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PublicHttpHelperService } from 'src/app/Common/Services/public-http-helper.service';
@Injectable({
    providedIn: 'root'
  })
export class AuthenticationService {

    constructor(private httphelper :PublicHttpHelperService) {

    }


    public login(obj :any) {

        this.httphelper.Login(obj).subscribe((val) => {
            this.setSession(val)
          });



    }
    private setSession(authResult:any) {
       console.log(authResult );
        localStorage.setItem('userdata', JSON.stringify(authResult));
        localStorage.setItem("expires_at", authResult );


    }

    logout() {
        localStorage.removeItem("userdata");
        localStorage.removeItem("expires_at");
    }

    public isLoggedIn() {


           var userdata=localStorage.getItem("userdata")
        if (userdata != null) {

            return true;
          }

       else{
        return false;
       }
    }

    isLoggedOut() {
        return this.isLoggedIn();
    }


}
export class UserLoginDTO {
    userName?: string;
    password?: string;
}
