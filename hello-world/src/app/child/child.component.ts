import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
 
    @Input() parentstrdata:string="";
    @Input() parentjsondata:any={}
    @Input() parentstrMessage:string="";
    @Input() parentarrData:any="";
    @Input() parentarranyData:any="";
  constructor() { }
  
  ngOnInit(): void {
  }

 
  }


