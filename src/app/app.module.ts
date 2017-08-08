import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { Wpng2RoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { PostSingleComponent } from './posts/post-single/post-single.component';
import { NavComponent } from './nav/nav.component';
import { CoverComponent } from './cover/cover.component';
import { HomeOctComponent } from './home-oct/home-oct.component';

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostSingleComponent,
    NavComponent,
    CoverComponent,
    HomeOctComponent
  ],
  imports: [  
  	BrowserModule,
  	HttpModule,
    Wpng2RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
