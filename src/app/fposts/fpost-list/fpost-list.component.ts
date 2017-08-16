import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostsService } from '../posts.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fpost-list',
  templateUrl: './fpost-list.component.html',
  styleUrls: ['./fpost-list.component.scss'],
  providers: [PostsService]
})
export class FpostListComponent implements OnInit {

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