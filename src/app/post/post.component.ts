import { Component,OnInit,Input,Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {


  title:string = "List of Posts";

  messagePost:string = "Message Post";

  @Input() an!:string;

  postParentMessage:string = "Message coming from post parent";

  childMessage:string = "Message hello dog";

  outputChildMessage:string = "Message from child component via output";

  @Output() broEvent = new EventEmitter<string>();

  ngOnInit():void {

  }

  

}
