import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogInterface } from '../Common/Interfaces/dialog-interface.model';
import { AlertService } from '../Common/Modules/Alert';
import { AuthenticationService } from '../Common/Services/authentication.service';
import { LoadingService } from '../Common/Services/loading.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent   implements OnInit {
  public dialogSubmissionMessage: string = '';
  IsAdmin: boolean=true;
  IsLogged:boolean=false;
  constructor(public loadingService: LoadingService,private authenticationService: AuthenticationService,public dialog: MatDialog ) {
  }
  ngOnInit(): void {
  this.IsLogged=  this.authenticationService.isLoggedIn();
  }

 
  title = 'CBEAAPPMAIN';
}
