import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerDataService {
    private url="https://jsonplaceholder.typicode.com/posts";
  constructor(private http:HttpClient) { }

  
  getPostData(){
    return this.http.get<Ipost[]>(this.url);
  }

}
interface Ipost{
    userId:Number;
    id:String;
    title:String;
    body:String;
  }
