import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding2',
  templateUrl: './eventbinding2.component.html',
  styleUrls: ['./eventbinding2.component.css']
})
export class Eventbinding2Component implements OnInit {
  result:number=0;
  name:string='';

  constructor() { }

  ngOnInit(): void {
  }
    
  onKeyUp(){
    console.log("Key up event occur")
  }

  onKeyDown(){
    console.log("Key down event occur");
  }
}


