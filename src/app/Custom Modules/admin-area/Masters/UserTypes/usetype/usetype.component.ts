import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CustomApiResponse } from 'src/app/Models/custom-api-responseo.model';
import { UserType } from 'src/app/Models/userType.model';
import { UserTypeService } from '../../../Services/usertype.service';

@Component({
  selector: 'app-usetype',
  templateUrl: './usetype.component.html',
  styleUrls: ['./usetype.component.css']
})
export class UsetypeComponent implements OnInit {
  response!: CustomApiResponse;
  ActionType!: string;
  ActionBtnString: string = "Save";
  local_data: any;
  addForm!: FormGroup;
  constructor(private formBuilder: FormBuilder, private userTypeService: UserTypeService,
    public dialogRef: MatDialogRef<UsetypeComponent>, @Optional() @Inject(MAT_DIALOG_DATA) public editdata: UserType) {
    console.log(editdata);
    this.local_data = { ...editdata };
    this.ActionType = this.local_data.action;

    // console.log(editdata);

  }

  ngOnInit(): void {
    this.addForm = this.formBuilder.group({
      id:[0],
      abbreviation: ['', Validators.required],
      description: ['', Validators.required]
    });
    if (this.ActionType == "Update") {
      this.addForm.controls['id'].setValue(this.editdata.id);
      this.addForm.controls['abbreviation'].setValue(this.editdata.abbreviation);
      this.addForm.controls['description'].setValue(this.editdata.description);
      this.ActionBtnString = "Update";
    }

  }

  SubmitAction() {
    if (this.ActionType == "Add") {
      if (this.addForm.valid){
        this.AddAction();
      }
      
    }
    else {
      if (this.addForm.valid){
        this.UpdateAction();
      }
    }

  }


  AddAction() {
    console.log(this.addForm.value);
    this.userTypeService.postUserTypes(this.addForm.value).subscribe({
      next: (res) => {
        alert("Added Sucessfully")
        this.addForm.reset();
        this.dialogRef.close("Saved");
      },
      error: (res) => {
        alert("Erro while Adding")
      }
    })
  }

  UpdateAction() {
    console.log(this.addForm.value);
    this.userTypeService.putUserTypes(this.editdata.id, this.addForm.value).subscribe({
      next: (res) => {


        if (res.isSucess == true) {
          console.log(res);
          alert("Updated Sucessfully")
          this.addForm.reset();
          this.dialogRef.close("Updated");
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
  doAction() {
    this.dialogRef.close({ event: this.ActionType, data: this.local_data });
  }
  closeDialog() {
    this.dialogRef.close({ event: 'Cancel' });
  }
}
