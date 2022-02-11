import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-heading',
  templateUrl: './main-heading.component.html',
  styleUrls: ['./main-heading.component.css']
})
export class MainHeadingComponent implements OnInit {

  constructor() { }
@Input()
TopHeading :string="";
  ngOnInit(): void {
  }

}
