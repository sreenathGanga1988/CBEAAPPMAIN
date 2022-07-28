import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { LoadingService } from 'src/app/Custom Modules/public-area/Services/loading.service';
import { CustomApiResponse } from 'src/app/Models/custom-api-responseo.model';
import { Designation } from 'src/app/Models/designation-model';
import { DesignationService } from '../../../Services/designation-service';
import { DesignationComponent } from '../designation/designation.component';

@Component({
  selector: 'app-designation-list',
  templateUrl: './designation-list.component.html',
  styleUrls: ['./designation-list.component.css']
})
export class DesignationListComponent implements OnInit {
  Items!: Designation[];

  response!: CustomApiResponse;
  displayedColumns: string[] = ['id','name','description','status', 'action'];
  dataSource = new MatTableDataSource<Designation>(this.Items)
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  @ViewChild(MatSort) sort!: MatSort;
  constructor(private designationService: DesignationService, public dialog: MatDialog ,public loadingService: LoadingService,) {
  }




  ngOnInit(): void {    
    this.GetItems();
  }

  GetItems() {
    this.loadingService.IsLoading=true;
    this.designationService.getDesignations().subscribe({
      next: (res) => {
        this.response = res;
        if (this.response.isSucess == true) {
          console.log(res);
          this.dataSource = new MatTableDataSource(this.response.value as Designation[]);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
          this.loadingService.IsLoading=false;
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
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

 deleteItem(id:number){

  this.designationService.deleteDesignation(id).subscribe({
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
    const dialogRef = this.dialog.open(DesignationComponent, {
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
