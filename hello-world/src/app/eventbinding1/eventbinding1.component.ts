import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding1',
  templateUrl: './eventbinding1.component.html',
  styleUrls: ['./eventbinding1.component.css']
})
export class Eventbinding1Component implements OnInit {
  result:number=0;

  constructor() { }

  ngOnInit(): void {
  }

  onSend(myinput:any){
  console.log(myinput);
  console.log(myinput.value);
  myinput.style.background='red';
  myinput.style.color='white';
  }
  
  onSend1(myinput:any){
    console.log(myinput);
   
 }

   onAddition(num1:any,num2:any){
     let n1=+num1;
     let n2=+num2;
     
     this.result=n1+n2;
      //this.result=num1+num2;
 } 

onChange(myname:any){
  console.log("Change event occur");

  myname.style.background='orange';
  myname.style.color='Black';
}


}
