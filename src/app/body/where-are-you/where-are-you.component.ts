import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-where-are-you',
  templateUrl: './where-are-you.component.html',
  styleUrls: ['./where-are-you.component.css']
})
export class WhereAreYouComponent implements OnInit {
  disqus_id:string = "where-are-you";
  constructor() { }

  ngOnInit() {
  }

}
