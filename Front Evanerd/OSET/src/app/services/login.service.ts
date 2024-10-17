import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
    private url : string;
    private http : HttpClient;
    private header : Headers = new Headers();
    
    constructor(private myHttp : HttpClient) {
      this.url = "https://www.evanerds.fr/api/v1"
      this.http = myHttp;
    }

    public login(tel : string, pwd : string) {
      let rqte = this.url + '/auth?tel=' + tel + '&password=' + pwd;
      return this.http.post(rqte, {});
    }

    public logout() {
      let rqte = this.url + '/users/logout';
      this.header.append("authToken", this.getUserToken());
      const requestOptions = {
        headers : new HttpHeaders(this.header)
      };
      return this.http.post(rqte, {}, requestOptions)
    }

    public setUserData(data : any) {
      console.log(data)
      localStorage.setItem("token", data.authToken);
      localStorage.setItem("firstName", data.user.firstName);
      localStorage.setItem("lastName", data.user.lastName);
      localStorage.setItem("photo", data.user.photo);
    }

    public getUserToken() {
      return (localStorage.getItem("token") || '{}');
    }

    public getUserFirstName() {
      return (localStorage.getItem("firstName") || '{}');
    }

    public getUserLastName() {
      return (localStorage.getItem("lastName") || '{}');
    }

    public getUserPhoto() {
      return (localStorage.getItem("photo") || '{}');
    }
}