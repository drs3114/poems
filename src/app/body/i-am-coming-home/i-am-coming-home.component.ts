import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-i-am-coming-home',
  templateUrl: './i-am-coming-home.component.html',
  styleUrls: ['./i-am-coming-home.component.css']
})
export class IAmComingHomeComponent implements OnInit {
  disqus_id:string = "i-am-coming-home";
  constructor() { }

  ngOnInit() {
  }

}
