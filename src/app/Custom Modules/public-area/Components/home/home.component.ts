import { Component, OnInit } from '@angular/core';
import { Mainpage } from '../../Models/mainpage.model';
import { LoadingService } from '../../../../Common/Services/loading.service';

import { PublicAreaService } from '../../Services/public-area.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  Model:  Mainpage | undefined;
  url:string="/Api_PublicArea/GetMainPageLast";
  constructor( private publicservice :PublicAreaService,public loadingService: LoadingService,) {

  }

  ngOnInit(): void {
    this.loadingService.IsLoading=true;
   this.publicservice.getMainPage(this.url).subscribe(val=>{
    this.Model=val;
    this.loadingService.IsLoading=false;

   });
  }



}
