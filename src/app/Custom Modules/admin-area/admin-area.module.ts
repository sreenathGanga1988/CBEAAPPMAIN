import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KiduTableComponent } from './Components/Common/kidu-table/kidu-table.component';
import { BranchComponent } from './Masters/branch/branch.component';
import { AdminTopHeaderComponent } from './Components/Common/admin-top-header/admin-top-header.component';
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
import { DesignationListComponent } from './Masters/Designation/designation-list/designation-list.component';
import { DesignationComponent } from './Masters/Designation/designation/designation.component';
import { StatusListComponent } from './Masters/Status/status-list/status-list.component';
import { StatusComponent } from './Masters/Status/status/status.component';
import { CircleListComponent } from './Masters/Circle/circle-list/circle-list.component';
import { CircleComponent } from './Masters/Circle/circle/circle.component';
import { BranchListComponent } from './Masters/branch/branch-list/branch-list.component';
import { BranchViewComponent } from './Masters/branch/branch-view/branch-view.component';
import { AdminToolBarComponent } from './Components/Common/admin-tool-bar/admin-tool-bar.component';




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
    DesignationListComponent,
    DesignationComponent,
    StatusListComponent,
    StatusComponent,
    CircleListComponent,
    CircleComponent,
    BranchListComponent,
    BranchViewComponent,
    AdminToolBarComponent,

  ],
  imports: [
    FormsModule,
    CommonModule,
    MaterialControlItemModule,
    DataTablesModule,ReactiveFormsModule
  ]
})
export class AdminAreaModule { }
