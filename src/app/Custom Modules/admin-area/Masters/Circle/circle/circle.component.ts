import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CustomApiResponse } from 'src/app/Models/custom-api-responseo.model';
import { Circle } from 'src/app/Models/circle.model';
import { CircleService } from '../../../Services/circle.service';


@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.css']
})
export class CircleComponent implements OnInit {

  CurrentUserID: number = 1;
  response!: CustomApiResponse;
  ActionType!: string;
  ActionBtnString: string = "Save";
  local_data: any;
  addForm!: FormGroup;
  constructor(private formBuilder: FormBuilder, private circleService: CircleService,
    public dialogRef: MatDialogRef<CircleComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public editdata: Circle) {
    console.log(editdata);
    this.local_data = { ...editdata };
    this.ActionType = this.local_data.action;

    // console.log(editdata);

  }

  ngOnInit(): void {
    this.addForm = this.formBuilder.group({
      id: [0],
      abbreviation: ['', [Validators.required, Validators.maxLength(5),]],
      circleCode: ['', Validators.required],
      stateId: [''],
      name: ['', Validators.required],
      isActive: [true,],
      createdDate: [new Date()],
      createdByUserId: ['', Validators.required],
      modifiedDate: [new Date()],
      modifiedByUserId: ['', Validators.required],
    });
    if (this.ActionType == "Update") {
      this.GetCircleData(this.editdata.id);
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


  GetCircleData(id: Number) {
    this.circleService.getCircleById(this.editdata.id).subscribe({
      next: (res) => {

        if (res.isSucess == true) {
          console.log(res);
          this.editdata = res.value;

          this.addForm.controls['id'].setValue(this.editdata.id);
          this.addForm.controls['abbreviation'].setValue(this.editdata.abbreviation);
          this.addForm.controls['circleCode'].setValue(this.editdata.circleCode);
          this.addForm.controls['stateId'].setValue(this.editdata.stateId);
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
    this.circleService.postCircles(this.addForm.value).subscribe({
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
    this.circleService.putCircles(this.editdata.id, this.addForm.value).subscribe({
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
