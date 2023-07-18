import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-post1',
  templateUrl: './post1.component.html',
  styleUrls: ['./post1.component.css']
})
export class Post1Component implements OnInit {
  country:any[]=[
  {cid:1,name:'india'},
  {cid:2,name:'Usa'},
  {cid:3,name:'Uk'}
  ]

  EMAIL_PATTERN="^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@"
  + "[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$";
  constructor() { }

  ngOnInit(): void {
  }
 
  onSubmit(f:NgForm){
    console.log("==>"+f.value.myusername);
    console.log("==>"+f.value.con);
  }
}
