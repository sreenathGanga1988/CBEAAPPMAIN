import { Component, OnInit } from '@angular/core';
import { Mainpage } from '../../Models/mainpage.model';
import { PublicAreaService } from '../../Services/public-area.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  Model:  Mainpage | undefined;
  url:string="/Api_PublicArea/GetMainPageLast";
  constructor( private publicservice :PublicAreaService) {

  }

  ngOnInit(): void {
   this.publicservice.getMainPage(this.url).subscribe(val=>{
    this.Model=val;
    console.log(this.Model);

   });
  }



}
