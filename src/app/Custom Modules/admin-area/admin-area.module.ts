import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KiduTableComponent } from './Components/Common/kidu-table/kidu-table.component';
import { BranchComponent } from './Masters/branch/branch.component';
import { AdminTopHeaderComponent } from '../../_LayOut/Common/admin-top-header/admin-top-header.component';
import { CategoryListComponent } from './Masters/Category/category-list/category-list.component';
import { StateListComponent } from './Masters/States/state-list/state-list.component';
import { UsertypeListComponent } from './Masters/UserTypes/usertype-list/usertype-list.component';
import { MaterialControlItemModule } from 'src/app/material.module';
import { DataTablesModule } from 'angular-datatables';
import { MainHeadingComponent } from './Components/Common/main-heading/main-heading.component';
import { UsetypeComponent } from './Masters/UserTypes/usetype/usetype.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StateComponent } from './Masters/States/state/state.component';
import { CategoryComponent } from './Masters/Category/category/category.component';




@NgModule({
  declarations: [
     BranchComponent,
    KiduTableComponent,
    AdminTopHeaderComponent,
    CategoryListComponent,
    StateListComponent,
    UsertypeListComponent,
    MainHeadingComponent,
    UsetypeComponent,
    StateComponent,
    CategoryComponent,

  ],
  imports: [
    FormsModule,
    CommonModule,
    MaterialControlItemModule,
    DataTablesModule,ReactiveFormsModule
  ]
})
export class AdminAreaModule { }
