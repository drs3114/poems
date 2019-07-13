import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-i-look-around',
  templateUrl: './i-look-around.component.html',
  styleUrls: ['./i-look-around.component.css']
})
export class ILookAroundComponent implements OnInit {
  disqus_id:string = "i-look-around";
  constructor() { }

  ngOnInit() {
  }

}
