import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Category } from 'src/app/Models/category.model';
import { CustomApiResponse } from 'src/app/Models/custom-api-responseo.model';
import { CategoryService } from '../../../Services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  response!: CustomApiResponse;
  ActionType!: string;
  ActionBtnString: string = "Save";
  local_data: any;
  addForm!: FormGroup;
  constructor(private formBuilder: FormBuilder, private categoryService: CategoryService,
    public dialogRef: MatDialogRef<CategoryComponent>, @Optional() @Inject(MAT_DIALOG_DATA) public editdata: Category) {
    console.log(editdata);
    this.local_data = { ...editdata };
    this.ActionType = this.local_data.action;

    // console.log(editdata);

  }

  ngOnInit(): void {
    this.addForm = this.formBuilder.group({
      id: [0],
      abbreviation: ['', [Validators.required, Validators.maxLength(5),]],
      name: ['', Validators.required]
    });
    if (this.ActionType == "Update") {
      this.GetCategoriesData(this.editdata.id);

    }

  }

  SubmitAction() {
   
    if (this.ActionType == "Add") {
      if (this.addForm.valid) {
        this.AddAction();
      }

    }
    else {
      console.log("form invalid");
      if (this.addForm.valid) {
        this.UpdateAction();
      }
    }

  }
  GetCategoriesData(id: Number) {
    
    this.categoryService.getCategoriesById(this.editdata.id).subscribe({
      next: (res) => {

        if (res.isSucess == true) {
          console.log(res);
          this.editdata = res.value;

          this.addForm.controls['id'].setValue(this.editdata.id);
          this.addForm.controls['abbreviation'].setValue(this.editdata.abbreviation);
          this.addForm.controls['name'].setValue(this.editdata.name);
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
    this.categoryService.postCategories(this.addForm.value).subscribe({
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
    this.categoryService.putCategories(this.editdata.id, this.addForm.value).subscribe({
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
        alert("Error while Adding")
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
