import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stay-awake-with-me',
  templateUrl: './stay-awake-with-me.component.html',
  styleUrls: ['./stay-awake-with-me.component.css']
})
export class StayAwakeWithMeComponent implements OnInit {
  disqus_id:string = "stay-awake-with-me";
  constructor() { }

  ngOnInit() {
  }

}
