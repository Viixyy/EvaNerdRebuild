import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
    private url : string;
    private http : HttpClient;
    private userData = new BehaviorSubject<any>(null);
    
    constructor(private myHttp : HttpClient) {
        this.url = "https://evanerds.fr/api/v1"
        this.http = myHttp;
    }

    public login(tel : string, pwd : string) {
      let rqte = this.url + '/auth?tel=' + tel + '&password=' + pwd;
      return this.http.post(rqte, {});
    }

    public setUserToken(token : any) {
      localStorage.setItem("token", token);
    }

    public getUserToken() {
      return localStorage.getItem("token");
    }
}