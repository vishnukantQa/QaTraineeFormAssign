import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Users } from '../common/Users';

@Injectable({
  providedIn: 'root'
})
export class PspaService {
  private apiServer = "https://5fc889d52af77700165ad6b9.mockapi.io/api/users";
  public page: number = 1;
  public limit: number = 5;

  constructor(private httpClient: HttpClient) { }

  getAll() {
    return this.httpClient.get<Users[]>(this.apiServer + '?page=' + this.page + '&limit=' + this.limit);
  }

  searchById(id: string) {
    return this.httpClient.get<Users[]>(this.apiServer + '?id=' + id);
  }
  searchByName(name: string) {
    return this.httpClient.get<Users[]>(this.apiServer + '?name=' + name);
  }
  searchByEmail(email: string) {
    return this.httpClient.get<Users[]>(this.apiServer + '?email=' + email);
  }
}


