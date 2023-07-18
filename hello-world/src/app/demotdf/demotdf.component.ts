import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-demotdf',
  templateUrl: './demotdf.component.html',
  styleUrls: ['./demotdf.component.css']
})
export class DemotdfComponent implements OnInit {
  country:any[]=[{
    cid:1,name:'india'},
    {cid:2,name:'Aus'},
    {cid:3,name:'Uk'}
]

EMAIL_PATTERN = "^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@"
+ "[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$";

  constructor() { }

  ngOnInit(): void {
  }
  onsubmit(f:NgForm){
console.log(f.value)
  }
}
