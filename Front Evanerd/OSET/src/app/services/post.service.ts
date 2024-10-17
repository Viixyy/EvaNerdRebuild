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
    private header = {};
    
    constructor(private myHttp : HttpClient, private loginService : LoginService) {
        this.url = "https://www.evanerds.fr/api/v1";
        this.http = myHttp;
        this.header = {
            'authToken': this.loginService.getUserToken()
        };
    }

    public updateToken() {
        this.header = {
            'authToken': this.loginService.getUserToken()
        };
    }

    public getAllPosts() {
        let rqte = this.url + '/posts';
        this.updateToken();
        const requestOptions = {
            headers : new HttpHeaders(this.header)
        }
        console.log(requestOptions)
        return this.http.get(rqte, requestOptions);
    }
}
