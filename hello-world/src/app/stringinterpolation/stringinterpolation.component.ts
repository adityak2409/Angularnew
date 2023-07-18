import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stringinterpolation',
  templateUrl: './stringinterpolation.component.html',
  styleUrls: ['./stringinterpolation.component.css']
})
export class StringinterpolationComponent implements OnInit {
  name:string='sumit';
  num:number=4;
  imgUrl:string='../../assets/image.jpg';
  
  constructor() { }

  ngOnInit(): void {
  }

}
