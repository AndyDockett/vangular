import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostsService } from '../posts.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-epost-list',
  templateUrl: './epost-list.component.html',
  styleUrls: ['./epost-list.component.scss'],
  providers: [PostsService]
})
export class EpostListComponent implements OnInit {

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