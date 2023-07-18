import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inbuiltpipe',
  templateUrl: './inbuiltpipe.component.html',
  styleUrls: ['./inbuiltpipe.component.css']
})
export class InbuiltpipeComponent implements OnInit {
 strdata:string="hope so ur enjoying angular "
 num:number=5.32359;
 mydate=new Date()
  constructor() { }

  ngOnInit(): void {
  }

}
