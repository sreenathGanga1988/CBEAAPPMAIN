import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './Components/app.component';
import { AppInterceptorService } from './Core/Interceptors/app-interceptor.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminAreaModule } from './Custom Modules/admin-area/admin-area.module';
import { PublicAreaModule } from './Custom Modules/public-area/public-area.module';
import { PublicFooterComponent } from './_LayOut/Common/public-footer/public-footer.component';
import { AdminAreaLayoutComponent } from './_LayOut/admin-area-layout/admin-area-layout.component';
import { PublicAreaLayoutComponent } from './_LayOut/public-area-layout/public-area-layout.component';
import { PublicAreaNavComponent } from './_LayOut/Common/public-area-nav/public-area-nav.component';
import { AdminAreafooterComponent } from './_LayOut/Common/admin-areafooter/admin-areafooter.component';
import { AdminAreaTopNavComponent } from './_LayOut/Common/admin-area-top-nav/admin-area-top-nav.component';
import { MaterialControlItemModule } from './material.module';
import { DataTablesModule } from 'angular-datatables';
import { ReactiveFormsModule } from '@angular/forms';






@NgModule({
  declarations: [
    AppComponent,
    PublicFooterComponent,
    PublicAreaLayoutComponent,
    AdminAreaLayoutComponent,
    PublicAreaNavComponent,
    AdminAreaTopNavComponent,
    AdminAreafooterComponent,
    
        ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PublicAreaModule,AdminAreaModule,
    BrowserAnimationsModule,
    MaterialControlItemModule,
    DataTablesModule,ReactiveFormsModule
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:AppInterceptorService,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
