import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-hope',
  templateUrl: './new-hope.component.html',
  styleUrls: ['./new-hope.component.css']
})
export class NewHopeComponent implements OnInit {
  disqus_id:string = "new-hope";
  constructor() { }

  ngOnInit() {
  }

}
