import { Component, OnInit } from '@angular/core';
import { Publicmanagingcomitee } from '../../Models/publicmanagingcomitee';
import { LoadingService } from '../../../../Common/Services/loading.service';
import { PublicAreaService } from '../../Services/public-area.service';

@Component({
  selector: 'app-managing-commitee',
  templateUrl: './managing-commitee.component.html',
  styleUrls: ['./managing-commitee.component.css']
})
export class ManagingCommiteeComponent implements OnInit {

  Model: Publicmanagingcomitee[] | undefined;
  url: string = '/Api_PublicArea/GetManagingComitee';
  constructor(private publicservice: PublicAreaService,public loadingService: LoadingService,) {}

  ngOnInit(): void {
    this.loadingService.IsLoading=true;
    this.publicservice.getManagingComitee(this.url).subscribe((val) => {
      this.Model = val.managingComitees;
      console.log(this.Model);
      this.loadingService.IsLoading=false;
    });
  }
}

