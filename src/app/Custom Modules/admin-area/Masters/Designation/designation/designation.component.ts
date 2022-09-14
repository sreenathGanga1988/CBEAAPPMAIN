import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CustomApiResponse } from 'src/app/Models/custom-api-responseo.model';

import { DesignationService } from '../../../Services/designation-service';
import { Designation } from 'src/app/Models/designation-model';

@Component({
  selector: 'app-designation',
  templateUrl: './designation.component.html',
  styleUrls: ['./designation.component.css']
})
export class DesignationComponent implements OnInit {

  CurrentUserID: number = 1;
  response!: CustomApiResponse;
  ActionType!: string;
  ActionBtnString: string = "Save";
  local_data: any;
  addForm!: FormGroup;
  constructor(private formBuilder: FormBuilder, private stateService: DesignationService,
    public dialogRef: MatDialogRef<DesignationComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public editdata: Designation) {
    console.log(editdata);
    this.local_data = { ...editdata };
    this.ActionType = this.local_data.action;

    // console.log(editdata);

  }

  ngOnInit(): void {
    this.addForm = this.formBuilder.group({
      id: [0],
      description: ['', Validators.required],
      name: ['', Validators.required],
      isActive: [true,],
      createdDate: [new Date()],
      createdByUserId: ['', Validators.required],
      modifiedDate: [new Date()],
      modifiedByUserId: ['', Validators.required],
    });
    if (this.ActionType == "Update") {
      this.GetDesignationData(this.editdata.id);
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


  GetDesignationData(id: Number) {
    this.stateService.getDesignationById(this.editdata.id).subscribe({
      next: (res) => {

        if (res.isSucess == true) {
          console.log(res);
          this.editdata = res.value;

          this.addForm.controls['id'].setValue(this.editdata.id);
          this.addForm.controls['description'].setValue(this.editdata.description);
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
    this.stateService.postDesignations(this.addForm.value).subscribe({
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
    this.stateService.putDesignations(this.editdata.id, this.addForm.value).subscribe({
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
