import { PspaService } from './../services/pspa.service';
import { Component, OnInit } from '@angular/core';
import { Users } from '../common/Users';
import { SubscriptionLike } from 'rxjs';

@Component({
  selector: 'app-pspa',
  templateUrl: './pspa.component.html',
  styleUrls: ['./pspa.component.css']
})
export class PSPAComponent implements OnInit {

  subscription: SubscriptionLike;
  users: Users[];
  id: string = "";
  name: string = "";
  email: string = "";
  message: string = "";
  allUsers: Users[];
  total: number = 50;
  itemPerPage: number = 5;
  pageSizes = [5, 10, 15];
  currentPage: number = 1;

  constructor(private pspaService: PspaService) { }

  ngOnInit(): void {
    this.subscription = this.pspaService.getAll().subscribe((data: Users[]) => {
      this.message = "";
      this.users = data;
      this.allUsers = data;

    }, error => {
      this.setErrorMessage()
    })
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

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }


}


