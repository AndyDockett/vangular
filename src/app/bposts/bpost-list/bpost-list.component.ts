import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostsService } from '../posts.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bpost-list',
  templateUrl: './bpost-list.component.html',
  styleUrls: ['./bpost-list.component.scss'],
  providers: [PostsService]
})
export class BpostListComponent implements OnInit {

  posts: Post[];

  constructor( private postsService: PostsService, private router: Router ) { }

  getPosts(){
    this.postsService
      .getPosts()
      .subscribe(res => {
        this.posts = res;
      });
  }

  ngOnInit() {
    this.getPosts();

  }

  selectPost(slug) {
  this.router.navigate([slug]);
}


}