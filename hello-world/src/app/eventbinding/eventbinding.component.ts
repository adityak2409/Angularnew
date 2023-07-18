import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  templateUrl: './eventbinding.component.html',
  styleUrls: ['./eventbinding.component.css']
})
export class EventbindingComponent implements OnInit {
  count:number=0;
  constructor() { }

  ngOnInit(): void {
  }
  onclick(){
    if(this.count==0){
      console.log("click event occur")
      this.count++;
    }
    
  }
  onimage(){
    console.log("on image click");
  }

  onDollerevent(myevent:any){
    console.log(myevent);
    console.log(myevent.target.value);
  
  }
}
