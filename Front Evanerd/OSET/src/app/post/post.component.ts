import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { PostService } from '../services/post.service';
import { posts } from '../../models/posts.model';
import { CommonModule } from '@angular/common';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatButtonModule
  ],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {

  public listPosts : posts[] = [];
  
  constructor(private postService : PostService, private loginService : LoginService) {

  }

  ngOnInit() {
    this.displayPosts();
  }

  displayPosts() {
    console.log("token utilisé : " + this.loginService.getUserToken())
    this.postService.getAllPosts().subscribe((data : any)  => {
      this.listPosts = data.posts;
      console.log(this.listPosts)
    });
  }

}
