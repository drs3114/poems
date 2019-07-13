import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-little-boy',
  templateUrl: './little-boy.component.html',
  styleUrls: ['./little-boy.component.css']
})
export class LittleBoyComponent implements OnInit {
  disqus_id:string = "little-boy";
  constructor() { }

  ngOnInit() {
  }

}
