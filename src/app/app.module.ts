import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {NavbarComponent} from './navbar/navbar.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PostComponent } from './post/post.component';
import { PostListComponent } from './post-list/post-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PostComponent,
    PostListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
