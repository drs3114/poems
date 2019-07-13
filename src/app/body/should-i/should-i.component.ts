import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-should-i',
  templateUrl: './should-i.component.html',
  styleUrls: ['./should-i.component.css']
})
export class ShouldIComponent implements OnInit {
  disqus_id:string = "should-i";
  constructor() { }

  ngOnInit() {
  }

}
