import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AlertService } from 'src/app/Common/Modules/Alert';
import { LoadingService } from 'src/app/Common/Services/loading.service';
import { Category } from 'src/app/Models/category.model';
import { CustomApiResponse } from 'src/app/Models/custom-api-responseo.model';
import { CategoryService } from '../../../Services/category.service';
import { CategoryComponent } from '../category/category.component';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  Items!: Category[];

  response!: CustomApiResponse;
  displayedColumns: string[] = ['id', 'abbreviation', 'name', 'action'];
  dataSource = new MatTableDataSource<Category>(this.Items)
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  @ViewChild(MatSort) sort!: MatSort;

  constructor(private categoryService: CategoryService, public dialog: MatDialog, public loadingService: LoadingService, private alertService: AlertService) {
  }




  ngOnInit(): void {
    // this.usertypeService.getUserTypes().subscribe(val => {
    //   this.dataSource.data = val as UserType[];
    //   console.log(this.dataSource.data);
    // });
    this.GetItems();
  }

  GetItems() {
    this.loadingService.IsLoading = true;
    this.categoryService.getCategories().subscribe({
      next: (res) => {
        this.response = res;
        if (this.response.isSucess == true) {
          console.log(res);
          this.dataSource = new MatTableDataSource(this.response.value as Category[]);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
          this.loadingService.IsLoading = false;
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

  deleteItem(id: number) {

    this.categoryService.deleteItem(id).subscribe({
      next: (res) => {
        if (res.isSucess) {
          this.alertService.success('Successfully deleted Category!!');
          this.GetItems();
        } 
        else {

          this.alertService.error('Failed to Delete Category :' + res.error)

        }

      },
      error: (res) => {

      }
    })
  }

  openDialog(action: string, obj: any) {
    obj.action = action;
    const dialogRef = this.dialog.open(CategoryComponent, {
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

