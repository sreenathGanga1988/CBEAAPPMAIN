import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CustomApiResponse } from 'src/app/Models/custom-api-responseo.model';
import { UserType } from 'src/app/Models/userType.model';
import { UserTypeService } from '../../../Services/usertype.service';
import { UsetypeComponent } from '../usetype/usetype.component';

@Component({
  selector: 'app-usertype-list',
  templateUrl: './usertype-list.component.html',
  styleUrls: ['./usertype-list.component.css']
})
export class UsertypeListComponent implements OnInit {

  Items!: UserType[];

  response!: CustomApiResponse;
  displayedColumns: string[] = ['id', 'abbreviation', 'description', 'action'];
  dataSource = new MatTableDataSource<UserType>(this.Items)
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  @ViewChild(MatSort) sort!: MatSort;

  constructor(private usertypeService: UserTypeService, public dialog: MatDialog) {
  }




  ngOnInit(): void {
    // this.usertypeService.getUserTypes().subscribe(val => {
    //   this.dataSource.data = val as UserType[];
    //   console.log(this.dataSource.data);
    // });
    this.GetItems();
  }

  GetItems() {

    this.usertypeService.getUserTypes().subscribe({
      next: (res) => {
        this.response = res;
        if (this.response.isSucess == true) {
          console.log(res);
          this.dataSource = new MatTableDataSource(this.response.value as UserType[]);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        }
        else {
          alert(this.response.error);
        }

      },
      error: (res) => {
        alert("Erro while Adding")
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

  this.usertypeService.deleteItem(id).subscribe({
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
    const dialogRef = this.dialog.open(UsetypeComponent, {
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

