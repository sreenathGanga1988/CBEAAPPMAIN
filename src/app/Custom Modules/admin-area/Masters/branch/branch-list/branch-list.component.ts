import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort,Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CustomApiResponse } from 'src/app/Models/custom-api-responseo.model';
import { Branch } from 'src/app/Models/branch.model';
import { BranchService } from '../../../Services/branch.service';
import { BranchViewComponent } from '../branch-view/branch-view.component';

@Component({
  selector: 'app-branch-list',
  templateUrl: './branch-list.component.html',
  styleUrls: ['./branch-list.component.css']
})
export class BranchListComponent implements OnInit {  

  Items!: Branch[];

  response!: CustomApiResponse;
  displayedColumns: string[] = ['id', 'dpCode', 'name','status', 'action'];
  dataSource = new MatTableDataSource<Branch>(this.Items)
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  @ViewChild(MatSort) sort!: MatSort;

  constructor(private branchService: BranchService, public dialog: MatDialog) {
  }




  ngOnInit(): void {    
    this.GetItems();
  }

  GetItems() {

    this.branchService.getBranch().subscribe({
      next: (res) => {
        this.response = res;
        if (this.response.isSucess == true) {
          console.log(res);
          this.dataSource = new MatTableDataSource(this.response.value as Branch[]);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        }
        else {
          alert(this.response.error);
        }

      },
      error: (res) => {
        alert("Error while Adding")
      }
    })
  }

  GetItemsAsyn() {

    this.branchService.getBranchAsync(1,3,"asc").subscribe({
      next: (res) => {
        this.response = res;
        if (this.response.isSucess == true) {
          console.log(res);
          this.dataSource = new MatTableDataSource(this.response.value as Branch[]);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        }
        else {
          alert(this.response.error);
        }

      },
      error: (res) => {
        alert("Error while Adding")
      }
    })
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    alert(filterValue)
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

 deleteItem(id:number){

  this.branchService.deleteBranch(id).subscribe({
    next: (res) => {
      alert("Removed Sucessfully")
      this.GetItems();
    },
    error: (res) => {
      alert("Erro while Adding")
    }
  })
 }

  openDialog(action: string, obj: any) {
    obj.action = action;
    const dialogRef = this.dialog.open(BranchViewComponent, {
      width: '40%',
      data: obj
    }).afterClosed().subscribe(val => {    
      if (val.toLowerCase() == "updated") {
        this.GetItems();
      }
      else if (val.toLowerCase() == "saved") {
        this.GetItems();
      }
    });

  }
}


function BranchViewComponentComponent(BranchViewComponentComponent: any, arg1: { width: string; data: any; }) {
  throw new Error('Function not implemented.');
}

