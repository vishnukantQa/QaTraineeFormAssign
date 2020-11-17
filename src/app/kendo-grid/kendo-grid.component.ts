import { HttpClient } from '@angular/common/http';
import { CustomerDataService } from './../services/customer-data.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { title } from 'process';

@Component({
  selector: 'app-kendo-grid',
  templateUrl: './kendo-grid.component.html',
  styleUrls: ['./kendo-grid.component.css']
})
export class KendoGridComponent implements OnInit {
  
  public gridData=[] ;
  constructor(public customerDataService:CustomerDataService) { }
  
 
  ngOnInit(): void {

    this.customerDataService.getPostData()
    .subscribe(data=>{
      this.gridData=data;
    });

  }


  // getPostData(): Observable<dataType[]> {
  //   return this.http.get<dataType[]>(this.url)
  // }

  

  

   

}
