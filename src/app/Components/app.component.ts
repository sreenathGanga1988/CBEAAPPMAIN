import { Component } from '@angular/core';
import { LoadingService } from '../Custom Modules/public-area/Services/Loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  constructor(public loadingService: LoadingService, ) {
  }

  
  title = 'CBEAAPPMAIN';
}
