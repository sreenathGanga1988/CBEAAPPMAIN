import { Component, OnInit } from '@angular/core';
import { AlertService } from '../Common/Modules/Alert';
import { AuthenticationService } from '../Common/Services/authentication.service';
import { LoadingService } from '../Common/Services/loading.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent   implements OnInit {

  IsAdmin: boolean=true;
  IsLogged:boolean=false;
  constructor(public loadingService: LoadingService,private authenticationService: AuthenticationService ) {
  }
  ngOnInit(): void {
  this.IsLogged=  this.authenticationService.isLoggedIn();
  }


  title = 'CBEAAPPMAIN';
}
