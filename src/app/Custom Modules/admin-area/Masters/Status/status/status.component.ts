import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CustomApiResponse } from 'src/app/Models/custom-api-responseo.model';
import { Status } from 'src/app/Models/status.model';
import { StatusService } from '../../../Services/status.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  CurrentUserID: number = 1;
  response!: CustomApiResponse;
  ActionType!: string;
  ActionBtnString: string = "Save";
  local_data: any;
  addForm!: FormGroup;
  constructor(private formBuilder: FormBuilder, private statusService: StatusService,
    public dialogRef: MatDialogRef<StatusComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public editdata: Status) {
    console.log(editdata);
    this.local_data = { ...editdata };
    this.ActionType = this.local_data.action;

    // console.log(editdata);

  }

  ngOnInit(): void {
    this.addForm = this.formBuilder.group({
      id: [0],
      abbreviation: ['', [Validators.required, Validators.maxLength(5),]],
      name: ['', Validators.required],
      description: ['', Validators.required],
      groupCode: ['', Validators.required],
      isActive: [true,],
      createdDate: [new Date()],
      createdByUserId: ['', Validators.required],
      modifiedDate: [new Date()],
      modifiedByUserId: ['', Validators.required],
    });
    if (this.ActionType == "Update") {
      this.GetStatusData(this.editdata.id);
    }

  }

  SubmitAction() {
    this.updateAuditData();
    if (this.ActionType == "Add") {
      if (this.addForm.valid) {
        this.AddAction();
      }
      else{
       
        console.log(this.addForm.errors)
      }

    }
    else {
     
      if (this.addForm.valid) {
        this.UpdateAction();
      }
    }

  }


  GetStatusData(id: Number) {
    this.statusService.getStatusById(this.editdata.id).subscribe({
      next: (res) => {

        if (res.isSucess == true) {
          console.log(res);
          this.editdata = res.value;

          this.addForm.controls['id'].setValue(this.editdata.id);
          this.addForm.controls['abbreviation'].setValue(this.editdata.abbreviation);
          this.addForm.controls['description'].setValue(this.editdata.description);
          this.addForm.controls['groupCode'].setValue(this.editdata.groupCode);
          this.addForm.controls['name'].setValue(this.editdata.name);
          this.addForm.controls['isActive'].setValue(this.editdata.isActive);
          this.addForm.controls['createdDate'].setValue(this.editdata.createdDate);
          this.addForm.controls['createdByUserId'].setValue(this.editdata.createdByUserId);
          this.addForm.controls['modifiedDate'].setValue(this.editdata.modifiedDate);
          this.addForm.controls['modifiedByUserId'].setValue(this.editdata.modifiedByUserId);
          this.ActionBtnString = "Update";
        }
        else {
          alert(res.error);
        }
      },
      error: (res) => {
        alert("Erro while Adding")
      }
    })
  }

  AddAction() {

   
    
    
    console.log(this.addForm.value);
    this.statusService.postStatus(this.addForm.value).subscribe({
      next: (res) => {
        this.processResult(res, "Saved")
      },
      error: (res) => {
        alert("Erro while Adding")
      }
    })
  };

  UpdateAction() {
   
    console.log(this.addForm.value);  
    this.statusService.putStatus(this.editdata.id, this.addForm.value).subscribe({
      next: (res) => {
        this.processResult(res, "Updated")
      },
      error: (res) => {
        alert("Erro while Adding")
      }
    })
  };


  processResult(res: CustomApiResponse, ActionString: string) {
    if (res.isSucess == true) {
      console.log(res);
      alert(ActionString + " " + "Successfully")
      this.addForm.reset();
      this.dialogRef.close(ActionString);
    }
    else {
      alert(res.error);
    }
  };
  
  updateAuditData() {
    
    if (this.ActionType == "Add") {
    
      this.addForm.controls['createdDate'].setValue(new Date());
      this.addForm.controls['createdByUserId'].setValue(this.CurrentUserID);
      this.addForm.controls['modifiedDate'].setValue(new Date());
      this.addForm.controls['modifiedByUserId'].setValue(this.CurrentUserID);

    }
    else {
      this.addForm.controls['modifiedDate'].setValue(new Date());
      this.addForm.controls['modifiedByUserId'].setValue(this.CurrentUserID);
    }
  };
  doAction() {
    this.dialogRef.close({ event: this.ActionType, data: this.local_data });
  };
  closeDialog() {
    this.dialogRef.close({ event: 'Cancel' });
  };
}
