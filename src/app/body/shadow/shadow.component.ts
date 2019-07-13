import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shadow',
  templateUrl: './shadow.component.html',
  styleUrls: ['./shadow.component.css']
})
export class ShadowComponent implements OnInit {
  disqus_id:string = "shadow";
  constructor() { }

  ngOnInit() {
  }

}
