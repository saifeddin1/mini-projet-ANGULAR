import { Injectable } from '@angular/core';
import { Post } from './../../app/models/post.model'


@Injectable({
  providedIn: 'root'
})

export class PostService {

  posts: Post[];
  post: Post;

  constructor() {
    this.posts = [{
      idPost: 1,
      title: "Propagation of Covid-19",
      body: "Corona is taking over the world",
      author: "Saifeddin",
      createdAt: new Date("02/12/2020")
    },
    {
      idPost: 2,
      title: "Propagation of Covid-19",
      body: "Corona is taking over the world",
      author: "Saifeddin",
      createdAt: new Date("02/12/2020")
    },
    {
      idPost: 3,
      title: "Propagation of Covid-19",
      body: "Corona is taking over the world",
      author: "Saifeddin",
      createdAt: new Date("02/12/2020")
    },
    {
      idPost: 4,
      title: "Propagation of Covid-19",
      body: "Corona is taking over the world",
      author: "Saifeddin",
      createdAt: new Date("02/12/2020")
    },


    ];
  }

  listPosts(): Post[] {
    return this.posts;
  }
  addPost(post: Post) {
    this.posts.push(post);

  }
  deletePost(post: Post) {
    const index = this.posts.indexOf(post);
    if (index > -1) {
      this.posts.splice(index, 1);
    }
  }
  showPost(id: number): Post {
    this.post = this.posts.find(p => p.idPost == id);
    return this.post;
  }

  trierPosts() {
    this.posts = this.posts.sort((n1, n2) => {
      if (n1.idPost > n2.idPost) {
        return 1;
      }
      if (n1.idPost < n2.idPost) {
        return -1;
      }
      return 0;
    });
  }

  updatePost(post: Post) {
    this.deletePost(post);
    this.addPost(post);
    this.trierPosts();
  }

}


