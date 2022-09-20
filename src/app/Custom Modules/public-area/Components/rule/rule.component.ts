import { Component, OnInit } from '@angular/core';
import { Mainpage } from '../../Models/mainpage.model';
import { LoadingService } from '../../Services/loading.service';
import { PublicAreaService } from '../../Services/public-area.service';

@Component({
  selector: 'app-rule',
  templateUrl: './rule.component.html',
  styleUrls: ['./rule.component.css'],
})
export class RuleComponent implements OnInit {
  Model: Mainpage | undefined;
  url: string = '/Api_PublicArea/GetRules';
  constructor(private publicservice: PublicAreaService,public loadingService: LoadingService) {}

  ngOnInit(): void {
    this.loadingService.IsLoading=true;
    this.publicservice.getMainPage(this.url).subscribe((val) => {
      this.Model = val;
      console.log(this.Model);
      this.loadingService.IsLoading=false;
    });
  }
}
