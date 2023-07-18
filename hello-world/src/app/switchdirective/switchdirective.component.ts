import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switchdirective',
  templateUrl: './switchdirective.component.html',
  styleUrls: ['./switchdirective.component.css']
})
export class SwitchdirectiveComponent implements OnInit {
 choice:string= ''
 
 ischoice:boolean=true;
 isorange:boolean=true;
 myjson={
    'default':this.ischoice,
    'wrong':this.isorange
 }

   constructor() { }

  ngOnInit(): void {
  }
  onsend(colorname:string){
  this.choice=colorname.toLowerCase().trim();
  }
  
  
  }


