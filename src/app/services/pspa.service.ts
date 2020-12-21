import { GetResponseOneEmployee, GetResponseEmployee } from './crud.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Users } from '../common/Users';

@Injectable({
  providedIn: 'root'
})
export class PspaService {
  public apiServer = "https://5fdb0d6a91f19e001733397d.mockapi.io/users";
  public page: number = 1;
  public limit: number = 5;

  constructor(private httpClient: HttpClient) { }

  getAllData(){
    return this.httpClient.get<Users[]>(this.apiServer);
  }

  getAll() {
    return this.httpClient.get<Users[]>(this.apiServer + '?page=' + this.page + '&limit=' + this.limit);
  }

  getById(id:number){
    return this.httpClient.get<Users>(this.apiServer +'/'+id);
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

  update(id, user:Users): Observable<Users> {

    console.log(this.apiServer+"/"+id);
    return this.httpClient.put<Users>(this.apiServer +"/"+ id, user)
      
  }
    
}






