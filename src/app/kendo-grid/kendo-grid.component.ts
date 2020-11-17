import { CustomerDataService } from './../services/customer-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kendo-grid',
  templateUrl: './kendo-grid.component.html',
  styleUrls: ['./kendo-grid.component.css']
})
export class KendoGridComponent implements OnInit {

  constructor(public customerDataService:CustomerDataService) { }

  ngOnInit(): void {
  }

   public gridData: any[] = this.customerDataService.products;

}
