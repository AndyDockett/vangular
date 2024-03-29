import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostsService } from '../posts.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-post-single',
  templateUrl: './post-single.component.html',
  styleUrls: ['./post-single.component.scss'],
    providers: [PostsService]
})
export class PostSingleComponent implements OnInit {

  title: string = 'My first AGM project';
  lat: number = 51.678418;
  lng: number = 7.809007;

  post: Post;

  constructor( private postsService: PostsService, private route: ActivatedRoute ) { }

  getPost(slug){
    this.postsService
      .getPost(slug)
      .subscribe(res => {
        this.post = res[0];
      });
  }

  ngOnInit() {

    this.route.params.forEach((params: Params) => {
       let slug = params['slug'];
       this.getPost(slug)
    });

  }

}