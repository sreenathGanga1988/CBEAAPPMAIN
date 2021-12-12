import { Component, OnInit } from '@angular/core';
import { Publicmanagingcomitee } from '../../Models/publicmanagingcomitee';
import { PublicAreaService } from '../../Services/public-area.service';

@Component({
  selector: 'app-managing-commitee',
  templateUrl: './managing-commitee.component.html',
  styleUrls: ['./managing-commitee.component.css']
})
export class ManagingCommiteeComponent implements OnInit {

  Model: Publicmanagingcomitee[] | undefined;
  url: string = '/Api_PublicArea/GetManagingComitee';
  constructor(private publicservice: PublicAreaService) {}

  ngOnInit(): void {
    this.publicservice.getManagingComitee(this.url).subscribe((val) => {
      this.Model = val.managingComitees;
      console.log(this.Model);
    });
  }
}

