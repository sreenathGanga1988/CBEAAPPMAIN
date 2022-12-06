import { Component, OnInit } from '@angular/core';
import { AlertService } from '../../Modules/Alert';

@Component({
  selector: 'app-notification-bar',
  templateUrl: './notification-bar.component.html',
  styleUrls: ['./notification-bar.component.css']
})
export class NotificationBarComponent implements OnInit {
  options = {
    autoClose: true,
    keepAfterRouteChange: false
};
  constructor(public alertService: AlertService) { }

  ngOnInit(): void {
  }

}
