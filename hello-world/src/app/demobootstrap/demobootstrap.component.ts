import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demobootstrap',
  templateUrl: './demobootstrap.component.html',
  styleUrls: ['./demobootstrap.component.css']
})
export class DemobootstrapComponent implements OnInit {
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

}
