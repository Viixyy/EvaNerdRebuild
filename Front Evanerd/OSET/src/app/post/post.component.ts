import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { PostService } from '../services/post.service';
import { posts } from '../../models/posts.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {

  public listPosts : posts[] = [];
  
  constructor(private postService : PostService) {

  }

  ngOnInit() {
    this.displayPosts();
  }

  displayPosts() {
    this.postService.getAllPosts().subscribe((data : any)  => {
      this.listPosts = data.posts;
      console.log(this.listPosts)
    });
  }

}
