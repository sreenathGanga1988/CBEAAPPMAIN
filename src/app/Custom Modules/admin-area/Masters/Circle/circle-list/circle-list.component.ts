
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort,Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CustomApiResponse } from 'src/app/Models/custom-api-responseo.model';
import { Circle } from 'src/app/Models/circle.model';
import { CircleService } from '../../../Services/circle.service';
import { CircleComponent } from '../circle/circle.component';

@Component({
  selector: 'app-circle-list',
  templateUrl: './circle-list.component.html',
  styleUrls: ['./circle-list.component.css']
})
export class CircleListComponent implements OnInit {

  
  Items!: Circle[];

  response!: CustomApiResponse;
  displayedColumns: string[] = ['id', 'circleCode', 'abbreviation', 'name','stateName','status', 'action'];
  dataSource = new MatTableDataSource<Circle>(this.Items)
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  @ViewChild(MatSort) sort!: MatSort;

  constructor(private circleService: CircleService, public dialog: MatDialog) {
  }




  ngOnInit(): void {    
    this.GetItems();
  }

  GetItems() {

    this.circleService.getCircles().subscribe({
      next: (res) => {
        this.response = res;
        if (this.response.isSucess == true) {
          console.log(res);
          this.dataSource = new MatTableDataSource(this.response.value as Circle[]);
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
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

 deleteItem(id:number){

  this.circleService.deleteCircle(id).subscribe({
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
    const dialogRef = this.dialog.open(CircleComponent, {
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


