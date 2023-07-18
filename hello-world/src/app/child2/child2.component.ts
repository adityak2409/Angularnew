import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {
  @Output()  childStrEvent=new EventEmitter
  @Output()  childJsonEvent=new EventEmitter 
  strdata:string="i am learning angular"
  jsonobj={
    id:5,
    fname:'abc',
    lname:'xyz'
  }
  constructor() { }

  ngOnInit(): void {
  }
  onsend(){
    this.childStrEvent.emit(this.strdata)
   
  }
  onsendData(){
    this.childJsonEvent.emit(this.jsonobj)
  }
 

}
