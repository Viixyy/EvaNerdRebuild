import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
    private url : string;
    private http : HttpClient;
    
    constructor(private myHttp : HttpClient) {
        this.url = "https://evanerds.fr/api/v1"
        this.http = myHttp;
    }

    public login(tel : string, pwd : string) {
      let rqte = this.url + '/auth?tel=' + tel + '&password=' + pwd;
      return this.http.post(rqte, {});
    }
}