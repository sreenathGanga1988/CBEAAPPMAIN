import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../Custom Modules/public-area/Services/authentication.service';
import { LoadingService } from '../Custom Modules/public-area/Services/loading.service';


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
