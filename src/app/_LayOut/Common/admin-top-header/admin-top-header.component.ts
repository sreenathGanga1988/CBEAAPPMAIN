import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-top-header',
  templateUrl: './admin-top-header.component.html',
  styleUrls: ['./admin-top-header.component.css']
})
export class AdminTopHeaderComponent implements OnInit {
  @Input()
  headingText: String="";
  constructor() { }

  ngOnInit(): void {
  }

}
