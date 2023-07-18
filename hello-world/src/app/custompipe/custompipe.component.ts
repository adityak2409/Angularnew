import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custompipe',
  templateUrl: './custompipe.component.html',
  styleUrls: ['./custompipe.component.css']
})
export class CustompipeComponent implements OnInit {
strdata:string="Angular is a platform for building mobile and desktop applications.join the community of millions of developers who build compelling user"
  constructor() { }

  ngOnInit(): void {
  }

}
