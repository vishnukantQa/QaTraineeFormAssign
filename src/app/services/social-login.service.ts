import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SocialLoginService {
  url;
  constructor(private http: HttpClient) { }

  Savesresponse(responce) {
        this.url =  'http://localhost:4200/Api/Login/Savesresponse';

        return this.http.post(this.url,responce);

      }
}
