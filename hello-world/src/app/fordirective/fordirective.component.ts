import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fordirective',
  templateUrl: './fordirective.component.html',
  styleUrls: ['./fordirective.component.css']
})
export class FordirectiveComponent implements OnInit {
selected:string=''
  course:string[]=['core java','advance java','spring boot','jsp','Angular 12','jenking','aws'];

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
  onmouse(myitem:any){
    console.log("mouse over event occur")
 // console.log(myitem);
   this.selected=myitem.qty
   
   }
   
    onmouseover(myvalue:any){
    this.selected=myvalue.name
   
   }

   mouseon(myout:any){
   this.selected=myout.price
   }

   onmouseout(){
    console.log("mouse out event occur")
    this.selected='';
  }

}
