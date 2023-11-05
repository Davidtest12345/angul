import { Component,ViewChild,AfterViewInit } from '@angular/core';
import {PostComponent} from './post/post.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  title = 'angul';

  parentMessage:string = "Message changed";
  
  @ViewChild(PostComponent) myComp:PostComponent;

  myVariable:string = "";

  myv:string = "";

  constructor() {

  }

  ngAfterViewInit():void {
    console.log(this.myComp); 
    setTimeout(() => {
      this.myVariable = this.myComp.childMessage; 
    },0)
  }

 



}
