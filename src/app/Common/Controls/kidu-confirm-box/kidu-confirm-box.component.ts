import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogInterface } from '../../Interfaces/dialog-interface.model';
import { StateService } from '../../Services/state.service';

@Component({
  selector: 'app-kidu-confirm-box',
  templateUrl: './kidu-confirm-box.component.html',
  styleUrls: ['./kidu-confirm-box.component.css']
})
export class DialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<KiduConfirmBoxComponent>,
    @Inject(MAT_DIALOG_DATA)
    public dialogData: DialogInterface,
    public stateService: StateService

  ) { }

  ngOnInit(): void {
  }
  handleDialogSubmit() {
    this.stateService.isAsyncOperationRunning$.next(true);
    setTimeout(() => {
      this.dialogData.callbackMethod();
      this.stateService.isAsyncOperationRunning$.next(false);
    }, 500);
  }
  closeDialog(): void {
    this.dialogRef.close();
  }
}
