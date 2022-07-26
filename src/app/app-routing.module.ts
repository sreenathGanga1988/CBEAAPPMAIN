import { UsertypeListComponent } from './Custom Modules/admin-area/Masters/UserTypes/usertype-list/usertype-list.component';
import { StateListComponent } from './Custom Modules/admin-area/Masters/States/state-list/state-list.component';
import { AdminAreaLayoutComponent } from './_LayOut/admin-area-layout/admin-area-layout.component';
import { PublicAreaLayoutComponent } from './_LayOut/public-area-layout/public-area-layout.component';
import { BranchComponent } from './Custom Modules/admin-area/Masters/branch/branch.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryListComponent } from './Custom Modules/admin-area/Masters/Category/category-list/category-list.component';
import { ContactusComponent } from './Custom Modules/public-area/Components/contactus/contactus.component';
import { HomeComponent } from './Custom Modules/public-area/Components/home/home.component';
import { LoginComponent } from './Custom Modules/public-area/Components/login/login.component';
import { ManagingCommiteeComponent } from './Custom Modules/public-area/Components/managing-commitee/managing-commitee.component';
import { RuleComponent } from './Custom Modules/public-area/Components/rule/rule.component';
import { DesignationListComponent } from './Custom Modules/admin-area/Masters/Designation/designation-list/designation-list.component';
import { StatusListComponent } from './Custom Modules/admin-area/Masters/Status/status-list/status-list.component';
import { CircleListComponent } from './Custom Modules/admin-area/Masters/Circle/circle-list/circle-list.component';
import { BranchListComponent } from './Custom Modules/admin-area/Masters/branch/branch-list/branch-list.component';

const routes: Routes = [
  //Site routes goes here
  {
    path: '',
    component: PublicAreaLayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'rules-regulations', component: RuleComponent },
      { path: 'managing-commitee', component: ManagingCommiteeComponent },
      { path: 'contact-us', component: ContactusComponent },
      { path: 'login', component: LoginComponent },
    ],
  },
  {
    path: '',
    component: AdminAreaLayoutComponent,
    children: [
      { path: 'categories', component: CategoryListComponent },
      { path: 'branches', component: BranchComponent },
      { path: 'states', component: StateListComponent },
      { path: 'usertypes', component: UsertypeListComponent },
      { path: 'designation', component: DesignationListComponent },
      { path: 'status', component: StatusListComponent },
      { path: 'circles', component: CircleListComponent },
      { path: 'branch', component: BranchListComponent },
    ],
  },
  // { path: '', component: HomeComponent },
  // { path: 'rules-regulations', component: RuleComponent },
  // { path: 'managing-commitee', component: ManagingCommiteeComponent },
  // { path: 'contact-us', component: ContactusComponent },
  // { path: 'login', component: LoginComponent },
  // { path: 'categories', component: CategoryListComponent },
  // { path: 'branches', component: BranchComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
