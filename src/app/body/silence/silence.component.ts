import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-silence',
  templateUrl: './silence.component.html',
  styleUrls: ['./silence.component.css']
})
export class SilenceComponent implements OnInit {
  disqus_id:string = "silence";
  constructor() { }

  ngOnInit() {
  }

}
