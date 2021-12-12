import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KiduTableComponent } from './Components/Common/kidu-table/kidu-table.component';
import { BranchComponent } from './Masters/branch/branch.component';
import { AdminTopHeaderComponent } from '../../_LayOut/Common/admin-top-header/admin-top-header.component';
import { CategoryListComponent } from './Masters/Category/category-list/category-list.component';
import { StateListComponent } from './Masters/States/state-list/state-list.component';
import { UsertypeListComponent } from './Masters/UserTypes/usertype-list/usertype-list.component';
import { MaterialControlItemModule } from 'src/app/material.module';




@NgModule({
  declarations: [
     BranchComponent,
    KiduTableComponent,
    AdminTopHeaderComponent,
    CategoryListComponent,
    StateListComponent,
    UsertypeListComponent,

  ],
  imports: [
    CommonModule,
    MaterialControlItemModule

  ]
})
export class AdminAreaModule { }
