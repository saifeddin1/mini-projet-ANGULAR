import { Component, OnInit } from '@angular/core';


import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../../app/services/post.service';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styles: []
})
export class UpdatePostComponent implements OnInit {
  currentPost = new Post;


  constructor(private activatedRoute: ActivatedRoute,
    private postService: PostService,
    private router: Router) { }

  ngOnInit(): void {
    this.currentPost = this.postService.showPost(this.activatedRoute.snapshot.params.id);
    console.log(this.currentPost);

  }

  updatePost() {
    this.postService.updatePost(this.currentPost);
    this.router.navigate(['posts']);
  }

}
