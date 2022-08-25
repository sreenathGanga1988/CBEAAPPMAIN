import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-kidupickup',
  templateUrl: './kidupickup.component.html',
  styleUrls: ['./kidupickup.component.css']
})
export class KidupickupComponent implements OnInit {

  displayStyle:string = "none";
  BaseUrl:string="https://www.cbeugjfws.co.in/api";


  @Output() SelectionChanged: EventEmitter<any> =   new EventEmitter();



  constructor(private httpclient :HttpClient) { }
  @Input() PickupProperties!: KidupickupProperties ;
  ngOnInit(): void {
   this.GetItems();

  }


  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }

  GetItems() {

    this.getCategories().subscribe((response) => {

      this.PickupProperties.DataSource = response.value ;
         console.log(response)
    });;


  }
  getCategories() {
    return this.GetData(this.PickupProperties.DataUrl);
  }
  GetData(DataUrl:String) : Observable<any>{
    return  this.httpclient.get<any>(this.BaseUrl+DataUrl);
   }
   SelectAction(obj: any){
    this.closePopup();
    this.SelectionChanged.emit(obj);
   }
}


 export class KidupickupProperties{
  DisplayHeader:String='';
  ButtonText: string = '';
  DataUrl :String='';
  DataSource?:any[]=[];
  DisplayHeaderitem: string[] = [];
  DisplayColitem: string[] = [];
    constructor() { }
}
