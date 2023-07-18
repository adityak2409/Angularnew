import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  mymsg:string='';
  childStrData:string="";
  childJsonData:any=""
 
  strdata:string="I am studying angular 12"
  jsonobj:any={
    id:9,
    fname:'Aditya',
    lname:'Kadam'
  }
  arrobj:string[]=['core java','advance java','spring boot','hibernate','angular','aws'];
  arrproduct:any[]=[
    {
      name:'iphone',
      price: 70000,
      qty:1
    },
    {
      name:'motorola',
      price:25000,
      qty:1
    },
    {
      name:'oneplus',
      price:30000,
      qty:1 
    },
    {
      name:'Realme',
      price:20000,
      qty:1
    },
    {
      name:'redmi',
      price:19000,
      qty:1
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }
  onsendmsg(msg:string){
    this.mymsg=msg;
  
  }
  


}
