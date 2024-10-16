import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class PostService {
    private url : string;
    private http : HttpClient;
    private userData = new BehaviorSubject<any>(null);
    private header : Headers = new Headers();
    
    constructor(private myHttp : HttpClient, private loginService : LoginService) {
        this.url = "https://evanerds.fr/api/v1"
        this.http = myHttp;
    }

    public createAuthToken(headers : Headers) {
        let authToken = this.loginService.getUserToken();
        if(authToken) headers.append("authToken", authToken);
    }

    public getAllPosts() {
        let rqte = this.url + '/posts'
        this.createAuthToken(this.header);
        return this.http.get(rqte, {
            headers: new HttpHeaders(this.header)
        })
    }
}
