import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-the-raging-conch',
  templateUrl: './the-raging-conch.component.html',
  styleUrls: ['./the-raging-conch.component.css']
})
export class TheRagingConchComponent implements OnInit {
  disqus_id:string = "the-raging-conch";
  constructor() { }

  ngOnInit() {
  }

}
