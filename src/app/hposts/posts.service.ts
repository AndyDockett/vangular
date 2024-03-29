import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

import { Post } from './post';


@Injectable()
export class PostsService {


	private postsUrl = "http://35.192.211.212/index.php/wp-json/wp/v2/";

constructor(private http: Http) { }

getPosts(): Observable<Post[]> {

    return this.http
      .get(this.postsUrl + 'posts/?categories=19')
      .map((res: Response) => res.json());



}

  getPost(slug): Observable<Post> {

      return this.http
        .get(this.postsUrl + `posts?slug=${slug}`)
        .map((res: Response) => res.json());

  }

}