import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './Components/home/home.component';
import { HttpClientModule } from '@angular/common/http';

import { RuleComponent } from './Components/rule/rule.component';
import { RouterModule } from '@angular/router';
import { ManagingCommiteeComponent } from './Components/managing-commitee/managing-commitee.component';
import { ContactusComponent } from './Components/contactus/contactus.component';
import { LoginComponent } from './Components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    HomeComponent,
    RuleComponent,
    ManagingCommiteeComponent,
    ContactusComponent,
    LoginComponent
      ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ]
})
export class PublicAreaModule { }
