import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-who-am-i',
  templateUrl: './who-am-i.component.html',
  styleUrls: ['./who-am-i.component.css']
})
export class WhoAmIComponent implements OnInit {

  disqus_id:string = "who-am-i";
  constructor() { }

  ngOnInit() {
  }

}
