import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post.model';
import { PostService } from '../../app/services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Post[];
  constructor(private postService: PostService) {
    this.posts = postService.listPosts();

  }
  deletePost(post: Post) {
    let conf = confirm("Are you sure ?");
    if (conf)
      this.postService.deletePost(post);
    // console.log("test");

  }
  ngOnInit(): void {
  }

}
