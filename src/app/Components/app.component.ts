import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../Common/Controls/kidu-confirm-box/kidu-confirm-box.component';
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

  openDialogOne() {
    const dialogInterface: DialogInterface = {
      dialogHeader: 'I am created by Reusable dialog',
      dialogContent: 'I am first dialog',
      cancelButtonLabel: 'Cancel',
      confirmButtonLabel: 'Submit',
      callbackMethod: () => {
        this.performDialogSubmitMethodOne();
      },
    };
    this.dialog.open(DialogComponent, {
      width: '300px',
      data: dialogInterface,
    });
  }

  /**
   * This method invokes the second dialog
   */
  openDialogTwo() {
    const dialogInterface: DialogInterface = {
      dialogHeader: 'I am created by Reusable dialog',
      dialogContent: 'I am second dialog',
      cancelButtonLabel: 'Cancel',
      confirmButtonLabel: 'Submit',
      callbackMethod: () => {
        this.performDialogSubmitMethodTwo();
      },
    };
    this.dialog.open(DialogComponent, {
      width: '300px',
      data: dialogInterface,
    });
  }

  performDialogSubmitMethodOne() {
    this.dialogSubmissionMessage = 'The dialog submitted from the Dialog ONE';
  }

  performDialogSubmitMethodTwo() {
    this.dialogSubmissionMessage = 'The dialog submitted from the Dialog TWO';
  }
  title = 'CBEAAPPMAIN';
}
