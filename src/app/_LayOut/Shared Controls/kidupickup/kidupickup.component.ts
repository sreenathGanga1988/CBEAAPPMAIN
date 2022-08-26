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
  BaseUrl:string="https://localhost:44396/api";


  @Output() SelectionChanged: EventEmitter<any> =   new EventEmitter();



  constructor(private httpclient :HttpClient) { } 
  @Input() PickupProperties!: KidupickupProperties ;
  isTableLoading :Boolean =false;
  DataSource?:any[]=[];
  dataSourceCount?:number=0;
  totalCount?:number=0;
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
    this.isTableLoading=true;
    this.FillDataSource(this.PickupProperties.DataUrl).subscribe((response) => {
      this.DataSource = response.value.items ;
      this.dataSourceCount = this.DataSource?.length ;
      this.totalCount=response.value.total_count;
      this.isTableLoading=false;      
         console.log(response)
    });;

    
  }
  FillDataSource(DataUrl:String) {
    if(this.PickupProperties.listType){
    
      return this.PostData(DataUrl);
    }
    else{
      return this.GetData(DataUrl);
    }
  
  }

  PostData(DataUrl:String) : Observable<any>{
    var formData: any = new FormData();
    formData.append('listType', this.PickupProperties.listType);
    formData.append('q', this.PickupProperties.SearchTerm);
    formData.append('Dependandvalue',  this.PickupProperties.Dependandvalue);
    return  this.httpclient.post<any>(this.BaseUrl+DataUrl,formData);
   }
  GetData(DataUrl:String) : Observable<any>{
    return  this.httpclient.get<any>(this.BaseUrl+DataUrl);
   }
   SelectAction(obj: any){
    this.closePopup();
    this.SelectionChanged.emit(obj);
   }
   onSearchChange(searchValue: string): void {  

    if(this.PickupProperties.isServerSideFilter ){
    this.PickupProperties.SearchTerm=searchValue
    this.GetItems();
  }
  }
}


 export class KidupickupProperties{
  listType?:String='';
  SearchTerm?:String='';
  Dependandvalue?:String='';
  DisplayHeader?:String='';
  ButtonText: string = ''; 
  DataUrl :String='';
  Height:string='500px';
  Type:String='GET';
  DataSource?:any[]=[];
  DisplayHeaderitem: string[] = []; 
  DisplayColitem: string[] = []; 
  isSelectable?:Boolean ;
  DisablePagination?:Boolean ;
  isServerSideFilter?:Boolean ;
    constructor() { 

    }
}
