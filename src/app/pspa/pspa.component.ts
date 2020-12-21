import { UsersActions, LoadUserss } from './../users.actions';
import { PspaService } from './../services/pspa.service';
import { Component, OnInit } from '@angular/core';
import { Users } from '../common/Users';
import { of, SubscriptionLike } from 'rxjs';
import { select, Store } from '@ngrx/store';
import * as userAction from '../users.actions'
import * as fromUser from '../users.selectors'
import { ExcelService } from '../services/excel.service';
import { timeout } from 'rxjs/operators';

@Component({
  selector: 'app-pspa',
  templateUrl: './pspa.component.html',
  styleUrls: ['./pspa.component.css']
})
export class PSPAComponent implements OnInit {

  subscription: SubscriptionLike;

  id: string = "";
  name: string = "";
  email: string = "";
  message: string = "";
  allUsers: Users[];
  total: number = 50;
  itemPerPage: number = 5;
  pageSizes = [5, 10, 15];
  currentPage: number = 1;
  exportType: string = "";

  constructor(
    private pspaService: PspaService,
    private store: Store,
    private excelService: ExcelService) { }

  ngOnInit(): void {

    this.store.dispatch(new userAction.LoadUserss()) //action dispatch

    this.store.pipe(select(fromUser.getUsers)).subscribe(
      (data: Users[]) => {
        this.message = "";
        this.allUsers = data;
      }
    )

    this.store.pipe(select(fromUser.getError)).subscribe(
      error => {
        this.message = error;
      }
    )
    // this.subscription = this.pspaService.getAll().subscribe((data: Users[]) => {
    //   this.message = "";

    //   this.allUsers = data;

    // }, error => {
    //   this.setErrorMessage()
    // })
  }

  searchById() {

    this.pspaService.searchById(this.id).subscribe((data: Users[]) => {
      this.setData(data);
    }, error => {
      this.setErrorMessage();
    })

  }


  searchByName() {
    this.pspaService.searchByName(this.name).subscribe((data: Users[]) => {
      this.setData(data);
    }, error => {
      this.setErrorMessage();
    })

  }

  searchByEmail() {
    this.pspaService.searchByEmail(this.email).subscribe((data: Users[]) => {
      this.setData(data);
    }, error => {
      this.setErrorMessage();
    })
  }


  private setErrorMessage() {
    this.message = "server is busy currently please try after some time";
  }

  private setData(data: Users[]) {
    this.message = "";
    this.allUsers = data;
  }

  handlePageSizeChange(event) {

    this.itemPerPage = event.target.value;
    this.pspaService.limit = event.target.value;
    this.pspaService.page = 1;
    this.ngOnInit();
    this.currentPage = 1;
  }

  pageChanged(event) {

    this.pspaService.page = event;
    this.currentPage = event;
    this.ngOnInit();
  }

  handleExportType(event) {
    this.exportType = event.target.value;
  }

  handleExport() {
    if (this.exportType === "Export whole data") {
      let tempUsers: Users[];
      this.pspaService.getAllData().subscribe((data: Users[]) => {
        tempUsers = data;
        this.excelService.exportAsExcelFile(tempUsers, "ExcelFileWholeData")
      });

    } else {
      this.excelService.exportAsExcelFile(this.allUsers, 'myExcelFile');
    }
  }



  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }


}


