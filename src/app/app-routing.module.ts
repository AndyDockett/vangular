import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostListComponent } from './posts/post-list/post-list.component';
import { PostSingleComponent } from './posts/post-single/post-single.component';

import { ApostListComponent } from './aposts/apost-list/apost-list.component';
import { BpostListComponent } from './bposts/bpost-list/bpost-list.component';
import { CpostListComponent } from './cposts/cpost-list/cpost-list.component';
import { DpostListComponent } from './dposts/dpost-list/dpost-list.component';
import { EpostListComponent } from './eposts/epost-list/epost-list.component';
import { FpostListComponent } from './fposts/fpost-list/fpost-list.component';
import { GpostListComponent } from './gposts/gpost-list/gpost-list.component';
import { HpostListComponent } from './hposts/hpost-list/hpost-list.component';

import { HomeOctComponent } from './home-oct/home-oct.component';

const routes: Routes = [
  {
    path: '',
    component: HomeOctComponent,
    pathMatch: 'full'
  },
   {
    path: ':slug',
    component: PostSingleComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class Wpng2RoutingModule { }