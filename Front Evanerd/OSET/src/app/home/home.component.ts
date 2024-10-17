import { Component } from '@angular/core';
import { PostComponent } from '../post/post.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatToolbarModule } from '@angular/material/toolbar'
import { users } from '../../models/users.model';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    PostComponent,
    MatCardModule,
    MatIconModule,
    MatChipsModule,
    MatToolbarModule,
    MatButtonModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  public firstName : string = "";
  public lastName : string = "";
  public photo : string = "";

  constructor(private loginService : LoginService, private router : Router) {
    this.firstName = this.loginService.getUserFirstName();
    this.lastName = this.loginService.getUserLastName();
    this.photo = this.loginService.getUserPhoto();
  }

  logout() {
    localStorage.clear();
    this.loginService.logout();
    this.router.navigate(['/']);
  }
  
}
